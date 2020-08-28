import React from 'react';
import { Link } from 'react-router-dom';

function Banner({ classname, title, subtitle, btnName }) {
  return (
    <div className={classname}>
      <h1 className="banner-title">{title}</h1>

      <h5 className="banner-subtitle">{subtitle}</h5>
      <Link to="/rooms">
        <button className="btn-primary mt-2">{btnName}</button>
      </Link>
    </div>
  );
}

export default Banner;
