const Header = (props) => {
    const hi = 'Header';
    return (
      <h1>
        hello from the other side {props.role} {hi}
      </h1>
    );
  };
  
  export default Header;