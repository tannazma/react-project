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
    </>
  );
};
interface ListItemProps {
  text: string;
}
const ListItem = ({ text }: ListItemProps) => {
  return (
    <>
      <li>{text}</li>
    </>
  );
};
export default AboutPage;
