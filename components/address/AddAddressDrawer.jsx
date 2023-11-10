import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Drawer from "../Drawer";
import { useAddAddressMutation } from "../../store/apis/addressApi";
import { createAlert } from "../../store/slices/alertSlice";
import Button from "../ui/Button";
const AddAddressDrawer = ({ isVisible, setOpen }) => {
  const [isLoading, setLoading] = useState(false);
  const [addressType, setAddressType] = useState(1);
  const dispatch = useDispatch();
  const [fields, setFields] = useState({ type: 1, isDefault: true });
  const [addAddress] = useAddAddressMutation();

  const inputHandler = (e) => {
    const inputType = e.target.type;
    if (!e.target.name) return;

    setFields((prev) => {
      return {
        ...prev,
        [e.target.name]:
          inputType === "checkbox" ? e.target.checked : e.target.value,
      };
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const result = await addAddress(fields).unwrap();
      if (result.status) {
        setFields({ type: 1, isDefault: true });
        setOpen(false);
        dispatch(
          createAlert({ type: "success", message: "Saving Successful" })
        );
      } else {
        dispatch(createAlert({ type: "error" }));
      }
    } catch (err) {
      dispatch(createAlert({ type: "error" }));
    } finally {
      setLoading(false);
    }
  };
  return (
    <Drawer
      title="Add New Address"
      visible={isVisible}
      placement="left"
      onClose={() => {
        setOpen(false);
      }}
    >
      <form onSubmit={handleOnSubmit}>
        <label className="font-semibold">Address Type</label>
        <div>
          <label className="radio font-medium">
            <input
              type="radio"
              className="radio__input "
              name="type"
              value={1}
              onChange={inputHandler}
              checked={fields.type == 1}
            />
            <div className="radio__div" />
            HOME
          </label>
          <label className="radio font-medium">
            <input
              type="radio"
              className="radio__input"
              name="type"
              value={2}
              checked={fields?.type == 2}
              onChange={inputHandler}
            />
            <div className="radio__div"></div>
            WORK
          </label>
          <label className="radio font-medium">
            <input
              type="radio"
              className="radio__input"
              name="type"
              value={3}
              checked={fields.type == 3}
              onChange={inputHandler}
            />
            <div className="radio__div" />
            OTHER
          </label>
        </div>
        <div className="row">
          <label htmlFor="" className="form-label col mr-2 font-semibold">
            H/Flat No
            <input
              type="text"
              className="form-control rounded-md"
              name="houseNo"
              value={fields?.houseNo || ""}
              onChange={inputHandler}
              required
            />
          </label>
          <label className="col ml-2 font-semibold">
            Pincode
            <input
              type="text"
              className="form-control rounded-md"
              name="pincode"
              value={fields?.pincode || ""}
              onChange={inputHandler}
              required
            />
          </label>
        </div>
        <div className="row">
          <label htmlFor="" className="form-label col mr-2 font-semibold">
            City
            <input
              type="text"
              className="form-control rounded-md"
              name="city"
              value={fields?.city || ""}
              onChange={inputHandler}
              required
            />
          </label>
          <label className="col ml-2 font-semibold">
            State
            <input
              type="text"
              className="form-control rounded-md"
              name="state"
              value={fields?.state || ""}
              onChange={inputHandler}
            />
          </label>
        </div>
        <label className="font-semibold">
          Address
          <textarea
            className="form-control rounded-md"
            name="address"
            onChange={inputHandler}
            value={fields?.address || ""}
            required
          />
        </label>
        <Button
          className="bg-blue-900 px-4 py-2 rounded-lg text-white font-semibold w-full"
          type="submit"
          loading={isLoading}
        >
          Save
        </Button>
      </form>
    </Drawer>
  );
};

export default AddAddressDrawer;
