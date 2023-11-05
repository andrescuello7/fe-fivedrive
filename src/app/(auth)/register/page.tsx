import Navbar from "@/components/Navbar/navbar";
import Register from "./components/Register";

export const metadata = {
  title: "Register",
};

export default function RegisterPage() {
  return (
    <>
      <Navbar />
      <Register />
    </>
  );
}
