import * as S from './HomePage.styles';
import Form from '@components/Form';
import NavBar from '@components/NavBar';
import Card from '@components/Card';
import EmptyState from '@components/EmptyState';
import { defaultAvatar } from '@utils/constant';

import type { IHomePage } from '@interfaces/ihomepage';

const HomePage = ({
  userProfileData,
  reposData,
  handleClick,
  handleChange,
  formValue,
  handleClear,
  queryUserName,
}: IHomePage) => {
  const avatar = userProfileData?.avatar_url || defaultAvatar;
  const profileItemsData = userProfileData
    ? [
        {
          value: userProfileData.public_repos,
          label: 'Repos',
        },
        {
          value: userProfileData.followers,
          label: 'Followers',
        },
        {
          value: userProfileData.following,
          label: 'Following',
        },
      ]
    : [];

  return (
    <S.Container>
      <NavBar imageUrl={defaultAvatar} />
      <S.Content>
        <Form
          handleChange={handleChange}
          formValue={formValue}
          handleClick={handleClick}
        />
        {!!userProfileData?.login ? (
          <Card
            avatar={avatar}
            userProfileData={userProfileData}
            reposData={reposData}
            handleClear={handleClear}
            profileItemsData={profileItemsData}
          />
        ) : (
          <>{!!queryUserName && <EmptyState cause="Username" />}</>
        )}
      </S.Content>
    </S.Container>
  );
};

export default HomePage;
