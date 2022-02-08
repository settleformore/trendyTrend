import styled from "styled-components";
import Image from 'next/image';
import { PrimaryButton } from '../Buttons/Button'
import { AmazonIcon } from "./ContentIcons";

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
                <SlashedPrice>
                    {price}
                </SlashedPrice>
                <ReducedPrice>
                    {reducedPrice}
                </ReducedPrice>
            </PackPricing>
            <PackageTitle>
                {title}
            </PackageTitle>
            <PackageSubTitle>
                Everything you need to launch a brand on Amazon. <a>Learn More</a>
            </PackageSubTitle>
            <PackageTiers>
                <p>Use credits across any combination of the following tiers:</p>
                <TiersList>
                    {top_level.images} {top_level.videos}
                    {mid_level.images} {mid_level.videos}
                    {stan_level.images} {stan_level.videos}
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
`

const PackPricing = styled.div`
    display: block;
    padding-top: 20px;
    padding-bottom: 20px;
`
const ReducedPrice = styled.p`
    display: inline;
`

const SlashedPrice = styled.p`
    display: inline;
`

const CreditWidget = styled.div`
    width: 70px;
    height: 21px;
    left: 82px;
    top: 539px;
    background: #128752;
    border-radius: 5px;
    padding-left: 9px;
    padding-right: 9px;
    padding-top: 1px;
    padding-bottom: 2px;
    span {
        display: inline;
        font-weight: 600;
        font-size: 12px;
        line-height: 18px;
        color: #FFFFFF;
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

`

const PackageTiers = styled.div`
     p {
        font-style: italic;
        font-weight: 500;
        font-size: 10px;
        line-height: 14px;
        color: #B5B5B5;
     }
`

const TiersList = styled.ul`

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
`