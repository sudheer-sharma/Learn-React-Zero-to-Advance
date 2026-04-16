const UserCards = ({ userDitails }) => {
  return (
    <div className="flex gap-5 bg-amber-200">
      {/* <h1>id : {userDitails.id}</h1>
      <h1>Name : {userDitails.name}</h1>
      <h1>Age : {userDitails.age}</h1> */}
      {/* //
      //
      // */}
      {/* {userDitails.age > 18 ? (
        <div className="flex gap-5 bg-amber-200">
          <h1>id : {userDitails.id}</h1>
          <h1>Name : {userDitails.name}</h1>
          <h1>Name : {userDitails.age}</h1>
        </div>
      ) : (
        <h1>Noooooooooooo</h1>
      )} */}

      <h1>id : {userDitails.id}</h1>
      <h1>Name : {userDitails.name}</h1>
      <h1>Name : {userDitails.age}</h1>
    </div>
  );
};

export default UserCards;
