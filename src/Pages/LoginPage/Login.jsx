import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../Contexts/authContext";
import axios from "axios";
import "./Login.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const LoginPage = () => {
  const { auth, setAuth } = useAuthContext();
  const [loginInfo, setLoginInfo] = useState({ email: "", password: "" });
  const [passwordShow, setPasswordShow] = useState({
    passwordOne: false,
  });

  const [error, setError] = useState({
    errorStatus: false,
    messege: "",
  });

  const navigate = useNavigate();

  const loginUser = async () => {
    try {
      const response = await axios.post("/api/auth/login", {
        email: loginInfo.email,
        password: loginInfo.password,
      });
      console.log(response);

      localStorage.setItem("TOKEN", response.data.encodedToken);

      localStorage.setItem(
        "USER_INFO",
        JSON.stringify({
          firstname: response.data.foundUser.firstname,
          lastname: response.data.foundUser.lastname,
          email: response.data.foundUser.email,
        })
      );

      setAuth({
        loginStatus: true,
        token: response.data.encodedToken,
        user: {
          firstname: response.data.foundUser.firstname,
          lastname: response.data.foundUser.lastname,
          email: response.data.foundUser.email,
        },
      });

      navigate("/store");
    } catch (error) {
      if (error.response.status === 401) {
        toast({
          errorStatus: true,
          messege: "Password is wrong",
        });
      } else if (error.response.status === 404) {
        setError({
          errorStatus: true,
          messege: "Email doen't exist",
        });
      }
    }
  };

  const loginSubmiter = (e) => {
    e.preventDefault();

    loginUser();
  };

  const loginAsGuest = () => {
    setLoginInfo({
      email: "adarshbalika@gmail.com",
      password: "adarshbalika",
    });

    loginUser();
  };
  return (
    <form onSubmit={loginSubmiter} className="login-page">
      <div className="login-page-heading">Login</div>

      <div className="login-page-mail">
        <span>
          <b>Email Address</b>
        </span>
        <input
          type="email"
          value={loginInfo.email}
          placeholder="sumit@gmail.com"
          onChange={(e) =>
            setLoginInfo((item) => ({ ...item, email: e.target.value }))
          }
        />
      </div>

      <div className="login-page-mail">
        <span>
          <b>Password</b>
        </span>
        <input
          type="password"
          required
          minLength="6"
          value={loginInfo.password}
          placeholder="***************************************"
          onChange={(e) => {
            setLoginInfo((item) => ({ ...item, password: e.target.value }));
            error.errorStatus = false;
          }}
        />
      </div>
      <div className="login-page-remeber-me">
        <input type="checkbox" />
        <span>Remeber me</span>
        <span>Forget Password</span>
      </div>

      <button type="submit" className="login-page-btn">
        Login
      </button>
      <button
        className="login-page-btn"
        onClick={() => {
          loginAsGuest();
          notify();
        }}
      >
        Login as Guset
      </button>

      <div className="login-page-create-account">Don't have an account</div>
      <ToastContainer className="abc" />
    </form>
  );
};

export { LoginPage };
