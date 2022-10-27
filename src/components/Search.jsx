import {Box, Input, InputGroup, InputLeftElement, FormControl} from "@chakra-ui/react"
import { SearchIcon } from '@chakra-ui/icons'
import { useState, useEffect } from "react"
import {useUsers} from "/src/UserProvider"

export default function  Search (){
  const { searchUsers, clearSearch, setShowHome } = useUsers() 
   const [searchValue, setSearchValue] = useState('') 
    
    
   const handleChange = (e) => {  
     setSearchValue(e.target.value) 
      
   } 
    
   useEffect(()=>{ 
     if (searchValue !== '') { 
       setShowHome(false); 
       searchUsers(searchValue); 
  
     } else if (searchValue === '') { 
        clearSearch(); 
       setShowHome(true) 
     }  
   }, [searchValue])
  
  return(
    
    <Box display ="flex" flexDirection="row" alignItems="center" gap="8px" boxSizing="border-box">
            <FormControl>
              <InputGroup h="64px">
    <InputLeftElement
      pointerEvents='none'
      children={<SearchIcon color='gray.300' />}
    />
    <Input
        onChange={handleChange} 
        value={searchValue}
         w={{sm:"20em",md:"25em"}} br="4px" b="1px solid #BFC8E6" type='search' placeholder='Search users' 
      />
  </InputGroup>
            </FormControl>
            </Box>
          
    
  )
}