import styled from "styled-components";

const Button = styled.button`
  margin: 10px 0;
  color: ${({theme}) => theme.accentColor};
  font-weight: bold;
  font-size: 0.9rem;
  padding: 0 15px;
  border-radius: 20px;
  border: 2px solid ${({theme}) => theme.accentColor};
  cursor: pointer;
  background: transparent;
  text-shadow: ${({theme}) => theme.textShadow};
  transition: 0.3s ease-out;
  height: 35px;
  display: flex;
  align-items: center;
  user-select: none;

  &:hover, &:active {
    box-shadow: ${({theme}) => theme.textShadow};
  }

  @media screen and (min-width: 900px) {
    padding: 0 20px;
    height: 40px;
    font-size: 1.1rem;
  }
`;

export default Button;
