import React from 'react';
import { InstagramIcon, 
    TikTokIcon, 
    ComputerIcon,
     FacebookIcon, 
     YouTubeIcon, 
     AmazonIcon } from './ContentIcons';
import styled from 'styled-components';
import { PrimaryButton } from '../Buttons/Button';

const ContentNav = () => {
    return (
        <div>
            <NavText>I need content for my: </NavText>
            <Nav>
                    <ContentButton>
                        <ComputerIcon /> 
                        <ButtonText>Paid Ads/Website</ButtonText>
                    </ContentButton>
                    <ContentButton>
                        <InstagramIcon />
                        <ButtonText>Instagram</ButtonText>
                    </ContentButton>
                    <ContentButton>
                        <TikTokIcon />
                        <ButtonText>TikTok</ButtonText>
                    </ContentButton>
                    <ContentButton>
                        <FacebookIcon /> 
                        <ButtonText>Facebook</ButtonText>
                    </ContentButton>
                    <ContentButton>
                        <YouTubeIcon /> 
                        <ButtonText>YouTube</ButtonText>
                    </ContentButton>
                    <ContentButton className={'active'}>
                        <AmazonIcon />
                        <ButtonText>Amazon</ButtonText>
                    </ContentButton>
                
            </Nav>
        </div>
    )
}

export default ContentNav;

const NavText = styled.p`
    font-weight: bold;
    font-size: 18px;
    line-height: 13px;
`

const Nav = styled.div`
   display: grid;
   grid-auto-flow: column;
`

const ButtonText = styled.span`
    display: block;
    padding-top: 5px;
`
const ContentButton = styled(PrimaryButton)`
    width: 142px;
    height: 71px;
    background-color: #292929;
    color: white;
    border-radius: 5px;
    &.active {
        color: black;
        background-color: #FFB917;
        svg {
            filter: brightness(0%);
        }
    }
    &:hover {
        color: black;
        background-color: white;
        svg {
            filter: brightness(0%);
        }
    }

`