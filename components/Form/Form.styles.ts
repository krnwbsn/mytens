import styled from '@emotion/styled';

const Form = styled.form`
  width: 320px;
  text-align: center;
  margin-bottom: 24px;
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
