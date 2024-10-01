import React, { useEffect, useState } from "react";

import { FaCheckCircle } from "react-icons/fa";
import { getAPI } from "../../../services/apisMethod";
import { managenmentApis } from "../../../apis/client";
import { Button, FormInput } from "../../../Components/Custom";
import { useForm } from "react-hook-form";
import CustomModal from "../../../Components/Modals/CustomModal";
import { formFields } from "../settings";
function SubAdmins() {
  const [adminData, setAdminData] = useState([]);
  const [open, setOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();



  //GET ADMINS
  useEffect(() => {
    getAdmins();
  }, []);
  const columns = ["Name", "Email", "Status"];
  async function getAdmins() {
    getAPI(managenmentApis.GET_ADMIN)
      .then(({ statusCode, data }) => {
        console.log(data);

        setAdminData(data.adminData);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  const onSubmit = (payload) => {
    // setLoading(true);
    console.log(payload);
    // postAPI(AuthAPIs.SIGNIN,payload)
    //   .then(({statusCode,data}) => {
    //      console.log(statusCode,data);

    //     dispatch(loginSuccessful(data.accessToken));

    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   })
    //   .finally(setLoading(false));
  };
  const onToggleModal = () => {
    setOpen(!open);
  };
  return (
    <>
      <CustomModal
        isOpen={open}
        onClose={onToggleModal}
        title="Create Admin"
        content={
          <form onSubmit={handleSubmit(onSubmit)}>
            {formFields.map((items, index) => (
              <FormInput
                key={index}
                label={items.label}
                type={items.type}
                name={items.name}
                placeholder={items.placeholder}
                register={register}
                validation={items.validation}
                errors={errors}
              />
            ))}
            <Button type="submit">Submit</Button>
          </form>
        }
      />

      <div className="w-full p-8 flex jus">
        <div className="w-fit">
          <Button
            handleClick={() => {
              onToggleModal();
            }}
          >
            Create Admin
          </Button>
        </div>
      </div>

      <div className="px-8 mt-8">
        <div className="overflow-x-auto">
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  {columns.map((col, index) => (
                    <th
                      key={index}
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {adminData.map((row, rowIndex) => (
                  <tr
                    key={rowIndex}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <td className="px-6 py-4">{row.fullName}</td>
                    <td className="px-6 py-4">{row.email}</td>
                    <td className="px-6 py-4">
                      {<FaCheckCircle className="text-green-500 text-[18px]" />}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default SubAdmins;
