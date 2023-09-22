import React from "react";
import { Box, Container, Flex, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { FaDribbble, FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer=()=> {
  return (
    <Box bg="gray.900" color="white"  marginTop="11%" >
      <Container maxW="full">
        <SimpleGrid columns={[1, 2, 4]} gap={8} p={6}>
          <Box>
            <Text fontWeight="bold" mb={2}>
              Company
            </Text>
            <VStack align="start" spacing={1}>
              <Link  to="/about">About</Link>
              <Link  to="#">Careers</Link>
              <Link  to="#">Brand Center</Link>
              <Link  to="#">Blog</Link>
            </VStack>
          </Box>
          <Box>
            <Text fontWeight="bold" mb={2}>
              Help Center
            </Text>
            <VStack align="start" spacing={1}>
              <Link  to="#">Discord Server</Link>
              <Link  to="#">Twitter</Link>
              <Link  to="#">Facebook</Link>
              <Link  to="/contact">Contact Us</Link>
            </VStack>
          </Box>
          <Box>
            <Text fontWeight="bold" mb={2}>
              Legal
            </Text>
            <VStack align="start" spacing={1}>
              <Link  to="#">Privacy Policy</Link>
              <Link  to="#">Licensing</Link>
              <Link  to="#">Terms & Conditions</Link>
            </VStack>
          </Box>
          <Box>
            <Text fontWeight="bold" mb={2}>
              Download
            </Text>
            <VStack align="start" spacing={1}>
              <Link  to="#">iOS</Link>
              <Link  to="#">Android</Link>
              <Link  to="#">Windows</Link>
              <Link  to="#">MacOS</Link>
            </VStack>
          </Box>
        </SimpleGrid>
        <Flex justifyContent="space-between" p={4}>
          <Text fontSize="sm" >
            &copy; CrowdFunding&trade; 2023
          </Text>
       
          <Flex style={{ gap: '20px' }}
          >
            <Link  to="#">
              <FaFacebook />
            </Link>
            <Link  to="#" >
              <FaInstagram />
            </Link>
            <Link  to="#" >
              <FaTwitter />
            </Link>
            <Link  to="#">
              <FaGithub />
            </Link>
            <Link  to="#">
              <FaDribbble />
            </Link>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
 
export default Footer;