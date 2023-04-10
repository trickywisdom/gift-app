function PickOneDelAll({ winner }) {

  return (
    <div className="winnercontainer">
      <div className="winner">
        {/* <button onClick={getWinner}>Lucky Lottery Button</button> */}
        {/* <h2>This week's winner is:</h2> */}
        <h2>{winner}</h2>
      </div>
    </div>
  );
}

export default PickOneDelAll;