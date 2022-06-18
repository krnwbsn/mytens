import styled from '@emotion/styled';
import { color } from '@utils/constant';

import type { IStyleProps } from '@interfaces/istyleprops';

const borderValue = `border-top: 1px solid ${color.border};
border-bottom: 1px solid ${color.border};`;

const EmptyState = styled.div<IStyleProps>`
  ${({ isWithBorder }) => isWithBorder && borderValue}
  color: ${color.muted};
  padding: 8px 0;
  margin: 8px 0;
  display: flex;
  justify-content: center;
`;

export { EmptyState };
