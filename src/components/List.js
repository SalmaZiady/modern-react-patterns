const List = ({list}) => {

  return (
    <div className="list">
        <h2>List component</h2>
        <p>{list.toString()}</p>
    </div>
  )
}

export default List