export interface IForm {
  handleChange: (key: string, value: string) => void;
  formValue: { userName: string };
  handleClick: () => void;
}
