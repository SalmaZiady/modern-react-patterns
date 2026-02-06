import { useEffect, useState, useRef } from "react";
import Child from "./Child";

/* 
 const List = ({ name = "John Doe", designation = "Software Engineer" }) => {
  const [details, setDetails] = useState({
    name: "David",
    designation: "Software Engineer",
  });
  */

const List = () => {
  const [list, setList] = useState([
    { name: "John", designation: "Backend Engineer" },
    { name: "Jane", designation: "QA Engineer" },
    { name: "David", designation: "Frontend Enigneer" },
  ]);

  /*
  const updateState = () => {
    setDetails({
      ...details,
      name: "Salma Ziady",
    });
  };
  

  useEffect(() => {
    setTimeout(() => {
      console.log("I am coming from useEffect");
    }, 2000);
  }, []);

  const inputRef = useRef(null);

  const getValue = () => {
    inputRef.current.focus();
  };

  */


  // map through the array
  // return a jsx element in map method
  // assign a key props inside your jsx element

  return (
    <div className="list">
      <h2> List in React </h2>
      <div className="cards">
        {list.map((list, index ) => (
          <div className="card" key={index}>
            <h1>{list.name}</h1>
            <p>  {list.designation} </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
