import styled from "styled-components";
import Image from 'next/image';
import { PrimaryButton } from '../Buttons/Button'
import { AmazonIcon } from "./ContentIcons";
import Link from 'next/link';

const PackCard = ({pic, title, price, reducedPrice, credits, top_level, mid_level, stan_level}) => {
    return (
        <Card>
            <ImageWrapper>
                <Image src={pic} layout="fill"
    objectFit="contain" alt={pic}/>
                <AmazonIcon />
            </ImageWrapper>
            <PackPricing>
                <CreditWidget>
                    <span>{credits} credits</span>
                </CreditWidget>
                <PricesRight>
                    <SlashedPrice>
                        {price}
                    </SlashedPrice>
                    <ReducedPrice>
                        {reducedPrice}
                    </ReducedPrice>
                </PricesRight>
            </PackPricing>
            <PackageTitle>
                {title}
            </PackageTitle>
            <PackageSubTitle>
                Everything you need to launch a brand on Amazon. <Link href="/">Learn More</Link>
            </PackageSubTitle>
            <PackageTiers>
                <i>Use credits across any combination of the following tiers:</i>
                <TiersList>
                    <TierItem>
                        <ItemTitle>Top Level</ItemTitle><p> - Up to {top_level.images} images or {top_level.videos} videos</p>
                    </TierItem>
                    <TierItem>
                        <ItemTitle>Mid Level</ItemTitle><p> - Up to {mid_level.images} images or {mid_level.videos} videos</p>
                    </TierItem>
                    <TierItem>
                        <ItemTitle>Standard level</ItemTitle><p> - Up to {stan_level.images} images or {stan_level.videos} videos</p>
                    </TierItem>
                </TiersList>
            </PackageTiers>
            <PurchaseButton>
                Buy Now
            </PurchaseButton>
        </Card>
    )
}

export default PackCard;

const Card = styled.div`
    background: #171717;
    border-radius: 5px;
    width: 291px;
    height: 499px;
    padding-top: 20px;
    padding-left: 20px;
    padding-right: 22px;
    border: 1px solid transparent;
    &:hover {
        border: 1px solid #FFFFFF;
    }
`

const PackPricing = styled.div`
    display: block;
    padding-top: 18px;
    padding-bottom: 20px;
`
const PricesRight = styled.div`
    float: right;
    display: inline-block;
`
const ReducedPrice = styled.p`
    display: inline;
    font-style: normal;
    font-weight: 600;
    font-size: 17px;
    line-height: 18px;
    text-align: right;
    color: #FFFFFF;
    margin-left: 8px;
`

const SlashedPrice = styled.span`
    display: inline;
    font-style: normal;
    font-weight: 600;
    font-size: 17px;
    line-height: 18px;
    text-align: right;
    margin-left: 8px;
    color: #525252;
    &:before {
        content: '';
        position: absolute;
        margin-top: 8px;
        padding-left: -20px; 
        width: 68px;
        border-bottom: 1px solid #962424;
        transform: translate(0, -10);
        transform: rotate(342deg);
        -webkit-transform: rotate(342);
    }
`

const CreditWidget = styled.div`
    width: 70px;
    height: 21px;
    left: 82px;
    top: 539px;
    background: #128752;
    border-radius: 5px;
    padding-top: 1px;
    padding-bottom: 2px;
    padding-left: 5px;
    padding-right: 8px;
    display: inline-block;
    span {
        display: block;
        float: center;
        font-weight: 600;
        font-size: 12px;
        line-height: 18px;
        color: #FFFFFF;
        white-space: nowrap;
        text-align: center;
    }
`

const ImageWrapper = styled.div`
    height: 178px;
    width: 249px;
    position: relative;
    display: inline-block;
    svg {
        position: absolute;
        left: 75%;
        top: 6%;
        bottom: 80.06%;
        filter: brightness(0) invert(1);
    }
`

const PackageTitle = styled.div`
    font-weight: bold;
    font-size: 18px;
    line-height: 18px;
    color: #FFFFFF;
    white-space: nowrap;
`

const PackageSubTitle = styled.p`
    font-weight: normal;
    font-size: 12px;
    line-height: 19px;
    color: #B5B5B5;
    margin-top: 4px;
    a {
        text-decoration: underline;
        display: inline;  
    }
    a:hover {
        color:  #FFB917;
    }

`

const PackageTiers = styled.div`
    i {
        font-weight: 500;
        font-size: 9px;
        line-height: 14px;
        color: #B5B5B5;
        white-space: nowrap;
    }
`
const TiersList = styled.ul`
    p {
        font-style: normal;
        font-weight: normal;
        font-size: 10px;
        line-height: 17px;
        color: #FFFFFF;
        margin: 0;
        display: inline;
    }
    padding-bottom: 26px;
    padding-left: 15px;
    white-space: nowrap;
`

const TierItem = styled.li`
    &:nth-child(1) {
        list-style-image: url(/icons/Bullet_Points/EllipseGold.svg)
    }
    &:nth-child(2) {
        list-style-image: url(/icons/Bullet_Points/EllipseSilver.svg)
    }
    &:nth-child(3) {
        list-style-image: url(/icons/Bullet_Points/EllipseBronze.svg)
    }
`

const ItemTitle = styled.p`
    font-style: normal;
    font-weight: bold;
    font-size: 11px;
    line-height: 17px;
    text-decoration-line: underline;
    color: #FFFFFF;
    display: inline;
    letter-spacing: 1dpx;
`

const PurchaseButton = styled(PrimaryButton)`
    height: 40px;
    width: 100%;
    text-align: center;
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    color: black;
    background: #FFB917;
    &:hover {
        color: #FFFFFF;
    }
`