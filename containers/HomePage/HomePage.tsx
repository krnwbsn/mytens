import Image from 'next/image';
import * as S from './HomePage.styles';
import { Button, TextField } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';

const HomePage = ({ data, onClick, handleChange, formValue }) => (
  <S.Container>
    <S.Navbar>
      <S.ImageContainer>
        <Image src="/github-octocat.png" layout="fill" />
      </S.ImageContainer>
      <S.Title>Github API Project</S.Title>
    </S.Navbar>

    <S.Content>
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
            onChange={(
              event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
            ) => handleChange('userName', event.target.value)}
            value={formValue.userName}
            className="input"
          />
          <Button
            onClick={onClick}
            variant="contained"
            disabled={!formValue.userName}
            className="button"
          >
            <SearchIcon />
          </Button>
        </S.InputContainer>
      </S.Form>
    </S.Content>
  </S.Container>
);

export default HomePage;
