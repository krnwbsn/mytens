import * as S from './EmptyState.styles';

const EmptyState = ({ cause }: { cause: string }) => (
  <S.EmptyState>No{cause ? ` ${cause} ` : ' '}Data</S.EmptyState>
);

export default EmptyState;
