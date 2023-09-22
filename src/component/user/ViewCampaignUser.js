import React, { useEffect, useState } from "react";
import {
  CardBody,
  Card,
  Stack,
  Heading,
  Text,
  Input,
  Button,
  Image,
  Center,
  HStack,
  Box,
  Spinner
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { ViewCampaignes } from "../../action/campaignAction";
import { Link } from "react-router-dom";

const ViewCampaignUser = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState();
  const { loading,campaign } = useSelector((state) => state.view);
  console.log(campaign);

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
      <Center marginTop="10%">
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          width="50%"
          placeholder="Search Title"
        />
      </Center>
      <HStack
        display="flex"
        spacing={4} // Adjust the gap between cards as needed
        flexWrap="wrap" // Allows cards to wrap onto the next row on smaller screens
        justifyContent="center"
        marginTop="11%" // Center align cards horizontally
      >
        {campaign.map((item) => (
          <Card maxW="xs" key={item._id}>
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

            <Center>
              <Button marginBottom="5%" variant="solid" colorScheme="blue">
                <Link to={`/campaign/details/${item._id}`}> Read More</Link>
              </Button>
            </Center>
          </Card>
        ))}
      </HStack>
    </Box>

  );
};

export default ViewCampaignUser;
