import { reviews } from "../../App";
import { RiStarFill } from "react-icons/ri";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState } from "react";
import Title from "../layouts/Title";

const Testimonial = () => {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <>
      <section
        id="testimonial"
        className=" w-full overflow-x-hidden bg-[#5483B3] px-4 py-20 border-b-[1px] border-b-black"
      >
        <div className="flex justify-center items-center text-center" >
          <Title title="WHAT CLIENTS SAY" des="Testimonial" />
        </div>
        <Carousel
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
          setApi={setApi}
          className="w-full "
        >
          <CarouselContent>
            {reviews.map((r, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div
                  className={`${
                    current === index && "drop-shadow-md shadow-amber-200"
                  } bg-white rounded-lg shadow-xl p-4 lgl:p-8 flex flex-col justify-center items-center relative gap-4 lgl:gap-8`}
                >
                  <div className="w-full flex items-center justify-center">
                    <img
                      src={r.picture}
                      alt=""
                      className="w-[200px] h-[200px] border-[2px] border-yellow-500 rounded-full bg-cover bg-center bg-no-repeat"
                    />
                  </div>
                  <div className="w-full flex flex-col justify-between items-center py-6 border-b-2 border-b-gray-900">
                    <h3 className="text-xl text-black lgl:text-2xl font-medium tracking-wide">
                      {r.oruko}
                    </h3>
                    <p className="text-base text-gray-400 mt-3 mx-auto ">
                      {r.positon}
                    </p>
                    <div className="text-yellow-500 flex gap-1">
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                    </div>
                  </div>
                  <p className="text-black">{r.statement}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden lg:block">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>

        <div className="flex gap-2 w-full items-center justify-center pt-10">
          {Array.from({ length: count }).map((_, index) => (
            <div
              key={index}
              className={`${
                current === index + 1 ? "bg-slate-300" : "bg-slate-500"
              } bg-slate-500 transition-all duration-1000 ease-in-out w-2 h-2 rounded-full`}
            />
          ))}
        </div>
      </section>
    </>
  );
};
export default Testimonial;
