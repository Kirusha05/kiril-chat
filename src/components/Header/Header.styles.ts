import styled from "styled-components";

export const HeaderWrapper = styled.div<{ loggedIn: boolean }>`
  display: flex;
  justify-content: ${(props) => (props.loggedIn ? "space-between" : "center")};
  align-items: center;
  width: 90%;
  height: ${(props) => (props.loggedIn ? "60px" : "100vh")};
  border-bottom: 1px solid ${({ theme }) => theme.headerBorderColor};
  position: relative;

  @media screen and (min-width: 900px) {
    width: 800px;
  }
`;

export const DisplayName = styled.div`
  color: ${(props) => props.theme.accentColor};
  font-size: 1.4rem;
  font-weight: bold;
  text-shadow: ${({ theme }) => theme.textShadow};

  @media screen and (max-width: 648px) {
    font-size: 1.1rem;
  }
`;

export const HeaderButtonsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
`;

export const ThemeIconWrapper = styled.div`
  font-size: 24px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 12px;
  color: ${({theme}) => theme.colorPrimary};
  cursor: pointer;
`;
