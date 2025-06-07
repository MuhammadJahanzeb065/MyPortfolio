import React from "react";

function Experience() {
  return (
    <div
      id="Experience"
      className="flex min-h-screen flex-col w-full justify-center items-center
    gap-20 p-14 md:p-20 lg:p-36"
    >
      <h1 className="text-center text-5xl font-light">Experience</h1>

      <div className="flex flex-wrap gap-0 md:flex-nowrap md:gap-10 ">
        <div className="flex-1">
          {/* experience 1 */}
          <div className="relative space-y-1 border-l-2 border-gray-400 p-8 text-left">
            <h1 className="text-xl font-semibold md:text-2xl">
              Army Land Management System
            </h1>
            <p className=" text-lg text-gray-700 font-semibold">GIS Officer</p>
            <p className="text-sm  text-gray-600">
              <li>
                Maintained a web-based application enabling spatial filtering at
                various administrative and geographic levels using technologies
                like HTML, Bootstrap, JavaScript, jQuery, and Leaflet.
              </li>
              <li>
                Utilized MapTiler Server for map tile generation and display,
                ensuring efficient and interactive map visualization within the
                web app.
              </li>
              <li>
                Managed GeoServer to host spatial datasets, facilitating
                seamless data access through Web Feature Service (WFS) calls for
                real-time data fetching and integration into the front-end.
              </li>
              <li>
                Collaborated with the team to suggest and implement enhancements
                in the web app’s infrastructure, focusing on performance
                optimization, scalability, and user experience improvements.
              </li>
              <li>
                Assisted in data analysis and manipulation to structure and
                optimize spatial data effectively.
              </li>
            </p>
            <span className="absolute top-11 -left-[6px] w-3 h-3 rounded-full bg-teal-500"></span>
          </div>
          {/* experience 2 */}
          <div className="relative space-y-1 border-l-2 border-gray-400 p-8 text-left">
            <h1 className="text-xl font-semibold md:text-2xl">
              Wild Life Conservation And Development KPK
            </h1>
            <p className=" text-lg text-gray-700 font-semibold">GIS Intern</p>
            <p className="text-sm text-gray-600">
              <li>
                Assisted in creating detailed and accurate maps using GIS
                software such as ArcGIS and QGIS, supporting various projects by
                visualizing spatial data effectively.
              </li>
              <li>
                Assisted in the preparation and maintenance of spatial datasets,
                including digitizing maps, georeferencing, and performing data
                quality checks to ensure consistency and precision.
              </li>
              <li>
                Participated in field surveys and data collection efforts,
                gaining hands-on experience in capturing and interpreting
                geospatial data.
              </li>
            </p>
            <span className="absolute top-11 -left-[6px] w-3 h-3 rounded-full bg-teal-500"></span>
          </div>
          {/* experience 3 */}
          <div className="relative space-y-1 border-l-2 border-gray-400 p-8 text-left">
            <h1 className="text-xl font-semibold md:text-2xl">AEN Studio</h1>
            <p className=" text-lg text-gray-700 font-semibold">Internship</p>
            <p className="text-sm text-gray-600">
              <li>Developed and styled basic UI components such as buttons and cards using HTML, CSS, and JavaScript.</li>
            </p>
            <span className="absolute top-11 -left-[6px] w-3 h-3 rounded-full bg-teal-500"></span>
          </div>
        </div>
        {/* <div className='flex-1'></div> */}
      </div>
    </div>
  );
}

export default Experience;
