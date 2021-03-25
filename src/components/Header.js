import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import Button from "./Button";
const Header = ({ title, onShow, showAdd }) => {
	const location = useLocation();
	return (
		<div className="header">
			<h1>{title}</h1>
			{location.pathname === "/" && (
				<Button
					color={showAdd ? "red" : "green"}
					text={showAdd ? "Close" : "Add "}
					onShow={onShow}
				/>
			)}
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
