import PropTypes from "prop-types";

const Navbar = ({brandName}) => {
  return (
    <nav className="flex w-full md:max-w-screen-md xl:max-w-screen-lg my-6 mx-auto">
      <a href="#"
        className="ml-2 lg:ml-0"
      >
        <span className="text-sm sm:text-xl text-pink-500">{brandName}</span>
      </a>
    </nav>
  )
}

Navbar.propTypes = {
  brandName: PropTypes.string.isRequired,
};

export default Navbar
