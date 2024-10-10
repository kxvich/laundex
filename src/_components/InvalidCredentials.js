import styled from "styled-components";

const Text = styled.h1`
	font-size: 1.5rem;
	color: crimson;
`;

function InvalidCredentials({message}) {
	return <Text>{message}</Text>;
}

export default InvalidCredentials;
