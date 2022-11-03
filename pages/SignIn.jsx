import { Box, Flex, Image, Text, Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { GoogleButton } from "react-google-button";
import { useAuth } from "/src/AuthProvider";
import { useEffect } from "react";
import SEO from "../src/components/SEO";

function SignIn() {
  const navigate = useNavigate();
  const { signInWithGoogle, user } = useAuth();
  const handleSignInWithGoogle = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      console.log(error);
    }
  };

  // const handleSignInWithGoogle = () => {
  //   signInWithGoogle()
  //     .then((loading) => {
  //       return <h1>Loading</h1>;
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  useEffect(() => {
    if (user !== null) {
      navigate("/users");
    }
  }, [user]);

  return (
    <div>
      <SEO
        title="Sign In to Workers Lounge"
        description="Sign In to meet your fellow workers"
        name="Workers' Lounge"
        type="website"
        url="https://random-users-73bff.web.app/signin"
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
          align="center"
        >
          <Heading as="h2" size="3xl" fontWeight="800" mb="4">
            Sign in to Continue
          </Heading>

          <Box
            size={{ sm: "md", md: "lg" }}
            maxW="200px"
            h={50}
            mb={{ sm: 10, md: 0 }}
          >
            <GoogleButton onClick={handleSignInWithGoogle} />
          </Box>
        </Flex>
        <Flex w={{ sm: "full", md: "40%" }} align="center" justify="center">
          <Image src="/undraw_login_re_4vu2.svg" alt="Sign in page Image" />
        </Flex>
      </Box>
    </div>
  );
}

export default SignIn;
