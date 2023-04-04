import Navbar from "../components/navbar/navbar";
import Dashboard from "./components/dashboard";

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
