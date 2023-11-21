import axios from "axios";
import { useForm } from "react-hook-form";
import { BaseURL } from "../../config/helpers";
import { toast } from "react-toastify";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    axios
      .post(BaseURL + "/api/contact", { ...data, type: "contact" })
      .then((res) => {
        console.log(res);
        toast.success(res.data.message);
        reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <form
      className="bg-[#7d7f7d] px-6 md:px-16 py-10 md:flex md:gap-20"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-3 flex-1">
        <input
          type="text"
          placeholder="Name"
          className="w-full px-2 py-1 rounded outline-none"
          {...register("name", { required: true })}
        />
        {errors.name && (
          <span className="text-amber-500 font-semibold">
            This field is required
          </span>
        )}
        <input
          type="email"
          placeholder="Email"
          className="w-full  px-2 py-1 rounded outline-none"
          {...register("email", { required: true })}
        />
        {errors.email && (
          <span className="text-amber-500 font-semibold">
            This field is required
          </span>
        )}
        <input
          type="text"
          placeholder="Subject"
          className="w-full  px-2 py-1 rounded outline-none"
          {...register("subject")}
        />
      </div>
      <div className="flex-1 mt-4 md:mt-0">
        <textarea
          placeholder="Message"
          className="w-full h-28 px-2 py-1 rounded outline-none"
          {...register("message", { required: true })}
        ></textarea>
        {errors.message && (
          <span className="text-amber-500 font-semibold block">
            This field is required
          </span>
        )}
        <button
          type="submit"
          className="bg-primaryColor text-white mt-2 px-5 py-[6px] rounded"
        >
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
