import { Route, Routes } from "react-router";
import HomePage from "./pages/home";
import LoginPage from "./pages/login";
import OverviewPage from "./pages/overview";

export default function App() {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="overview" element={<OverviewPage />} />
      </Routes>
    </>
  );
}
