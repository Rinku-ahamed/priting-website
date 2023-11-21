import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Container from "../components/common/Container";
import { useForm } from "react-hook-form";
import axios from "axios";
import { BaseURL } from "../config/helpers";
import { toast } from "react-toastify";
const Checkout = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    axios
      .post(BaseURL + "/api/checkout", data)
      .then((res) => {
        console.log(res);
        toast.success("Successfully send data!");
        reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Container>
      <div className=" bg-[#FAFADD] py-3 px-5 mb-8 md:mx-32">
        <form className="md:flex gap-8" onSubmit={handleSubmit(onSubmit)}>
          <div className="md:w-6/12">
            <h2 className="text-2xl mb-3">Billings Address</h2>
            <input
              type="text"
              placeholder="Your Name"
              className="outline-none py-2 px-3 border border-[#dbdba1] w-full rounded mb-4 bg-transparent"
              {...register("name")}
            />
            <input
              type="email"
              placeholder="Your Email"
              className="outline-none py-2 px-3 border border-[#dbdba1] w-full rounded mb-4 bg-transparent"
              {...register("email")}
            />
            <input
              type="number"
              placeholder="Whatsapp Number"
              className="outline-none py-2 px-3 border border-[#dbdba1] w-full rounded mb-4 bg-transparent"
              {...register("whatsapp-number")}
            />
            <input
              type="number"
              placeholder="Your Number"
              className="outline-none py-2 px-3 border border-[#dbdba1] w-full rounded mb-4 bg-transparent"
              {...register("phone-number")}
            />
          </div>
          <div className="md:w-6/12">
            <div className="border px-3 py-2">
              <div className="flex gap-3">
                <img
                  src="https://i.ibb.co/tsS4m5k/3-Portrait.jpg"
                  alt=""
                  className="w-10"
                />
                <div>
                  <h2 className="text-xl">Artwork Title 12</h2>
                  <span className="text-sm">Artist Name 12</span>
                </div>
              </div>
              <div className="flex justify-between items-center border-t-2 mt-4 pt-2">
                <h3 className="font-semibold">Price</h3>
                <p>$200</p>
              </div>
            </div>
            <div className="mt-5">
              <Tabs>
                <TabList>
                  <Tab>International</Tab>
                  <Tab>Bkash</Tab>
                </TabList>

                <TabPanel>
                  <div className="flex gap-3 my-4">
                    <a
                      href="tel:+880 1813 610 343"
                      className="bg-green-500 px-6 py-2 rounded text-white"
                    >
                      Call On Whatsapp
                    </a>
                    <a
                      href="tel:+880 1813 610 343"
                      className="bg-green-700 px-6 py-2 rounded text-white"
                    >
                      Call On Whatsapp
                    </a>
                  </div>
                </TabPanel>
                <TabPanel>
                  <input
                    type="text"
                    placeholder="Your BKash Account Number"
                    className="outline-none py-2 px-3 border border-[#dbdba1] w-full rounded mb-4 bg-transparent"
                    {...register("bkash-number")}
                  />
                  <input
                    type="text"
                    placeholder="BKash Transaction ID"
                    className="outline-none py-2 px-3 border border-[#dbdba1] w-full rounded mb-4 bg-transparent"
                    {...register("bkash-transition")}
                  />
                  <button
                    type="submit"
                    className="bg-primaryColor text-white px-10 pt-2 pb-1 rounded uppercase"
                  >
                    Send
                  </button>
                </TabPanel>
              </Tabs>
            </div>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default Checkout;
