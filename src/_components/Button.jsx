import {styled,keyframes} from "styled-components";

const MoveUp = keyframes`
0%{
	opacity: 0;
	transform: translateY(2rem);
}
100%{
	opacity: 1;
	transform: translateY(0);
}
`;
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
	animation: ${(props) => props.animation || ""};
	animation-fill-mode: backwards;
	&:hover {
		background-color: rgba(2, 43, 58, 0.9);
	}
`;

StyledButton.defaultProps = {
	$bgColor: "#022b3a",
	color: "#fff",
};
function Button({
	children,
	$bgColor,
	color,
	onclick,
	width,
	$fontSize,
	$animation,
}) {
	return (
		<StyledButton
			onClick={onclick}
			$bgColor={$bgColor}
			color={color}
			width={width}
			$fontSize={$fontSize}
			$animation={$animation}
		>
			{children}
		</StyledButton>
	);
}

export default Button;
