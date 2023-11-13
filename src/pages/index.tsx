const Home = () => {
  return (
    <div>
      <NavigationBar />
      <div>
        <Greeting />
      </div>
    </div>
  );
};
const NavigationBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="https://www.mindmingle.com">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};
const Greeting = () => {
  return (
    <>
      <h1> Hello from Greeter!</h1>
    </>
  );
};
export default Home;
