import { User } from "@firebase/auth";
import React from "react";
import Button from "../UI/Button/Button";
import {
  DisplayName,
  HeaderButtonsWrapper,
  HeaderWrapper,
  ThemeIconWrapper,
} from "./Header.styles";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

interface IProps {
  signIn: () => any;
  signOut: (auth: any) => any;
  user: User | null;
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

function Header({ user, signIn, signOut, darkMode, setDarkMode }: IProps) {
  const toggleTheme = () => setDarkMode((prevTheme => !prevTheme));

  return (
    <HeaderWrapper loggedIn={!!user}>
      {user && <DisplayName>{user.displayName}</DisplayName>}
      <HeaderButtonsWrapper>
        <ThemeIconWrapper onClick={toggleTheme}>
          {darkMode ? <BsFillMoonFill /> : <BsFillSunFill />}
        </ThemeIconWrapper>
        <Button onClick={user ? signOut : signIn}>
          {user ? "Sign Out" : "Sign In with Google"}
        </Button>
      </HeaderButtonsWrapper>
    </HeaderWrapper>
  );
}

export default Header;
