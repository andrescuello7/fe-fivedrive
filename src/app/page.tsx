import Navbar from "./components/navbar/navbar";
import Dashboard from "./dashboard/page";

export default async function Home() {
  return (
    <>
      <Navbar />
      <Dashboard />
    </>
  );
}
