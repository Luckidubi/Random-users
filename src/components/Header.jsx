import {Box} from "@chakra-ui/react"

import Search from "./Search"

export default function Header(){

  return(
    <>
      <Box display="flex" w={{sm:"320px", md:"738px", lg:"960px"}} h="128px" alignItems="flex-start" flexDirection="column" gap="24px" alignSelf="stretch" flex="none" order={0}>
        <Box w="91px" h="40px" fontFamily="Merriweather" fontStyle="normal" fontWeight="900" fontSize="2em" lineHeight="40px" color="#151B32" flex="none" order={0} flexGrow={0}>Users</Box>
          <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center" maxW="1013px" flex="none" order="1" flexGrow={0}>
            <Search/>
          
          </Box>
        </Box>
    </>
  )
}