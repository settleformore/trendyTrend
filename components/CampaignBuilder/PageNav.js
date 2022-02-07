import React from "react";
import styled from "styled-components";
import ArrowButton from "../Buttons/ArrowButton"

const PageNav = () => {
    return (
        <Container>
            <LeftNav>
                <ArrowButton />
                <PageTitle>Content Quick Packs</PageTitle>
            </LeftNav>
            <RightNav>
                <button>Start without a pack</button>
            </RightNav>
        </Container>
    )
}

export default PageNav;

const Container = styled.div`
    display: inline-block;
    padding-top: 35px;
    width: 100%;
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
`

const RightNav = styled.div`
    width: 50%;
    float: right;
`

const ButtonWrapper = styled.div`

`