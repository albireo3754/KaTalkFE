import styled from 'styled-components';
import { PlusSquare } from '@styled-icons/bootstrap';

export const ChatInputS = styled.input.attrs({
  placeholder: '챗봇에게 메시지 보내기',
  type: 'text',
})`
  width: 100%;
  height: 30px;
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
`;
export const ChatContainerS = styled.div`
  background-color: rgba(255, 255, 255, 0.952);
  height: 30px;
  display: flex;
  align-items: center;
  float: bottom;
  position: bottom;
`;
