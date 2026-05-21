import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "./Loader";

const SingleProduct = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({});

  const [loaders, setLoaders] = useState(false);

  const fetchData = async () => {
    setLoaders(true);

    const responce = await axios(`https://fakestoreapi.com/products/${id}`);

    setProduct(responce.data);

    setLoaders(false);
  };

  console.log(product);

  useEffect(() => {
    fetchData();
  }, []);

  if (loaders) return <Loader className="p-20" />;

  return (
    <div className="group  rounded-lg flex flex-col items-center justify-center py-10">
      <img
        className="aspect-square object-contain p-4 group-hover:scale-90 transition-all duration-300 "
        src={product.image}
        alt=""
      />

      <div className="p-5 flex flex-col items-center max-w-240">
        <h1 className="text-3xl  group-hover:text-blue-300">{product.title}</h1>

        <div className="flex gap-3 my-3 mt-7">
          <p className="bg-green-700 w-fit px-2 py-1 rounded-lg flex items-center text-xs">
            ⭐{product?.rating?.rate}
          </p>
          <p className="">{product?.rating?.count}</p>
        </div>

        {/* Price */}
        <p className="text-md font-medium text-gray-700 mt-2 mb-4 text-2xl">
          {product.price} Rs
        </p>
        <p className="text-md font-medium text-gray-600">
          {product.description} Rs
        </p>
      </div>
    </div>
  );
};

export default SingleProduct;
