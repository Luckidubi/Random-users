import { useAuth } from "/src/AuthProvider";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Flex,
  Button,
} from "@chakra-ui/react";

import { useNavigate, Link } from "react-router-dom";

const DrawerComponent = ({ isOpen, onClose, btnRef }) => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      finalFocusRef={btnRef}
      zIndex="popover"
    >
      <DrawerOverlay />

      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>
          {user ? "Hi, " + user?.displayName : "Hi, there"}
        </DrawerHeader>

        <DrawerBody>
          <Flex gap={6} flexDirection="column">
            <Link onClick={onClose} to="/" fontWeight="bold">
              Home
            </Link>
            <Link onClick={onClose} to="/users">
              Users
            </Link>
            <Link onClick={onClose} to="test">
              Error Boundary
            </Link>
            {user ? (
              <Link onClick={handleSignOut}>Sign Out</Link>
            ) : (
              <Button as={Link} onClick={onClose} to="signin">
                Sign In
              </Button>
            )}
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerComponent;
