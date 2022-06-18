import * as S from './NavBar.styles';

const NavBar = ({ imageUrl }: { imageUrl: string }) => (
  <S.Navbar>
    <S.ImageContainer imageUrl={imageUrl} />
    <S.Title>Github API Project</S.Title>
  </S.Navbar>
);

export default NavBar;
