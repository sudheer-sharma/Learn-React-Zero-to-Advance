import { useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Buttons from "./Navbar";
import Card from "./conponenets/Card";
import ButtonAll from "./conponenets/ButtonAll";
import Layout from "./conponenets/Layout";

function Component() {
  return (
    <>
      <h1>Return H1 Handing</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et laudantium
        nisi molestias nesciunt accusantium quis nostrum fugiat, numquam porro
        dolorum non, deserunt assumenda! Mollitia reiciendis perspiciatis
        laudantium laboriosam necessitatibus corporis.
      </p>
      <Component1 />
    </>
  );
}

function Component1() {
  return (
    <div>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLat8bZvhXD3ChSXyzGsFVh6qgplm1KhYPKA&s"
        alt=""
      />
    </div>
  );
}

function App() {
  const [count, func] = useState(1);

  function increament() {
    func(count + 1);
  }

  let obj = {
    fullName: "kailash",
    allAge: 22,
  };

  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  function clickBtn() {
    console.log("Kailash Shiwagma");
  }

  return (
    <>
      {/* <button className="counter" onClick={increament}>
        click {count}
      </button>
      {count} */}

      {/* <Navbar data={count} /> */}

      {/* <Card
        name="Kailash Shiwagma"
        age={25}
        content={
          <>
            <h1>First Card</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum
              minima, beatae fugiat nobis quaerat ducimus consequuntur id
              excepturi. Soluta nisi deserunt, laudantium fugiat necessitatibus
              totam unde aut. Fuga, delectus ea.
            </p>
          </>
        }
      /> */}

      <Card {...obj} />
      <Card name="Emargency Yadav" />

      {/* <Card data={[arr]} /> */}

      <ButtonAll title="Click me" click={clickBtn} />
      <ButtonAll>Click me</ButtonAll>

      <Layout title="hello">
        <h1>Hello jee</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quae
          est ipsa reiciendis eos necessitatibus repellat. Aperiam tempora
          molestiae eius aliquam nobis atque perspiciatis nulla, exercitationem
          earum hic rerum facilis.
        </p>
      </Layout>
    </>
  );
}

export default App;
