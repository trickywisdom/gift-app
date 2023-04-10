import { Link } from "react-router-dom";

function Topmenu({ getWinner }) {
  return (
    <div className="topmenu">
      <nav>
        <button>
          <Link to="/terms">Terms</Link>
        </button>
        <button>
          <Link to="/participants">Participants</Link>
        </button>
        <button onClick={getWinner}>
          <Link to="/">Lucky Lottery Button</Link>
        </button>
        <button>
          <Link to="#">Sign out</Link>
        </button>
      </nav>
    </div>
  );
}

export default Topmenu;
