import Navbar from "../../components/Navbar/navbar";
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
