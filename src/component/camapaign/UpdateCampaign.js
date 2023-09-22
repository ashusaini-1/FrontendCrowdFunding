import React, { useState, useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import {
  UpdateCampaignes,
  SingleCampaign,
  DeleteCampaign,
} from "../../action/campaignAction";
import { useNavigate, useParams } from "react-router-dom";

const UpdateCampaign = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();

  const toast = useToast();
  const [title, setTitle] = useState();
  const [category, setCategory] = useState();
  const [fundingGoal, setFundingGoal] = useState();
  const [date, setDate] = useState();
  const [images, setImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);
  const [description, setDescription] = useState();
  const categoryOptions = ["Arts", "Technology", "Charity"];

  const { campaign } = useSelector((state) => state.detail);
  // console.log(campaign.title);
  const HandleUpdateCampaign = async (e) => {
    e.preventDefault();
    if (!title || !category || !date || !description || !fundingGoal) {
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

      await dispatch(UpdateCampaignes(id, formData));
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

  const HandleDeleteCampaign = async () => {
    dispatch(DeleteCampaign(id));
    navigate("/campaign/view");

    toast({
      title: "Campaign Deleted Successfully!",
      status: "success",
      duration: 5000,
      isClosable: true,
      position: "bottom",
    });
  };

  // useEffect(() => {
  //   setTitle(campaign.title);
  //   setCategory(campaign.category);
  //   setFundingGoal(campaign.fundingGoal);
  //   setDate(campaign.endDate);
  //   setDescription(campaign.description);
  // }, []);

  useEffect(() => {
    dispatch(SingleCampaign(id));
  }, []);

  // const createProductImagesChange = (e) => {
  //   const files = Array.from(e.target.files);

  //   setImages([]);
  //   setImagesPreview([]);

  //   files.forEach((file) => {
  //     const reader = new FileReader();

  //     reader.onload = () => {
  //       if (reader.readyState === 2) {
  //         setImagesPreview((old) => [...old, reader.result]);
  //         setImages((old) => [...old, reader.result]);
  //       }
  //     };

  //     reader.readAsDataURL(file);
  //   });
  // };
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
        Update or Delete Campaign
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

        {/* <FormLabel>Add Images</FormLabel>
        <Input
          type="file"
          accept="image/*"
          onChange={createProductImagesChange}
          multiple
        /> */}

        <FormLabel>Description</FormLabel>
        <Textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <Center>
          <Button
            onClick={HandleUpdateCampaign}
            marginTop="5%"
            colorScheme="teal"
            variant="outline"
          >
            Update
          </Button>
          <Button
            onClick={HandleDeleteCampaign}
            marginTop="5%"
            colorScheme="teal"
            variant="outline"
          >
            Delete
          </Button>
        </Center>
      </FormControl>
    </Box>
  );
};

export default UpdateCampaign;
