import { useForm } from "react-hook-form";
import Container from "../components/common/Container";
import axios from "axios";
import { BaseURL } from "../config/helpers";

const OrderYourPortrayed = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const formData = new FormData();
    const image = data.image[0];
    formData.append("image", image);
    formData.append("name", data?.name);
    formData.append("email", data?.email);
    formData.append("whats_app", data?.whatsappNumber);
    formData.append("mobile", data?.phoneNumber);
    formData.append("type", "order");
    axios
      .post(BaseURL + "/api/contact", formData)
      .then((res) => {
        console.log(res);
        reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <section>
      <Container>
        <div className="md:w-3/5 mx-auto my-6 bg-[#FAFADD] p-10 rounded">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="Your Name"
              className="outline-none py-2 px-3 border border-[#dbdba1] w-full rounded mb-4 bg-transparent"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-amber-500 font-semibold">
                This field is required
              </span>
            )}
            <input
              type="email"
              placeholder="Your Email"
              className="outline-none py-2 px-3 border border-[#dbdba1] w-full rounded mb-4 bg-transparent"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-amber-500 font-semibold">
                This field is required
              </span>
            )}
            <input
              type="number"
              placeholder="Whatsapp Number"
              className="outline-none py-2 px-3 border border-[#dbdba1] w-full rounded mb-4 bg-transparent"
              {...register("whatsappNumber", { required: true })}
            />
            {errors.whatsappNumber && (
              <span className="text-amber-500 font-semibold">
                This field is required
              </span>
            )}
            <input
              type="number"
              placeholder="Your Number"
              className="outline-none py-2 px-3 border border-[#dbdba1] w-full rounded mb-4 bg-transparent"
              {...register("phoneNumber", { required: true })}
            />
            {errors.phoneNumber && (
              <span className="text-amber-500 font-semibold">
                This field is required
              </span>
            )}
            <input
              type="file"
              className="outline-none py-2 px-3 border border-[#dbdba1] w-full rounded mb-4 bg-transparent"
              {...register("image", { required: true })}
            />
            {errors.image && (
              <span className="text-amber-500 font-semibold block">
                This field is required
              </span>
            )}
            <button
              type="submit"
              className="bg-primaryColor text-white px-8 pt-2 pb-1 rounded uppercase"
            >
              Send
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default OrderYourPortrayed;
