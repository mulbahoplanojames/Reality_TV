import image from "/src/assets/hero3.jpg";

const ContactUs = () => {
  return (
    <>
      <div className="pt-24 md:px-10 px-3 pb-20">
        <h1 className="text-3xl font-bold text-center pb-3">
          Get In Touch With Us
        </h1>
        <p className="text-lg text-center pb-14 md:px-[10rem] px-1">
          We welcome your inquiries and feedback. Please feel free to reach out
          to us with any questions, suggestions, or collaboration opportunities.
          Your input is invaluable as we strive to better serve you and our
          community.
        </p>

        <div className="grid md:grid-cols-2 grid-cols-1 gap-6 shadow-2xl shadow-slate-300">
          <div className="w-full md:h-[30rem] h-[40vh] bg-red-400 overflow-hidden rounded-md">
            <img src={image} alt="" className="w-full h-full object-cover" />
          </div>
          <form action="" className="w-full md:px-4 px-1">
            <div className="">
              <label htmlFor="name" className="text-lg inline-block pb-1">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full p-2 rounded-md border-2 border-blue-300 outline-none mb-6"
              />
            </div>
            <div className="mb-2">
              <label htmlFor="email" className="text-lg inline-block pb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 rounded-md border-2 border-blue-300 outline-none mb-6"
              />
            </div>
            <div className="">
              <label htmlFor="message" className="text-lg inline-block pb-1">
                Message
              </label>
              <textarea
                name=""
                id=""
                placeholder="Enter your message"
                className="w-full p-2 rounded-md border-2 border-blue-300 outline-none mb-6 h-[12rem]"
              />
            </div>

            <button
              type="submit"
              className="py-2 px-6 bg-blue-300 text-xl text-white border-none rounded-xl hover:bg-opacity-70 mb-5"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
