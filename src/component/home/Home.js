import React from "react";
import { Box, Image } from "@chakra-ui/react";
import img from "../assets/banner.webp";

import ViewCampaignUser from "../user/ViewCampaignUser";

const Home = () => {
  return (<>
    <Box   display="flex"
       // Stack columns on small screens and use row layout on medium screens and larger
        alignItems="center"
        marginTop="5%"
        textAlign={{ base: 'center', md: 'left' }} // Center text on small screens and align left on medium screens and larger
        padding={{ base: '0 3%', md: '0' }}>
    <Box marginTop="10%" marginLeft="3%" fontSize="large" fontWeight="semibold">Unlock the power of collective dreams. Together, we can turn visions
        into reality. Join us on this journey, and let's write the future, one
        pledge at a time</Box>
      <Image src={img} boxSize="50%" borderRadius="full" />
    </Box>
    <ViewCampaignUser/>
    </>
  );
};

export default Home;
