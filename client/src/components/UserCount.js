function UserCount({ usercount }) {

  return (
    <div className="countcontainer">
      <div className="count">
        <h3>Potential winners: {usercount}</h3>
      </div>
    </div>
  );
}

export default UserCount;
