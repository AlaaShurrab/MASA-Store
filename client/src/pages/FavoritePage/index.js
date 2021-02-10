import { Redirect } from "react-router-dom"

const FavoritePage = (props) => {
    const hi = 'FavoritePage';
    if (props.role!=="buyer"){
      console.log(props.role,"***************************");
      <Redirect to="/" />
    }
    return (
      <div>
        {props.role!=="buyer"?<Redirect to="/" />:
        <h1>
          hello from the other side {props.role} {hi}
        </h1>}
        
      </div>
      
    );
  };
  
  export default FavoritePage;
  