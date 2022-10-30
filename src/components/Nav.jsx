import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { Box, IconButton, useMediaQuery, Icon, Spacer } from "@chakra-ui/react";
import { useAuth } from "/src/AuthProvider";
import { FaAlignJustify } from "react-icons/fa";

const Nav = ({ ref, onOpen }) => {
  const { user, logOut } = useAuth();
  const [isLargerThan48] = useMediaQuery("(min-width: 48em)");

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent={{ md: "flex-end", lg: "flex-end" }}
        alignItems="center"
        w="full"
        flex="none"
        order="1"
        flexGrow={0}
        mb={0.5}
        h="10vh"
        p="6"
        top="0"
      >
        <Spacer />
        {isLargerThan48 ? (
          <Breadcrumb
            spacing="8px"
            fontWeight="medium"
            fontSize="md"
            separator={<ChevronRightIcon color="gray.500" />}
          >
            <BreadcrumbItem>
              <BreadcrumbLink as={Link} to="/">
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink as={Link} to="test">
                ErrorBoundary
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink as={Link} to="users">
                Users
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              {user ? (
                <BreadcrumbLink as={Link} onClick={handleSignOut}>
                  Sign Out
                </BreadcrumbLink>
              ) : (
                <BreadcrumbLink as={Link} to="/signin">
                  Sign In
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
          </Breadcrumb>
        ) : (
          <IconButton ref={ref} onClick={onOpen}>
            <Icon as={FaAlignJustify} />
          </IconButton>
        )}
      </Box>
    </>
  );
};

export default Nav;
