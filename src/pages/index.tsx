// const Home = () => {
//   return (
//     <div>
//       <NavigationBar />
//       <div>
//         <Greeting />
//       </div>
//     </div>
//   );
// };
// const NavigationBar = () => {
//   return (
//     <nav>
//       <ul>
//         <li>
//           <a href="https://www.mindmingle.com">Home</a>
//         </li>
//         <li>
//           <a href="/about">About</a>
//         </li>
//         <li>
//           <a href="/contact">Contact</a>
//         </li>
//       </ul>
//     </nav>
//   );
// };
// const Greeting = () => {
//   return (
//     <>
//       <h1> Hello from Greeter!</h1>
//     </>
//   );
// };
// export default Home;
const ButtonOne = () => {
  return (
    <>
      <button disabled={false}>First Button</button>
    </>
  );
};
const ButtonTwo = () => {
  return (
    <>
      <button disabled={false}>Second Button</button>
    </>
  );
};

const MySuperEfficientButton = (props: { text: string; disabled: boolean }) => {
  return (
    <>
      <button disabled={props.disabled}>{props.text}</button>
    </>
  );
};

const App = () => {
  return (
    <>
    {/* with using props */}
      <MySuperEfficientButton text="It's undisabled" disabled={false} />
      <MySuperEfficientButton text="It's disabled" disabled={true} />
      <MySuperEfficientButton text="Hi" disabled={false} />

      {/* without using props */}
      <ButtonOne />
      <ButtonTwo />
    </>
  );
};
export default App;
