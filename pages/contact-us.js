import Image from "next/image";
import Link from "next/link";

export default function ContactUs() {
  return (
    <section className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0 md:mt-12 md:mb-12">
      <div className="w-full  rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight  md:text-2xl text-white text-center">
            Contact Us
          </h1>
          <p class="mb-8 lg:mb-16 font-light text-center  text-gray-400 sm:text-xl">
            Got a technical issue? Want to send feedback about a beta feature?
            Need details about our Business plan? Let us know.
          </p>
          <form className="space-y-4 md:space-y-6" action="#">
            <div>
              <label
                for="text"
                className="block mb-2 text-sm font-medium  text-white"
              >
                Your email
              </label>
              <input
                type="email"
                name="username"
                id="username"
                className=" border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                placeholder="someone@example.com"
                required
              />
            </div>
            <div>
              <label
                for="text"
                className="block mb-2 text-sm font-medium  text-white"
              >
                Subject
              </label>
              <input
                type="text"
                name="username"
                id="username"
                className=" border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                placeholder="abc"
                required
              />
            </div>

            <div>
              <label
                for="text"
                className="block mb-2 text-sm font-medium  text-white"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="6"
                class="block p-2.5 w-full text-sm   rounded-lg shadow-sm border ocus:ring-primary-500 focus:border-primary-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
                placeholder="Leave a comment..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary-600 hover:bg-primary-700 focus:ring-primary-800"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
