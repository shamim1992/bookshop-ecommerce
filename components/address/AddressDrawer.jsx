import React, { useState } from "react";
import { useGetAddressesQuery } from "../../store/apis/addressApi";
import styles from "../../styles/Address.module.css";
import Drawer from "../Drawer";
import Button from "../ui/Button";
import Spin from "../ui/Spin";
import AddAddress from "./AddAddressDrawer";
import AddressCard from "./AddressCard";
import EditAddress from "./EditAddressDrawer";
const AddressDrawer = ({ open, setOpen }) => {
  const {
    refetch,
    data: addresses = [],
    isFetching,
    isLoading,
    isSuccess,
    isError,
  } = useGetAddressesQuery();
  const [addAddressDrawer, openAddAddressDrawer] = useState(false);
  const [editAddressDrawer, openEditAddressDrawer] = useState(false);
  const [address, setAddress] = useState({});

  return (
    <Drawer
      title=""
      visible={open}
      placement="left"
      onClose={() => {
        setOpen(false);
      }}
    >
      {addAddressDrawer && (
        <AddAddress
          isVisible={addAddressDrawer}
          setOpen={openAddAddressDrawer}
        />
      )}

      {editAddressDrawer && (
        <EditAddress
          isVisible={editAddressDrawer}
          data={address}
          setOpen={openEditAddressDrawer}
        />
      )}

      <div>
        <Button
          className="bg-blue-900 px-4 py-2 rounded-lg text-white font-semibold w-full items-center mt-4 mb-3"
          onClick={() => {
            openAddAddressDrawer(true);
          }}
        >
          + Add Address
        </Button>

        <div className={styles.container}>
          {isFetching ? (
            <Spin style={{ width: "60px", height: "60px" }} center={true} />
          ) : addresses.length ? (
            addresses.map((data) => (
              <AddressCard
                key={data.id}
                data={data}
                setData={setAddress}
                setOpen={openEditAddressDrawer}
                setOpenAddressDrawer={setOpen}
              />
            ))
          ) : (
            <div className="font-medium">
              <h3>No Address Found</h3>
            </div>
          )}
        </div>
      </div>
    </Drawer>
  );
};

export default AddressDrawer;
