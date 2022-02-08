
import styled from 'styled-components';
import PackCard from './PackCard';

const QuickPacks = () => {
    const amazonCards = [
        {pic: '/images/amazon/amazon3.png', title: "Amazon beauty product pack", price: 1500, reducedPrice: 1080, credits: 15, top_level: {images: 13, videos: 4}, mid_level: {images: 20, videos: 8}, stan_level: {images: 35, videos: 12}},
        {pic: '/images/amazon/amazon1.png', title: "Amazon Product Launch Pack", price: 4500, reducedPrice: 3080, credits: 35, top_level: {images: 25, videos: 8}, mid_level: {images: 50, videos: 15}, stan_level: {images: 100, videos: 30}},
        {pic: '/images/amazon/amazon2.png', title: "Product reviews", price: 7500, reducedPrice: 6580, credits: 85, top_level: {images: 50, videos: 16}, mid_level: {images: 100, videos: 30}, stan_level: {images: 200, videos: 60}}
    ]
    return (
        <CardContainer className={"card_container"}>
            {amazonCards.map((card, index) => {
                return (
                    <PackCard 
                        pic={card.pic}
                        title={card.title}
                        price={card.price}
                        reducedPrice={card.reducedPrice}
                        credits={card.credits}
                        top_level={card.top_level}
                        mid_level={card.mid_level}
                        stan_level={card.stan_level}
                        key={index} 
                    />
                )
            })}
        </CardContainer>
    )
}

export default QuickPacks;

const CardContainer = styled.div`
    margin-top: 40px;
    display: grid;
    gap: 15px;
    grid-auto-flow: column;
    padding-bottom: 222px;
`
