import { createContext, useState, useEffect, useContext } from "react"
import { useFetch } from "./hooks/useFetch"

const UserContext = createContext()

export const useUsers = () => useContext(UserContext)

export default function UserProvider({ children }) {

  const [page, setPage] = useState(1)

  const { loading, data, error } = useFetch(`https://randomuser.me/api/?page=${page}&results=200&seed=area59`)



  const [searchResult, setSearchResult] = useState([])


  const [showHome, setShowHome] = useState(true)

  const getFullname = () => {
    const fullName = data?.results?.map((item) => ({
      ...item,
      fullname: `${item.name.title} ${item.name.first} ${item.name.last}`
    }));

    return fullName

  }

  const searchUsers = (name) => {
    setSearchResult(getFullname().filter(user => (user.fullname.toLowerCase()).includes(name.toLowerCase()) ? user : null))
  }

  const clearSearch = () => {
    setSearchResult(null)
  }


  return (
    <UserContext.Provider value={{ page, setPage, data, loading, error, searchUsers, searchResult, clearSearch, setShowHome, showHome }}>
      {children}
    </UserContext.Provider>
  )
}