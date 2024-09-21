import styled from "styled-components";

const Text = styled.h1`
	font-size: 2rem;
	color: #fff;
`;

function InvalidCredentials() {
	return <Text>Invalid credentials, login again</Text>;
}

export default InvalidCredentials;
