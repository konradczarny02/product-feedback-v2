import useMe from '../lib/useMe';

const User = () => {
  const { user, isLoading } = useMe();

  return (
    <>
      {(() => {
        if (user === null && isLoading) {
          return <h2>Loading...</h2>;
        } else if (user !== null && user.error) {
          return <h2>Not logged in</h2>;
        } else if (user && !isLoading) {
          return (
            <div>
              <p>First Name: {user.firstName}</p>
              <p>Last Name: {user.lastName}</p>
              <p>Email: {user.email}</p>
            </div>
          );
        }
      })()}
    </>
  );
};

export default User;
