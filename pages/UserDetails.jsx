import { useUsers } from "/src/UserProvider"
import { useParams, useNavigate } from 'react-router-dom'
import { Box, Image, Text, Button, Flex } from "@chakra-ui/react"
import { ArrowBackIcon } from '@chakra-ui/icons'

export default function UserDetails() {
  const { data, loading, error } = useUsers()
  const { username } = useParams()


  let navigate = useNavigate()
  if (loading) return <h1>Loading</h1>

  if (error) return <h1>Error</h1>


  let getUsername = data?.results.find(user => user.login.username === username)
  console.log(getUsername)

  let getDob = new Date(getUsername?.dob.date)
  return (
    <div>
      <Flex >
        <Box m={2} my={6}>
          <Button onClick={() => navigate(-1)} variant="outline" leftIcon={<ArrowBackIcon boxSize={4} />} w="6em">
            Back
          </Button>
        </Box>
      </Flex>
      <Box display="flex" flexDirection="column" alignItems="center" gap={{ base: 6, md: 20 }} w={{ base: 360, sm: 400, md: 780, lg: 960 }} h="100%" borderRadius="10px" >
        <Box h={{ md: 66 }} fontStyle="normal" fontWeight="800" fontSize={{ sm: 28, md: 48 }} textAlign="center" color="#6A24FF" order="0">{getUsername?.name.title}{" "}{getUsername?.name.first}{" "}{getUsername?.name.last}</Box>
        <Box order="1" mb={{ sm: 4 }}>
          <Image
            borderRadius='full'
            boxSize={{ base: 120, sm: 200, md: '380px' }}
            src={getUsername?.picture.medium}
            alt='User Picture'

          />

        </Box>
        <Box display="flex" flexDirection="column" alignItems="flex-start" gap={6} w={{ md: 534 }} h={{ md: 344 }} order="2" >

          <Box display="flex" flexDirection={{ base: "column", md: "row" }} alignItems="center" gap={{ base: 1, md: 4 }} w={{ md: 534 }} flex="none" order="0" alignSelf="center">


            <Box w={{ md: 193 }} fontStyle="normal" fontWeight="600" fontSize="24px" display="flex" alignItems="center" textTransform="uppercase" color="#A3A3A3" flex="none" order="0">Age</Box>

            <Box w={{ md: 333 }} fontStyle="normal" fontWeight="500" fontSize={{ sm: 24, md: 32 }} color="#3A3D5B" order="1" flex="none" >{getUsername?.dob.age}</Box>

          </Box>


          <Box display="flex" flexDirection={{ base: "column", md: "row" }} alignItems="center" gap={{ base: 1, md: 4 }} w={{ md: 534 }} flex="none" order="3" alignSelf="center">
            <Box w={{ md: 193 }} fontStyle="normal" fontWeight="600" fontSize="24px" display="flex" alignItems="center" textTransform="uppercase" color="#A3A3A3" flex="none" order="0">username</Box>

            <Box w={{ md: 333 }} fontStyle="normal" fontWeight="500" fontSize={{ sm: 24, md: 32 }} color="#3A3D5B" order="1" flex="none"  >{getUsername?.login.username}</Box>
          </Box>


          <Box display="flex" flexDirection={{ base: "column", md: "row" }} alignItems="center" gap={{ base: 1, md: 4 }} w={{ md: 534 }} flex="none" order="1" alignSelf="center">
            <Box w={{ md: 193 }} fontStyle="normal" fontWeight="600" fontSize="24px" display="flex" alignItems="center" textTransform="uppercase" color="#A3A3A3" flex="none" order="0">Gender</Box>

            <Box w={{ md: 333 }} fontStyle="normal" fontWeight="500" fontSize={{ sm: 24, md: 32 }} color="#3A3D5B" order="1" flex="none"  >{getUsername?.gender}</Box>

          </Box>

          <Box display="flex" flexDirection={{ base: "column", md: "row" }} alignItems="center" gap={{ base: 1, md: 4 }} w={{ md: 534 }} flex="none" order="2" alignSelf="center">
            <Box w={{ md: 193 }} fontStyle="normal" fontWeight="600" fontSize="24px" display="flex" alignItems="center" textTransform="uppercase" color="#A3A3A3" flex="none" order="0">Address</Box>

            <Box w={{ md: 333 }} fontStyle="normal" fontWeight="500" fontSize={{ sm: 24, md: 32 }} color="#3A3D5B" order="1" flex="none" >{getUsername?.location.street.number}{", "}{getUsername?.location.street.name}</Box>

          </Box>

          <Box display="flex" flexDirection={{ base: "column", md: "row" }} alignItems="center" gap={{ base: 1, md: 4 }} w={{ md: 534 }} flex="none" order="3" alignSelf="center">
            <Box w={{ md: 193 }} fontStyle="normal" fontWeight="600" fontSize="24px" display="flex" alignItems="center" textTransform="uppercase" color="#A3A3A3" flex="none" order="0">City</Box>

            <Box w={{ md: 333 }} fontStyle="normal" fontWeight="500" fontSize={{ sm: 24, md: 32 }} color="#3A3D5B" order="1" flex="none"  >{getUsername?.location.city}</Box>

          </Box>

          <Box display="flex" flexDirection={{ base: "column", md: "row" }} alignItems="center" gap={{ base: 1, md: 4 }} w={{ md: 534 }} flex="none" order="4" alignSelf="center">
            <Box w={{ md: 193 }} fontStyle="normal" fontWeight="600" fontSize="24px" display="flex" alignItems="center" textTransform="uppercase" color="#A3A3A3" flex="none" order="0">Timezone</Box>

            <Box w={{ md: 333 }} fontStyle="normal" fontWeight="500" fontSize={{ sm: 24, md: 32 }} color="#3A3D5B" order="1" flex="none"  >{getUsername?.location.timezone.offset}{" "}{getUsername?.location.timezone.description}</Box>

          </Box>


          <Box display="flex" flexDirection={{ base: "column", md: "row" }} alignItems="center" gap={{ base: 1, md: 4 }} w={{ md: 534 }} flex="none" order="5" alignSelf="center">
            <Box w={{ md: 193 }} fontStyle="normal" fontWeight="600" fontSize="24px" display="flex" alignItems="center" textTransform="uppercase" color="#A3A3A3" flex="none" order="0">dob</Box>

            <Box w={{ md: 333 }} fontStyle="normal" fontWeight="500" fontSize={{ sm: 24, md: 32 }} color="#3A3D5B" order="1" flex="none">{getDob.toDateString()}</Box>

          </Box>






        </Box>



      </Box>

    </div>
  )
}