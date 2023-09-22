import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ViewComment,ReplyComment } from "../../action/commentAction";
import {
  Box,
  Textarea,
  VStack,
  FormControl,
  FormLabel,
  Button,
  Input,
  HStack,Text
} from "@chakra-ui/react";
import { loadUser } from "../../action/userAction";

const ViewComments = ({userId}) => {
  const { id } = useParams();
  const dispatch = useDispatch();

 
  
  const { comment } = useSelector((state) => state.viewComment);
  const [replyText, setReplyText] = useState("");
  const [activeComment, setActiveComment] = useState(null); // Store the active comment being replied to

  useEffect(() => {
    dispatch(ViewComment(id));
   
  }, [dispatch, id]);



  const handleReplySubmit = (e) => {
e.preventDefault();

const formIds=new FormData();
formIds.set("commentId",)
formIds.set("replyText",replyText)
formIds.set("userId",userId)


   dispatch(ReplyComment(formIds))
  };

  return (
    <VStack spacing={4}  >
      <Text fontSize="xl" fontWeight="bold">
        ViewComments
      </Text>
      {comment.map((item) => (
        <Box
          key={item._id}
          width="50%"
          borderBottom="2px solid black"
         
          p={2}
        >
          <Text
            fontWeight="hairline italic"
          >
            {item.comment}
          </Text>

          {/* Display the reply input field if this comment is the active comment */}
          {/* {activeComment === item && (
            <HStack width="100%" justifyContent="center">
              <FormControl width="70%">
                <Input
                  placeholder="Reply"
                  borderColor="transparent"
                  borderBottom="2px solid gray"
                  _hover={{ borderBottomColor: "gray.600" }}
                  _focus={{
                    borderBottomColor: "teal.500",
                    boxShadow: "0px 1px 0px 0px teal.500",
                  }}
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                />
              </FormControl>
              <Button
                colorScheme="teal"
                variant="outline"
                borderRadius="8px"
                _hover={{ backgroundColor: "teal.500" }}
                onClick={handleReplySubmit}
              >
                Submit Reply
              </Button>
            </HStack>
          )} */}
        </Box>
      ))}
    </VStack>
  );
};


export default ViewComments;
