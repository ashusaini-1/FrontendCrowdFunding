import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AllUser } from "../../action/userAction";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Box,
  Button,
  Input,
  Stack,
  Center,
} from "@chakra-ui/react";
import LeftDrawer from "./Drawer";

const AllUsers = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState();
  const { users } = useSelector((state) => state.users);
  console.log(users);
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Number of items per page









  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(AllUser(name));
      } catch (error) {
        // Handle any errors that occur during the dispaatch
        console.error("Error fetching campaign data:", error);
      }
    };

    fetchData();
   
  }, [dispatch,name]);

  const previous = () => {
    if (currentPage <= 0) {
      setCurrentPage(1);
    } else {
      let current = currentPage - 1;
      setCurrentPage(current);
    }
  };

  const next = () => {
    let current = currentPage + 1;
    setCurrentPage(current);
  };

  return (
    <Box>
      <LeftDrawer />
      <Stack>
        <Center>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            width="50%"
            placeholder="Search Name"
          ></Input>
         
        </Center>
      </Stack>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Email</Th>
            <Th>Number</Th>
          </Tr>
        </Thead>
        <Tbody>
          {users.map((user) => (
            <Tr key={user._id}>
              <Td>{user.name}</Td>
              <Td>{user.email}</Td>
              <Td>{user.contact}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      {/* Pagination controls */}
      <Box display="flex" justifyContent="center" mt={4}>
        <Button
          onClick={() => previous(currentPage)}
          disabled={currentPage === 1}
          mr={2}
        >
          Previous
        </Button>
        <Button
          onClick={() => next(currentPage)}
          disabled={currentPage === Math.ceil(users.length / itemsPerPage)}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default AllUsers;
