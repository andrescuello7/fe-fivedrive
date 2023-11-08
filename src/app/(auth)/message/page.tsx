import Navbar from "@/components/Navbar/navbar";
import Message from "./components/Message";

export const metadata = {
  title: "Message",
};

export default function LoginPage() {
  return (
    <>
      <Navbar />
      <Message />
    </>
  );
}
