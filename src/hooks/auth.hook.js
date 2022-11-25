import React from "react";

export const useAuth = () => {
  const [token, setToken] = React.useState(undefined);
  const [isAuth, setIsAuth] = React.useState(false);
  const [userId, setUserId] = React.useState(undefined);
  
  const login = React.useCallback((token, userId) => {
    setToken(token);
    setUserId(userId);
    setIsAuth(true);

    localStorage.setItem(
      "userData",
      JSON.stringify({
        userId: userId,
        token: token
      })
    )
  }, []);

  const logout = React.useCallback(() => {
    setToken(undefined);
    setUserId(undefined);
    setIsAuth(false);
    localStorage.removeItem("userData");
  }, []);

  React.useEffect(() => {
    const data = JSON.parse(localStorage.getItem("userData") || "{}");

    if(data && data.token) {
      login(data.token, data.userId);
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, [login]);

  return {token, isAuth, userId, login, logout};
};
