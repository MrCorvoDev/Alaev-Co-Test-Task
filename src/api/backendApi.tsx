import axios, {AxiosError, AxiosResponse} from 'axios';

// User type
interface User {
   email: string;
   fullname: string;
}

// Author type
interface Author {
   authorId: number;
   name: string;
}

// Quote type
interface Quote {
   quoteId: number;
   authorId: number;
   quote: string;
}

// API Info type
interface Info {
   info: string;
}

interface APIResponse<T> {
   success: boolean;
   data: T;
}

const BASE_URL = 'http://localhost:3500';

const api = axios.create({
   baseURL: BASE_URL,
});

const handleRequest = async <T,>(
   rq: Promise<AxiosResponse<APIResponse<T>, unknown>>,
): Promise<T> => {
   try {
      const response = await rq;
      return response.data.data;
   } catch (error) {
      console.error(error);

      if (axios.isAxiosError<APIResponse<{message: string}>>(error)) {
         const serverMessage = error.response?.data?.data?.message;

         const modifiedError = new AxiosError(
            serverMessage ?? error.message,
            error.code,
            error.config,
            error.request,
            error.response,
         );

         throw modifiedError;
      }

      throw error instanceof Error ? error : new Error(String(error));
   }
};

export const getInfo = async () => handleRequest<Info>(api.get('/info'));

export const getProfile = async (token: string) =>
   handleRequest<User>(api.get(`/profile?token=${token}`));

export const getAuthor = async (token: string, signal: AbortSignal) =>
   handleRequest<Author>(api.get(`/author?token=${token}`, {signal}));

export const getQuote = async (
   token: string,
   authorId: number,
   signal: AbortSignal,
) =>
   handleRequest<Quote>(
      api.get(`/quote?token=${token}&authorId=${authorId}`, {signal}),
   );

export const login = async (email: string, password: string) =>
   handleRequest<{token: string}>(api.post('/login', {email, password}));

export const logout = async (token: string) =>
   handleRequest<object>(api.delete(`/logout?token=${token}`));
