import React from 'react';
import { Box, SimpleGrid, Text, Image, VStack, Heading } from '@chakra-ui/react';
import projectImage1 from './assets/project1.png'; // Placeholder for actual project images
import projectImage2 from './assets/project2.png';
import projectImage3 from './assets/project3.png';

const projectsData = [
  {
    title: 'Space Exploration App',
    description: 'An interactive application to explore the cosmos.',
    image: projectImage1,
  },
  {
    title: 'Asteroid Mining Database',
    description: 'A comprehensive database for potential asteroid mining operations.',
    image: projectImage2,
  },
  {
    title: 'Virtual Reality Spacewalk',
    description: 'A VR experience that simulates a spacewalk outside the ISS.',
    image: projectImage3,
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <VStack spacing={8} align="stretch">
      <Box>
        <Heading as="h2" size="xl" textAlign="center">
          Projects
        </Heading>
      </Box>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
        {projectsData.map((project, index) => (
          <Box key={index} borderWidth="1px" borderRadius="lg" overflow="hidden" p={5}>
            <Image src={project.image} alt={project.title} boxSize="250px" objectFit="cover" />
            <Text fontWeight="bold" textTransform="uppercase" fontSize="lg" mt={2}>
              {project.title}
            </Text>
            <Text mt={2}>{project.description}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </VStack>
  );
};

export default Projects;
