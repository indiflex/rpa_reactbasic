export const Profile = ({ session, logout }) => {
  return (
    <>
      <h2>
        Profile of {session.loginUser.name} ({session.loginUser.id})
      </h2>
      <button onClick={logout}>Logout</button>
    </>
  );
};
