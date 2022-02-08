import styled from "styled-components";
import { PrimaryButton } from "./Button";


const ArrowIcon = () => {
    return (
        <svg width="20" height="13" viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.18583 11.1984L1.35001 6.36262" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6.18738 1.52733L1.35156 6.36315" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M1.34375 6.36407L18.6504 6.36408" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

const ArrowButton = () => {
    return (
        <Button>
            <ArrowIcon />
        </Button>
    )
}

export default ArrowButton;

const Button = styled(PrimaryButton)`
    background-color: rgba(41, 41, 41, 1);
    color: white;
    border-radius: 5px;
    height: 40px;
    width: 40px;
    &:hover {
        background-color: #FFB917;
    }
`
