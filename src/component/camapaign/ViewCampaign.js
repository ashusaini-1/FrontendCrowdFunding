import React, { useEffect, useState } from "react";
import {
  CardBody,
  Card,
  Stack,
  Heading,
  Text,
  Box,
  Input,
  Button,
  Image,
  Center,
  HStack,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteCampaign, ViewCampaignes } from "../../action/campaignAction";
import { Link } from "react-router-dom";

const ViewCampaign = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState();
  const { campaign } = useSelector((state) => state.view);


  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(ViewCampaignes(title));
      } catch (error) {
        // Handle any errors that occur during the dispaatch
        console.error("Error fetching campaign data:", error);
      }
    };

    fetchData();
  }, [dispatch, campaign]); // Only runs when campaign changes

  return (
    <Box>
      <Center marginTop="5%">
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          width="50%"
          placeholder="Search Title"
        ></Input>
      </Center>
      <HStack
        display="flex"
        spacing={4} // Adjust the gap between cards as needed
        flexWrap="wrap" // Allows cards to wrap onto the next row on smaller screens
        justifyContent="center"
        marginTop="5%" // Center align cards horizontally
      >
        {campaign.map((item) => (
          <Card maxW="sm" key={item._id}>
            <CardBody>
              <Image
                src={item.pic}
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md" textAlign="center">
                  {item.title} {/* Use the actual title from your data */}
                </Heading>

                <Text textAlign="center">
                  {item.category} {/* Use the actual category from your data */}
                </Text>
              </Stack>
            </CardBody>

            <Center marginBottom="5%">
              <Button variant="solid" colorScheme="blue">
                <Link to={`/campaign/details/${item._id}`}> Read More</Link>
              </Button>
              {"\u00A0"}
              {"\u00A0"}
              {"\u00A0"}
              {"\u00A0"}
              <Button variant="solid" colorScheme="blue">
                <Link to={`/campaign/update/${item._id}`}> Update</Link>
              </Button>
              {"\u00A0"}
              {"\u00A0"}
              {"\u00A0"}
              {"\u00A0"}
              <Button variant="solid" colorScheme="blue">
                <Link to={`/campaign/delete/${item._id}`}> Delete</Link>
              </Button>
            </Center>
          </Card>
        ))}
      </HStack>
    </Box>
  );
};

export default ViewCampaign;
