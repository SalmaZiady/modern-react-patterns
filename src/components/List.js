import { useState } from "react"
import Child from './Child'

const List = ({name = "John Doe", designation = "Software Engineer"}) => {

     const [details, setDetails] = useState({
        name:"David",
        designation: "Software Engineer"
    })

    const updateState = () => {
       setDetails({
          ... details,
          name:"Salma Ziady"
       })
    }

  return (
    <div className="list">
      <h2>Use State Hook in React </h2>
      <Child details = {details} />
      <button onClick={updateState}> Update State </button>
    </div>
  )
}

export default List