import { Flex } from "@chakra-ui/react";
import Header from "/src/components/Header";
import Users from "/src/components/Users";
import SEO from "../src/components/SEO";
export default function UsersPage() {
  return (
    <>
      <SEO
        title="Connect with a worker"
        description="Search and connect with fellow workers"
        name="Workers' Lounge"
        type="website"
        imgUrl="/workers.jpg"
      />
      <Flex direction="column">
        <Header />

        <Users />
      </Flex>
    </>
  );
}
