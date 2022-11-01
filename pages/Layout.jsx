import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Nav from "/src/components/Nav";
import { useRef } from "react";
import { useDisclosure } from "@chakra-ui/react";
import DrawerComponent from "../src/components/DrawerComponent";

export default function Layout() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  return (
    <Box
      display="flex"
      flexDirection="column"
      h="100%"
      maxW="1920px"
      p="10px"
      alignItems="center"
      gap="70px"
      bg="#FFFFFF"
      mb="10em"
    >
      <Box className="container" px={{ sm: 4, md: 10 }} maxW="1440px" h="auto">
        <Nav ref={btnRef} onOpen={onOpen} />
        <DrawerComponent isOpen={isOpen} onClose={onClose} btnRef={btnRef} />
        <Outlet />
      </Box>
    </Box>
  );
}
