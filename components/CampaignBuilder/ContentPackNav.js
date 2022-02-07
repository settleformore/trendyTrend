import React from 'react';
import PackButton from '../Buttons/QuickPackButton';
import { InstagramIcon, 
    TikTokIcon, 
    ComputerIcon,
     FacebookIcon, 
     YouTubeIcon, 
     AmazonIcon } from './ContentIcons';
import styled from 'styled-components';

const ContentPackNav = () => {
    return (
        <div>
            <Text>I need content for my: </Text>
            <button><ComputerIcon /> Paid Ads/Website</button>
            <button><InstagramIcon />Instagram</button>
            <button><TikTokIcon />TikTok </button>
            <button><FacebookIcon /> Facebook</button>
            <button><YouTubeIcon /> Youtube</button>
            <button><AmazonIcon /> Amazon</button>
        </div>
    )
}

export default ContentPackNav;

const Text = styled.p`
font-weight: bold;
font-size: 18px;
line-height: 13px;
`
