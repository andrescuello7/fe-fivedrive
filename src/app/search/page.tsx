import Navbar from "../components/navbar/navbar";
import Dashboard from "./components/search";

export const metadata = {
  title: "Dashboard",
};

export default function DashboardPage() {
  return (
    <>
      <Navbar />
      <Dashboard />
    </>
  );
}
