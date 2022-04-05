import styled from "styled-components";

export const ChannelContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  flex: 1;
  overflow-y: scroll;
  width: 100%;
  position: relative;
  margin-bottom: 15px;

  @media screen and (min-width: 900px) {
    margin-bottom: 20px;
  }
`;

export const ChannelStart = styled.h3`
  color: ${props => props.theme.colorSecondary};
  font-size: 1.4rem;
  margin-top: 10px;

  @media screen and (max-width: 648px) {
    font-size: 1.1rem;
  }
`;

export const TypingUsers = styled.p`
  color: ${props => props.theme.colorSecondary};
  font-size: 0.7rem;
  position: absolute;
  display: block;
  z-index: 30;
  width: 100%;
  height: 20px;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  text-align: left;
  font-style: italic;
  font-weight: bold;

  @media screen and (min-width: 900px) {
    top: -15px;
    width: 800px;
    font-size: 0.9rem;
  }
`;

export const ChannelForm = styled.form`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  position: relative;
`;

export const ChannelInput = styled.input`
  width: 100%;
  height: 35px;
  padding: 0 15px;
  border-radius: 20px;
  border: 2px solid transparent;
  margin-right: 10px;
  background: ${({theme}) => theme.inputBg};
  font-size: 0.8rem;
  color: ${({theme}) => theme.colorPrimary};
  outline: none;
  transition: 0.2s ease-in-out;

  &:focus, &:active {
    border: 2px solid ${props => props.theme.accentColor};
  }

  &::placeholder {
    color: ${props => props.theme.colorSecondary};
  }

  @media screen and (min-width: 900px) {
    width: 700px;
    font-size: 1rem;
    height: 40px;
  }
`;