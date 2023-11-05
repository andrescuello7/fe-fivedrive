import Navbar from "@/components/Navbar/navbar";
import Login from "./components/Login";

export const metadata = {
  title: "Login",
};

export default function LoginPage() {
  return (
    <>
      <Navbar />
      <Login />
    </>
  );
}
