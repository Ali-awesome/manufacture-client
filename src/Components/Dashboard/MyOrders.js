import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading/Loading";
import ConfirmModal from "./ConfirmModal";
import Payment from "./Payment";

const stripePromise = loadStripe(
  "pk_test_51L4UAtI03Pk1Kq1HxiIWxLLYlMivEWOmruK01Q08uJLF2mJPQaT8yYhxikxkJVoL2kG9fXBLgygDA9V06DeZEuE500uClKWSom"
);

const MyOrders = () => {
  const [user] = useAuthState(auth);
  const [deleteItem, setDeleteItem] = useState({});
  // const [orders, setOrders] = useState([]);
  const closeRef = useRef();
  const navigate = useNavigate();

  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery(["ordersData", user?.email], () =>
    fetch(`http://localhost:5000/order?email=${user?.email}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  // const handleClick = () => {
  //     openRef.current.click()
  // }
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className=" bg-base-200 py-5">
      {orders && (
        <h2 className="text-3xl font-bold">
          Your Total Order: {orders.length}
        </h2>
      )}
      <div className="mx-3 my-5 gap-5 grid grid-cols-1 lg:grid-cols-3">
        {orders &&
          orders.map((order) => (
            <div key={order._id} className="card w-full bg-base-100 shadow-xl">
              <figure className="h-48 w-48 mx-auto">
                <img
                  src={order.img}
                  alt={order.productName}
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center p-2">
                <h2>
                  <b>Name:</b> {order.productName}
                </h2>
                <p>
                  <b>Price to Pay:</b> ${order.totalPrice}
                </p>
                <p>
                  <b>Quantity Ordered:</b> {order.quantity}
                </p>
                <p>
                  <b>Contact:</b> {order.phone}
                </p>
                <p>
                  <b>Address:</b> {order.address}
                </p>

                <div>
                  {order.totalPrice && !order.paid && (
                    <div className="flex flex-col">
                      <label for="my-modal" class="btn modal-button">
                        Proceed Payment
                      </label>
                      <input
                        type="checkbox"
                        id="my-modal"
                        class="modal-toggle"
                      />
                      <div class="modal">
                        <div class="modal-box">
                          <label
                            ref={closeRef}
                            for="my-modal"
                            class="btn btn-sm btn-circle absolute right-2 top-2"
                          >
                            ✕
                          </label>
                          <h3 class="font-bold text-lg">Provide Information</h3>
                          <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                            <div class="card-body">
                              <Elements stripe={stripePromise}>
                                <Payment
                                  refetch={refetch}
                                  order={order}
                                  closeRef={closeRef}
                                />
                              </Elements>
                            </div>
                          </div>
                        </div>
                      </div>

                      {!order?.paid && (
                        <label
                          onClick={() =>
                            setDeleteItem({
                              id: order._id,
                              url: "http://localhost:5000/order/",
                              name: "delete",
                            })
                          }
                          htmlFor="confirm-modal"
                          className="btn my-2"
                        >
                          delte
                        </label>
                      )}
                    </div>
                  )}
                  {order.totalPrice && order.paid && (
                    <div>
                      <p>
                        <span className="text-success">Paid</span>
                      </p>
                      <p>
                        Transaction id:{" "}
                        <span className="text-success">
                          {order.transactionId}
                        </span>
                      </p>
                    </div>
                  )}

                  {/* <button onClick={handleDelete} className="btn">Buy Now</button> */}
                </div>
              </div>
            </div>
          ))}
      </div>
      <ConfirmModal refetch={refetch} data={deleteItem} />  
    </div>
  );
};

export default MyOrders;
