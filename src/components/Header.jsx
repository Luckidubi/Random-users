import { Box } from "@chakra-ui/react";

import Search from "./Search";
import { useAuth } from "/src/AuthProvider";

export default function Header() {
  const { user } = useAuth();
  const name = user?.displayName?.split(" ")[0];
  return (
    <>
      <Box
        display="flex"
        w={{ sm: "320px", md: "738px", lg: "960px" }}
        h="128px"
        alignItems="center"
        flexDirection="column"
        gap="24px"
        alignSelf="stretch"
        flex="none"
        order={0}
      >
        <Box
          
          h="40px"
          fontFamily="Merriweather"
          fontStyle="normal"
          fontWeight="900"
          fontSize="2em"
          lineHeight="40px"
          color="#151B32"
          flex="none"
          order={0}
          flexGrow={0}
        >
          {user ? `Hi, ${name}` : "Users"}
        </Box>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          maxW="1013px"
          flex="none"
          order="1"
          flexGrow={0}
        >
          <Search />
        </Box>
      </Box>
    </>
  );
}
