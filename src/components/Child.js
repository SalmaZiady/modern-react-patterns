import PropTypes from "prop-types";

const Child = ({children}) => {
  return (
    <div>
      <h1>This is a Child component</h1>
       {children}
    </div>
  )
}


export default Child