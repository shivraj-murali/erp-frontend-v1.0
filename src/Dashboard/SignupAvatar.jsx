import React from "react";
import axios from "axios";
import Avatar from "@mui/material/Avatar";
import { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

const SignupAvatar = () => {
  const [open, setOpen] = useState(false);
  let [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
    console.log("true");
  }
  function closeModal() {
    setIsOpen(false);
  }

  const [name, setName] = useState("John Doe");
  return (
    <>
      {isOpen || (
        <div className="AvatarSection flex">
          <h1 className="px-4 self-center">
            Hello {localStorage.getItem("emp_name")}
          </h1>

          <button onClick={openModal}>
            <Avatar
              alt={localStorage.getItem("emp_name")}
              src={
                localStorage.getItem("emp_name") &&
                localStorage.getItem("img_url")
              }
            />
          </button>
        </div>
      )}
      {isOpen && <MyModal isOpen={isOpen} closeModal={closeModal} />}
    </>
  );
};

function MyModal({ isOpen, closeModal }) {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFileUpload = async () => {
    const formData = new FormData();
    formData.append("file", selectedFile);

    const response = await axios.post(
      "https://fileupload-v047.onrender.com/upload",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    console.log(response.data.file_url);
    localStorage.setItem("img_url", response.data.file_url);
    closeModal();
  };
  return (
    <div className="text-black">
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10 text-black"
          onClose={closeModal}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 text-black"
                  >
                    Upload Image
                  </Dialog.Title>
                  <div className="mt-2 flex">
                    <input
                      type="file"
                      className="text-black my-auto"
                      onChange={handleFileChange}
                    />
                    <button
                      onClick={handleFileUpload}
                      className="text-black bg-green font-medium rounded-lg text-sm px-3 py-2.5 inline"
                    >
                      Upload Now
                    </button>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="text-black bg-red font-medium rounded-lg text-sm px-3 py-2.5 inline"
                      onClick={closeModal}
                    >
                      Close
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}

export default SignupAvatar;
