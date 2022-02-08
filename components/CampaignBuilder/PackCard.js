import styled from "styled-components";
import Image from 'next/image';
import { PrimaryButton } from '../Buttons/Button'

const PackCard = () => {
    return (
        <Card>
            <ImageWrapper>
                <CardImage src='/images/amazon/amazon1.png' width='249px' height='178px' />
            </ImageWrapper>
            <PackPricing>
                <CreditWidget />
            </PackPricing>
            <PackageTitle>
                
                <PackageSubTitle>
                    Everything you need to launch a brand on Amazon. <a>Learn More</a>
                </PackageSubTitle>
            </PackageTitle>
            <PackageTiers>
                <p>Use credits across any combination of the following tiers:</p>
                <TiersList>

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
`
const CreditWidget = styled.div`
width: 70px;
height: 21px;
left: 82px;
top: 539px;

background: #128752;
border-radius: 5px;
`

const ImageWrapper = styled.div`
    
`

const CardImage = styled(Image)`
    
`

const PackageTitle = styled.div`
    font-weight: bold;
    font-size: 18px;
    line-height: 18px;
    color: #FFFFFF;
`

const PackageSubTitle = styled.p`
    font-weight: normal;
    font-size: 12px;
    line-height: 19px;
    color: #B5B5B5;

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