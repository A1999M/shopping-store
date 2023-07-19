import React from "react";

export default function VideoOffer() {
  return (
    <>
      <div className="container-fluid px-5 mt-5rem">
        <div className="row">
          <div className="col-12">
            <iframe
              width="100%"
              height="760"
              src="https://www.youtube.com/embed/4iVYTQe88b8"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
