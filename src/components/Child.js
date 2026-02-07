import PropTypes from "prop-types";

const Child = ({name, channel, subscribers}) => {
  return (
    <div>
      <h1>Prop Types</h1>
      {name} - {channel} - {subscribers}
    </div>
  )
}

Child.propTypes = {
  name: PropTypes.string,
  subscribers: PropTypes.number,
  channel: PropTypes.string

}


export default Child