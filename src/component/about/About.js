// AboutUs.js
import React from "react";
import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";

const AboutUs = () => {
  return (
    <Box display="flex" height="50vh" width="100%" marginTop="10%" color="white">
      <Box margin="auto">
        <Text  fontSize="2xl" fontWeight="bold"  textAlign="center" size="xl" mb="4">
          About Us
        </Text>
        <VStack spacing="4">
          <Text textAlign="center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida
            aliquam risus, a euismod dolor facilisis id...<br></br>
            Mauris a dolor nec erat fermentum semper non ut lectus. Proin id
            ultricies nisl. Vivamus tincidunt, nisl ut cursus eleifend...
          </Text>
        </VStack>
      </Box>
    </Box>
  );
};

export default AboutUs;
