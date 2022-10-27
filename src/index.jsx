import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter as Router } from 'react-router-dom'
import UserProvider from "./UserProvider"
import ErrorBoundary from "/src/components/ErrorBoundary"
import ErrorPage from "/pages/ErrorPage"


ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
    
   <UserProvider>
    <ChakraProvider>
      
      <Router>
        <ErrorBoundary
          FallbackComponent={ErrorPage}
         
          >
		<App />
      </ErrorBoundary>
      </Router>
      </ChakraProvider>
   </UserProvider>
	</React.StrictMode>
)