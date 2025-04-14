import './App.css'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectLabel,
  SelectGroup,
} from "@/components/ui/select"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

import { Twitter, Linkedin, Instagram, YouTube, Twitterx, YouTubex, Spotify, Supabase, BuyMeaCoffee, Vercel , ProductHunt, Cursor} from './components/Social'
import { AppEditor } from '@/components/AppEditor'


import React from "react";

import { Dock, DockIcon } from "@/components/magicui/dock";
import { Link, User } from 'lucide-react';

export type IconProps = React.HTMLAttributes<SVGElement>;

export function DockDemo() {
  return (
    <div className='relative '>
      <Dock iconMagnification={60} iconDistance={100} className='border-none'>
        <DockIcon className="bg-gray-200 ">
          <Twitterx className="size-full" />
        </DockIcon>
       
        <DockIcon className="bg-gray-200">
          <Linkedin className="size-full" />
        </DockIcon>
        <DockIcon className="bg-gray-200">
          <Instagram className="size-full" />
        </DockIcon>
        <DockIcon className="bg-gray-200">
          <YouTubex className="size-full" />
        </DockIcon>
      
      </Dock>
    </div>
  );
}

const Icons = {
  gitHub: (props: IconProps) => (
    <svg viewBox="0 0 438.549 438.549" {...props}>
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
      ></path>
    </svg>
  ),
  notion: (props: IconProps) => (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6.017 4.313l55.333 -4.087c6.797 -0.583 8.543 -0.19 12.817 2.917l17.663 12.443c2.913 2.14 3.883 2.723 3.883 5.053v68.243c0 4.277 -1.553 6.807 -6.99 7.193L24.467 99.967c-4.08 0.193 -6.023 -0.39 -8.16 -3.113L3.3 79.94c-2.333 -3.113 -3.3 -5.443 -3.3 -8.167V11.113c0 -3.497 1.553 -6.413 6.017 -6.8z"
        fill="#fff"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M61.35 0.227l-55.333 4.087C1.553 4.7 0 7.617 0 11.113v60.66c0 2.723 0.967 5.053 3.3 8.167l13.007 16.913c2.137 2.723 4.08 3.307 8.16 3.113l64.257 -3.89c5.433 -0.387 6.99 -2.917 6.99 -7.193V20.64c0 -2.21 -0.873 -2.847 -3.443 -4.733L74.167 3.143c-4.273 -3.107 -6.02 -3.5 -12.817 -2.917zM25.92 19.523c-5.247 0.353 -6.437 0.433 -9.417 -1.99L8.927 11.507c-0.77 -0.78 -0.383 -1.753 1.557 -1.947l53.193 -3.887c4.467 -0.39 6.793 1.167 8.54 2.527l9.123 6.61c0.39 0.197 1.36 1.36 0.193 1.36l-54.933 3.307 -0.68 0.047zM19.803 88.3V30.367c0 -2.53 0.777 -3.697 3.103 -3.893L86 22.78c2.14 -0.193 3.107 1.167 3.107 3.693v57.547c0 2.53 -0.39 4.67 -3.883 4.863l-60.377 3.5c-3.493 0.193 -5.043 -0.97 -5.043 -4.083zm59.6 -54.827c0.387 1.75 0 3.5 -1.75 3.7l-2.91 0.577v42.773c-2.527 1.36 -4.853 2.137 -6.797 2.137 -3.107 0 -3.883 -0.973 -6.21 -3.887l-19.03 -29.94v28.967l6.02 1.363s0 3.5 -4.857 3.5l-13.39 0.777c-0.39 -0.78 0 -2.723 1.357 -3.11l3.497 -0.97v-38.3L30.48 40.667c-0.39 -1.75 0.58 -4.277 3.3 -4.473l14.367 -0.967 19.8 30.327v-26.83l-5.047 -0.58c-0.39 -2.143 1.163 -3.7 3.103 -3.89l13.4 -0.78z"
        fill="#000"
      />
    </svg>
  ),
  googleDrive: (props: IconProps) => (
    <svg viewBox="0 0 87.3 78" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="m6.6 66.85 3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8h-27.5c0 1.55.4 3.1 1.2 4.5z"
        fill="#0066da"
      />
      <path
        d="m43.65 25-13.75-23.8c-1.35.8-2.5 1.9-3.3 3.3l-25.4 44a9.06 9.06 0 0 0 -1.2 4.5h27.5z"
        fill="#00ac47"
      />
      <path
        d="m73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5h-27.502l5.852 11.5z"
        fill="#ea4335"
      />
      <path
        d="m43.65 25 13.75-23.8c-1.35-.8-2.9-1.2-4.5-1.2h-18.5c-1.6 0-3.15.45-4.5 1.2z"
        fill="#00832d"
      />
      <path
        d="m59.8 53h-32.3l-13.75 23.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z"
        fill="#2684fc"
      />
      <path
        d="m73.4 26.5-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3l-13.75 23.8 16.15 28h27.45c0-1.55-.4-3.1-1.2-4.5z"
        fill="#ffba00"
      />
    </svg>
  ),
  whatsapp: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 175.216 175.552"
      {...props}
    >
      <defs>
        <linearGradient
          id="b"
          x1="85.915"
          x2="86.535"
          y1="32.567"
          y2="137.092"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#57d163" />
          <stop offset="1" stopColor="#23b33a" />
        </linearGradient>
        <filter
          id="a"
          width="1.115"
          height="1.114"
          x="-.057"
          y="-.057"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur stdDeviation="3.531" />
        </filter>
      </defs>
      <path
        fill="#b3b3b3"
        d="m54.532 138.45 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.523h.023c33.707 0 61.139-27.426 61.153-61.135.006-16.335-6.349-31.696-17.895-43.251A60.75 60.75 0 0 0 87.94 25.983c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.558zm-40.811 23.544L24.16 123.88c-6.438-11.154-9.825-23.808-9.821-36.772.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954zm0 0"
        filter="url(#a)"
      />
      <path
        fill="#fff"
        d="m12.966 161.238 10.439-38.114a73.42 73.42 0 0 1-9.821-36.772c.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954z"
      />
      <path
        fill="url(#linearGradient1780)"
        d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.559 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.524h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.929z"
      />
      <path
        fill="url(#b)"
        d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.313-6.179 22.558 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.517 31.126 8.523h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.928z"
      />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M68.772 55.603c-1.378-3.061-2.828-3.123-4.137-3.176l-3.524-.043c-1.226 0-3.218.46-4.902 2.3s-6.435 6.287-6.435 15.332 6.588 17.785 7.506 19.013 12.718 20.381 31.405 27.75c15.529 6.124 18.689 4.906 22.061 4.6s10.877-4.447 12.408-8.74 1.532-7.971 1.073-8.74-1.685-1.226-3.525-2.146-10.877-5.367-12.562-5.981-2.91-.919-4.137.921-4.746 5.979-5.819 7.206-2.144 1.381-3.984.462-7.76-2.861-14.784-9.124c-5.465-4.873-9.154-10.891-10.228-12.73s-.114-2.835.808-3.751c.825-.824 1.838-2.147 2.759-3.22s1.224-1.84 1.836-3.065.307-2.301-.153-3.22-4.032-10.011-5.666-13.647"
      />
    </svg>
  ),
  Instagram: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 175.216 175.552"
      {...props}
    >
      <defs>
        <linearGradient
          id="b"
          x1="85.915"
          x2="86.535"
          y1="32.567"
          y2="137.092"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#57d163" />
          <stop offset="1" stopColor="#23b33a" />
        </linearGradient>
        <filter
          id="a"
          width="1.115"
          height="1.114"
          x="-.057"
          y="-.057"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur stdDeviation="3.531" />
        </filter>
      </defs>
      <path
        fill="#b3b3b3"
        d="m54.532 138.45 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.523h.023c33.707 0 61.139-27.426 61.153-61.135.006-16.335-6.349-31.696-17.895-43.251A60.75 60.75 0 0 0 87.94 25.983c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.558zm-40.811 23.544L24.16 123.88c-6.438-11.154-9.825-23.808-9.821-36.772.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954zm0 0"
        filter="url(#a)"
      />
      <path
        fill="#fff"
        d="m12.966 161.238 10.439-38.114a73.42 73.42 0 0 1-9.821-36.772c.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954z"
      />
      <path
        fill="url(#linearGradient1780)"
        d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.559 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.524h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.929z"
      />
      <path
        fill="url(#b)"
        d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.313-6.179 22.558 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.517 31.126 8.523h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.928z"
      />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M68.772 55.603c-1.378-3.061-2.828-3.123-4.137-3.176l-3.524-.043c-1.226 0-3.218.46-4.902 2.3s-6.435 6.287-6.435 15.332 6.588 17.785 7.506 19.013 12.718 20.381 31.405 27.75c15.529 6.124 18.689 4.906 22.061 4.6s10.877-4.447 12.408-8.74 1.532-7.971 1.073-8.74-1.685-1.226-3.525-2.146-10.877-5.367-12.562-5.981-2.91-.919-4.137.921-4.746 5.979-5.819 7.206-2.144 1.381-3.984.462-7.76-2.861-14.784-9.124c-5.465-4.873-9.154-10.891-10.228-12.73s-.114-2.835.808-3.751c.825-.824 1.838-2.147 2.759-3.22s1.224-1.84 1.836-3.065.307-2.301-.153-3.22-4.032-10.011-5.666-13.647"
      />
    </svg>
  ),

};



