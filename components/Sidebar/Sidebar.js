import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Sidebar() {
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  const router = useRouter();
  return (
    <>
      <nav className="md:flex-row bg-gray-800 flex  mt-12 mb-10 flex-wrap items-center justify-between md:w-60 z-10 rounded-2xl shadow dark:border dark:border-gray-700">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
            <ul className="md:flex-col md:min-w-full flex flex-col list-none space-y-5 md:space-y-10 md:mt-5 mb-5 mx-auto">
              <li className="items-center mt-5 text-center">
                <Link href="/dashboard/dashboard">
                  <a
                   className=" py-2 px-7 rounded-full bg-blue-900"
                  >
                  
                    Dashboard
                  </a>
                </Link>
              </li>

              <li className="items-center text-center">
                <Link href="/dashboard/settings">
                  <a
                    className=" py-2 px-10 rounded-full bg-blue-900"
                  >
                
      
                    Settings
                  </a>
                </Link>
              </li>

              <li className="items-center text-center">
                <Link href="/dashboard/tables">
                  <a
                    className=" py-2 px-12 rounded-full bg-blue-900"
                  >
                    
                    Tables
                  </a>
                </Link>
              </li>

              <li className="items-center text-center">
                <Link href="/dashboard/maps">
                  <a
                     className=" py-2 px-12 rounded-full bg-blue-900" 
                  > 
                    Maps
                  </a>
                </Link>
              </li>
            </ul>
          
        </div>
      </nav>
    </>
  );
}
