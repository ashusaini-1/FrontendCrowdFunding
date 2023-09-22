import React, { useState } from "react";
import img from "../assets/contact.jpg";
import {
  Box,
  Image,
  FormControl,
  FormLabel,
  Text,
  Input,
  Center,
  Button,
  Textarea,
} from "@chakra-ui/react";
import {BsFillSendFill} from "react-icons/bs"
const Contact = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [Question, setQuestion] = useState();
  return (
    <Box
      display="flex"
      flexDirection={{ base: 'column', md: 'row' }} // Stack columns on small screens and use row layout on medium screens and larger
      alignItems="center"
      marginTop="7%"
      height={{ base: 'auto', md: '20%' }} // Adjust the height as needed
      width="70%"
      mx="auto"
      p={4}
      borderRadius="xl"
      boxShadow="dark-lg"
      backgroundColor="rgb(18, 17, 20)"
      color="white"
    >
      <Image src={img} height="50%" width="50%" marginTop={{ base: '3%', md: '0' }} />

      <Box marginLeft={{ base: '0', md: '10%' }} marginTop={{ base: '3%', md: '0' }}>
        <Text fontSize="2xl" fontWeight="bold" marginTop="10%" mb={4} textAlign="center">
          Contact Us
        </Text>
        <Text fontSize="2xl" fontWeight="bold" mb={4} textAlign="center">
          12345XXXXX
          <br />
          coderisapassion@gmail.com
        </Text>
      </Box>
    </Box>
     
  );
};

export default Contact;



 {/* <FormControl>
        <FormLabel>Name</FormLabel>
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <FormLabel>How can we Help You!</FormLabel>
        <Textarea
          value={Question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <FormLabel>Confirm Password</FormLabel>

        <Center>
          <Button width="100%" colorScheme="teal" variant="outline">
          <BsFillSendFill/>
          </Button>
        </Center>
      </FormControl>
     </Box>
</Box>*/}