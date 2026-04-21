import jsonDatas from "./jsonData.json";

const MideaCard = () => {
  return (
    <div className=" w-full bg-black">
      {/* <div className="flex flex-col gap-10 p-10 ">
        {jsonDatas.map((items) => (
          <div className="flex items-center gap-[8rem]">
            <div>
              <img src={items.image} alt="" />
            </div>
            <div>
              <h1 className="text-md mb-1">{items.title}</h1>
              <div className="flex gap-2 text-[12px] text-gray-700">
                <span>⭐{items.rating}</span>
                <span>| {items.reviews}</span>
              </div>

              <div className="flex flex-col ml-5 text-[12px] mt-1">
                {items.details.map((ditails) => (
                  <li>{ditails}</li>
                ))}
              </div>

              <div className="text-[10px] mt-2 text-green-800 font-bold">
                <p>{items.offers.exchangeOffer}</p>
                <p className="text-green-600 mt-1">{items.offers.bankOffer}</p>
              </div>
            </div>
          </div>
        ))}
      </div> */}

      <div className="flex flex-col gap-5 p-6">
        {jsonDatas.map((items, index) => {
          return (
            <div
              key={index}
              className="flex bg-[#282828] p-4 gap-4 rounded-2xl"
            >
              {/* Image */}
              <div className="w-1/4 bg-fuchsia-300 flex items-center justify-center">
                <img src={items.image} alt="" />
              </div>
              {/* ditail */}
              <div className="flex-1 flex flex-col bg-green-300 justify-center">
                <h1>{items.title}</h1>
                <span>⭐ {items.rating}</span>
                <span> | {items.reviews}</span>
                {items.details.map((detail) => (
                  <li className="ml-4">{detail}</li>
                ))}
              </div>
              {/* pricing */}
              <div className="bg-blue-300">
                <p>{items.price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MideaCard;
