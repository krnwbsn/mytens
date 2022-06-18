import * as S from './RepoList.styles';
import { Tooltip, IconButton } from '@mui/material';
import {
  SettingsRemoteOutlined as SettingsRemoteIcon,
  LinkOutlined as LinkIcon,
} from '@mui/icons-material';
import Link from 'next/link';
import { copyToClipBoard } from '@utils/copy-to-clipboard';

import type { IReposData } from '@interfaces/ireposdata';

const RepoList = ({ reposData }: { reposData: IReposData[] }) => (
  <>
    {reposData.map(
      ({ name, id, ssh_url, html_url }: IReposData, index: number) => (
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
              <IconButton
                onClick={() =>
                  copyToClipBoard(`git remote add origin ${ssh_url}`)
                }
              >
                <SettingsRemoteIcon />
              </IconButton>
            </Tooltip>
          </S.IconsContainer>
        </S.RepoList>
      )
    )}
  </>
);

export default RepoList;
