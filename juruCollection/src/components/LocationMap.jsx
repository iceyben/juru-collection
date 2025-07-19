import React from "react";


const LocationMap = () => {
  return (
    <div className="w-full h-[300px] my-5 rounded-lg overflow-hidden shadow-lg">
      
      <iframe
     
        title="Business Location Map"
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3987.457183848369!2d30.097878349954218!3d-1.9712560400263994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2srw!4v1752362718680!5m2!1sen!2srw"
        className="w-full h-full border-0 rounded-lg"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default LocationMap;
