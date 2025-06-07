import React from "react";

function ProjectsData() {
  return (
    <>
     {/* project1 1 */}
      <div className="text-left space-y-2 border-2 hover:scale-105 transition-all duration-300 cursor-pointer px-8 py-10 border-teal-500 rounded-lg hover:bg-teal-50">
        <h1 className="font-semibold text-3xl">Army Land Management System</h1>
        <h3 className="text-xl text-gray-600">HTML, Bootstrap, JavaScript, jQuery, Leaflet, GeoServer, MapTiler</h3>
        <p className="text-sm text-gray-600">
          A web-based application for displaying and filtering land data across various administrative and geographic levels. Built using HTML, Bootstrap, JavaScript, jQuery, and Leaflet, the app offered an interactive and responsive interface for users to explore geospatial information efficiently. GeoServer was utilized to host spatial datasets and deliver data to the frontend via Web Feature Service (WFS) calls
        </p>
      </div>
      {/* project 2 */}
      <div className="text-left space-y-2 border-2 hover:scale-105 transition-all duration-300 cursor-pointer px-8 py-10 border-teal-500 rounded-lg hover:bg-teal-50">
        <h1 className="font-semibold text-3xl">Route Tracking Web App</h1>
        <h3 className="text-xl text-gray-600">React js</h3>
        <p className="text-sm text-gray-600">
          A Route Tracking Web Application built using React.js
          for the frontend and MapLibre GL JS for interactive map rendering. The
          application enables users to visualize and monitor routes from
          pre-recorded data.
        </p>
      </div>
      {/* project 3 */}
      <div className="text-left space-y-2 border-2 hover:scale-105 transition-all duration-300 cursor-pointer px-8 py-10 border-teal-500 rounded-lg hover:bg-teal-50">
        <h1 className="font-semibold text-3xl">Earthquake Data Visualization Web App</h1>
        <h3 className="text-xl text-gray-600">JavaScript, Leaflet</h3>
        <p className="text-sm text-gray-600">
          This project is a web-based Earthquake Data Visualization App developed using vanilla JavaScript and Leaflet.js for interactive mapping. Displays the events on an interactive map with location markers, popups showing magnitude and depth, and time and magnitide based filtering. <br />
          <a target="_blank" className="text-blue-500" href="https://sunny-gaufre-512a5d.netlify.app/">View</a>
        </p>
      </div>
      {/* project 4 */}
      <div className="text-left space-y-2 border-2 hover:scale-105 transition-all duration-300 cursor-pointer px-8 py-10 border-teal-500 rounded-lg hover:bg-teal-50">
        <h1 className="font-semibold text-3xl">Currency Converter Web</h1>
        <h3 className="text-xl text-gray-600">React Js</h3>
        <p className="text-sm text-gray-600">
          This project is a responsive and user-friendly Currency Converter Web
          Application developed using React.js and integrated with a reliable
          external currency exchange API. The app allows users to convert
          between multiple currencies in real-time with up-to-date exchange
          rates. It features a clean and intuitive interface, seamless form
          handling, and dynamic result updates. <br></br>
          <a className="text-blue-500" href="https://keen-smakager-e6c96a.netlify.app/" target="_blank">View </a>
        </p>
      </div>
     
    </>
  );
}

export default ProjectsData;
