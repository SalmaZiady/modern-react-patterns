import React from "react";
import { Helmet } from "react-helmet";
import Head from "./layout/Head";
import PropTypes from "prop-types";
import Child from "./Child"; 

const About = () => {
  return (
    <div>
      <Child>
        This is a text coming between the component tag.
      </Child>
    </div>
  );
};


export default About;
