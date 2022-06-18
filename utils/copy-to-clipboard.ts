const copyToClipBoard = (target: string) => {
  let textField = document.createElement('textarea');
  textField.innerText = target;
  document.body.appendChild(textField);
  textField.select();
  document.execCommand('copy');
  textField.remove();
};

export { copyToClipBoard };
