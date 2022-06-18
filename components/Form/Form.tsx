import * as S from './Form.styles';
import { Button, TextField } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';

import type { IForm } from '@interfaces/iform';

const Form = ({ handleChange, formValue, handleClick }: IForm) => {
  const { userName } = formValue;

  const onInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => handleChange('userName', event.target.value);

  const onEnter = (event: React.KeyboardEvent<HTMLDivElement>) =>
    event.key === 'Enter' && event.preventDefault();

  return (
    <S.Form>
      <p>Please input your username</p>
      <S.InputContainer>
        <TextField
          hiddenLabel
          id="filled-hidden-label-small"
          variant="filled"
          size="small"
          placeholder="Your username"
          InputProps={{ disableUnderline: true }}
          onChange={onInputChange}
          value={userName}
          className="input"
          onKeyDown={onEnter}
        />
        <Button
          onClick={handleClick}
          variant="contained"
          disabled={!userName}
          className="button"
        >
          <SearchIcon />
        </Button>
      </S.InputContainer>
    </S.Form>
  );
};

export default Form;
