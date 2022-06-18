import styled from '@emotion/styled';
import { color } from '@utils/constant';

const Form = styled.form`
  width: 320px;
  text-align: center;
  margin-bottom: 24px;
  position: relative;

  span {
    color: ${color.danger};
    font-size: 12px;
    text-align: left !important;
    position: absolute;
    left: 0;
  }
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;

  .input {
    border-radius: 8px;
    width: 240px;
  }

  .button {
    cursor: pointer;
  }
`;

export { Form, InputContainer };
