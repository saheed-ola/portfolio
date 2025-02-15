import React,{useState} from 'react'
import Slider from "react-slick";
import { RiStarFill } from 'react-icons/ri';
import {HiArrowRight,HiArrowLeft} from 'react-icons/hi'
import Title from '../layouts/Title'
import { testimonialOne, testimonialTwo, quote } from '../../assets';

function SampleNextArrow(props) {
    const {onClick} = props;
    return (
      <div
        className= 'w-14 h-12 bg-black hover:bg-blue duration-300 rounded-md text-gray-400 flex justify-center items-center absolute top-0 right-20 shadow-shadowOne cursor-pointer z-10'
       
        onClick={onClick}
      ><HiArrowRight/></div>
    );
  }

  function SamplePrevArrow(props) {
    const {onClick} = props;
    return (
      <div
        className= 'w-14 h-12 bg-black hover:bg-blue duration-300 rounded-md text-gray-400 flex justify-center items-center absolute top-0 right-[150px] shadow-shadowOne cursor-pointer z-10'
       
        onClick={onClick}
      ><HiArrowLeft/></div>
    );
  }

const Testimonial = () => {
    const {dotActive, setdotActive} = useState(0);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>,
        // beforeChange: (previous, next) => {
        //     setdotActive(next);
        // },
        appendDots: dots => (
            <div
              style={{
                borderRadius: "10px", 
                padding: "10px"
              }}
            >
              <ul style={{ 
                    display:'flex',
                    gap: '15px',
                    justifyContent: 'center',
                    marginTop: '20px'
              }}>
                {""} {dots}
                  </ul>
            </div>
          ),
          customPaging: (i) => (
            <div
              style={
                i===dotActive ? 
                {
                    width: "12px",
                    height: "12px",
                    color: "blue",
                    background: "black",
                    borderRadius: "58%",
                    cursor: "pointer",
                }:
                {
                    width: "12px",
                    height: "12px",
                    color: "blue",
                    background: "white",
                    borderRadius: "58%",
                    cursor: "pointer",
                }
              }
            >
             
            </div>
          ),
    };
  return (
    <section id = "testimonial" className=' w-full py-20 border-b-[1px] border-b-black'>
        <div className='flex justify-center items-center text-center'>
            <Title
            title = "WHAT CLIENTS SAY" 
            des = "Testimonial"/>
        </div>
        <div className='max-w-6xl mx-auto'>
            <Slider {...settings}>
                <div className='w-full'>
                    <div className='w-full h-[500px] flex justify-between'>
                        <div className='w-[35%] h-full bg-white shadow-shadowOne p-8 rounded-lg flex flex-col gap-8 justify-center'>
                            <img 
                            className='h-72 rounded-3xl object-cover'
                            src={testimonialOne}
                            alt="testimonialOne"
                            />
                            <div>
                                <p>Oluwole Zaccheous</p>
                                <h3 className='text-2xl font-bold'>Jone Duone Joe</h3>
                                <p className='text-base tracking-wide text-gray-500'>IOT Software developer</p>
                            </div>
                        </div>
                        <div className='w-[60%] h-full flex flex-col justify-between'>
                            <img className='w-[20%]' src={quote} alt="" />
                            <div className='w-full h-[70%] py-10 bg-white rounded-lg shadow-shadowOne p-8 flex flex-col justify-center gap-8'>
                                <div className='flex justify-between items-center py-6 border-b-2 border-b-gray-900'>
                                    <div>
                                        <h3 className='text-2xl font-medium tracking-wide'>Travel Mobile App Design
                                        </h3>
                                        <p className='text-base text-gray-400 mt-3'>Via Upwork - Mar 4, 2015-Aug 30, 2021 test</p>
                                    </div>
                                    <div className='text-yellow-500 flex gap-1'>
                                        <RiStarFill/>
                                        <RiStarFill/>
                                        <RiStarFill/>
                                        <RiStarFill/>
                                        <RiStarFill/>
                                    </div>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore eveniet consequuntur excepturi magnam explicabo dolor rem non omnis, amet tempora in mollitia praesentium aliquid, natus veritatis incidunt culpa, aut dolorum!</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full'>
                    <div className='w-full h-[500px] flex justify-between'>
                        <div className='w-[35%] h-full bg-white shadow-shadowOne p-8 rounded-lg flex flex-col gap-8 justify-center'>
                            <img 
                            className='h-72 rounded-3xl object-cover'
                            src={testimonialTwo}
                            alt="testimonialOne"
                            />
                            <div>
                                <p>Bello Ridwan</p>
                                <h3 className='text-2xl font-bold'>Jone Duone Joe</h3>
                                <p className='text-base tracking-wide text-gray-500'>IOT Software developer</p>
                            </div>
                        </div>
                        <div className='w-[60%] h-full flex flex-col justify-between'>
                            <img className='w-[20%]' src={quote} alt="" />
                            <div className='w-full h-[70%] py-10 bg-white rounded-lg shadow-shadowOne p-8 flex flex-col justify-center gap-8'>
                                <div className='flex justify-between items-center py-6 border-b-2 border-b-gray-900'>
                                    <div>
                                        <h3 className='text-2xl font-medium tracking-wide'>Travel Mobile App Design
                                        </h3>
                                        <p className='text-base text-gray-400 mt-3'>Via Upwork - Mar 4, 2015-Aug 30, 2021 test</p>
                                    </div>
                                    <div className='text-yellow-500 flex gap-1'>
                                        <RiStarFill/>
                                        <RiStarFill/>
                                        <RiStarFill/>
                                        <RiStarFill/>
                                        <RiStarFill/>
                                    </div>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore eveniet consequuntur excepturi magnam explicabo dolor rem non omnis, amet tempora in mollitia praesentium aliquid, natus veritatis incidunt culpa, aut dolorum!</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full'>
                    <div className='w-full h-[500px] flex justify-between'>
                        <div className='w-[35%] h-full bg-white shadow-shadowOne p-8 rounded-lg flex flex-col gap-8 justify-center'>
                            <img 
                            className='h-72 rounded-3xl object-cover'
                            src={testimonialTwo}
                            alt="testimonialOne"
                            />
                            <div>
                                <p>Oluwole Zaccheous</p>
                                <h3 className='text-2xl font-bold'>Jone  Joe</h3>
                                <p className='text-base tracking-wide text-gray-500'>IOT Software developer</p>
                            </div>
                        </div>
                        <div className='w-[60%] h-full flex flex-col justify-between'>
                            <img className='w-[20%]' src={quote} alt="" />
                            <div className='w-full h-[70%] py-10 bg-white rounded-lg shadow-shadowOne p-8 flex flex-col justify-center gap-8'>
                                <div className='flex justify-between items-center py-6 border-b-2 border-b-gray-900'>
                                    <div>
                                        <h3 className='text-2xl font-medium tracking-wide'>Travel Mobile App Design
                                        </h3>
                                        <p className='text-base text-gray-400 mt-3'>Via Upwork - Mar 4, 2015-Aug 30, 2021 test</p>
                                    </div>
                                    <div className='text-yellow-500 flex gap-1'>
                                        <RiStarFill/>
                                        <RiStarFill/>
                                        <RiStarFill/>
                                        <RiStarFill/>
                                        <RiStarFill/>
                                    </div>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore eveniet consequuntur excepturi magnam explicabo dolor rem non omnis, amet tempora in mollitia praesentium aliquid, natus veritatis incidunt culpa, aut dolorum!</p>
                            </div>
                        </div>
                    </div>
                </div>
            
            </Slider>
        </div>
    </section>
  )
}

