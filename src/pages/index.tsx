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

interface ButtonsProps {
  text: string;
  disabled: boolean;
}
// without props and interface

const MySuperEfficientButton = (props: ButtonsProps) => {
  return (
    <>
      <button disabled={props.disabled}>{props.text}</button>
    </>
  );
};

// with props and interface
const MySuperEfficientButton2 = ({ text, disabled }: ButtonsProps) => {
  return (
    <>
      <button disabled={disabled}>{text}</button>
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
      {/* using props and interface */}
      <MySuperEfficientButton2 text="It's undisabled" disabled={false} />
      <MySuperEfficientButton2 text="It's disabled" disabled={true} />
      <MySuperEfficientButton2 text="Hi" disabled={false} />
      {/* without using props */}
      <ButtonOne />
      <ButtonTwo />
    </>
  );
};
export default App;
