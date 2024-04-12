const SignupForm = () => {
  return (
    <>
      <div className=" flex justify-between  font-roboto lg:px-20 mt-10 md:mt-20 ">
        {/* Left container for signup image  */}
        <div className="hidden bg-yellow-300  md:block flex-col px-5 ml-5 ">
          <div className=" flex flex-col gap-2 px-5">
            <span className="text-sm text-amber-700 pt-5  tracking-[0.05em] font-pacifico ">
              dribbble
            </span>
            <span className=" text-amber-900 text-xl tracking-[0.03em] font-extrabold  mb-5 ">
              Discover the world’s top Designer’s & Creatives.
            </span>
          </div>
          <img src="signupImg.svg" alt="" />
          <span className="w-full mt-10 px-5  ">
            <p className="text-amber-900 font-semibold text-sm ">
              Art by
              <span className="underline cursor-pointer"> Peter Traka</span>
            </p>
          </span>
        </div>

        {/* Right container for form data */}
        <div className=" relative  flex  flex-col items-center px-10 sm:items-start w-full  ">
          <span className="hidden lg:block absolute right-0">
            Already a member?
            <span className="text-purple-700 hover:underline cursor-pointer">
              Sign In
            </span>
          </span>
          <h3 className="font-bold text-2xl py-8 ">Sign up to Dribbble</h3>
          <div className="flex sm:flex-row flex-col sm:mt-0 mt-5  sm:gap-16 gap-5 w-full sm:w-0 ">
            <span className="flex flex-col ">
              <label htmlFor="name" className="font-bold ">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="outline-none border-none mt-1 p-1 bg-gray-200 text-black "
              />
            </span>
            <span className="flex flex-col">
              <label htmlFor="username" className="font-bold">
                Username
              </label>
              <input
                type="text"
                placeholder="Enter your username"
                className="outline-none border-none mt-1 p-1 bg-gray-200 text-black "
              />
            </span>
          </div>
          <span className="flex flex-col mt-5 md:w-[28rem] w-full ">
            <label htmlFor="username" className="font-bold">
              Email
            </label>
            <input
              type="text"
              placeholder="example1@gmail.com"
              className="outline-none border-none mt-1 p-1 text-black bg-gray-200 "
            />
          </span>
          <span className="flex flex-col mt-5 md:w-[28rem] w-full">
            <label htmlFor="username" className="font-bold">
              Password
            </label>
            <input
              type="text"
              placeholder="6+ characters"
              className="outline-none border-none mt-1 p-1 bg-gray-200 text-black "
            />
          </span>
          
            <span className="text-sm w-full text-center  sm:text-start mt-5">
              <input type="checkbox" className="mr-1 " />
              Creating an account means you’re okay with our
              <span className="text-purple-700 hover:underline cursor-pointer ml-1 mr-1 ">
                Terms of Service, Privacy Policy,
              </span>
              and our default
              <span className="text-purple-700 hover:underline cursor-pointer ml-1 ">
                Notification Setting.
              </span>
            </span>

          <button className="bg-pink-600 text-white border-none py-2 w-40 rounded-md mt-5 mb-3 hover:bg-pink-800 cursor-pointer">
            Create Account
          </button>
          <p className="lg:hidden mb-2">
            Already a member?
            <span className="hover:underline text-purple-600 cursor-pointer">
              Sign In
            </span>
          </p>
          <span className="text-xs w-full text-center sm:text-start">
            This site is protected by reCAPTCHA and the Google
            <span className="text-purple-700 hover:underline cursor-pointer mr-1 ml-1">
              Privacy Policy
            </span>
            and
            <span className="text-purple-700 hover:underline cursor-pointer mr-1 ml-1">
              Terms of Service
            </span>
            apply.
          </span>
        </div>
      </div>
    </>
  );
};

export default SignupForm;
