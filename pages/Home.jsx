import { Box, Button, Flex, Image, Text, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import SEO from "../src/components/SEO";

function Home() {
  return (
    <div>
      <SEO
        title="Welcome to Workers Lounge"
        description="A home for workers, a place where workers of the world get together to connect."
        name="Workers' Lounge"
        type="website"
        imgUrl="https://res.cloudinary.com/luckidubi/image/upload/c_scale,h_630,w_1200/v1667424831/e4jcbty8zewhiogjpmbl.png"
      />
      <Box
        display="flex"
        flexDirection={{ base: "column", sm: "column", md: "row" }}
        maxW="1440px"
        minH="90vh"
        alignItems="center"
        justifyContent="space-between"
        w="full"
        px={{ sm: 6, md: 16 }}
        py="16"
      >
        <Flex
          mr={{ sm: 0, md: 6 }}
          p={5}
          textAlign="center"
          direction="column"
          gap={3}
          w={{ sm: "full", md: "60%" }}
        >
          <Heading
            as="h2"
            // size={{ sm: "4xl", md: "5xl" , lg:'5xl'}}
            size="3xl"
            fontWeight="800"
            mb="4"
          >
            A Home for Workers
          </Heading>
          <Text mb="6" fontSize={{ md: "xl" }} opacity={0.7}>
            Welcome to Workers Lounge, where workers of the world get together
          </Text>
          <Box>
            <Button
              colorScheme="blue"
              variant="solid"
              size={{ sm: "md", md: "lg" }}
              w="200px"
              h={50}
              mb={{ sm: 10, md: 0 }}
              as={Link}
              to="/users"
            >
              Get Started
            </Button>
          </Box>
        </Flex>
        <Flex w={{ sm: "full", md: "40%" }} align="center" justify="center">
          <Image
            src="/undraw_group_selfie_re_h8gb.svg"
            alt="welcome page Image, group selfie"
          />
        </Flex>
      </Box>
    </div>
  );
}

export default Home;
