import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createAlert } from "../../store/slices/alertSlice";
import { useUpdateProfileMutation } from "../../store/apis/authApi";
import Drawer from "../Drawer";
import Button from "../ui/Button";
import Input from "../ui/Input";
const UpdateProfileDrawer = ({ setOpen }) => {
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(false);
  const [name, setName] = useState();
  const [updateProfile] = useUpdateProfileMutation();
  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const result = await updateProfile({ name }).unwrap();
      if (result.status) {
        dispatch(
          createAlert({
            type: "success",
            message: "Updated successfully ",
          })
        );
        setOpen(false);
      } else {
        dispatch(createAlert({ type: "error", message: result?.message }));
      }
    } catch (err) {
      dispatch(createAlert({ type: "error", message: err?.data?.message }));
    } finally {
      setName("");
      setLoading(false);
    }
  };

  return (
    <Drawer
      title=""
      visible={true}
      placement="left"
      onClose={() => {
        setOpen(false);
      }}
      style={{}}
    >
      <div className="">
        <h2>Update Profile</h2>
        <form onSubmit={handleUpdateProfile} autoComplete="off">
          <Input
            label="Name"
            type="name"
            onChange={(e) => setName(e.target.value)}
            name="name"
            value={name || ""}
            required={true}
          />
          <Button type="submit" className="save" loading={isLoading}>
            Save
          </Button>
        </form>
      </div>
    </Drawer>
  );
};

export default UpdateProfileDrawer;
