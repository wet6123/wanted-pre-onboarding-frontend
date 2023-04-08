import { useCallback, useEffect, useState } from "react";
import { useRouter } from "./../hooks/useRouter";
import { getAccessToken } from "../components/LocalToken";

const AuthCheck = ({ children }) => {
  const [localToken, setLocalToken] = useState(null);
  const { routeTo } = useRouter();

  const fetchIsToken = useCallback(async () => {
    const isToken = getAccessToken();

    if (isToken === null) {
      routeTo("/signin");
      return;
    }

    setLocalToken(isToken);
  }, []);

  useEffect(() => {
    fetchIsToken();
  }, [children]);

  return <div className="auth-check">{children}</div>;
};

export default AuthCheck;
