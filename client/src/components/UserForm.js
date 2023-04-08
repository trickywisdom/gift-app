import { useRef } from "react";
import axios from "axios";

function UserForm() {
  const nameRef = useRef();
  const emailRef = useRef();

  function createNewUser() {
    e.preventDefault();
    let newUser = {
      name: nameRef.current.value,
      email: emailRef.current.value,
    };
    axios
      .post("https://gift-app-shxz.onrender.com/user/create", newUser)
      .then((res) => alert(res.data.msg));
  }

  return (
    <form onSubmit={createNewUser}>
      <label htmlFor="name">Full Name: </label>
      <input id="name" type="text" ref={nameRef} />
      <br></br>
      <br></br>
      <label htmlFor="email">Email: </label>
      <input id="email" type="text" ref={emailRef} />
      <br />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default UserForm;
