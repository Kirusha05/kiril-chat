import styled from "styled-components";

export const MessageContainer = styled.li`
  display: flex;
  width: 90%;
  padding: 10px;
  background: ${({theme}) => theme.messageBoxColor};
  border-radius: 10px;
  margin-top: 10px;

  @media screen and (min-width: 900px) {
    width: 800px;
  }
`;

export const MessagePhoto = styled.img`
  height: 45px;
  width: 45px;
  border-radius: 50%;

  @media screen and (max-width: 700px) {
    height: 35px;
    width: 35px
  }
`;

export const ContentWrapper = styled.div`
  font-size: 1rem;
  padding: 0 10px;

  * {
    margin: 0;
  }

  @media screen and (max-width: 700px) {
    font-size: 0.9rem;
  }

  @media screen and (max-width: 500px) {
    font-size: 0.8rem;
  }
`;

export const MessageSender = styled.p`
  color: ${props => props.theme.accentColor};
  display: inline;
`;

export const MessageText = styled.p`
  color: ${({theme}) => theme.colorPrimary};
  word-break: break-all;
`;

export const MessageTime = styled.span`
  color: #4C6877;
  display: inline;
  margin-left: 10px;
  font-size: 0.8rem;
  text-transform: lowercase;

  @media screen and (max-width: 700px) {
    font-size: 0.6rem
  }
`;