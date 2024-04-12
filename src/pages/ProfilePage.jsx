import React from "react";

function ProfilePage() {
  return (
    <>
      <div className="text-sm text-pink-500 tracking-[0.05em] font-pacifico  ml-10 mt-10">
        dribbble
      </div>
      <div className="flex flex-col justify-center items-center font-roboto mt-5">
        <div>
          <p className="text-3xl font-bold">
            Welcome! Let's create your profile
          </p>
          <p className="text-gray-600 pl-1">
            Let other get to know you better! You can do these later
          </p>
          <p className="mt-8 mb-3 font-bold text-xl">Add an avatar</p>
          <span className="flex gap-8">
            <img src="profileImg.svg" alt="img" />
            <span className="mt-5 flex flex-col gap-3">
              <input type="file" />
              <span className="flex gap-1">
                <select name="defaultImg" className="outline-none border-none">
                  <option value="img1">Img1</option>
                  <option value="img2">Img2</option>
                  <option value="img3">Img3</option>
                </select>
                <p className="text-md">or choose one of our defaults</p>
              </span>
            </span>
          </span>
          <span className="flex flex-col">
            <label htmlFor="username" className=" mt-10 font-bold text-xl ">
              Add your location
            </label>
            <input
              type="text"
              placeholder="Enter a location"
              className="outline-none border-none mt-1 p-1 bg-gray-200 text-black "
            />
          </span>
          <button className="bg-pink-600 text-white border-none px-4 py-2 w-40 rounded-md mt-7  hover:bg-pink-800 cursor-pointer">
            Next
          </button>
          <p className="ml-6 mt-1 text-sm">
            or Press
            <span className="hover:underline cursor-pointer"> RETURN</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default ProfilePage;
