import Navbar from "@/components/Navbar/navbar";
import Profile from "./components/Profile";

export const metadata = {
  title: "Profile",
};

export default function ProfilePage() {
  return (
    <>
      <Navbar />
      <Profile />
    </>
  );
}
