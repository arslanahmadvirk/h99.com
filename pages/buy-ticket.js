import Image from "next/image";
import Link from "next/link";

export default function BuyTicket() {
  return (
    <section className="flex flex-col items-center justify-center mt-10 md:mt-0 px-6 py-8 mx-auto lg:py-0 md:mt-12 md:mb-12">
      <div className="w-full  rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight  md:text-2xl text-white text-center">
            Buy Ticket
          </h1>
          <div className="text-center p-2 rounded-full border">
            <p className="text-white">Each play cost $2.00</p>
          </div>
          <form className="space-y-4 md:space-y-6" action="#">
            <div>
              <label
                for="text"
                className="block mb-2 text-sm font-medium  text-white"
              >
                How many plays would you like to purchase?
              </label>
              <select
                id="countries"
                class=" border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white  "
              >
                <option selected>Choose plays</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>
            <div>
              <label
                for="text"
                className="block mb-2 text-sm font-medium  text-white"
              >
                How many drawings do you want to enter?
              </label>
              <select
                id="countries"
                class=" border   text-sm rounded-lg   block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white  "
              >
                <option selected>Choose draws</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>

            <div>
              <label
                for="text"
                className="block mb-2 text-sm font-medium  text-white"
              >
                Pick your ticket number
              </label>
              <select
                id="countries"
                class=" border   text-sm rounded-lg   block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white  "
              >
                <option selected>Pick number</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>
            <div className="flex row space-x-2 text-white">
              <p>Total:</p>
              <p>$20</p>
            </div>
            <button
              type="submit"
              className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary-600 hover:bg-primary-700 focus:ring-primary-800"
            >
              Buy Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
