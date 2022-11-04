import { Login } from './Login';
import { Profile } from './Profile';

export const My = ({ session, login, logout }) => {
  return (
    <>
      {session.loginUser ? (
        <Profile session={session} logout={logout} />
      ) : (
        <Login login={login} />
      )}
    </>
  );
};
