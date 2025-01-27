declare namespace NodeJS {
  interface ProcessEnv {
    REACT_APP_API_KEY?: string;
  }
}

declare const process: {
  env: NodeJS.ProcessEnv;
};
