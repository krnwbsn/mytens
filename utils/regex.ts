const userNameRegex =
  /^[a-zA-Z0-9]+([a-zA-Z0-9](_|-| )[a-zA-Z0-9])*[a-zA-Z0-9]+$/;

const userNameValidator = (value: string) => userNameRegex.test(value);

export { userNameValidator };
