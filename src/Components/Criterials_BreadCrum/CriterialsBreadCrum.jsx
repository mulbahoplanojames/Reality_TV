import { criterialsLinks } from "../../Data/Data";

const CriterialsBreadCrum = () => {
  return (
    <>
      <div className="md:pt-28 pt-20 md:px-10 px-1 pb-20">
        <div className="navbar bg-blue-200 rounded-md ">
          <div className="flex-1">
            <a className="btn btn-ghost text-xl">Criterials</a>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a>Academy Awards</a>
              </li>
              <li>
                <details>
                  <summary>Criterials</summary>
                  <ul className="bg-base-100 rounded-t-none p-2">
                    {criterialsLinks.map((link) => (
                      <li key={link.label}>
                        <a href={link.path}>{link.label}</a>
                      </li>
                    ))}
                  </ul>
                </details>
              </li>
            </ul>
          </div>
        </div>

        {/* --------------------------------------------------------------------------------------- */}
        <div className="px-2">
          <h1 className="text-3xl font-bold  pt-8 pb-4 px-2">
            Academics Awards
          </h1>

          <ul className="text-lg px-6 list-decimal">
            <li>Faculty of Law</li>
            <li>Faculty of Business</li>
            <li>Faculty of Computer Science</li>
          </ul>

          <h2 className="text-3xl font-bold  pt-8 pb-4 ">Purpose:</h2>
          <p className="text-lg">
            To recognize and honor students who achieve well across the breadth
            of their subjects. To promote students aspiring to academic
            excellence and provide additional motivation.
          </p>

          <h2 className="text-3xl font-bold  pt-8 pb-4"> Year Level </h2>

          <ul className="text-lg px-6 list-decimal ">
            <li>
              Have attained 4 or more 85 standards relative to the number of
              subjects they study in that year level.
            </li>
            <li>Having have no level of achievement below 75 standard. </li>
            <li>
              Excellent/very good behavior with no more than one (1)
              satisfactory behavior. Nothing less than B and Intelligent
            </li>
            <li>
              Legal Advocacy: Engaged in moot court competitions, mock trial
              teams, or other activities that demonstrate advocacy skills. Note,
              these trial court or practice court, nominees must be given an
              award or certificate as act of performance.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default CriterialsBreadCrum;
