const Card = ({ data, name, age, content, fullName, allAge }) => {
  // let { fullName, allAge } = data;

  // console.log(fullName, allAge);

  return (
    <div className="cards">
      <div>{fullName}</div>
      <h1 style={{ color: "black" }}>{allAge} </h1>
      {content}
      {/* <ul>
        {data.map((item, i) => {
          <li key={i}>{item}</li>;
          console.log(item);
        })}
      </ul> */}
    </div>
  );
};

export default Card;
