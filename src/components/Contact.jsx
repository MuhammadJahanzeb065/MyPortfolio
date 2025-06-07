import React from "react";

function Contact() {
  return (
    <div
      id="Contact"
      className="flex flex-col min-h-screen w-full justify-center items-center gap-16 p-8"
    >
      <h1 className="text-center text-6xl font-light text-teal-600">
        Get in Touch
      </h1>

      <form 
        action="https://formspree.io/f/movwjbek"
        method="POST"
        className="flex w-full max-w-md flex-col gap-8 rounded-lg p-6 md:max-w-lg lg:max-w-xl">
        <div className="flex flex-col gap-4 ">
          <input
            name="message"
            type="text"
            placeholder=" Name"
            className="border-2 rounded-lg border-teal-400 px-4 py-3 text-lg outline-none transition-all duration-200 hover:bg-teal-50 focus:ring-2 focus:ring-teal-500"
          />
          <input
            name="message"
            type="text"
            placeholder="Sur Name"
            className="border-2 rounded-lg border-teal-400 px-4 py-3 text-lg outline-none transition-all duration-200 hover:bg-teal-50 focus:ring-2 focus:ring-teal-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="border-2 rounded-lg border-teal-400 px-4 py-3 text-lg outline-none transition-all duration-200 hover:bg-teal-50 focus:ring-2 focus:ring-teal-500"
          />
          <input
            type="text"
            name="message"
            placeholder="Retype Email"
            className="border-2 rounded-lg border-teal-400 px-4 py-3 text-lg outline-none transition-all duration-200 hover:bg-teal-50 focus:ring-2 focus:ring-teal-500"
          />
        </div>

        <textarea
          name="message"
          placeholder="Message"
          className="h-32 w-full resize-none border-2 rounded-lg border-teal-400 px-4 py-3 text-lg outline-none transition-all duration-200 hover:bg-teal-50 focus:ring-2 focus:ring-teal-500"
        ></textarea>
        <button
          type="submit"
          className="bg-teal-400 font-semibold text-white rounded-lg py-3 px-4 cursor-pointer
          hover:scale-102 hover:bg-teal-500 transition-all duration-300  "
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
