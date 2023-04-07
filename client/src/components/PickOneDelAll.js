import { useState } from "react";
import axios from "axios";

function PickOneDelAll() {
    const [winner, setWinner] = useState("")

    async function getWinner() {
        let response = await axios.delete(
          "https://642fc70b2eb8b075fddb3278--magical-praline-2974f5.netlify.app/user/pickonedelall"
        );
        if (response.data) {
            setWinner(response.data.name);
        } else {
            // setWinner("Sadly, no participants yet :(");
            alert("Sadly, no participants yet :(");
        }
        
    }

    return (
      <div>
        <button onClick={getWinner}>Lucky Lottery Button</button>
        <br></br>
        <br></br>
        <h1>{winner}</h1>
      </div>
    );
}

export default PickOneDelAll;