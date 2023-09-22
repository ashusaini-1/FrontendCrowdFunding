import React, { useState } from "react";
import { Box, Text, HStack, Button, useToast, Input } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { CreateComment } from "../../action/commentAction";
const AddComment = ({id}) => {
  const toast = useToast();
  const dispatch = useDispatch();
  const [comment, setComment] = useState();

  const submit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.set("comment", comment);
      formData.set("campaignId",id)

     
      await dispatch(CreateComment(formData));
      setComment("");
      
      toast({
        title: "Comment Submitted Successfully",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      return;
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

  return (
    <Box display="flex" marginBottom="2%" width="100%" color="white">
      <Box>
        <HStack>
          <Input
            type="text"
            value={comment}
            placeholder="Add Comment"
            onChange={(e) => setComment(e.target.value)}
          ></Input>
          <Button
            onClick={submit}
            width="50%"
            colorScheme="teal"
            variant="outline"
          >
            Submit
          </Button>
          <Button width="60%" colorScheme="teal" variant="outline">
          <Link to={`/comments/read/${id}`}>
            Read Comments</Link>
          </Button>
          {/* <Button width="60%" colorScheme="teal" variant="outline">
            All Images
          </Button> */}
          <Link to="/pay/amount">

          <Button
            width="100%"
            colorScheme="teal"
            variant="outline"
          >
            Donate
          </Button>
          </Link>
        </HStack>
      </Box>
    </Box>
  );
};

export default AddComment;
