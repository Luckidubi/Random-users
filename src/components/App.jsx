
import HomePage from '/pages/HomePage'
import UserDetails from '/pages/UserDetails'
import Page404 from '/pages/Page404'
import Layout from '/pages/Layout'
import TestErrorBoundary from '/pages/TestErrorBoundary'
import { Routes, Route } from 'react-router-dom'


export default function App() {
  return (
    <main>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<HomePage />}/>
          <Route path=":username" element={<UserDetails />} />
          <Route path="*" element={<Page404 />} />
          <Route path="test" element={<TestErrorBoundary/>}/>
        </Route>


      </Routes>

    </main>
  )
}
