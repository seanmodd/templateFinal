import { Button } from '@chakra-ui/button';
import { Text } from '@chakra-ui/layout';
import Head from 'next/head';
import styled from 'styled-components';
import { useColorModeValue as mode } from '@chakra-ui/color-mode';

const Heading = styled.h1`
  font-size: 3.5em;
  text-align: center;
  font-family: Poppins;
  color: #4655ff;
`;
export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
      </Head>
      <main className="main">
        <Heading>Here</Heading>
        <Text>Here</Text>

      </main>
    </div>
  );
}
