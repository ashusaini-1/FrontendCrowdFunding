import React, { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Text,
  Input,
  Center,
  Button,
  Textarea,
  Select,
  useToast,
  
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { RegisterCampaignes,SendMessages } from "../../action/campaignAction";

const RegisterCampaign = () => {
  const dispatch = useDispatch();
  const toast = useToast();
  const [title, setTitle] = useState();
  const [category, setCategory] = useState();
  const [fundingGoal, setFundingGoal] = useState();
  const [date, setDate] = useState();
  const [pic, setPic] = useState();
  const [picLoading, setPicLoading] = useState(false);

  const [description, setDescription] = useState();
  const categoryOptions = ["Arts", "Technology", "Charity"];

  const HandleRegisteredCampaign = async (e) => {
    e.preventDefault();
    if (!title || !category || !date || !description || !fundingGoal || !pic) {
      toast({
        title: "Please Fill all the Details",
        status: "warning",
        duration: 3000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }
  
    try {
      const formData = new FormData();

      formData.set("title", title);

      formData.set("category", category);
      formData.set("endDate", date);
      formData.set("description", description);
      formData.set("fundingGoal", fundingGoal);
      formData.set("pic",pic)
      await dispatch(RegisterCampaignes(formData));
      // await dispatch(SendMessages());
      toast({
        title: "Registered Successful",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "bottom",
      });
    } catch (error) {
      toast({
        title: "Error Occurred!",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
    }
  };

  const postDetails = (pics) => {
    setPicLoading(true);
    if (pics === undefined) {
      toast({
        title: "Please Select an Image!",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }
    console.log(pics);
    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "Chatapp");
      data.append("cloud_name", "drcb5edh7");
      fetch("https://api.cloudinary.com/v1_1/drcb5edh7/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setPic(data.url.toString());
          console.log(data.url.toString());
          setPicLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setPicLoading(false);
        });
    } else {
      toast({
        title: "Please Select an Image!",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setPicLoading(false);
      return;
    }
  };
  
  return (
    <Box
      marginTop="3%"
      mx="auto"
      p={4}
      minHeight="40vh"
      borderRadius="xl"
      boxShadow="dark-lg"
      backgroundColor="rgb(18, 17, 20)"
      color="white"
      width={{ base: "90%", sm: "70%", md: "50%", lg: "35%" }}
    >
      <Text fontSize="2xl" fontWeight="bold" mb={4} textAlign="center">
        Register Campaign
      </Text>
      <FormControl>
        <FormLabel>Title</FormLabel>
        <Input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <FormLabel>Category</FormLabel>
        <Select
          placeholder="Select a category"
          onChange={(e) => setCategory(e.target.value)}
        >
          {categoryOptions.map((option, index) => (
            <option key={index} value={category}>
              {option}
            </option>
          ))}
        </Select>
        <FormLabel>Funding Goal</FormLabel>
        <Input
          type="number"
          value={fundingGoal}
          onChange={(e) => setFundingGoal(e.target.value)}
        />

        <FormLabel>EndDate</FormLabel>
        <Input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <FormLabel>Add Images</FormLabel>
        <Input
          type="file"
          p={1.5}
          accept="image/*"
          onChange={(e) => postDetails(e.target.files[0])}
        />
       
        <FormLabel>Description</FormLabel>
        <Textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <Center>
          <Button
            onClick={HandleRegisteredCampaign}
            marginTop="5%"
            colorScheme="teal"
            variant="outline"
          >
            Register
          </Button>
        </Center>
      </FormControl>
    </Box>
  );
};

export default RegisterCampaign;
