import { Box } from "@chakra-ui/react";
import User from "./User";
import { useUsers } from "/src/UserProvider";
import Pagination from "/src/components/Pagination";

export default function Users() {
  const { data, loading, error, page, setPage, showHome, searchResult } =
    useUsers();

  const PER_PAGE = 9;

  const total = data?.results?.length;

  const skip = page * PER_PAGE - PER_PAGE;

  if (error) {
    throw new Error(error);
  }

  if (loading) return <h1>Loading...</h1>;

  return (
    <>
      <Box
        display={{ sm: "block", md: "flex" }}
        flexDirection="column"
        alignItems="center"
        justifyContent="space-between"
        gap="13px"
        w={{ base: 320, sm: 360, md: 780, lg: 980, xl: 1240 }}
        h="100%"
        flex="none"
        order={1}
        position="relative"
        mb={{ base: 4, sm: 6 }}
      >
        <Box
          display={{ sm: "block", md: "flex" }}
          flexDirection="row"
          alignItems="flex-start"
          gap="16px"
          w={{ base: 320, sm: 360, md: 420, lg: 1020, xl: 1240 }}
          h={{ md: "auto" }}
          flexWrap="wrap"
          mb={{ base: 6, sm: 10, md: 14 }}
        >
          {showHome &&
            data?.results
              .slice(skip, skip + PER_PAGE)
              .map((user) => (
                <User
                  key={user.login.salt}
                  title={user.name.title}
                  first={user.name.first}
                  last={user.name.last}
                  phone={user.phone}
                  email={user.email}
                  imgUrl={user.picture.medium}
                  location={user.location.state}
                  country={user.nat}
                  username={user.login.username}
                />
              ))}

          {!showHome &&
            searchResult.map((user) => (
              <User
                key={user.login.salt}
                title={user.name.title}
                first={user.name.first}
                last={user.name.last}
                phone={user.phone}
                email={user.email}
                imgUrl={user.picture.medium}
                location={user.location.state}
                country={user.nat}
                username={user.login.username}
              />
            ))}
        </Box>

        <Box
          display={{ sm: "block", md: "flex" }}
          position="absolute"
          bottom={{ sm: -50, md: "-10px" }}
          fontSize={{ sm: 18, md: 20 }}
          mt={4}
          w="100%"
        >
          {showHome && (
            <Pagination
              className="pagination-bar"
              currentPage={page}
              totalCount={total}
              pageSize={PER_PAGE}
              onPageChange={(pages) => setPage(pages)}
            />
          )}
        </Box>
      </Box>
    </>
  );
}
