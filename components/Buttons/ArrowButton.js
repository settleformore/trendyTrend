import styled from "styled-components";
import { PrimaryButton } from "./Button";

const ArrowButton = () => {
    return (
        <Button>
            Back
            <ArrowLeftIcon />
        </Button>
    )
}

export default ArrowButton;

const Button = styled(PrimaryButton)`
    background-color: rgba(41, 41, 41, 1);
    color: white;
    border: 1px solid #000000;
    box-sizing: border-box;
    border-radius: 5px;
    &:hover {
        background-color: #FFB917;
    }
`

const ArrowLeftIcon = styled.img`

`