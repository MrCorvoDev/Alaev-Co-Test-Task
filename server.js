const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const generateResponse = (success, data) => {
   if (!success && !data) data = {message: "Access denied."}; // If fail request and no message, add default message

   return {success, data}
};

const getUsers = () => router.db.get("users").value();
const getAuthors = () => router.db.get("authors").value();
const getQuotes = () => router.db.get("quotes").value();

const findUserByToken = (token) => getUsers().find((user) => user.token === token);

// Authentication
server.post("/login", (req, res) => {
   const {email, password} = req.body;
   const user = getUsers().find((u) => u.email === email && u.password === password);

   user
      ? res.json(generateResponse(true, {token: user.token}))
      : res.status(401).json(generateResponse(false));
});

// User profile
server.get("/profile", (req, res) => {
   const user = findUserByToken(req.query.token);
   user
      ? res.json(generateResponse(true, {fullname: user.fullname, email: user.email}))
      : res.status(401).json(generateResponse(false));
});

// Random author with delay
server.get("/author", async (req, res) => {
   if (!findUserByToken(req.query.token)) return res.status(401).json(generateResponse(false));

   await delay(5000);
   const randomAuthor = getAuthors()[Math.floor(Math.random() * getAuthors().length)];
   res.json(generateResponse(true, randomAuthor));
});

// Random quote for an author with delay
server.get("/quote", async (req, res) => {
   const {token, authorId} = req.query;

   if (!findUserByToken(token)) return res.status(401).json(generateResponse(false));

   await delay(5000);
   const authorQuotes = getQuotes().filter((q) => q.authorId == authorId);

   authorQuotes.length
      ? res.json(generateResponse(true, authorQuotes[Math.floor(Math.random() * authorQuotes.length)]))
      : res.status(404).json(generateResponse(false, {message: "No quotes found for this author."}));
});

// Logout
server.delete("/logout", (req, res) => {
   findUserByToken(req.query.token)
      ? res.json(generateResponse(true))
      : res.status(401).json(generateResponse(false));
});

server.use(router);
server.listen(5000, () => console.log("Mock API running on port 5000"));