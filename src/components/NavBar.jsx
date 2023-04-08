import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div>
        <Link to="/signin">로그인</Link>
      </div>
      <div>
        <Link to="/signup">회원가입</Link>
      </div>
      <div>
        <Link to="/todo">투두</Link>
      </div>
    </>
  );
};

export default NavBar;
