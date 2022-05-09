import "./Login.css";
const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="login-page-heading">Login</div>

      <div className="login-page-mail">
        <span>
          <b>Email Address</b>
        </span>
        <input type="text" placeholder="sumit@gmail.com" />
      </div>

      <div className="login-page-mail">
        <span>
          <b>Password</b>
        </span>
        <input
          type="password"
          placeholder="***************************************"
        />
      </div>
      <div className="login-page-remeber-me">
        <input type="checkbox" />
        <span>Remeber me</span>
        <span>Forget Password</span>
      </div>

      <div className="login-page-btn">Login</div>
      <div className="login-page-btn">Login as Guset</div>

      <div className="login-page-create-account">Don't have an account</div>
    </div>
  );
};

export { LoginPage };
