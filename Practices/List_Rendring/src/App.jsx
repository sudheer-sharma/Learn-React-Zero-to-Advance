import "./App.css";
import MideaCard from "./componenets/MideaCard";
import UserCards from "./componenets/UserCards";

function App() {
  // 1
  // let arr = ["Kailsh", "Shiwagma", "Neelesh", "Pradumen"];

  // 2
  let arrObj = [
    { id: 1, name: "kailsh", age: 25 },
    { id: 2, name: "Shiwagma", age: 20 },
    { id: 3, name: "Kumar", age: 15 },
    { id: 4, name: "Mavali", age: 22 },
  ];

  // 3
  // let arr = [
  //   ["Kailsh", "Shiwagma", "Neelesh", "Pradumen"],
  //   ["aaaaaaa", "vvvvv", "cccccc", "wwwwwwwww"],
  // ];
  return (
    <>
      {/* <h1>Kailash Shiwagma</h1> */}
      {/* 1 */}
      {/* {arr.map((items, index) => (
        <p key={index}>{items}</p>
      ))} */}
      {/* //

      // */}

      {/* 2 */}
      {/* {arrObj.map((item, index) => {
        return (
          <div key={index} className=" flex gap-5">
            <p>id : {item.id}</p>
            <p>Name : {item.name}</p>
            <p>Age : {item.age}</p>
          </div>
        );
      })} */}
      {/* {arrObj.map((userCard, ind) => {
        return userCard.age > 18 && <UserCards userDitails={userCard} />;
      })} */}
      {/* //// */}
      {/* 3 */}
      {/* {arr.map((item, index) => (
        <div key={index}>
          {item.map((items, index) => {
            return <p key={index}>{items}</p>;
          })}
        </div>
      ))} */}

      <MideaCard />
    </>
  );
}

export default App;
