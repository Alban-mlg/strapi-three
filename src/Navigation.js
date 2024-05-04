import React from 'react';
import { Box, Flex, useColorMode } from '@chakra-ui/react';
import { FaRocket } from 'react-icons/fa';

// This component will handle the navigation of the portfolio
const Navigation = ({ onNavigate }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg={colorMode === 'dark' ? 'gray.900' : 'gray.50'}
      color={colorMode === 'dark' ? 'gray.100' : 'gray.900'}
    >
      <Flex align="center" mr={5}>
        <FaRocket />
        <Box
          as="span"
          fontWeight="bold"
          letterSpacing="wide"
          fontSize="lg"
          ml="2"
        >
          Space Portfolio
        </Box>
      </Flex>

      <Box display={{ base: 'block', md: 'none' }} onClick={toggleColorMode}>
        {colorMode === 'dark' ? 'Light' : 'Dark'}
      </Box>

      <Box
        display={{ sm: 'block', md: 'none' }}
        onClick={() => onNavigate('about')}
      >
        About
      </Box>

      <Box
        display={{ sm: 'block', md: 'none' }}
        onClick={() => onNavigate('projects')}
      >
        Projects
      </Box>

      <Box
        display={{ sm: 'block', md: 'none' }}
        onClick={() => onNavigate('contact')}
      >
        Contact
      </Box>
    </Flex>
  );
};

export default Navigation;
