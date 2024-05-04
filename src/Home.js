import React from 'react';
import { Box, Text, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  console.log('Rendering Home component');

  const navigateToAbout = () => {
    navigate('/about');
  };

  return (
    <Box textAlign="center" py={10} px={6}>
      <Text
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
        fontSize="5xl"
        fontWeight="extrabold"
      >
        Welcome to the Space Portfolio
      </Text>
      <Text mt={3} mb={5}>
        Explore the universe of my work and projects.
      </Text>
      <Button
        size="lg"
        bgGradient="linear(to-r, teal.500, green.500)"
        color="white"
        _hover={{
          bgGradient: "linear(to-r, teal.600, green.600)",
        }}
        onClick={navigateToAbout}
      >
        Discover More
      </Button>
    </Box>
  );
};

export default Home;
