import Navbar from "../Navbar/navbar";
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
