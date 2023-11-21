import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useContext } from "react";
import { ThemeContext } from "../../context/ThemeProvider";
import PropTypes from "prop-types";
import { BaseURL } from "../../config/helpers";
const SingleImgBIgView = ({ bigImage }) => {
  const { isSingleImgOpen, setSingleImgOpen } = useContext(ThemeContext);

  function closeModal() {
    setSingleImgOpen(false);
  }
  return (
    <Transition appear show={isSingleImgOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
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
              <Dialog.Panel className="w-full md:w-3/5 h-[94vh] overflow-y-auto transform overflow-hidden rounded-2xl bg-white p-3 text-left align-middle shadow-xl transition-all z-[50] relative">
                <img src={`${BaseURL}/${bigImage}`} alt="" className="w-full" />
                <button
                  onClick={() => setSingleImgOpen(false)}
                  className="bg-orange-500 text-white px-3 py-1 rounded absolute outline-none top-4 right-4"
                >
                  X
                </button>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
SingleImgBIgView.propTypes = {
  bigImage: PropTypes.any,
};
export default SingleImgBIgView;
