import React from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Button,
  Input,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Box,
  CardFooter,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { logout } from "../../action/userAction";

const LeftDrawer = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

const handleLogout=()=>{
dispatch(logout())
navigate('/');


}

  return (
    <Box>
      <Button ref={btnRef} onClick={onOpen}>
        <HamburgerIcon />
      </Button>
      <Drawer
        ref={btnRef}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Admin Panel</DrawerHeader>

          <DrawerBody>
          <Button margin="0 0 2% 0" width="100%" >  <Link to="/admin/users">Registered Users</Link></Button>
            <br />
            <Button margin="0 0 2% 0" width="100%" ><Link to="/admin/all/campaign">View Campaignes</Link></Button>
          </DrawerBody>
          <DrawerFooter>
            <Button onClick={handleLogout}>
            Logout
             
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default LeftDrawer;
