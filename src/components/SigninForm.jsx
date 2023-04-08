import { signin } from "../api/api";
import { setAccessToken } from "./LocalToken";
import { useNavigate } from "react-router-dom";

const SigninForm = () => {
  const navigate = useNavigate();

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const payload = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    const loginRes = await signin(payload);
    if (!loginRes) return;

    // 토큰 저장
    setAccessToken(loginRes.access_token);
    navigate("/todo");
  };

  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <div>
          <label>
            이메일:
            <input data-testid="email-input" type="text" name="email" />
          </label>
        </div>
        <div>
          <label>
            패스워드:
            <input
              data-testid="password-input"
              type="password"
              name="password"
            />
          </label>
        </div>
        <button data-testid="signin-button">로그인</button>
      </form>
    </>
  );
};

export default SigninForm;
