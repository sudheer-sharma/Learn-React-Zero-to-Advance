import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./Loader";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);

  const [loaders, setLoaders] = useState(false);

  const fetchData = async () => {
    setLoaders(true);

    const responce = await axios("https://fakestoreapi.com/products");

    setProducts(responce.data);

    setLoaders(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loaders) return <Loader className="p-20" />;

  return (
    <div className="productGrids  grid grid-cols-5 gap-5 p-5 text-white  ">
      {products.map((items) => {
        return <ProductCard key={items.id} items={items} />;
      })}
    </div>
  );
};

const ProductCard = ({ items }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/products/${items.id}`)}
      className="group bg-gray-700 rounded-lg"
    >
      <img
        className="aspect-square object-contain p-4 group-hover:scale-90 transition-all duration-300 "
        src={items.image}
        alt=""
      />

      <div className="p-5">
        <h1 className="text-xl line-clamp-2 group-hover:text-blue-300">
          {items.title}
        </h1>

        <div className="flex gap-3 my-3">
          <p className="bg-green-700 w-fit px-2 py-1 rounded-lg flex items-center text-xs">
            ⭐{items.rating.rate}
          </p>
          <p className="">{items.rating.count}</p>
        </div>

        {/* Price */}
        <p className="text-md font-medium text-white/70">{items.price} Rs</p>
      </div>
    </div>
  );
};

export default Products;
