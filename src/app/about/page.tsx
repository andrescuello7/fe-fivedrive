import Navbar from "../components/navbar/navbar";
import AboutUs from "./components/about";

export const metadata = {
  title: "AboutUs",
};

export default function DashboardPage() {
  return (
    <>
      <Navbar />
      <AboutUs />
    </>
  );
}
