import React, { useState } from "react";
import { RegisterBg } from "../../assets";
import { Button, Gap, Input, Link } from "../../components";
import "./Register.css";
import { useHistory } from "react-router";
import Axios from "axios";

const Register = () => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = () => {
    const data = new FormData();

    data.append("username", username);
    data.append("email", email);
    data.append("password", password);

    Axios.post("http://localhost:4000/auth/register", data, {
      headers: {
        "content-type": "multipart/form-data",
      },
    })
      .then((result) => {
        console.log("Registrasi Berhasil!", result);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  };
  return (
    <div>
      <div className="main-page">
        <div className="left">
          <img src={RegisterBg} className="bg-image" alt="RegisterBg" />
        </div>
        <div className="right">
          <p className="title">Register</p>
          <Input label="Username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Full Name" />
          <Gap height={18} />
          <Input label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
          <Gap height={18} />
          <Input label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
          <Gap height={30} />
          <Button title="Register" onClick={onSubmit} />
          <Gap height={30} />
          <Link title="Login" onClick={() => history.push("/login")} />
        </div>
      </div>
    </div>
  );
};

export default Register;
