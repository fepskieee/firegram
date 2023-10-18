import PropTypes from "prop-types";

const Navbar = ({brandName}) => {
  return (
    <nav className="flex w-screen lg:max-w-screen-lg my-12 mx-auto border">
      <a href="#"
        className="ml-4 lg:ml-0"
      >
        <span className="text-xl text-pink-500">{brandName}</span>
        </a>
    </nav>
  )
}

Navbar.propTypes = {
  brandName: PropTypes.string.isRequired,
};

export default Navbar
