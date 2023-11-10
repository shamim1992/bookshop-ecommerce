import React, { useState } from "react";
import styles from "../../styles/Address.module.css";
import {
  AiOutlineHome,
  AiOutlineDelete,
  AiFillEdit,
  AiOutlineEdit,
  AiFillCheckCircle,
} from "react-icons/ai";
import { BiCircle } from "react-icons/bi";
import { getAddressType } from "../../helper/Utils";
import {
  useDeleteAddressMutation,
  useSetDefaultAddressMutation,
} from "../../store/apis/addressApi";
import { useDispatch } from "react-redux";
import { createAlert } from "../../store/slices/alertSlice";

const AddressCard = ({ data, setData, setOpen, setOpenAddressDrawer }) => {
  const [isLoading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const {
    id: addressId,
    houseNo,
    address,
    city,
    state,
    type,
    isDefault,
  } = data;
  const [deleteAddress] = useDeleteAddressMutation();
  const [setDefaultAddress] = useSetDefaultAddressMutation();
  const handleOnEdit = (e) => {
    if (e && e.stopPropagation) e.stopPropagation();
    setData(data);
    setOpen(true);
  };
  const handleOnDelete = async (e) => {
    e.stopPropagation();
    try {
      const result = await deleteAddress(addressId).unwrap();
      if (result.status) {
        dispatch(
          createAlert({ type: "success", message: "Deleted successfully" })
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
  const handleSetDefault = async (e) => {
    try {
      const result = await setDefaultAddress({ addressId }).unwrap();
      if (result.status) {
        dispatch(
          createAlert({ type: "success", message: "Saving Successful" })
        );
      } else {
        dispatch(createAlert({ type: "error" }));
      }
    } catch (err) {
      dispatch(createAlert({ type: "error" }));
    } finally {
    }
  };
  return (
    <div
      className={`${styles.card} ${isDefault ? styles.active : ""}`}
      onClick={handleSetDefault}
    >
      <div>
        {isDefault ? (
          <AiFillCheckCircle size={20} color="#393185" />
        ) : (
          <BiCircle size={20} color="#ccc" />
        )}
      </div>
      <div className="ml-2 w-100">
        <div>
          <h5>{getAddressType(type)}</h5>
          <p>{`H/No ${houseNo ?? ""} ${address ?? ""} ${city ?? ""}`}</p>
        </div>
        <div className={styles.actions}>
          <button onClick={handleOnEdit}>
            <AiOutlineEdit size={20} color="#393185" />
          </button>

          <button onClick={handleOnDelete}>
            <AiOutlineDelete size={20} color="#393185" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddressCard;
