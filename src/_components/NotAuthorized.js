import styled from "styled-components";

const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
`;
const Text = styled.h1``;

function NotAuthorized() {
	return (
		<TextContainer>
			<Text>Sorry,You're not Authorized to view this page 🚫</Text>
		</TextContainer>
	);
}

export default NotAuthorized;
