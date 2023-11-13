import Footer from "@/components/footer";
import NavigationBar from "../components/Navigation";
const AboutPage = () => {
  return (
    <>
      <NavigationBar />
      <h1>About Me</h1>
      <p>This is my about page. Here are some details about me:</p>
      <ListItem text="I am learning to code 💻" />
      <ListItem text="I have a pet piranha 🐡" />
      <ListItem text="I like hiking active volcanoes 🥾" />
      <Avatar />
      <Footer />
    </>
  );
};
interface ListItemProps {
  text: string;
}
import Image from "next/image";

export function Avatar() {
  return <Image src="/me.png" alt="me" width="164" height="164" />;
}
const ListItem = ({ text }: ListItemProps) => {
  return (
    <>
      <li>{text}</li>
    </>
  );
};
export default AboutPage;
