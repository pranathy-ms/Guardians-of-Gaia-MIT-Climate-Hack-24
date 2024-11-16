import React from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';

export default function Review({ reviewNumber = 2, variant }) {
  return (
    <div className={`cs_rating${variant ? ` ${variant}` : ' cs_accent_color'}`}>
      <i>
        <FaRegStar />
      </i>
      <i>
        <FaRegStar />
      </i>
      <i>
        <FaRegStar />
      </i>
      <i>
        <FaRegStar />
      </i>
      <i>
        <FaRegStar />
      </i>

      <div
        className="cs_rating_percentage"
        style={{ width: `${reviewNumber * 20}%` }}
      >
        <i>
          <FaStar />
        </i>

        <i>
          <FaStar />
        </i>

        <i>
          <FaStar />
        </i>

        <i>
          <FaStar />
        </i>

        <i>
          <FaStar />
        </i>
      </div>
    </div>
  );
}
