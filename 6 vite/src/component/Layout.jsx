import About from "./About";
import Hero from "./Hero";

const Layout = ({ data }) => {
  return (
    <div className="p-[3rem] bg-gray-400">
      <Hero data={data} />
      <About data={data} />
    </div>
  );
};

export default Layout;
