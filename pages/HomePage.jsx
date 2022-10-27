import { Box, Flex, Spacer } from "@chakra-ui/react"
import Header from "/src/components/Header"
import Users from "/src/components/Users"




export default function HomePage() {
  

  return (

    <>
      <Flex direction="column">
        <Header />
     

        <Users />
      </Flex>
  

   
    </>


  )
}