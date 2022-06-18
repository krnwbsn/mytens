const backgroundImageValue = (value: string) =>
  `background-image: url(${value})`;

const fontSizeValue = (value: number) => `${value}px`;

const promiseResolver = (func: void | PromiseLike<void>) =>
  Promise.resolve(func);

export { backgroundImageValue, fontSizeValue, promiseResolver };
