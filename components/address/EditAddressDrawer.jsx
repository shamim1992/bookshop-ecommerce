import React from "react";
import { useState } from "react";
import Drawer from "../Drawer";
import { useUpdateAddressMutation } from "../../store/apis/addressApi";
import Button from "../ui/Button";
import { useDispatch } from "react-redux";
import { createAlert } from "../../store/slices/alertSlice";
const EditAddressDrawer = ({ open, setOpen, data = {} }) => {
  const [isLoading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const [fields, setFields] = useState(data);
  const [updateAddress] = useUpdateAddressMutation();
  const onClose = () => {
    setOpen(false);
  };

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
    setLoading(true);
    try {
      const result = await updateAddress(fields).unwrap();
      console.log("result ", result);
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
      title="Edit Address"
      visible={open}
      placement="right"
      onClose={onClose}
    >
      <form onSubmit={handleOnSubmit}>
        <label>Address Type</label>
        <div>
          <label className="radio">
            <input
              type="radio"
              className="radio__input"
              name="type"
              value={1}
              onChange={inputHandler}
              checked={fields.type == 1}
            />
            <div className="radio__div" />
            HOME
          </label>
          <label className="radio">
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
          <label className="radio">
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
          <label htmlFor="" className="form-label col mr-2">
            H/Flat No
            <input
              type="text"
              className="form-control"
              name="houseNo"
              value={fields?.houseNo || ""}
              onChange={inputHandler}
            />
          </label>
          <label className="col ml-2">
            Pincode
            <input
              type="text"
              className="form-control"
              name="pincode"
              value={fields?.pincode || ""}
              onChange={inputHandler}
              required
            />
          </label>
        </div>
        <div className="row">
          <label htmlFor="" className="form-label col mr-2">
            City
            <input
              type="text"
              className="form-control"
              name="city"
              value={fields?.city || ""}
              onChange={inputHandler}
            />
          </label>
          <label className="col ml-2">
            State
            <input
              type="text"
              className="form-control"
              name="state"
              value={fields?.state || ""}
              onChange={inputHandler}
            />
          </label>
        </div>
        <label className="">
          Address
          <textarea
            className="form-control"
            name="address"
            onChange={inputHandler}
            value={fields?.address || ""}
            required
          />
        </label>

        <Button className="save" type="submit" loading={isLoading}>
          Save
        </Button>
      </form>
    </Drawer>
  );
};

export default EditAddressDrawer;
