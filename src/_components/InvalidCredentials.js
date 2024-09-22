import styled from "styled-components";

const Text = styled.h1`
	font-size: 2rem;
	color: #fff;
`;

function InvalidCredentials({message}) {
	return <Text>{message}</Text>;
}

export default InvalidCredentials;
