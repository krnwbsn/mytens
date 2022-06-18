import styled from '@emotion/styled';
import { color } from '@utils/constant';
import type { IStyleProps } from '@interfaces/istyleprops';

const Container = styled.div`
  margin: 12px auto;
  width: 800px;
  padding: 12px;
`;

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
  position: relative;
  ${({ isRounded }) => isRounded && 'border-radius: 60px;'}
  overflow: hidden;
  width: 60px;
  height: 60px;
  background-clip: padding-box;
  float: left;
  background-size: cover;
  background-position: center center;
  margin-bottom: 4px;
  ${({ imageUrl }) => imageUrl && `background-image: url(${imageUrl});`}
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: column;
  padding: 24px 0px;
`;

const Form = styled.form`
  width: 320px;
  text-align: center;
  margin-bottom: 24px;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;

  .input {
    border-radius: 8px;
    width: 240px;
  }

  .button {
    cursor: pointer;
  }
`;

const ProfileCard = styled.div`
  width: 480px;
  border: 1px solid ${color.border};
  padding: 16px;
  margin: 16px;
  border-radius: 8px;
  position: relative;

  .close-icon {
    position: absolute;
    right: 4px;
    top: 4px;
    color: ${color.primary};

    svg {
      font-size: 18px;
    }
  }
`;

const Profile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const SubTitle = styled.p<IStyleProps>`
  margin: 0 0 0 ${({ isBesideElement }) => (isBesideElement ? '12px' : 0)};
  font-weight: 500;
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : '16px')};
  color: ${({ color }) => (color ? color : 'inherit')};
`;

const UserProfileContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileItem = styled.div`
  display: flex;
  width: 64px;
  align-items: center;
  flex-direction: column;
  margin: 8px;
  padding: 4px;

  span {
    margin: 4px;
    font-weight: 600;
  }

  .label {
    color: ${color.muted};
    font-weight: 400;
  }
`;

const ProfileItems = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProfileDetails = styled.div`
  padding-bottom: 8px;
`;

const RepoList = styled.div`
  border-top: 1px solid ${color.border};
  margin: 8px 0;
  padding: 12px 0 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    margin: 0;
  }

  &:nth-last-of-type(1) {
    padding-bottom: 12px;
    border-bottom: 1px solid ${color.border};
  }
`;

const IconsContainer = styled.div`
  display: flex;

  svg {
    font-size: 18px;
    color: ${color.muted};
    cursor: pointer;
    margin: 0 4px;
  }
`;

const EmptyState = styled.div`
  border-top: 1px solid ${color.border};
  border-bottom: 1px solid ${color.border};
  color: ${color.muted};
  padding: 8px 0;
  margin: 8px 0;
  display: flex;
  justify-content: center;
`;

export {
  Container,
  Title,
  Navbar,
  ImageContainer,
  Content,
  Form,
  ProfileCard,
  InputContainer,
  SubTitle,
  UserProfileContainer,
  ProfileItem,
  ProfileItems,
  ProfileDetails,
  RepoList,
  Profile,
  IconsContainer,
  EmptyState,
};
