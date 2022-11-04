export const Hello = (props) => {
  return (
    <>
      <h1>Hello, {props.name}!</h1>
      {/* <h3>Haha~</h3> */}
    </>
  );
};

export const Hello2 = ({ name }) => {
  return <h1>Hi~ {name} !</h1>;
};
