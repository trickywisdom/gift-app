import { Link } from "react-router-dom";

function Navbar({ getWinner }) {
  return (
    <div className="mainHeader">
      <nav>
        <button className="homebutton">
          <Link to="/">Join the winners</Link>
        </button>
      </nav>
      <nav>
        {/* <button>
          <Link to="/terms">Terms</Link>
        </button>
        <button>
          <Link to="/participants">Participants</Link>
        </button>
        <button onClick={getWinner}>Lucky Lottery Button</button>
        <button>
          <Link to="#">Sign out</Link>
        </button> */}
      </nav>
    </div>
  );
}

export default Navbar;