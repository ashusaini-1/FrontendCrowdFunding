import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ViewCampaignes } from "../../action/campaignAction";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Box,
  Center,
  Input,
} from "@chakra-ui/react";
import LeftDrawer from "./Drawer";

const AllCampaign = () => {
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
      {" "}
      <Center>
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          width="50%"
          placeholder="Search Title"
        ></Input>
      </Center>
      <Box display="flex">
        <LeftDrawer />

        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Title</Th>
              <Th>Category</Th>
              <Th>Funding Goal</Th>
              <Th>CreatedAt</Th>
              <Th>EndDate</Th>
            </Tr>
          </Thead>
          <Tbody>
            {campaign.map((item) => (
              <Tr key={item._id}>
                <Td>{item.title}</Td>
                <Td>{item.category}</Td>
                <Td>{item.fundingGoal}</Td>
                <Td>{item.createdAt}</Td>
                <Td>{item.endDate}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
};

export default AllCampaign;
