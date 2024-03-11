"use client";

import { Dialog, Transition } from "@headlessui/react";
import { useState, Fragment } from "react";
import Links from "./links";

const PopoutMenu = () => {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <div className="transitionbutton">
      <div className="fixed top-10 right-4">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-orange-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
        >
          Menu
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed top-0 right-0 w-1/3 lg:-right-10">
            <div className="min-h-full items-center justify-center  text-center">
              <Transition.Child
                as={Fragment}
                enter=" transform transition ease-out duration-300"
                enterFrom="translate-x-full opacity-0"
                enterTo="translate-x-0 opacity-100"
                leave="transform transition ease-in duration-300"
                leaveFrom="translate-x-0 opacity-100"
                leaveTo="translate-x-full opacity-0"
              >
                <Dialog.Panel className="w-full h-screen max-w-md transform overflow-hidden  bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="fixed top-10 right-4">
                    <button
                      type="button"
                      onClick={closeModal}
                      className="rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-orange-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
                    >
                      Close
                    </button>
                  </div>

                  <Links
                    linkDetails={[
                      { text: "Home", url: "https:northlink.digital" },
                      { text: "New", url: "" },
                      { text: "Popular", url: "" },
                      { text: "Trending", url: "" },
                      { text: "Categories", url: "" },
                    ]}
                  />
                  <div className="fixed bottom-10 right-5">
                    <button
                      type="button"
                      onClick={closeModal}
                      className="rounded-md bg-black/50 px-4 py-2 text-sm font-medium text-white hover:bg-orange-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
                    >
                      Signout
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
};

export default PopoutMenu;
