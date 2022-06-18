import * as S from './Card.styles';
import { Tooltip, IconButton } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import Link from 'next/link';
import { color } from '@utils/constant';
import EmptyState from '@components/EmptyState';
import RepoList from '@components/RepoList';

import type { ICard } from '@interfaces/icard';
import type { IProfileItemsData } from '@interfaces/iprofileitemsdata';

const Card = ({
  avatar,
  userProfileData,
  reposData,
  handleClear,
  profileItemsData,
}: ICard) => (
  <S.ProfileCard>
    <S.Profile>
      <S.ProfileDetails>
        <S.UserProfileContainer>
          <S.ImageContainer imageUrl={avatar} isRounded />
          <Link href={userProfileData.html_url || ''} passHref>
            <a target="_blank" rel="noopener noreferrer">
              <S.SubTitle isBesideElement fontSize={18} color={color.muted}>
                {userProfileData.login}
              </S.SubTitle>
            </a>
          </Link>
        </S.UserProfileContainer>
        <S.SubTitle fontSize={14}>{userProfileData.location}</S.SubTitle>
      </S.ProfileDetails>
      <S.ProfileItems>
        {profileItemsData.map(
          ({ value, label }: IProfileItemsData, index: number) => (
            <S.ProfileItem key={`${index}-${value}`}>
              <span>{value}</span>
              <span className="label">{label}</span>
            </S.ProfileItem>
          )
        )}
      </S.ProfileItems>
    </S.Profile>
    {reposData ? (
      <RepoList reposData={reposData} />
    ) : (
      <EmptyState cause="Repositories" />
    )}
    <Tooltip title="Close this profile">
      <IconButton className="close-icon" onClick={handleClear}>
        <CloseIcon />
      </IconButton>
    </Tooltip>
  </S.ProfileCard>
);

export default Card;
