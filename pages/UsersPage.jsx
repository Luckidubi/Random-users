import { Flex } from "@chakra-ui/react";
import Header from "/src/components/Header";
import Users from "/src/components/Users";

export default function UsersPage() {
  return (
    <>
      <Flex direction="column">
        <Header />

        <Users />
      </Flex>
    </>
  );
}
