import React from 'react';
import { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import ConfirmModal from './ConfirmModal';

const AllUsers = () => {
    const [actionItem, setActionItem] = useState({});
    const {
      data: users,
      refetch,
      isLoading,
    } = useQuery(["adminUserData"], () =>
      fetch(`http://localhost:5000/user`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }).then((res) => res.json())
        );
    
    if (isLoading) {
      return <Loading />;
    };
    return (
        <div>
            <div className="mx-3 my-5 ">
        <div class="overflow-x-auto">
          <table class="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Email</th>
                <th>name</th>
                <th>status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users &&
                users.map((user, index) => (
                  <tr key={user._id} class="hover">
                    <th>{index + 1}</th>
                    <td>{user?.email}</td>
                    <td>{user?.name}</td>
                    <td>{user?.role ? user?.role : 'user' }</td>
                        <td>{user?.role !== 'admin' && <label htmlFor='confirm-modal' className='btn' onClick={
                            () => {
                                setActionItem({
                                  id: user?.email,
                                  name: "make admin",
                                  url: "http://localhost:5000/user/admin/",
                                });
                            }
                    }>Admin</label>}</td>
                    
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

export default AllUsers;