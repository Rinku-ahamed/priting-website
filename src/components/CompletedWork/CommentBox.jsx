import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useContext } from "react";
import { ThemeContext } from "../../context/ThemeProvider";
import axios from "axios";
import { BaseURL } from "../../config/helpers";
import { toast } from "react-toastify";
import PropTypes from "prop-types";
const CommentBox = ({ id }) => {
  const { isOpen, setIsOpen } = useContext(ThemeContext);
  function closeModal() {
    setIsOpen(false);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const content = e.target.comment.value;
    const commentData = { product_id: id, content };
    console.log(commentData);
    if (content && commentData) {
      axios
        .post(BaseURL + "/api/comment", commentData)
        .then((res) => {
          console.log(res);
          toast.success(res.data.message);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.log("data missed");
    }
  };
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <form onSubmit={handleSubmit}>
                    <div className="mt-2">
                      <textarea
                        name="comment"
                        className="py-2  px-3 w-full outline-none shadow-login h-28"
                        placeholder="Comment"
                      ></textarea>
                    </div>

                    <div className="mt-4">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeModal}
                      >
                        Close
                      </button>
                      <button
                        type="submit"
                        className="bg-primaryColor text-sm px-4 py-2 rounded text-white ms-4"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
CommentBox.propTypes = {
  id: PropTypes.any,
};

export default CommentBox;
