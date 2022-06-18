import styled from '@emotion/styled';

import type { IStyleProps } from '@interfaces/istyleprops';

const Title = styled.h2`
  font-size: 20px;
  font-weight: 800;
  margin-left: 12px;
`;

const Navbar = styled.div`
  display: flex;
  height: 40px;
  align-items: center;
  justify-content: center;
`;

const ImageContainer = styled.div<IStyleProps>`
  overflow: hidden;
  width: 40px;
  height: 40px;
  background-clip: padding-box;
  background-size: cover;
  background-position: center center;
  margin-bottom: 4px;
  ${({ imageUrl }) => imageUrl && `background-image: url(${imageUrl});`}
`;

export { Title, Navbar, ImageContainer };
