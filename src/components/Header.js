import PropTypes from 'prop-types'
import Button from "./Button"

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button  color={showAdd ? "rgb(179,105,74)" : "rgb(84,127,128)"} text={showAdd ? "Close" : "Add" } onClick={onAdd} />
    </header>
  )
}

Header.defaultProps = {
  title: "Task Tracker",
}

Header.propTypes = {
  title: PropTypes.string,
}

export default Header








