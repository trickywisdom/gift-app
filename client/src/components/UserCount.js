import { useEffect, useState } from "react";
import axios from "axios";

function UserCount() {
  const [usercount, setUsercount] = useState(0);

  async function getUserCount() {
    let response = await axios.get("http://localhost:8000/user/allnum");
    setUsercount(response.data.count);
  }

  useEffect(() => {
    getUserCount();
  }, [usercount]);

  return (
    <div>
      <h1>{usercount}</h1>
    </div>
  );
}

export default UserCount;
