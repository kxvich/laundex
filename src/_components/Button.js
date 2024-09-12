import styled from "styled-components";

const StyledButton = styled.button`
	background-color: ${(props) => props.bgColor || "#03045E"};
	border: none;
	padding: 1rem 2rem;
	border-radius: 10rem;
	color: ${(props) => props.color || "#fff"};
	cursor: pointer;
`;

StyledButton.defaultProps = {
	bgColor: "#03045E",
	color: "#fff",
};
function Button({ children, bgColor, color }) {
	return (
		<StyledButton bgColor={bgColor} color={color}>
			{children}
		</StyledButton>
	);
}

export default Button;
