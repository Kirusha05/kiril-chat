import React, { useEffect, useRef, useState } from "react";
import { signInWithPopup, signOut } from "firebase/auth";
import Channel from "./components/Channel/Channel";
import { auth, provider } from "./firebase.config";
import { Header } from "./components/Header";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme, GlobalStyle, lightTheme } from "./components/UI/themes";
import Spinner from "./components/Spinner/Spinner";

const AppContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  height: ${window.innerHeight}px;
`;

function App() {
  const [user, setUser] = useState(() => auth.currentUser);
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(!!window.matchMedia('(prefers-color-scheme: dark)').matches);
  const appRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.addEventListener('resize', () => {
      appRef.current!.style.height = `${window.innerHeight}px`;
    });
  });

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      user ? setUser(user) : setUser(null);
      loading && setLoading(false);
    });

    return unsubscribe;
  }, [loading, user]);

  const signInWithGoogle = () => {
    try {
      auth.useDeviceLanguage();
      signInWithPopup(auth, provider);
    } catch (error) {
      console.log(error);
    }
  };

  const signOutFirebase = () => {
    try {
      signOut(auth);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AppContainer ref={appRef}>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <GlobalStyle />
        {loading && <Spinner />}
        {!loading && (
          <Header
            user={user}
            signIn={signInWithGoogle}
            signOut={signOutFirebase}
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />
        )}
        {user && <Channel user={user} />}
      </ThemeProvider>
    </AppContainer>
  );
}

export default App;
