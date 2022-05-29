import React from "react";
import { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading/Loading";
import ConfirmModal from "./ConfirmModal";

const ManageProduct = () => {
  const [deleteItem, setDeleteItem] = useState({});
  const {
    data: products,
    refetch,
    isLoading,
  } = useQuery(["adminProducts"], () =>
    fetch(`http://localhost:5000/tools`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      

      <div className="mx-3 my-5 gap-5 grid grid-cols-1 lg:grid-cols-3">
        {products &&
          products.map((product) => (
            <div
              key={product._id}
              className="card w-full bg-base-100 shadow-xl"
            >
              <figure className="h-48 w-48 mx-auto">
                <img
                  src={product?.img}
                  alt={product?.name}
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center p-2">
                <h2>
                  <b>Name:</b> {product.name}
                </h2>
                <p>
                  <b>Price to Pay:</b> ${product.price}
                </p>
                <p>
                  <b>Quantity producted:</b> {product.quantity}
                </p>
                <p>
                  <b>Minimum Order:</b> {product.minorder}
                </p>
                <p>
                  <b>Description:</b> {product.description}
                </p>
              </div>
              <div className="flex content-center justify-center mb-3">
                <label
                  onClick={() =>
                    setDeleteItem({
                      id: product._id,
                      url: "http://localhost:5000/tools/",
                      name: "delete",
                    })
                  }
                  htmlFor="confirm-modal"
                  className="btn btn-wide mt-3"
                >
                  DELETE
                </label>
              </div>
            </div>
          ))}
      </div>
      <ConfirmModal
        refetch={refetch}
        data={deleteItem}
      />
    </div>
  );
};

export default ManageProduct;
