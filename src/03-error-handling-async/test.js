const throwCustomError = () => {
  throw new MyAwesomeError();
};

class MyAwesomeError extends Error {
  constructor() {
    super('This is my awesome custom error!');
  }
}

throwCustomError();
