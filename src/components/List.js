const List = ({name = "John Doe", designation = "Software Engineer"}) => {
  return (
    <div className="list">
      <h2>List component</h2>
      <p>my name is {name} and I am working as {designation}</p>
    </div>
  )
}

export default List