import api from "../../api";
import axios from "axios";

const login = async (payload) => {
  try {
    const res = await axios.post(api.signin(), payload, {
      "Content-Type": "application/json",
    });
    // 토큰 저장
    // setAccessToken(res.data.access_token);
    return res;
  } catch (err) {
    console.log(err);
    return null;
  }
};

const getUserInfo = async (access_token) => {
  console.log(access_token);
};

const SigninForm = () => {
  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const payload = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    const loginRes = await login(payload);
    if (!loginRes) return;
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
