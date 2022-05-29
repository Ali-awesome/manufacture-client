import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const MyProfile = () => {
    const [user, loading] = useAuthState(auth);
    const [isEdit, setIsEdit] = useState(false);
    const [profile, setProfile] = useState([]);
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmit = (data, e) => {
        const { _id, ...res } = data;
        fetch(`http://localhost:5000/profile?email=${user?.email}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(res),
        })
            .then((res) => res.json())
            .then((data) => {
                reset(data);
                // console.log('fdkjdsfkjsd')
                setIsEdit(false);
            });
    };

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/profile?email=${user?.email}`, {
                method: "GET",
                headers: {
                    authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                },
            })
                .then((res) => {
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem("accessToken");
                        navigate("/");
                    }
                    return res.json();
                })
                .then((data) => {
                    const doc = data[0];
                    // console.log(doc);
                    setProfile(doc);
                    reset(doc);
                });
        }
    }, [user]);

    return (
        <div>
            <div className="avatar m-5">
                <div className=" w-24 bg-neutral-focus text-neutral-content rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    {user?.photoURL && (
                        <img className="text-7xl" src={user.photoURL} alt="U" />
                    )}
                </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2 className="text-2xl">Edit Your Profile</h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 mx-32">
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Your Number</span>
                        </label>

                        <input
                            className="input input-bordered w-full max-w-xs"
                            defaultValue={profile?.phone}
                            disabled={!isEdit}
                            type="tel"
                            placeholder="Mobile number"
                            {...register("phone", { maxLength: 12 })}
                        />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Address</span>
                        </label>

                        <textarea
                            defaultValue={profile?.Address}
                            disabled={!isEdit}
                            className="input input-bordered w-full max-w-xs"
                            {...register("Address", {})}
                        />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Education</span>
                        </label>

                        <select
                            defaultValue={profile?.currentEducation}
                            disabled={!isEdit}
                            className="input input-bordered w-full max-w-xs"
                            {...register("currentEducation")}
                        >
                            <option value="SSC">SSC</option>
                            <option value="HSC">HSC</option>
                            <option value="Bachelor">Bachelor</option>
                            <option value="Master">Master</option>
                            <option value="PhD">PhD</option>
                        </select>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Social Profile</span>
                        </label>

                        <input
                            defaultValue={profile?.socialProfile}
                            disabled={!isEdit}
                            className="input input-bordered w-full max-w-xs"
                            type="url"
                            placeholder="LinkedIn Profile"
                            {...register("socialProfile", {})}
                        />
                    </div>
                </div>
                {!isEdit && (
                    <label
                        onClick={() => setIsEdit(true)}
                        class="btn w-full max-w-xs text-white my-3"
                    >
                        edit
                    </label>
                )}

                {isEdit && (
                    <input
                        className="btn w-full max-w-xs text-white my-3"
                        type="submit"
                    />
                )}
            </form>
        </div>
    );
};

export default MyProfile;
