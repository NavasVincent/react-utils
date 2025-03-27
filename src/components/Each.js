import { Children } from "react"; 

const Each = ({ of, render }) => { 
  return <>{Children.toArray(of.map((item, index) => render(item, index)))}</>;
};

export default Each;
