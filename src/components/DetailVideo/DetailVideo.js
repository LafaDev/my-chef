import React from 'react';
import PropTypes from 'prop-types';
import './DetailVideo.css';

export default function DetailVideo({ video }) {
  const transform = String(video).split('=');
  const embedded = `https://www.youtube.com/embed/${transform[1]}`;

  return (
    <section className="containerDetailVideo">
      <iframe
        className=""
        title="Step-by-Step"
        width="420"
        height="315"
        // src="https://www.youtube.com/embed/thatthingonvideourl"
        src={ embedded }
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media;
         gyroscope; picture-in-picture"
        allowFullScreen
        data-testid="video"
      />
    </section>
  );
}

DetailVideo.propTypes = {
  video: PropTypes.string.isRequired,
};
