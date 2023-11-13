const NavigationBar = () => {
  return (
    <div className="navigationContainer">
      <nav className="navigation">
        <NavItem text="home" href="/" />
        <NavItem text="about" href="/about" />
        <NavItem text="contact" href="/contact" />
      </nav>
    </div>
  );
};
interface NavItemProps {
  href: string;
  text: string;
}

const NavItem = ({ text, href }: NavItemProps) => {
  return (
    <>
      <a href={href} target="_blank">
        {text}
      </a>
    </>
  );
};

export default NavigationBar;
