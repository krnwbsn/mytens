import styled from '@emotion/styled';

const Container = styled.div`
  margin: 12px auto;
  width: 800px;
  padding: 12px;
`;

const Title = styled.h2`
  font-size: 14px;
  font-weight: 800;
  margin-left: 12px;
`;

const Navbar = styled.div`
  display: flex;
  height: 40px;
  align-items: center;
  justify-content: center;
`;

const ImageContainer = styled.div`
  height: 33px;
  width: 40px;
  position: relative;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 640px;
  width: 100%;
  flex-direction: column;
`;

const Form = styled.form`
  width: 320px;
  text-align: center;
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

export {
  Container,
  Title,
  Navbar,
  ImageContainer,
  Content,
  Form,
  InputContainer,
};
