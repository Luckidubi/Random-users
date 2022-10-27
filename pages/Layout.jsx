import { Box } from "@chakra-ui/react"
import { Outlet, Link } from 'react-router-dom';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  
} from '@chakra-ui/react'
import {ChevronRightIcon} from '@chakra-ui/icons'
export default function Layout() {


  return (

    <Box display="flex" flexDirection="column" h="100%" maxW="1440px" p="10px" alignItems="center" gap="70px" bg="#FFFFFF" mb="10em">
      <Box className="container" maxW="1200px" h="auto">
         <Box display="flex" flexDirection="row" justifyContent="flex-end" alignItems="center" maxW="1013px" flex="none" order="1" flexGrow={0} mb={.5}>
             <Breadcrumb spacing='8px' fontWeight='medium' fontSize='md' separator={<ChevronRightIcon color='gray.500' />}>
  <BreadcrumbItem>
    <BreadcrumbLink as={Link} to="/">Home</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem>
    <BreadcrumbLink as={Link} to="test">Test ErrorBoundary</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem isCurrentPage>
    <BreadcrumbLink as={Link} to="/">Users</BreadcrumbLink>
  </BreadcrumbItem>
</Breadcrumb>
       
          
          </Box>
       

        <Outlet/>

      </Box>

    </Box>


  )
}