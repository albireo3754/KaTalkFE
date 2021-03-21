import styled from 'styled-components';
import { PlusSquare } from '@styled-icons/bootstrap';

export const ChatInputS = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  font-weight: bold;
  ::placeholder {
    color: rgb(202, 202, 202);
    font-weight: bold;
  }
  :focus {
    outline: none;
  }
`;

export const ChatMenuIcon = styled(PlusSquare)`
  height: 60%;
  margin: 10px;
  color: rgb(202, 202, 202);
`;
export const ChatContainerS = styled.div`
  background-color: rgba(255, 255, 255, 0.952);
  height: 40px;
  display: flex;
  align-items: center;
  float: bottom;
  position: sticky;
  width: 100%;
  bottom: 0;
`;

export const ChatFormS = styled.form`
  width: 100%;
`;
