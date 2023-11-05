import Navbar from "../components/Navbar/navbar";
import Dashboard from "./dashboard/page";

export default async function Home() {
  return (
    <>
      <Navbar />
      <Dashboard />
    </>
  );
}
