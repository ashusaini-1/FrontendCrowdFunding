import React, { useEffect, useState } from "react";
import { Box, Text, Image, Center } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SingleCampaign } from "../../action/campaignAction";
import AddComment from "../comment/AddComment";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const DetailCampaign = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { campaign } = useSelector((state) => state.detail);

  useEffect(() => {
    dispatch(SingleCampaign(id));
  }, [dispatch, id]);

  return (
    <Box width="100%" marginTop="3%" color="white">
      <Box>
        <Text fontSize="2xl" textAlign="center">
          {campaign.title}
        </Text>
        <Text fontSize="2xl" mb={4}>
          Total Funding Required: {campaign.fundingGoal}
        </Text>
        <Text fontSize="2xl" mb={4}>
          {campaign.category}
        </Text>
        <Text fontSize="2xl" fontWeight="light" mb={4}>
          {campaign.description}
        </Text>
        <Text fontSize="small">
          {" "}
          PostedAt:-{"\u00A0"}
          {campaign.createdAt}
        </Text>
        <Box marginTop="10%">
          {" "}
          <AddComment id={campaign._id} />
        </Box>
      </Box>
    </Box>
  );
};

export default DetailCampaign;
