import { signin } from "../../api/api";
import { setAccessToken } from "./LocalToken";

const SigninForm = () => {
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
    const storedToken = setAccessToken(loginRes.access_token);
    if (!storedToken) return;
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
