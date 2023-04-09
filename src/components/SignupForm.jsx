import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signup } from "../api/api";

const SignupForm = () => {
  const navigate = useNavigate();

  const [disabled, setDisabled] = useState(true);

  const onFormChange = (e) => {
    const formData = new FormData(e.currentTarget);

    if (
      formData.get("email").includes("@") &&
      formData.get("password").length >= 8
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const payload = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    const loginRes = await signup(payload);
    if (!loginRes) {
      alert("회원가입 실패");
      return;
    }

    navigate("/signin");
  };

  return (
    <>
      <form onSubmit={onSubmitHandler} onChange={onFormChange}>
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
        <button data-testid="signup-button" disabled={disabled}>
          로그인
        </button>
      </form>
    </>
  );
};

export default SignupForm;
