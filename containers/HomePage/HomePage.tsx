import * as S from './HomePage.styles';
import { Button, TextField, Tooltip, IconButton } from '@mui/material';
import {
  Search as SearchIcon,
  Close as CloseIcon,
  SettingsRemoteOutlined as SettingsRemoteIcon,
  LinkOutlined as LinkIcon,
} from '@mui/icons-material';
import Link from 'next/link';
import { color } from '@utils/constant';
import { copyToClipBoard } from '@utils/copy-to-clipboard';

const HomePage = ({
  userProfileData,
  reposData,
  handleClick,
  handleChange,
  formValue,
  handleClear,
}) => {
  const defaultAvatar = '/github-octocat.png';
  const avatar = userProfileData?.avatar_url || defaultAvatar;

  return (
    <S.Container>
      <S.Navbar>
        <S.ImageContainer imageUrl={defaultAvatar} />
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
              onKeyDown={(event: React.KeyboardEvent<HTMLDivElement>) =>
                event.key === 'Enter' && event.preventDefault()
              }
            />
            <Button
              onClick={handleClick}
              variant="contained"
              disabled={!formValue.userName}
              className="button"
            >
              <SearchIcon />
            </Button>
          </S.InputContainer>
        </S.Form>
        {userProfileData && (
          <S.ProfileCard>
            <S.Profile>
              <S.ProfileDetails>
                <S.UserProfileContainer>
                  <S.ImageContainer imageUrl={avatar} isRounded />
                  <Link href={userProfileData.html_url || ''} passHref>
                    <a target="_blank" rel="noopener noreferrer">
                      <S.SubTitle
                        isBesideElement
                        fontSize={18}
                        color={color.muted}
                      >
                        {userProfileData.login}
                      </S.SubTitle>
                    </a>
                  </Link>
                </S.UserProfileContainer>
                <S.SubTitle fontSize={14}>
                  {userProfileData.location}
                </S.SubTitle>
              </S.ProfileDetails>
              <S.ProfileItems>
                <S.ProfileItem>
                  <span>{userProfileData.public_repos}</span>
                  <span className="label">Repos</span>
                </S.ProfileItem>
                <S.ProfileItem>
                  <span>{userProfileData.followers}</span>
                  <span className="label">Followers</span>
                </S.ProfileItem>
                <S.ProfileItem>
                  <span>{userProfileData.following}</span>
                  <span className="label">Following</span>
                </S.ProfileItem>
              </S.ProfileItems>
            </S.Profile>
            {reposData ? (
              reposData.map(
                ({ name, id, ssh_url, html_url }, index: number) => (
                  <S.RepoList key={`${index}-${id}`}>
                    <p>{name}</p>
                    <S.IconsContainer>
                      <Link href={html_url || ''} passHref>
                        <a target="_blank" rel="noopener noreferrer">
                          <Tooltip title="Go to repositories page">
                            <IconButton>
                              <LinkIcon />
                            </IconButton>
                          </Tooltip>
                        </a>
                      </Link>
                      <Tooltip title="Copy to clipboard remote origin">
                        <IconButton>
                          <SettingsRemoteIcon
                            onClick={() =>
                              copyToClipBoard(
                                `git remote add origin ${ssh_url}`
                              )
                            }
                          />
                        </IconButton>
                      </Tooltip>
                    </S.IconsContainer>
                  </S.RepoList>
                )
              )
            ) : (
              <S.EmptyState>No Repositories Data</S.EmptyState>
            )}
            <Tooltip title="Close this profile">
              <IconButton className="close-icon" onClick={handleClear}>
                <CloseIcon />
              </IconButton>
            </Tooltip>
          </S.ProfileCard>
        )}
      </S.Content>
    </S.Container>
  );
};

export default HomePage;
