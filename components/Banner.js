import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Banner = () => {
    return( 
        <BannerContainer>
            <Notice>
                <Text>Note: This tool is for Brands. If you’re a Creator,&nbsp;</Text>
                <Link href={'/'} passHref>
                    <StyledLink href={'/'}>Apply to join the network here </StyledLink>
                </Link>
            </Notice>

            

        </BannerContainer>
    )
}

export default Banner;

const BannerContainer = styled.div`
    height: 50px;
    background-color: rgba(20, 20, 20, 1);
    border-top: 3px solid #FFB917;
`

const Notice = styled.div`
    font-style: normal;
    font-weight: bold;
    font-size: 10px;
    line-height: 12px;
    text-align: right;
    padding-right: 27px;
    padding-top: 5px;
`

const Text = styled.p`
    display: inline-block;
    color: white;
`

const StyledLink = styled.a`
    color: rgba(255, 185, 23, 1);
    text-decoration: underline;
`