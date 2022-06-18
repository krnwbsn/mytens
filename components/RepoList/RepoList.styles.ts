import styled from '@emotion/styled';
import { color } from '@utils/constant';

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

export { RepoList, IconsContainer };
