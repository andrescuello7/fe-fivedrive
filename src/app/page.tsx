import Navbar from "./components/navbar/navbar";
import Dashboard from "./components/dashboard/components/dashboard";

export default async function Home() {
  return (
    <>
      <Navbar />
      <Dashboard />
    </>
  );
}
