import React from "react";

const Contact = () => {
  return (
    <div className="my-5">
      <h1 className="text-3xl text-accent">Contact With Me:</h1>
      <div className=" mx-auto md:mx-60 lg:mx-80 ">
        <form
          action="https://formsubmit.co/anik.fahim09@gmail.com"
          method="POST"
        >
          <label class="label">
            <span class="label-text text-white text-xl">Your Name?</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            class="input input-bordered w-full max-w-xs text-black"
          />
          <label class="label">
            <span class="label-text text-white text-xl">Email:</span>
          </label>
          <input
            type="text"
            name="email"
            placeholder="Your Email"
            class="input input-bordered w-full max-w-xs text-black"
          />
          <label class="label">
            <span class="label-text text-white text-xl">Subject:</span>
          </label>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            class="input input-bordered w-full max-w-xs text-black"
          />
          <label class="label">
            <span class="label-text text-white text-xl">Your Message:</span>
          </label>
          <textarea
            name="message"
            class="textarea textarea-primary mt-3 text-black"
            placeholder="Your Message"
          ></textarea>
          <br />
          <button className="btn btn-accent mt-2 w-32" type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
