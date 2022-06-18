import styled from '@emotion/styled';
import { color } from '@utils/constant';

const EmptyState = styled.div`
  border-top: 1px solid ${color.border};
  border-bottom: 1px solid ${color.border};
  color: ${color.muted};
  padding: 8px 0;
  margin: 8px 0;
  display: flex;
  justify-content: center;
`;

export { EmptyState };
