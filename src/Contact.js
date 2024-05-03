import React from 'react';
import { VStack, Heading, Text, Input, Textarea, Button } from '@chakra-ui/react';

const Contact = () => {
  console.log('Rendering Contact component');
  return (
    <VStack spacing={4} as="form" align="stretch" m={8}>
      <Heading as="h2" size="xl" textAlign="center">
        Contact
      </Heading>
      <Text fontSize="md" textAlign="center">
        Have a question or want to work together?
      </Text>
      <Input placeholder="Your Name" />
      <Input placeholder="Your Email" type="email" />
      <Textarea placeholder="Your Message" />
      <Button
        type="submit"
        colorScheme="teal"
        variant="solid"
        size="md"
        mt={4}
      >
        Send Message
      </Button>
    </VStack>
  );
};

export default Contact;
