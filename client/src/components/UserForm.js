import { useState } from 'react';
import axios from "axios";

function UserForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    function createNewUser(e) {
        e.preventDefault();
        let newUser = {
            name: name,
            email: email,
        };
        axios
          .post(
            "https://642fc70b2eb8b075fddb3278--magical-praline-2974f5.netlify.app/user/create",
            newUser
          )
          .then((res) => alert(res.data.msg));
    }

    return (
      <form onSubmit={createNewUser}>
        <label htmlFor="name">Full Name: </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br></br>
        <br></br>
        <label htmlFor="email">Email: </label>
        <input
          id="email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
            <br />
            <button type='submit'>Submit</button>
      </form>
    );
}

export default UserForm;