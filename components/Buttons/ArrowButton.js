import styled from "styled-components";
import { PrimaryButton } from "./Button";
import arrowIcon from '../../public/icons/Back_Arrow/Back_Arrow.png';
import Image from 'next/image';


const ArrowIcon = () => {
    return (
        <svg width="20" height="13" viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.18583 11.1984L1.35001 6.36262" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6.18738 1.52733L1.35156 6.36315" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M1.34375 6.36407L18.6504 6.36408" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    )
}

const ArrowButton = ({direction, color}) => {
    return (
        <Button>
            {/* {direction === "left" ? <ArrowLeftIcon color={color} /> : <ArrowRightIcon color={color} />} */}
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
    height: 40px;
    width: 40px;
    &:hover {
        background-color: #FFB917;
    }
`

const ArrowLeftIcon = styled(ArrowIcon)`
    vertical-align: middle;
    color: ${props => props.color};
`

const ArrowRightIcon = styled.svg`

`