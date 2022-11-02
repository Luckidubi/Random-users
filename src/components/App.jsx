import UsersPage from "/pages/UsersPage";
import UserDetails from "/pages/UserDetails";
import Page404 from "/pages/Page404";
import Layout from "/pages/Layout";
import Home from "/pages/Home";
import SignIn from "/pages/SignIn";
import Guard from "/src/components/Guard";
import AuthProvider from "/src/AuthProvider";
import TestErrorBoundary from "/pages/TestErrorBoundary";
import { Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

export default function App() {
  return (
    <main>
      <AuthProvider>
        <HelmetProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route
              path="/users"
              element={
                <Guard>
                  <UsersPage />
                </Guard>
              }
            />
            <Route
              path=":username"
              element={
                <Guard>
                  <UserDetails />
                </Guard>
              }
            />

            <Route path="/test" element={<TestErrorBoundary />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="*" element={<Page404 />} />
          </Route>
        </Routes>
        </HelmetProvider>
      </AuthProvider>
    </main>
  );
}
