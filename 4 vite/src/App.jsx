import "./App.css";
import Cards from "./components/Cards";
import NewCard from "./components/NewCard";

function App() {
  // function squre(para1, para2) {
  //   return (
  //     <div className="squere">
  //       <h1>Hello, {para1}</h1>
  //       <h1>Hello, {para2}</h1>
  //     </div>
  //   );
  // }

  // function Squre({ name, age }) {
  //   return (
  //     <div className="squere">
  //       <h1>
  //         Name = {name}, Age = {age}
  //       </h1>
  //     </div>
  //   );
  // }

  return (
    <>
      {/* <h1>Hello, Kailash Shiwagma</h1> */}
      {/* <Squre />
      <Squre /> */}

      {/* {Squre()}
      {Squre()} */}

      {/* {squre("Shiwagma", "Kailash")} */}

      {/* <Squre age={22} name="Kailash" />
      <Squre age={20} name="Shiwagma" /> */}
      {/* 
      <div className="gridms">
        <Cards titel="Kailsh" discriptoin="I'm CEO at Natural Calligraphy" />
        <Cards titel="Shiwagma" />
        <Cards titel="Sudheer" discriptoin="I'm CEO at Natural Calligraphy" />
        <Cards
          titel="Alex Hainer"
          discriptoin="I'm CEO at Natural Calligraphy"
        />
      </div> */}
      <div className="grid grid-cols-4 gap-[2rem] max-[1195px]:grid-cols-3 max-[900px]:grid-cols-2 max-[500px]:grid-cols-1 p-[1rem]">
        <NewCard
          title="Kailash Shiwagma"
          role="Full Stack Developer"
          imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkYiQNT_kY8jvAg3L73pSWfqfBICPz2JHIIg&s"
        />

        <NewCard
          title="Venuswela Singh"
          role="Data Seince"
          imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&s"
        />

        <NewCard
          title="Radveer Kapoor"
          role="Machine Learning"
          imageUrl="https://img.freepik.com/free-photo/front-view-business-woman-suit_23-2148603018.jpg?semt=ais_incoming&w=740&q=80"
        />

        <NewCard
          title="Mithoo marvel"
          role="Ai Ml and DSA"
          imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREnDdhpW04IZqDFrZK3r1lP6nw4coba3up_A&s"
        />
      </div>
    </>
  );
}

export default App;
