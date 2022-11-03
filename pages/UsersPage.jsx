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
        url="/users"
        imgUrl="https://res.cloudinary.com/luckidubi/image/upload/c_scale,h_630,w_1200/v1667424831/e4jcbty8zewhiogjpmbl.png"
      />
      <Flex direction="column">
        <Header />

        <Users />
      </Flex>
    </>
  );
}
