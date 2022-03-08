import React from 'react';
import './DetailVideo.css';

export default function DetailVideo() {
  return (
    <section className="container containerDetailVideo">
      <iframe
        title="Step-by-Step"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/thatthingonvideourl"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media;
         gyroscope; picture-in-picture"
        allowFullScreen
        data-testid="video"
      />
    </section>
  );
}
