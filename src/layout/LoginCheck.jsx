import { useCallback, useEffect, useState } from "react";
import { useRouter } from "./../hooks/useRouter";
import { getAccessToken } from "../components/LocalToken";

const LoginCheck = ({ children }) => {
  const [localToken, setLocalToken] = useState(null);
  const { routeTo } = useRouter();

  const fetchIsToken = useCallback(async () => {
    const isToken = getAccessToken();

    if (isToken !== null) {
      routeTo("/todo");
      return;
    }

    setLocalToken(isToken);
  }, []);

  useEffect(() => {
    fetchIsToken();
  }, [children]);

  return <div className="login-check">{children}</div>;
};

export default LoginCheck;
