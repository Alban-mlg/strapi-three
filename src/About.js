import React from 'react';
import { Box, Text, VStack, Image, Heading } from '@chakra-ui/react';
import astronautImage from './assets/astronaut.png'; // Placeholder for an actual image

const About = () => {
  return (
    <VStack spacing={5} align="stretch">
      <Box>
        <Heading as="h2" size="xl" textAlign="center">
          About Me
        </Heading>
      </Box>
      <Box>
        <Text fontSize="md" textAlign="justify">
          I am a passionate software engineer with a love for all things space and technology.
          With a background in aerospace engineering and computer science, I blend a strong technical
          foundation with a creative mindset to tackle complex problems. My journey has taken me
          from designing satellite systems to developing innovative web applications that reach for the stars.
        </Text>
      </Box>
      <Box>
        <Image src={astronautImage} alt="Astronaut" boxSize="200px" alignSelf="center" />
      </Box>
    </VStack>
  );
};

export default About;
