import React from "react";
import styled from "styled-components";
import ArrowButton from "../Buttons/ArrowButton"

const PageNav = () => {
    return (
        <div>
            <div>
                <ArrowButton />
                <PageTitle>Content Quick Packs</PageTitle>
            </div>
            <div>
                <button>Start without a pack</button>
            </div>
        </div>
    )
}

export default PageNav;

const Container = styled.div`
    display: inline-block;
`

const PageTitle = styled.p`
    font-weight: 800;
    font-size: 26px;
    line-height: 31px;
    color: #FFFFFF;
`