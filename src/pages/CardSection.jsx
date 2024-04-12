import React, { useState } from "react";

function CardSection() {
  const [selectCard1, setCard1] = useState(true);
  const [selectCard2, setCard2] = useState(true);
  const [selectCard3, setCard3] = useState(true);

  const toggleCard1 = () => {
    setCard1(!selectCard1);
  };
  const toggleCard2 = () => {
    setCard2(!selectCard2);
  };
  const toggleCard3 = () => {
    setCard3(!selectCard3);
  };

  return (
    <>
      <div className="text-sm text-pink-500 tracking-[0.05em] font-pacifico  ml-10 mt-10 ">
        dribbble
      </div>
      <div className="flex flex-col justify-center font-roboto items-center mt-5 px-5 text-center ">
        <p className="text-3xl font-bold">What brings you to Dribbble?</p>
        <p className="text-gray-600 text-center">
          Select the option that best describe you. Don't worry, you can explore
          other options later.
        </p>
      </div>

      <div className="flex sm:flex-row flex-col justify-center items-center font-roboto gap-6 my-8 px-5 ">
        <div className="flex flex-col w-[15rem] h-[19rem] text-wrap text-center items-center rounded-md border-2 p-1 border-transparent hover:border-pink-600">
          <img src="card1.jpg" alt="" />
          <p className="px-5 mt-2 text-md font-semibold">
            I’m a designer looking to share my work
          </p>
          {selectCard1 ? (
            <span
              onClick={toggleCard1}
              className="h-5 w-5 mt-2 border-2 border-black rounded-full cursor-pointer"
            ></span>
          ) : (
            <>
              <p className=" text-sm flex flex-col items-center gap-2 px-5">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Maxime, culpa?
                <span
                  onClick={toggleCard1}
                  className="h-5 w-5  bg-pink-600 rounded-full  text-white cursor-pointer"
                >
                  &#10003;
                </span>
              </p>
            </>
          )}
        </div>
        <div className="flex flex-col w-[15rem] h-[19rem] text-wrap text-center items-center rounded-md border-2 p-1 border-transparent hover:border-pink-600">
          <img src="card2.jpg" alt="" />
          <p className="px-5 mt-2 text-md font-semibold">
            I’m looking to hire a designer
          </p>
          {selectCard2 ? (
            <span
              onClick={toggleCard2}
              className="h-5 w-5 mt-2 border-2 border-black rounded-full cursor-pointer"
            ></span>
          ) : (
            <>
              <p className=" text-sm flex flex-col items-center gap-2 px-5">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Maxime, culpa?
                <span
                  onClick={toggleCard2}
                  className="h-5 w-5  bg-pink-600 rounded-full  text-white cursor-pointer"
                >
                  &#10003;
                </span>
              </p>
            </>
          )}
        </div>
        <div className="flex flex-col w-[15rem] h-[19rem] text-wrap text-center items-center rounded-md border-2 p-1 border-transparent hover:border-pink-600">
          <img src="card3.jpg" alt="" />
          <p className="px-5 mt-2 text-md font-semibold">
            I’m looking for design inspiration
          </p>
          {selectCard3 ? (
            <span
              onClick={toggleCard3}
              className="h-5 w-5 mt-2 border-2 border-black rounded-full cursor-pointer"
            ></span>
          ) : (
            <>
              <p className=" text-sm flex flex-col items-center gap-2 px-5">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Maxime, culpa?
                <span
                  onClick={toggleCard3}
                  className="h-5 w-5  bg-pink-600 rounded-full  text-white cursor-pointer"
                >
                  &#10003;
                </span>
              </p>
            </>
          )}
        </div>
      </div>
      <div className=" flex flex-col items-center font-roboto">
        <p className="  text-xl font-bold">
          Anything else?You can select multiple
        </p>
        <button className="bg-pink-600 text-white border-none py-2 w-40 rounded-md mt-4  hover:bg-pink-800 cursor-pointer">
          Finish
        </button>
        <p className="mt-1 text-sm ">
          or Press
          <span className="hover:underline cursor-pointer"> RETURN</span>
        </p>
      </div>
    </>
  );
}

export default CardSection;
