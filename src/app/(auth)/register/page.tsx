import Navbar from "@/app/components/navbar/navbar";
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