// Reusable layout component
const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='w-[100vw] bg-green-400'>
      <div className='w-[60vw] h-[100vh] rounded-r-4xl bg-white flex flex-col items-center'>
        {children}
      </div>
    </div>
  )
}

const CreatLink = () => {
  return (
    <AuthLayout>
      <div className="flex-grow flex items-center justify-center">
        <div>
          <div className="space-y-1.5">
            <h2 className='text-3xl font-medium'>Create your account</h2>
            <p className='text-sm text-gray-500'>Choose a username for your page</p>
          </div>
          <div className="mt-5">
            <div className="flex items-center gap-0.5 w-[35vw] p-3 rounded-xl bg-[#f3f4f6]">
              <span className=" text-base font-medium">bestoolsfor.me/</span>
              <input
                style={{ outline: "none" }}
                className='w-full bg-transparent text-base placeholder-gray-400 text-sm'
                type="text"
                placeholder="yourname "
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mb-5 w-full border-t-1 border-[#ddd] pt-5 px-5">
        <div className='w-full flex justify-between items-center' >
          <p>Already have an account? Sign in</p>
          <button className='bg-green-400 px-10 py-5 rounded-4xl cursor-pointer font-medium' >Sign up</button>
        </div>
      </div>
    </AuthLayout>
  )
}

const SignUp = () => {
  return (
    <AuthLayout>
      {/* Your SignUp content will go here */}
      <div className="flex-grow flex items-center justify-center">
        <div className='' >
          <div className="space-y-1.5 mb-10">
            <h2 className='text-4xl font-medium'>Welcome, yassr</h2>
            <p className='text-sm text-gray-500'>bestoolsfor.me/yassr is yours!</p>
          </div>

          <div className="space-y-5 mb-6">
            <div className='flex gap-3' >
              <div className="flex-1">
                <input style={{ outline: "none" }} placeholder='Email adress' className='w-full px-4 py-3 bg-[#f3f4f6] rounded-xl text-sm placeholder-gray-400' type="text" />
              </div>
              <div className="relative flex-1">
                <input
                  style={{ outline: "none" }}
                  placeholder='Password '
                  className='w-full px-4 pr-16 py-3 bg-[#f3f4f6] rounded-xl text-sm placeholder-gray-400'
                  type="password"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs  bg-white px-2 py-0.5 font-medium  rounded-md cursor-pointer ">Show</button>
              </div>
            </div>

            <div className=" text-sm font-semibold">
              <p>OR</p>
            </div>
            <div className="">
              <button className='bg-green-400 w-full p-3 text-sm rounded-xl font-medium cursor-pointer flex items-center justify-center gap-2'>
                <svg width="16" height="16" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.5 8.68348C16.5 8.15673 16.4523 7.65666 16.3706 7.16992H8.67383V10.177H13.0807C12.8832 11.1638 12.3042 11.9973 11.446 12.5641V14.5643H14.0752C15.6145 13.1708 16.5 11.1172 16.5 8.68348Z" fill="black"></path><path d="M8.6728 16.4997C10.8797 16.4997 12.7255 15.7796 14.0741 14.5594L11.445 12.5591C10.7094 13.0392 9.77623 13.3325 8.6728 13.3325C6.54087 13.3325 4.73589 11.9257 4.08882 10.0254H1.37793V12.0857C2.71975 14.6994 5.47831 16.4997 8.6728 16.4997Z" fill="black"></path><path d="M4.08954 10.0282C3.91926 9.54808 3.83071 9.03467 3.83071 8.50126C3.83071 7.96785 3.92607 7.45444 4.08954 6.97437V4.91406H1.37865C0.820129 5.99422 0.5 7.20773 0.5 8.50126C0.5 9.79478 0.820129 11.0083 1.37865 12.0885L4.08954 10.0282Z" fill="black"></path><path d="M8.6728 3.66714C9.8784 3.66714 10.9546 4.07386 11.806 4.86731L14.1354 2.58698C12.7255 1.29345 10.8797 0.5 8.6728 0.5C5.47831 0.5 2.71975 2.30027 1.37793 4.91399L4.08882 6.97429C4.73589 5.07401 6.54087 3.66714 8.6728 3.66714Z" fill="black"></path></svg>
                Sign up with google
              </button>
            </div>
          </div>


        </div>
      </div>

      <div className="mb-5 w-full border-t-1 border-[#ddd] pt-5 px-5">
        <div className='w-full flex justify-between items-center' >
          <p>Already have an account? Sign in</p>
        </div>
      </div>
    </AuthLayout>
  )
}

const SignIn = () => {
  return (
    <>
      <AuthLayout>
        {/* Your SignUp content will go here */}
        <div className="flex-grow flex items-center justify-center">
          <div className='' >
            <div className="space-y-1.5 mb-10">
              <h2 className='text-4xl font-medium'>Welcome back</h2>
              <p className='text-sm text-gray-500'>Great to see you again!</p>
            </div>

            <div className="space-y-5 mb-6">
              <div className='flex gap-3' >
                <div className="flex-1">
                  <input style={{ outline: "none" }} placeholder='Email adress' className='w-full px-4 py-3 bg-[#f3f4f6] rounded-xl text-sm placeholder-gray-400' type="text" />
                </div>
                <div className="relative flex-1">
                  <input
                    style={{ outline: "none" }}
                    placeholder='Password '
                    className='w-full px-4 pr-16 py-3 bg-[#f3f4f6] rounded-xl text-sm placeholder-gray-400'
                    type="password"
                  />
                  <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs  bg-white px-2 py-0.5 font-medium  rounded-md cursor-pointer ">Show</button>
                </div>
              </div>


              <div className=" text-sm font-semibold">
                <p>OR</p>
              </div>
              <div className="">
                <button className='bg-green-400 w-full p-3 text-sm rounded-xl font-medium cursor-pointer flex items-center justify-center gap-2'>
                  <svg width="16" height="16" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.5 8.68348C16.5 8.15673 16.4523 7.65666 16.3706 7.16992H8.67383V10.177H13.0807C12.8832 11.1638 12.3042 11.9973 11.446 12.5641V14.5643H14.0752C15.6145 13.1708 16.5 11.1172 16.5 8.68348Z" fill="black"></path><path d="M8.6728 16.4997C10.8797 16.4997 12.7255 15.7796 14.0741 14.5594L11.445 12.5591C10.7094 13.0392 9.77623 13.3325 8.6728 13.3325C6.54087 13.3325 4.73589 11.9257 4.08882 10.0254H1.37793V12.0857C2.71975 14.6994 5.47831 16.4997 8.6728 16.4997Z" fill="black"></path><path d="M4.08954 10.0282C3.91926 9.54808 3.83071 9.03467 3.83071 8.50126C3.83071 7.96785 3.92607 7.45444 4.08954 6.97437V4.91406H1.37865C0.820129 5.99422 0.5 7.20773 0.5 8.50126C0.5 9.79478 0.820129 11.0083 1.37865 12.0885L4.08954 10.0282Z" fill="black"></path><path d="M8.6728 3.66714C9.8784 3.66714 10.9546 4.07386 11.806 4.86731L14.1354 2.58698C12.7255 1.29345 10.8797 0.5 8.6728 0.5C5.47831 0.5 2.71975 2.30027 1.37793 4.91399L4.08882 6.97429C4.73589 5.07401 6.54087 3.66714 8.6728 3.66714Z" fill="black"></path></svg>
                  Sign in with google
                </button>
              </div>
            </div>


          </div>
        </div>

        <div className="mb-5 w-full border-t-1 border-[#ddd] pt-5 px-5">
          <div className='w-full flex justify-between items-center' >
            <p>Don't have an account? Sign up</p>
          </div>
        </div>
      </AuthLayout>
    </>
  )
}

// Reusable button component
const OutlineButton = ({
  children,
  onClick
}: {
  children: React.ReactNode;
  onClick?: () => void
}) => {
  return (
    <button
      onClick={onClick}
      className='border-2 w-full p-3 rounded-xl border-[#ddd] font-medium text-sm cursor-pointer transition-colors hover:bg-green-100 hover:border-green-200'
    >
      {children}
    </button>
  );
};

const UserForm = () => {
  return (
    <>
      <AuthLayout>
        <div className="flex-grow  w-full flex items-center justify-center">
          <div className=' min-w-[55%]' >
            <div className="space-y-1.5 mb-10">
              <h2 className='text-4xl font-medium'>Choose what to add</h2>
              <p className='text-sm text-gray-500'>You can modify it anytime!</p>
            </div>

            <div className='flex flex-col gap-2'>
              <OutlineButton>🔗 Add your social media links</OutlineButton>
              <OutlineButton>🚀 Showcase your projects/startups</OutlineButton>
              <OutlineButton>⭐ Share your favorite websites</OutlineButton>
              <OutlineButton>💻 Display your tech stack</OutlineButton>
            </div>
            <div className="mt-8">
              <button className='bg-green-400 w-full p-3 text-sm  rounded-xl font-medium cursor-pointer'>
                Build your website!
              </button>
            </div>

          </div>
        </div>
      </AuthLayout>
    </>
  )
}

// New component for social media inputs
const SocialMediaInputs = () => {
  return (
    <div className="flex items-center rounded-lg gap-3 overflow-x-auto" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
      <div className='flex gap-1 flex-shrink-0' >
        <Twitter className="h-11 w-11" />
        <input style={{ outline: "none" }} className='border p-2 border-gray-200 bg-[#f3f4f6] rounded-lg text-sm placeholder-gray-400' type="text" placeholder='@username' />
      </div>
      <div className='flex gap-1 flex-shrink-0' >
        <Linkedin className="h-11 w-11" />
        <input style={{ outline: "none" }} className='border p-2 border-gray-200 bg-[#f3f4f6] rounded-lg text-sm placeholder-gray-400' type="text" placeholder='@username' />
      </div>
      <div className='flex gap-1 flex-shrink-0' >
        <Instagram className="h-11 w-11" />
        <input style={{ outline: "none" }} className='border p-2 border-gray-200 bg-[#f3f4f6] rounded-lg text-sm placeholder-gray-400' type="text" placeholder='@username' />
      </div>
      <div className='flex gap-1 flex-shrink-0' >
        <YouTube className="h-11 w-11" />
        <input style={{ outline: "none" }} className='border p-2 border-gray-200 bg-[#f3f4f6] rounded-lg text-sm placeholder-gray-400' type="text" placeholder='@username' />
      </div>
    </div>
  );
};

const ContentLinks = () => {
  return (
    <>
      <div className="flex items-center rounded-lg gap-3 overflow-x-auto" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>

        <div className='flex gap-1 flex-shrink-0' >
          <div className='h-11 w-11 border flex items-center justify-center rounded-lg border-gray-200 bg-[#f3f4f6]' >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20a14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" /></svg>
          </div>
          <div className="relative">
            <input
              style={{ outline: "none" }}
              className='w-full px-4 pr-16 py-3 border border-gray-200 bg-[#f3f4f6] rounded-lg text-sm placeholder-gray-400'
              type="text"
              placeholder='https://www.yoursite.com'
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs bg-white px-2 py-0.5 font-medium rounded-md cursor-pointer">add</button>
          </div>


        </div>

        <div className='flex gap-1 flex-shrink-0' >
          <input
            style={{ outline: "none" }}
            className='w-full  px-4  py-3 border border-gray-200 bg-[#f3f4f6] rounded-lg text-sm placeholder-gray-400'
            type="text"
            placeholder=''
            disabled
            value="stagio.xyz"
          />
        </div>

        <div className='flex gap-1 flex-shrink-0' >
          <input
            style={{ outline: "none" }}
            className='w-full  px-4  py-3 border border-gray-200 bg-[#f3f4f6] rounded-lg text-sm placeholder-gray-400'
            type="text"
            placeholder=''
            disabled
            value="stagio.xyz"
          />
        </div>

        <div className='flex gap-1 flex-shrink-0' >
          <input
            style={{ outline: "none" }}
            className='w-full  px-4  py-3 border border-gray-200 bg-[#f3f4f6] rounded-lg text-sm placeholder-gray-400'
            type="text"
            placeholder=''
            disabled
            value="stagio.xyz"
          />
        </div>

        <div className='flex gap-1 flex-shrink-0' >
          <input
            style={{ outline: "none" }}
            className='w-full  px-4  py-3 border border-gray-200 bg-[#f3f4f6] rounded-lg text-sm placeholder-gray-400'
            type="text"
            placeholder=''
            disabled
            value="stagio.xyz"
          />
        </div>


      </div>
    </>
  )
}

const Projects = () => {
  return (
    <>
      <ContentLinks />
    </>
  )
}

const favorites = () => {
  return (
    <>
      <ContentLinks />
    </>
  )
}

const stacks = () => {
  return (
    <>
      <ContentLinks />
    </>
  )
}

// Updated ProductCard component with fixed height and responsive width
const ProductCard = ({
  icon: Icon,
  title,
  url,
  description = ''
}: {
  icon: React.ComponentType<any>;
  title: string;
  url: string;
  description?: string;
}) => {
  return (
    <div className='p-4 h-auto border border-gray-200 shadow-sm rounded-2xl flex flex-col'>
      <div className='flex gap-3'>
        <div>
          <Icon className="h-12 w-12" />
        </div>
        <div className="flex-1">
          <p className='font-medium'>{title}</p>
          <p className='text-sm text-gray-500'>{url}</p>
        </div>
        <div>
          <button className='text-sm bg-green-400 text-black px-5 py-2 rounded-full font-medium cursor-pointer'>Try it</button>
        </div>
      </div>
      <div className="mt-3 flex-1">
        <textarea
          style={{ outline: "none", lineHeight: "25px" }}
          name=""
          className='w-full resize-none overflow-hidden text-gray-600 placeholder-gray-300'
          placeholder='Add description'
          id=""
          rows={1}
          onInput={(e) => {
            e.currentTarget.style.height = 'auto';
            e.currentTarget.style.height = `${e.currentTarget.scrollHeight}px`;
          }}
        ></textarea>
      </div>
    </div>
  );
};

// Updated PreEditor component with grid layout
export const PreEditor = () => {
  return (
    <>
      <div className='w-full h-[100vh] px-20 py-10 '>
        <div className='w-full h-auto flex  flex-col   pb-30'>
          <div className="flex gap-3 flex-grow ">
            <div className='min-w-[40%] max-w-[50%]  w-auto h-full sticky top-10'>
              <div className='flex flex-col gap-8' >
                <div>
                  <Avatar className="h-46 w-46">
                    <AvatarImage src="https://pbs.twimg.com/profile_images/1907108565380161540/ZnvEv4zj_400x400.jpg" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </div>
                <div className='flex flex-col gap-5 w-full ' >
                  <p className='font-bold text-5xl'>Yassin Atti</p>
                  <textarea
                    style={{ outline: "none" }}
                    name=""
                    className='resize-none  overflow-hidden text-gray-600 placeholder-gray-300 text-xl'
                    placeholder='Your bio'
                    id=""
                    rows={1}
                    onInput={(e) => {
                      e.currentTarget.style.height = 'auto';
                      e.currentTarget.style.height = `${e.currentTarget.scrollHeight}px`;
                    }}
                  ></textarea>
                </div>
              </div>
              <div className='flex justify-start ' >
                <DockDemo />
              </div>
            </div>
            <div className='w-full h-full flex flex-col gap-15  pb-5' >
              <div className='w-full  flex flex-col items-start gap-5' >
                <div className='p-2' >
                  <h2 className='text-2xl font-medium'>My products</h2>
                </div>

                {/* Bento grid layout con columnas independientes */}
                <div className='w-full  flex gap-5'>
                  {/* Primera columna */}
                  <div className='w-1/2 flex flex-col gap-5'>
                    <ProductCard
                      icon={Icons.gitHub}
                      title="Github"
                      url="Github.com"
                      description="Check out my open source projects and contributions that might be very long and take multiple lines to display properly"
                    />
                    <ProductCard
                      icon={Icons.googleDrive}
                      title="Google Drive"
                      url="drive.google.com"
                      description="Access my shared resources and documents"
                    />
                  </div>

                  {/* Segunda columna */}
                  <div className='w-1/2 flex flex-col gap-5'>
                    <ProductCard
                      icon={Icons.notion}
                      title="Notion"
                      url="Notion.so"
                      description="A shorter description"
                    />
                    <ProductCard
                      icon={Icons.whatsapp}
                      title="WhatsApp"
                      url="whatsapp.com"
                      description="Contact me directly through WhatsApp for quick responses"
                    />

                    
                  </div>

                  
                </div>
              </div>




              <div className='w-full h-full flex flex-col gap-10' >
                <div className='w-full  flex flex-col items-start gap-5' >
                  <div className='p-2' >
                    <h2 className='text-2xl font-medium'>Products I use & love</h2>
                  </div>


                  {/* Bento grid layout con columnas independientes */}
                  <div className='w-full  flex gap-5'>
                    {/* Primera columna */}
                    <div className='w-1/5 flex flex-col gap-7'>
                      <div className='p-5 h-auto border border-gray-200 shadow-sm rounded-2xl flex flex-col' >
                        <div className='flex flex-col gap-2'>
                          <div>
                            <Spotify className="h-10 w-10" />
                          </div>
                          <div className="flex-1">
                            <p className='font-medium text-sm '>Spotify</p>
                            <p className='text-sm text-gray-500 text-xs'>Spotify.com</p>
                          </div>
                         
                        </div>
                      </div>
                    </div>
                    
                      
                    

                    
                  </div>


                </div>

              </div>




              <div className='w-full h-full flex flex-col gap-10' >
                <div className='w-full  flex flex-col items-start gap-5' >
                  <div className='p-2' >
                    <h2 className='text-2xl font-medium'>My Stack</h2>
                  </div>


                  {/* Bento grid layout con columnas independientes */}
                  <div className='w-full flex gap-5 '>
                    {/* Primera columna */}
                    <div className='w-1/3 flex flex-col gap-7'>
                      <div className='p-5 h-auto gap-3 border border-gray-200 shadow-sm rounded-2xl flex flex-col' >
                        <div className='flex  gap-2'>
                          <div>
                            <Supabase className="h-10 w-10" />
                          </div>
                          <div className="flex-1">
                            <p className='font-medium text-sm '>Supabase</p>
                            <p className='text-sm text-gray-500 text-xs'>Supabase.com</p>
                          </div>
                         
                        </div>
                        <div>
                          <textarea
                            style={{ outline: "none" }}
                            name=""
                            className='resize-none  overflow-hidden text-gray-600 placeholder-gray-300 text-sm'
                            placeholder='Add description'
                            id=""
                            rows={1}
                            onInput={(e) => {
                              e.currentTarget.style.height = 'auto';
                              e.currentTarget.style.height = `${e.currentTarget.scrollHeight}px`; 
                            }}
                          ></textarea>
                        </div>
                      </div>
                    </div>

                    <div className='w-1/3 flex flex-col gap-7'>
                      <div className='p-5 h-auto gap-3 border border-gray-200 shadow-sm rounded-2xl flex flex-col' >
                        <div className='flex  gap-2'>
                          <div>
                            <BuyMeaCoffee className="h-10 w-10" />
                          </div>
                          <div className="flex-1">
                            <p className='font-medium text-sm '>BuyMeACoffe</p>
                            <p className='text-sm text-gray-500 text-xs'>buymeacoffe.com</p>
                          </div>
                         
                        </div>
                        <div>
                          <textarea
                            style={{ outline: "none" }}
                            name=""
                            className='resize-none  overflow-hidden text-gray-600 placeholder-gray-300 text-sm'
                            placeholder='Add description'
                            id=""
                            rows={1}
                            onInput={(e) => {
                              e.currentTarget.style.height = 'auto';
                              e.currentTarget.style.height = `${e.currentTarget.scrollHeight}px`; 
                            }}
                          ></textarea>
                        </div>
                      </div>
                    </div>

                    <div className='w-1/3 flex flex-col gap-7'>
                      <div className='p-5 h-auto gap-3 border border-gray-200 shadow-sm rounded-2xl flex flex-col' >
                        <div className='flex  gap-2'>
                          <div>
                            <Vercel className="h-10 w-10" />
                          </div>
                          <div className="flex-1">
                            <p className='font-medium text-sm '>Vercel</p>
                            <p className='text-sm text-gray-500 text-xs'>Vercel.com</p>
                          </div>
                         
                        </div>
                        <div>
                          <textarea
                            style={{ outline: "none" }}
                            name=""
                            className='resize-none  overflow-hidden text-gray-600 placeholder-gray-300 text-sm'
                            placeholder='Add description'
                            id=""
                            rows={1}
                            onInput={(e) => {
                              e.currentTarget.style.height = 'auto';
                              e.currentTarget.style.height = `${e.currentTarget.scrollHeight}px`; 
                            }}
                          ></textarea>
                        </div>
                      </div>
                    </div>  
                    
                    

                    
                  </div>


                </div>

              </div>





            </div>
          </div>

          <div className='fixed  bottom-5 left-1/2  transform -translate-x-1/2 p-5 flex items-center justify-end w-[95%] border border-gray-300 rounded-3xl shadow-lg gap-5 bg-white z-50'>
            <div className=''>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Edit your bestools" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select type</SelectLabel>
                    <SelectItem value="apple">Add socials</SelectItem>
                    <SelectItem value="banana">Add projects</SelectItem>
                    <SelectItem value="blueberry">Add favorites</SelectItem>
                    <SelectItem value="grapes">Add tech stack</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div className='w-full max-w-full overflow-hidden'>
              <SocialMediaInputs />
            </div>

            <div className='ml-auto flex gap-3'>
              <button className='px-10 py-3 border border-gray-300 rounded-lg text-sm font-medium cursor-pointer '>Later</button>
              <button className='px-10 py-3 bg-green-400 rounded-lg text-sm font-medium cursor-pointer '>Next</button>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}



function App() {
  return (
    <PreEditor />
  )
}

export default App