export default Testimonial


{/* <div className='w-full h-[500px] flex justify-between'>
<div className='w-[35%] h-full bg-white shadow-shadowOne p-8 rounded-lg flex flex-col gap-8 justify-center'>
    <img 
    className='h-72 rounded-3xl object-cover'
    src={testimonialTwo}
    alt="testimonialOne"
    />
    <div>
        <p>Oluwole Zaccheous</p>
        <h3 className='text-2xl font-bold'>Jone Duone Joe</h3>
        <p className='text-base tracking-wide text-gray-500'>IOT Software developer</p>
    </div>
</div>
<div className='w-[60%] h-full border flex flex-col justify-between'>
    <img className='w-[20%]' src={quote} alt="" />
    <div className='w-full h-[70%] py-10 bg-white rounded-lg shadow-shadowOne p-8 flex flex-col justify-center gap-8'>
        <div className='flex justify-between items-center py-6 border-b-2 border-b-gray-900'>
            <div>
                <h3 className='text-2xl font-medium tracking-wide'>Travel Mobile App Design
                </h3>
                <p className='text-base text-gray-400 mt-3'>Via Upwork - Mar 4, 2015-Aug 30, 2021 test</p>
            </div>
            <div className='text-yellow-500 flex gap-1'>
                <RiStarFill/>
                <RiStarFill/>
                <RiStarFill/>
                <RiStarFill/>
                <RiStarFill/>
            </div>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore eveniet consequuntur excepturi magnam explicabo dolor rem non omnis, amet tempora in mollitia praesentium aliquid, natus veritatis incidunt culpa, aut dolorum!</p>
    </div>
</div>
</div> */}