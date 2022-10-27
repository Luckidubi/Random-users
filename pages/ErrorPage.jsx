import { Box, Button, Flex, Alert, AlertIcon, AlertDescription, AlertTitle } from "@chakra-ui/react"
import { ArrowBackIcon } from "@chakra-ui/icons"
import { useNavigate} from 'react-router-dom'
import {useState} from "react"

export default function ErrorPage(props) {
  
    const navigate = useNavigate()

const handleClick = () => {
    navigate('/')
    window.location.reload()
    
  }

  

  return (
    <div>
      <Box
        display="flex"
        
        h="100vh"
        flexDirection="column"
        bgImage="url('/17.svg')"
        bgPosition="center"
        bgRepeat="no-repeat"
        alignItems="center"
        justifyContent="center"
        bgSize={{ base: 960, md: 1778 }}
        bgColor="#"
        gap={8}
        maxW={1560}
        
      >
       
        
        <Flex>
          <Box textAlign="center" alignSelf="center" bg="#4A0202" color="#FFFFFF" opacity="0.7" borderRadius="10px" p={{ base: 5, md: 10 }} fontSize={{ sm: "2em", md: "3em" }} fontWeight="bold" w={{base:400, sm:500, md:860, lg: 960, xl:1200}} h="100%">
          
          <h2>oopsy! A disaster has occured!</h2>
         <details style={{ whiteSpace: 'pre-wrap', fontSize:'.5em' }} >
          
          <i>{props.error.toString()}</i><br></br>
           {props.resetButton && <Button onClick={props.resetFunction} variant="outline" >
              Try Again
            </Button>}
           
          </details>
          
        </Box>
        
          </Flex>

        
    </Box>


    </div>
  )
}