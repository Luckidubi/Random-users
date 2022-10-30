import { Heading, Flex, Button, Box } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ErrorBoundary from "/src/components/ErrorBoundary";
import ErrorPage from "/pages/ErrorPage";

function Disaster() {
  throw new Error("You have been declared wanted for causing a disaster!!!");
}

export default function TestErrorBoundary() {
  const [disaster, setDisaster] = useState(false);
  const [resetButton, setResetButton] = useState(false);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  const handleDisaster = () => {
    setDisaster((d) => !d);
    setResetButton(true);
  };

  const resetFunction = () => {
    setDisaster(false);
  };

  return (
    <>
      <Box
        h="100vh"
        maxW="1120px"
        w={{ base: 360, sm: 400, md: 780, lg: 1200, xl: 1400 }}
      >
        <ErrorBoundary
          FallbackComponent={ErrorPage}
          key={disaster}
          {...{ resetFunction, resetButton }}
        >
          <Flex>
            <Box m={2} my={6}>
              <Button
                onClick={handleClick}
                variant="outline"
                leftIcon={<ArrowBackIcon boxSize={5} />}
                w="6em"
              >
                Back
              </Button>
            </Box>
          </Flex>
          <Flex
            direction="column"
            justify="center"
            gap={6}
            p={5}
            alignItems="center"
            h="100%"
          >
            <Heading as="h4" size="2xl" textAlign="center">
              Don't click the button below
            </Heading>

            <Box display="flex" justifyContent="center">
              <Button
                onClick={handleDisaster}
                variant="outline"
                _hover={{ cursor: "pointer", bg: "red.400" }}
              >
                Danger
              </Button>
            </Box>
          </Flex>
          {disaster && <Disaster />}
        </ErrorBoundary>
      </Box>
    </>
  );
}
