import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>메인 페이지입니다.</h1>
      <Link to="/signin">
        <button>로그인</button>
      </Link>
      <Link to="/todo">
        <button>투두 페이지로 이동</button>
      </Link>
    </div>
  );
}

export default App;
