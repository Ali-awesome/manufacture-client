import React from "react";
import { useRef } from "react";
import { toast } from "react-toastify";

const ConfirmModal = ({ refetch, data }) => {
  const { id, url, name, body } = data
  const closeRef = useRef();
  // console.log(name)

  const deleteHandle = async (id) => {

    if (name === "make admin") {
      fetch(url + id, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          toast.success("Successfully made an admin!");
          closeRef.current.click();
          refetch();
        });
    }
    if (name === "deliver") {
      fetch(url + id, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(body),
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          toast.success("Successfully delivered!");
          closeRef.current.click();
          refetch();
        });
    }
    if (name === "delete") {
      await fetch(url + id, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount === 1) {
            toast.success("deleted");
            refetch();
            closeRef.current.click();
          }
        });
    }
  };
  return (
    <div>
      <input type="checkbox" id="confirm-modal" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box relative">
          <label
            ref={closeRef}
            for="confirm-modal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="text-lg font-bold">Want to {name} this {name === 'make admin' ? 'user' : "item"} ?</h3>
          <div class="modal-action">
            <button onClick={() => deleteHandle(id)} class="btn">
              {name}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
