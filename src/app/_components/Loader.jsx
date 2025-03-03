import styled, { keyframes } from "styled-components";

// Keyframes for spinner animation
const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

// Spinner styled component
const Spinner = styled.div`
	border: 0.5rem solid rgba(0, 180, 216, 0.2); /* Lighter shade for the border */
	border-top: 0.5rem solid #00b4d8; /* Primary color for the top border */
	border-radius: 50%;
	width: 5rem;
	height: 5rem;
	animation: ${spin} 1s linear infinite;
	/* margin: 0 auto; */

`;

function Loader() {
	return <Spinner />;
}

export default Loader;
