import React from "react";
import styled from "styled-components";
import ArrowButton from '../Buttons/ArrowButton'
import { PrimaryButton } from "../Buttons/Button";

const BlackArrow = () => {
    return (
        <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.56711 1.13954L12.25 4.82243" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLine="round"/>
            <path d="M8.56711 8.50298L12.25 4.82009" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLine="round"/>
            <path d="M12.0817 4.8808L1.25026 4.8808" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLine="round"/>
        </svg>
    )
}

const PageNav = () => {
    return (
        <Container>
            <LeftNav>
                <ArrowButton />
                <PageTitle>Content Quick Packs</PageTitle>
            </LeftNav>
            <RightNav>
                <ButtonWrapper>
                    <IconTextButton>
                        Start Without a Pack
                        <BlackArrow />
                    </IconTextButton>
                </ButtonWrapper>
            </RightNav>
        </Container>
    )
}

export default PageNav;

const Container = styled.div`
    display: inline-block;

    width: 100%;
    height: 70px;

    margin-top: 40px;
`

const PageTitle = styled.p`
    font-weight: 800;
    font-size: 26px;
    line-height: 31px;
    display: inline;
    padding-left: 18px;
    vertical-align: middle;
    color: #FFFFFF;
`
const LeftNav = styled.div`
    width: 50%;
    float: left;
`
    
const RightNav = styled.div`
    width: 50%;
    float: right;
    margin-top: 20px;
`

const ButtonWrapper = styled.div`
    float: right;
    margin-bottom: 40px;
`

const IconTextButton = styled(PrimaryButton)`
    color: black;
    background: #FFFFFF;
    width: 173px;
    height: 40px;
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    vertical-align: middle;
    padding-top: 3px;
    padding-bottom: 3px;
    svg {
        margin-left: 8px;
    }
`
