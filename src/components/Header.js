import PropTypes from "prop-types";
import "../App.css";
import Button from "./Button";
const Header = ({ title }) => {
	const onClick = () => {
		console.log("click");
	};
	return (
		<div className="header">
			<h1>{title}</h1>
			<Button color="green" text="Add" onClick={onClick} />
		</div>
	);
};
Header.defaultProps = {
	title: "Task Tracker",
};
Header.propTypes = {
	title: PropTypes.string,
};

// CSS in JS
// const headingStyle = {
// 	color: "red",
// };
export default Header;
