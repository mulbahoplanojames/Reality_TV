import CriterialsBreadCrum from "../../../Components/Criterials_BreadCrum/CriterialsBreadCrum";

const MusicCriterials = () => {
  return (
    <>
      <CriterialsBreadCrum text={"Musical Awards"} />
      <div className="md:px-16 px-4 pb-20">
        <h1 className="text-3xl font-bold  pt-8 pb-4 px-2">
          {" "}
          Musical award criteria’s{" "}
        </h1>

        <ul className="text-lg px-6 list-decimal">
          <li>Best rapper </li>
          <li>Artist of the year</li>
          <li>Gospel artist </li>
        </ul>

        <h2 className="text-3xl font-bold  pt-8 pb-4 ">Purpose:</h2>
        <p className="text-lg">
          To acknowledge and celebrate students who excel comprehensively in
          their musical endeavors. To inspire aspiring musicians towards
          excellence and enhance their motivation.
        </p>

        <h2 className="text-3xl font-bold  pt-8 pb-4"> Year Level </h2>

        <ul className="text-lg px-6 list-decimal ">
          <li>
            The nominees must have released at least 2 hit songs within the
            Liberian community in Rwanda from the past year up to the current
            year of 2024
          </li>
          <li>
            The number of streams on various social media platforms,
            particularly audio Mack and YouTube. (10%){" "}
          </li>
          <li>
            Nominees must have released a new song during the first six months
            of 2024
          </li>
          <li>
            The length of messages, lyrics and vocal delivery of the song.
          </li>
        </ul>
      </div>
    </>
  );
};

export default MusicCriterials;
