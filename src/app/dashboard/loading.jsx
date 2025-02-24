"use client"

import Loader from "@/_components/Loader";
import styled from "styled-components";

const SpinnerContainer = styled.div`
	height: 100vh;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

function Loading() {
    return (
        <SpinnerContainer>
            <Loader/>
        </SpinnerContainer>
    )
}

export default Loading
