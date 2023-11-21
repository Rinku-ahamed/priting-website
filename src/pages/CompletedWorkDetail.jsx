import { Link, useLoaderData } from "react-router-dom";
import Container from "../components/common/Container";
import SingleBox from "../components/CompletedWork/SingleBox";
import Button from "../components/common/Button";
import SingleViewSlider from "../components/CompletedWork/SingleViewSlider";
import Person from "../data/comments/avator-man.png";
import SinglePageSliderLast from "../components/CompletedWork/SinglePageSliderLast";
import CommentBox from "../components/CompletedWork/CommentBox";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";
import SingleImgBIgView from "../components/CompletedWork/SingleImgBIgView";
import { BaseURL } from "../config/helpers";
const CompletedWorkDetail = () => {
  const singleData = useLoaderData();
  const { setIsOpen, setSingleImgOpen } = useContext(ThemeContext);
  const { id, image, title, artist, size, year, medium, price_bd, price_us } =
    singleData.data.data;
  console.log(singleData?.data?.data?.comments);
  return (
    <section>
      <Container>
        <div className="mb-10 bg-[#ffffe1] md:flex gap-10 py-10 md:py-24 px-5 md:px-0">
          <SingleImgBIgView bigImage={image} />
          <div className="md:w-5/12">
            <div
              className="cursor-pointer"
              onClick={() => setSingleImgOpen(true)}
            >
              <img src={`${BaseURL}/${image}`} alt="" />
            </div>
            <p className="text-center bg-[#656565] text-white text-sm py-[3px]">
              www.nameofthewebsite.com
            </p>
            <div className="mt-3 text-center">
              <Link to="/checkout">
                <Button buttonTxt="ORDER THE PAINTING FROM ARTIST" />
              </Link>
            </div>
          </div>
          <div className="md:ps-6 md:w-7/12 md:pe-5 mt-7 md:mt-0">
            <div className="flex flex-col gap-2 border-b-4 border-textColor pb-3">
              <SingleBox title={title} text={"Title"} />
              <SingleBox title={artist} text={"Artist"} />
              <SingleBox title={size?.name} text={"Size"} />
              <SingleBox title={year} text={"Year"} />
              <SingleBox title={medium} text={"Medium"} />
              <SingleBox title={price_bd} text={"Price (BDT)"} />
              <SingleBox title={price_us} text={"Price (USD)"} />
              <SingleBox title={"Available"} text={"Status"} />
            </div>
            <div className="flex gap-4 items-center mt-4">
              <iframe
                src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2Freact&width=500&layout&action&size&share=true&height=35&appId"
                width="500"
                height="50"
                style={{ border: "none", overflow: "hidden" }}
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></iframe>
            </div>
            <SingleViewSlider />
            <div className="text-center mt-6 text-xl">
              <Link to="/">View All 500 Paintings</Link>
            </div>
          </div>
        </div>

        <div className="mt-4 mb-4">
          <button
            onClick={() => setIsOpen(true)}
            className="bg-white pt-3 pb-2 w-full rounded text-xl text-left px-4"
          >
            Add Comment
          </button>
          <CommentBox id={id} />
        </div>
        <div className="md:px-12 flex flex-col gap-4 mt-8 mb-6">
          {singleData?.data?.data?.comments.slice(0, 2).map((com) => {
            return (
              <div className="sm:flex gap-4" key={com.id}>
                <img src={Person} alt="" className="sm:w-12" />
                <p className="text-slate-200 text-[16px] mt-2">
                  {com?.content}
                </p>
              </div>
            );
          })}
        </div>
        <p className="text-center text-primaryColor">Show More Comments</p>
        <div className="my-8 px-10 md:px-28">
          <SinglePageSliderLast />
        </div>
      </Container>
    </section>
  );
};

export default CompletedWorkDetail;
