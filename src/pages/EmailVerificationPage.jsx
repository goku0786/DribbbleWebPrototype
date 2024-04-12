import React from 'react'
import { MdMarkEmailUnread } from "react-icons/md";


function EmailVerificationPage() {
  return (
    <div className='font-roboto flex flex-col items-center gap-3 text-gray-500 py-10  px-[5rem] text-center '>
        <h1 className='font-bold text-4xl text-black'>Please verify your email...</h1>
        <MdMarkEmailUnread  className='text-[5rem] text-black'/>
        <p> Please verify your email address. We’ve sent a cofirmation email to:</p>
        <p>Click the confirmation link in that email to begin using Dribbble</p>
        <p className='text-center'>Didn’t receive the email? Check your Spam folder, it may have been caught by a filter. If you still don’t see it, you can <span className='text-pink-600 hover:underline cursor-pointer'>resend the confirmation email.</span> </p>
        <p className='text-center'>Wrong email address?<span className='text-pink-600 hover:underline cursor-pointer'>Change it.</span> </p>
    </div>
  )
}

export default EmailVerificationPage