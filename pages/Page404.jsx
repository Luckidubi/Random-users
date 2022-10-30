import { Box, Button, Flex } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

export default function Page404() {
  const navigate = useNavigate();
  return (
    <div>
      <Box
        display="flex"
        flexDirection="column"
        maxW="1440px"
        minH="90vh"
        bgImage="url('/404.svg')"
        bgPosition="center"
        bgRepeat="no-repeat"
        alignItems="center"
        justifyContent="center"
        bgSize={{ base: 960, sm: 1000 }}
        w={{ base: 360, sm: 400, md: 780, lg: 1200, xl: 1400 }}
        position="relative"
      >
        <Flex w="100%" position="absolute" top={0}>
          <Button
            onClick={() => navigate(-1)}
            leftIcon={<ArrowBackIcon />}
            variant="outline"
            alignSelf="flex-start"
            fontSize={{ base: 12, sm: 14 }}
            mt={4}
          >
            Back
          </Button>
        </Flex>
        <Flex>
          <Box
            textAlign="center"
            colorScheme="#FFE694"
            borderRadius="10px"
            p={{ base: 5, md: 10 }}
            fontSize={{ sm: "2em", md: "4em" }}
            fontWeight="bold"
          >
            Page Not Found
            <i></i>
          </Box>
        </Flex>
      </Box>
    </div>
  );
}
