import React from "react";

const Form = () => {
  return (
    <form className="flex flex-col gap-3 py-5">
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        className="border border-gray-300 rounded-md p-2"
        placeholder="Name"
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        className="border border-gray-300 rounded-md p-2"
        placeholder="Email"
      />
      <label htmlFor="message">Message</label>
      <textarea
        id="message"
        className="border border-gray-300 rounded-md p-2"
        placeholder="Message"
      />
      <button
        type="submit"
        className="border border-gray-300 rounded-md p-2 text-2xl text-"
      >
        Send
      </button>
    </form>
  );
};

export default Form;
