import styled from "styled-components";

const StyledButton = styled.button`
	background-color: ${(props) => props.$bgColor || "#022b3a"};
	border: none;
	padding: 1rem 2rem;
	border-radius: 10rem;
	color: ${(props) => props.color || "#fff"};
	cursor: pointer;
	
`;

StyledButton.defaultProps = {
	$bgColor: "#022b3a",
	color: "#fff",
};
function Button({ children, $bgColor, color, onclick }) {
	return (
		<StyledButton onClick={onclick} $bgColor={$bgColor} color={color}>
			{children}
		</StyledButton>
	);
}

export default Button;
