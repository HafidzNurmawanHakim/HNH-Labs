import React, { useState } from "react";
import { LoginBg } from "../../assets";
import { Button, Gap, Input, Link } from "../../components";
import { useHistory } from "react-router";
import Axios from "axios";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassowrd] = useState("");

  const onSubmit = () => {
    const emailUser = email;
    const passwordUser = password;

    const data = new FormData();
    data.append("email", emailUser);
    data.append("password", passwordUser);

    Axios.post("http://localhost:4000/auth/login", data, {
      headers: {
        "content-type": "multipart/form-data",
      },
    })
      .then((result) => {
        console.log("Login Berhasil!", result.data);
        history.push("/");
      })
      .catch((err) => {
        console.log("Error", err);
      });

    setEmail("");
    setPassowrd("");
  };

  return (
    <div>
      <div className="main-page">
        <div className="left">
          <img src={LoginBg} className="bg-image" alt="LoginBg" />
        </div>
        <div className="right">
          <p className="title">Login</p>

          <Gap height={18} />
          <Input label="Email" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Gap height={18} />
          <Input label="Password" type="password" value={password} placeholder="Password" onChange={(e) => setPassowrd(e.target.value)} />
          <Gap height={30} />
          <Button title="Login" onClick={onSubmit} />
          <Gap height={20} />
          <Link title="Register" onClick={() => history.push("/register")} />
        </div>
      </div>
    </div>
  );
};

export default Login;
