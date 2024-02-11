"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Nav() {
  const handleSignInWithGoogle = async () => {
    try {
      await signIn("google");
    } catch (error: any) {
      console.error("Error signing in with Google:", error.message);
    }
  };

  const {data: session} = useSession();
  console.log(session)
  return (
    <div>
      <nav className="fixed top-0 z-50 w-full bg-white border-b">
        <div className="px-3 py-3 lg:px-5 lg:pl-3 flex justify-between items-center">
          <div>
            <h3 className=" ml-5 font-primary text-3xl text-black text-center font-bold">
              PORTOFOLIO
              <span className="text-blue-400 font-medium">.</span>
            </h3>
          </div>
          <div className="flex items-center">
            <div className="flex items-right mr-10 ms-3">
              <div className="ml-12" id="navbar-default">
                <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                  <li>
                    <Link
                      className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                      href="/"
                    >
                      {" "}
                      Home
                    </Link>
                  </li>
                  <li>
                  <div>
                    {session?.user ? (
                      <div>
                        <Link
                        className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                        href="/posts"
                      >
                          {" "}
                        About
                      </Link>
                      <p>
                         {session.user.email}
                      </p>
                      <button
                        onClick={async () => {
                          await signOut({
                          callbackUrl: "/",
                        })
                        }}
                        className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                      >
                        LogOut
                      </button>
                      </div>
                      ) : (
                        <button
                        onClick={async () => {
                          await signIn("google", {
                            callbackUrl: "/posts", // Mengarahkan pengguna ke halaman /posts setelah masuk
                          });
                        }}
                        className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                      >
                        about
                      </button>
                      
                      )}
                    </div>
                    
                  </li>

                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <button
  type="button"
  data-drawer-target="default-sidebar"
  data-drawer-toggle="default-sidebar"
  aria-controls="default-sidebar"
  className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-700 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
>
  <span className="sr-only">Open sidebar</span>
  <svg
    className="w-6 h-6"
    aria-hidden="true"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      clipRule="evenodd"
      fillRule="evenodd"
      d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
    ></path>
  </svg>
  <span className="ml-1 text-gray-700 dark:text-gray-400">Open Sidebar</span>
</button>



      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white   sm:translate-x-0 "
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-white">
          <ul className="space-y-2 font-medium">
            <div className="w-full max-w-sm pt-12 ">
              <div className="flex flex-col items-center pb-10">
                <Image
                  className="w-24 h-24 mb-3 rounded-full shadow-lg"
                  src="/profile.png"
                  alt="Bonnie image"
                  width={100}
                  height={100}
                />
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  Githani Rizkyka Pasya
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Student
                </span>
                <div className="flex flex-wrap justify-center pt-5">
                  <div className="flex flex-col justify-center items-center">
                    <div className="font-bold">100</div>
                    <div className="font-light text-sm">Collection</div>
                  </div>
                  <div className="flex flex-col space-x-3 justify-center items-center ">
                    <div className="font-bold ">100K</div>
                    <div className="font-light text-sm">Followers</div>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <div className="font-bold">300K</div>
                    <div className="font-light text-sm">Likes</div>
                  </div>
                </div>

                <div className="flex mt-4 md:mt-6">
                  <a
                    href="#"
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Add friend
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700 ms-3"
                  >
                    Message
                  </a>
                </div>
              </div>
            </div>
          </ul>
          <ul className="space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
            <div className="w-full max-w-sm pt-12 ">
              <div className="flex flex-col items-center pb-10">
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  Soft Skill
                </h5>
                <h6 className="mb-1 text-xs font-medium text-gray-500 dark:text-white">
                  Teamwork
                </h6>
                <h6 className="mb-1 text-xs font-medium text-gray-500 dark:text-white">
                  Leadership
                </h6>
                <h6 className="mb-1 text-xs font-medium text-gray-500 dark:text-white">
                  Communication Skill
                </h6>
                <h6 className="mb-1 text-xs font-medium text-gray-500 dark:text-white">
                  Problem Solving
                </h6>
                <h6 className="mb-1 text-xs font-medium text-gray-500 dark:text-white">
                  Time Management
                </h6>
              </div>
            </div>
          </ul>
        </div>
      </aside>
    </div>
  );
}
