import styled from "styled-components"

const StyleButton = styled.button`
background-color: #03045E;
border: none;
padding: 1rem 2rem;
border-radius: 10rem;
color: #fff;

`

function Button({children}) {
    return (
        <StyleButton>
            {children}
        </StyleButton>
    )
}

export default Button
