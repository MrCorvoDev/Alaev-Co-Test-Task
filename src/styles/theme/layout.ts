const CONTAINER_SIZES = {
   1: 1258,
   2: 970,
   3: 744,
};

const breakpoints = {
   1: CONTAINER_SIZES[1] + 54,
   2: CONTAINER_SIZES[2] + 54,
   3: CONTAINER_SIZES[3] + 24,
   4: 480,
};

const layout = {
   containers: CONTAINER_SIZES,
   breakpoints,
   designWidth: 1440,
   minWidth: 320,
   header: {
      pc: 80,
      mobile: 50,
      stickyPc: 50,
      stickyMobile: 40,
   },
};

export default layout;
