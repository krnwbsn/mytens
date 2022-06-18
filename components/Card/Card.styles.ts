import styled from '@emotion/styled';
import { color } from '@utils/constant';
import { backgroundImageValue, fontSizeValue } from '@utils/helper';

import type { IStyleProps } from '@interfaces/istyleprops';

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

const ProfileDetails = styled.div`
  padding-bottom: 8px;
`;

const UserProfileContainer = styled.div`
  display: flex;
  align-items: center;
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
  ${({ imageUrl }) => imageUrl && backgroundImageValue(imageUrl)}
`;

const SubTitle = styled.p<IStyleProps>`
  margin: 0 0 0 ${({ isBesideElement }) => (isBesideElement ? '12px' : 0)};
  font-weight: 500;
  font-size: ${({ fontSize }) => (fontSize ? fontSizeValue(fontSize) : '16px')};
  color: ${({ color: colorValue }) => (colorValue ? colorValue : 'inherit')};
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

export {
  ProfileCard,
  SubTitle,
  UserProfileContainer,
  ProfileItem,
  ProfileItems,
  ProfileDetails,
  Profile,
  ImageContainer,
};
