const NewsLetter = () => {
  return (
    <>
      <div className="shadow-2xl shadow-slate-400 text-center p-8 rounded-lg mb-16">
        <h1 className="text-3xl font-semibold uppercase pb-4">
          SIGN UP TO OUR NEWS LATTER
        </h1>
        <p className="md:px-[16rem] px-1 text-lg mb-6">
          Sign up to get daily updates on the reality tv show, and news about
          International Students Studying in Rwanda, Africa and many more...
        </p>

        <form className="flex gap-4 md:px-20 md:flex-nowrap flex-wrap">
          <input
            type="text"
            placeholder="Enter your email address"
            className="w-full p-2 rounded-md border-2 border-blue-300 outline-none"
          />
          <button
            type="submit"
            className="py-2 px-4 bg-blue-300 text-xl text-white border-none md:rounded-full rounded-md md:w-[30%] w-full hover:bg-opacity-70"
            onClick={(e) => e.preventDefault()}
          >
            Subscribe
          </button>
        </form>
      </div>
    </>
  );
};

export default NewsLetter;
