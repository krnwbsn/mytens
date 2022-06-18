import * as S from './EmptyState.styles';

import type { IEmptyState } from '@interfaces/iemptystate';

const EmptyState = ({ cause, isWithBorder }: IEmptyState) => (
  <S.EmptyState isWithBorder={isWithBorder}>
    No{cause ? ` ${cause} ` : ' '}Data
  </S.EmptyState>
);

export default EmptyState;
