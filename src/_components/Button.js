import styled from "styled-components";

const StyledButton = styled.button`
	background-color: ${(props) => props.$bgColor || "#022b3a"};
	border: none;
	padding: 1rem 2rem;
	width: ${(props) => props.width || ""};
	border-radius: 10rem;
	color: ${(props) => props.color || "#fff"};
	font-size: ${(props) => props.$fontSize || ""};
	cursor: pointer;
	transition: all 0.3s;
	&:hover {
		background-color: rgba(2, 43, 58, 0.9);
	}
`;

StyledButton.defaultProps = {
	$bgColor: "#022b3a",
	color: "#fff",
};
function Button({ children, $bgColor, color, onclick, width, $fontSize }) {
	return (
		<StyledButton
			onClick={onclick}
			$bgColor={$bgColor}
			color={color}
			width={width}
			$fontSize={$fontSize}
		>
			{children}
		</StyledButton>
	);
}

export default Button;
