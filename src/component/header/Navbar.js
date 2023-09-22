import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  Show,
  HStack,
  useDisclosure,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import {
  MoonIcon,
  SunIcon,
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
} from "@chakra-ui/icons";
import { logout } from "../../action/userAction";
//   import Photo from "./Photo";
//   import Name from "./Name";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const Navbar=()=> {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
 
  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };
  return (
    <div id="navFix">
      <Box
        bg={useColorModeValue("gray.100", "gray.900")}
        px={9}
        width={["100%"]}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <HStack w="42%">
            {/* <Name />
             */}
            <Show breakpoint="(min-width: 1000px)"> {/* <Photo /> */}</Show>
          </HStack>

          <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          
            <HStack spacing={8} alignItems={"center"}>
              <HStack
                as={"nav"}
                spacing={4}
                display={{ base: "none", md: "flex" }}
                id="myDIV"
              >
                <Button className="btnRes">
                  <Link to="/">
                    {" "}
                    <b>Home</b>
                  </Link>
                </Button>

                <Button className="btnRes">
                  <Link to="/about">
                    <b>About</b>
                  </Link>
                </Button>

                <Button className="btnRes">
                  <Link to="/Contact">
                    <b>Contact</b>
                  </Link>
                </Button>

                <Menu>
                  <MenuButton
                    px={4}
                    py={2}
                    transition="all 0.2s"
                    borderRadius="md"
                    borderWidth="1px"
                    _hover={{ bg: "gray.400" }}
                    _expanded={{ bg: "blue.400" }}
                    _focus={{ boxShadow: "outline" }}
                  >
                    Campaign <ChevronDownIcon />
                  </MenuButton>
                  <MenuList>
                    <MenuItem>
                      <Link to="/campaign/register">RegisterCampaign</Link>
                    </MenuItem>
                    <MenuItem>
                      <Link to="/campaign/view">ViewCampaignes</Link>
                    </MenuItem>
                  </MenuList>
                </Menu>
                <Button className="btnRes">
                  <Link to="/signup">
                    <b>Account</b>
                  </Link>
                </Button>
                <Button className="btnRes" onClick={handleLogout}>
                  <b>LogOut</b>
                </Button>
              </HStack>
            </HStack>
          </Flex>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Flex>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          {isOpen ? (
            <Box marginTop="21rem" pb={4} display={{ md: "none" }}>
              <Stack as={"nav"} spacing={4}>
                
                <Button
                  onClick={isOpen ? onClose : onOpen}
                  _hover={{
                    textShadow: "#FC0 1px 0 10px",
                    transform: "scale(1.2)",
                  }}
                >
                  <Link to="/">
                    {" "}
                    <b>Home</b>
                  </Link>
                </Button>

                <Button
                  onClick={isOpen ? onClose : onOpen}
                  _hover={{
                    textShadow: "#FC0 1px 0 10px",
                    transform: "scale(1.2)",
                  }}
                >
                  <Link to="/about">
                    {" "}
                    <b>About</b>
                  </Link>
                </Button>

                <Button
                  onClick={isOpen ? onClose : onOpen}
                  _hover={{
                    textShadow: "#FC0 1px 0 10px",
                    transform: "scale(1.2)",
                  }}
                >
                  <Link to="/contact">
                    <b>Contact</b>
                  </Link>
                </Button>

                <Button
                  onClick={isOpen ? onClose : onOpen}
                  _hover={{
                    textShadow: "#FC0 1px 0 10px",
                    transform: "scale(1.2)",
                  }}
                >
                  <Link to="/campaign/register">RegisterCampaign</Link>
                </Button>

                <Button
                  onClick={isOpen ? onClose : onOpen}
                  _hover={{
                    textShadow: "#FC0 1px 0 10px",
                    transform: "scale(1.2)",
                  }}
                >
                  <Link to="/campaign/view">ViewCampaignes</Link>
                </Button>

                <Button
                  onClick={isOpen ? onClose : onOpen}
                  _hover={{
                    textShadow: "#FC0 1px 0 10px",
                    transform: "scale(1.2)",
                  }}
                >
                  <Link to="/signup">
                    <b>Account</b>
                  </Link>
                </Button>

                <Button
                  onClick={isOpen ? onClose : handleLogout}
                  _hover={{
                    textShadow: "#FC0 1px 0 10px",
                    transform: "scale(1.2)",
                  }}
                >
                  LogOut
                </Button>
              </Stack>
            </Box>
          ) : null}
        </Flex>
      </Box>
    </div>
  );
}


export default Navbar