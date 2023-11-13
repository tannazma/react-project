const NavigationBar = () => {
  return (
    <nav className="navigation">
        <NavItem text="home" href="/" />
        <NavItem text="about" href="/about" />
        <NavItem text="contact" href="/contact" />
    </nav>
  );
};
interface NavItemProps {
  href: string;
  text: string;
}

const NavItem = ({ text, href }: NavItemProps) => {
  return (
    <>
        <a href={href} target="_blank">{text}</a>
    </>
  );
};

export default NavigationBar;
