import { useState } from 'react';
import * as S from './Form.styles';
import { Button, TextField } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { userNameValidator } from '@utils/regex';

import type { IForm } from '@interfaces/iform';

const Form = ({ handleChange, formValue, handleClick }: IForm) => {
  const { userName } = formValue;
  const [isValid, setIsValid] = useState<boolean>(false);

  const onInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value } = event.target;
    setIsValid(userNameValidator(value));
    handleChange('userName', value);
  };

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
          error={!isValid}
        />
        <Button
          onClick={handleClick}
          variant="contained"
          disabled={!isValid}
          className="button"
        >
          <SearchIcon />
        </Button>
      </S.InputContainer>
      {userName && !isValid && <span>Invalid username</span>}
    </S.Form>
  );
};

export default Form;
