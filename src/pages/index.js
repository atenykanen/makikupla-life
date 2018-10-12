import React from 'react';
import styled, { keyframes } from 'styled-components';
import Layout from '../components/layout';

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;


const Spinner = styled.span`
  display: inline-block;
  animation: ${rotate360} 2s linear infinite;
`;

const Pizza = () => <Spinner><span role="img" aria-label="pizza">🍕</span></Spinner>;
const Beer = () => <Spinner><span role="img" aria-label="beer">🍺</span></Spinner>;

const Title = styled.h1`
  margin-top: 3rem;
  font-size: 9vw;
  color: red;
  text-shadow: 2px 2px #efe020;
`;

const Answer = styled.span`
  color: blue;
  font-size: 9vw;
`;

const IndexPage = () => (
  <Layout>
    <Title><Pizza /> Mäkikuplaan? <Beer /></Title>
    <Answer>KYLLÄ</Answer>
  </Layout>
)

export default IndexPage
