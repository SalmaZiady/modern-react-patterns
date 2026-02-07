import React from "react";
import { Helmet } from "react-helmet";
import Head from "./layout/Head";
import PropTypes from "prop-types";
import Child from "./Child"; 

const About = () => {
  return (
    <div>
      <Child name="Ministry of JS" channel="youtube" subscribers={100}></Child>
    </div>
  );
};


export default About;
