import { useEffect, useState } from "react";
import axios from "axios";

function UserList() {
    const [allusers, setAllusers] = useState([]);

    async function getAllUsers() {
        let response = await axios.get(
          "https://642fc70b2eb8b075fddb3278--magical-praline-2974f5.netlify.app/user/all"
        );
        setAllusers(response.data);
    }

    useEffect(() => {
        getAllUsers();
    }, [allusers]);

    return (
        <div>
            <h1>PARTICIPANTS</h1>
            <ol>
                {allusers.map((user) => {
                    return (
                      <div key={user._id}>
                        <li>{user.name}</li>
                      </div>
                    );
                 })}
            </ol>
      </div>
    );
}

export default UserList;