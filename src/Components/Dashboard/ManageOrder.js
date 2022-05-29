import React from "react";
import { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading/Loading";
import ConfirmModal from "./ConfirmModal";

const ManageOrder = () => {
  const [actionItem, setActionItem] = useState({});
  const {
    data: orders,
    refetch,
    isLoading,
  } = useQuery(["adminordersData"], () =>
    fetch(`http://localhost:5000/orders`, {
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
      <div className="mx-3 my-5 ">
        <div class="overflow-x-auto">
          <table class="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Email</th>
                <th>Tools Name</th>
                <th>Quantity</th>
                <th>Total Price</th>
                <th>status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {orders &&
                orders.map((order, index) => (
                  <tr key={order._id} class="hover">
                    <th>{index + 1}</th>
                    <td>{order.email}</td>
                    <td>{order.productName}</td>
                    <td>{order.quantity}</td>
                    <td>{order.totalPrice}</td>
                    <td>{order.paid ? (order?.status ? order.status : 'paid') : "unpaid"}</td>

                    <td>
                      {order.paid ? (order?.status ? '' :
                        <div
                          class="tooltip tooltip tooltip-success tooltip-left"
                          data-tip="deliver this item"
                        >
                          <label
                            onClick={() => {
                              setActionItem({
                                id: order._id,
                                name: "deliver",
                                url: "http://localhost:5000/orders/",
                                body: { status: "approved" },
                              });
                            }}
                            htmlFor="confirm-modal"
                            class="btn"
                          >
                            deliver
                          </label>
                        </div>
                      ) : (
                        <div
                          class="tooltip tooltip-warning tooltip-left"
                          data-tip="cancel this item"
                        >
                          <label
                            onClick={() => {
                              setActionItem({
                                id: order._id,
                                name: "delete",
                                url: "http://localhost:5000/order/",
                              });
                            }}
                            htmlFor="confirm-modal"
                            class="btn"
                          >
                            cancel
                          </label>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
      <ConfirmModal data={actionItem} refetch={refetch} />
    </div>
  );
};

export default ManageOrder;
