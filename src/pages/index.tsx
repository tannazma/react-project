// const ButtonOne = () => {
//   return (
//     <>
//       <button disabled={false}>First Button</button>
//     </>
//   );
// };
// const ButtonTwo = () => {
//   return (
//     <>
//       <button disabled={false}>Second Button</button>
//     </>
//   );
// };

import Greeting from "@/components/Greeting";
import NavigationBar from "@/components/Navigation";
import Footer from "@/components/footer";
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

const Home = () => {
  return (
    <>
      <NavigationBar />
      <Greeting name="Tannaz" />
      {/* with using props */}
      {/* <MySuperEfficientButton text="It's undisabled" disabled={false} />
      <MySuperEfficientButton text="It's disabled" disabled={true} />
      <MySuperEfficientButton text="Hi" disabled={false} /> */}
      {/* using props and interface */}
      {/* <MySuperEfficientButton2 text="It's undisabled" disabled={false} />
      <MySuperEfficientButton2 text="It's disabled" disabled={true} />
      <MySuperEfficientButton2 text="Hi" disabled={false} /> */}
      {/* without using props */}
      {/* <ButtonOne />
      <ButtonTwo /> */}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, modi
        in et corporis consequatur velit quae sit? Ducimus, quos non, odio
        corporis fugiat minima consequuntur ex, unde laborum temporibus
        delectus?
      </p>
      <Avatar />
      <Footer />
    </>
  );
};
import Image from 'next/image'
 
export function Avatar() {
  return <Image src="/me.png" alt="me" width="164" height="164" />
}
export default Home;
