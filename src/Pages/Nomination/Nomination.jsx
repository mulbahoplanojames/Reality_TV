import FormfacadeEmbed from "@formfacade/embed-react";
import { useContext } from "react";
import { AppContext } from "../../Context/AppContext";

const Nomination = () => {
  const { darkMode } = useContext(AppContext);
  return (
    <>
      <div className="pt-32 px-3">
        <h1 className="text-center text-3xl uppercase text-white">
          Please fill in this form to nominate a person
        </h1>

        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSe6iWzDKwaVqepE1vVclDnbq3yeUuKif1ApssksouRZ586X0Q/viewform?embedded=true"
          width="100%"
          height="569"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
        >
          Loading…
        </iframe>

        {/* <h1 className="text-center text-3xl py-5 md:pb-[9rem]">
          Nomination Portal will be Out Soon
        </h1> */}
      </div>
    </>
  );
};

export default Nomination;
