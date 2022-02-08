
import styled from 'styled-components';
import PackCard from './PackCard';

const QuickPacks = () => {
    const amazonCards = [
        {title: "Amazon beauty product pack", price: 1500, reducedPrice: 1080, credits: 15, top_level: {images: 13, videos: 4}, mid_level: {images: 20, videos: 8}, stan_level: {images: 35, videos: 12}},
        {title: "Amazon Product Launch Pack", price: 4500, reducedPrice: 3080, credits: 35, top_level: {images: 25, videos: 8}, mid_level: {images: 50, videos: 15}, stan_level: {images: 100, videos: 30}},
        {title: "Product reviews", price: 7500, reducedPrice: 6580, credits: 85, top_level: {images: 50, videos: 16}, mid_level: {images: 100, videos: 30}, stan_level: {images: 200, videos: 60}}
    ]
    return (
        <CardContainer className={"card_container"}>
            {amazonCards.map((card, index) => {
                return (
                    <PackCard />
                )
            })}
            <PackCard>

            </PackCard>
            <PackCard>

            </PackCard>
            {/* <PackCard credits={} image={} price={} reducedPrice={}> */}
            <PackCard>

            </PackCard>
        </CardContainer>
    )
}

export default QuickPacks;

const CardContainer = styled.div`
    margin-top: 40px;
    display: grid;
    gap: 15px;
    grid-auto-flow: column;
`
