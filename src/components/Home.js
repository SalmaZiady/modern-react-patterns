import React, {useEffect, useState } from "react";
import {Helmet} from 'react-helmet';
import Head from "./layout/Head";

const Home = () => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState(false);
  
  useEffect(() => {
    fetch("https://api.spacexdata.com/v3/rockets")
      .then((res) => {
        if (!res.ok) {  // ✅ Check HTTP response status
          throw new Error('Failed to fetch');
        }
        return res.json();
      })
      .then((response) => { 
        setData(response);  // ✅ Directly set the data
        setLoader(false);
      })
      .catch(err => {
        console.error(err);
        setError(true);
        setLoader(false);  
      });
  }, []);
  
  if(error) {
    return <h1>Something went wrong.</h1>
  }
  
  return (
    <div>
      <Head title={"Home"}>
      </Head>
      <h1>API Integration in React</h1>
      {loader ? (
        <h1>Loading.....</h1>
      ) : (
        <div className="cards">
          {data.map((rocket, index) => (
            <div className="card" key={index}>
              <h2>{rocket.rocket_name}</h2>
              <p>{rocket.company}</p>
              <p>{rocket.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;