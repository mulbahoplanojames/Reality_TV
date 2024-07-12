import FormfacadeEmbed from "@formfacade/embed-react";

const Nomination = () => {
  return (
    <>
      <div className="pt-32 px-3 ">
        <FormfacadeEmbed
          formFacadeURL="https://formfacade.com/include/108351829281762739211/form/1FAIpQLSe6iWzDKwaVqepE1vVclDnbq3yeUuKif1ApssksouRZ586X0Q/classic.js/?div=ff-compose"
          onSubmitForm={() => console.log("Form submitted")}
        />
      </div>
    </>
  );
};

export default Nomination;
