import React from 'react';
import styled from 'styled-components';
import Banner from '../components/Banner';
import PageNav from '../components/CampaignBuilder/PageNav';
import ContentPackNav from '../components/CampaignBuilder/ContentNav';
import QuickPacks from '../components/CampaignBuilder/QuickPacks';

const Home = () => {
  return (
    <Container>
      <Banner />
      <QuickPackages>
        <PageNav />
        <ContentPackNav />
        <QuickPacks />
      </QuickPackages>
    </Container>
  )
}

export default Home;

const Container = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 1);
`;

const QuickPackages = styled.div`
  padding-left: 64px;
  padding-right: 75px;
`
