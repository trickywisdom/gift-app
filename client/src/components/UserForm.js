import { useRef } from "react";
import axios from "axios";

function UserForm({ setQuery }) {
  const nameRef = useRef();
  const emailRef = useRef();

  function createNewUser(e) {
    e.preventDefault();
    let newUser = {
      name: nameRef.current.value,
      email: emailRef.current.value,
    };
    axios
      .post("https://gift-app-shxz.onrender.com/user/create", newUser)
      .then((res) => alert(res.data.msg))
      .then(setQuery(Math.random()))
      .then((nameRef.current.value = ""))
      .then((emailRef.current.value = ""));
    
  }

  return (
    <div className="formcontainer">
      <div className="form">
        <form onSubmit={createNewUser}>
          <label htmlFor="name"></label>
          <input id="name" type="text" ref={nameRef} placeholder="Full Name" />
          <br></br>
          <br></br>
          <label htmlFor="email"></label>
          <input id="email" type="text" ref={emailRef} placeholder="Email" />
          <br />
          <br />
          <label htmlFor="checkbox"></label>
          <input type="checkbox" />
          <span class="checkmark">
            I agree with the <a href="/terms" id="checkmark">terms & conditions</a>
            <br></br>for the contest
          </span>
          <br />
          <br />
          <button type="submit">
            <span>Submit</span>
          </button>
        </form>
      </div>
    </div>
  );
}

export default UserForm;
