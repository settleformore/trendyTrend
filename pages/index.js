import React from 'react';
import styled from 'styled-components';
import Banner from '../components/Banner';
import PageNav from '../components/CampaignBuilder/PageNav';

const Home = () => {
  return (
    <Container>
      <Banner />
      <PageNav />
    </Container>
  )
}


// rgba(0, 0, 0, 1)
export default Home;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 1);
`;
