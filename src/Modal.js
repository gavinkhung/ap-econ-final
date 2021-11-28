import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useRef } from "react";

export default function Modal({ children, openModel, setOpenModel }) {
  const focusRef = useRef();

  function closeModal() {
    setOpenModel(false);
  }

  return (
    <Transition show={openModel} as={Fragment}>
      <Dialog
        as="div"
        id="modal"
        className="fixed inset-0 z-50 overflow-y-auto"
        initialFocus={focusRef}
        static
        open={openModel}
        onClose={closeModal}
      >
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
          </Transition.Child>
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div
              className={`inline-block w-full max-w-4xl p-4 my-4 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl border-black border-2`}
            >
              {children}
              <button ref={focusRef}></button>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
