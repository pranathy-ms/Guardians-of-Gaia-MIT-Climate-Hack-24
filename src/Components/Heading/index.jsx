import React from 'react';

const SectionHeading = ({
  subtitle,
  title,
  titleColor,
  description,
  color,
  textCenter,
  titleVerint,
  descriptionVerint,
}) => {
  return (
    <>
      <div
        className={`cs_section_heading cs_style_1${
          textCenter ? ` ${textCenter}` : ''
        }`}
      >
        {subtitle && (
          <h3
            className={`cs_fs_21 cs_semibold cs_mb_13 ${
              color ? color : 'cs_accent_color'
            }`}
            dangerouslySetInnerHTML={{ __html: subtitle }}
          />
        )}
        {title && (
          <h2
            data-aos="fade-up"
            className={`cs_fs_51 ${titleVerint ? titleVerint : 'mb-0'}${
              titleColor ? ` ${titleColor}` : ''
            }`}
            dangerouslySetInnerHTML={{ __html: title }}
          />
        )}
        {description && (
          <p
            className={`${descriptionVerint ? descriptionVerint : ''} `}
            dangerouslySetInnerHTML={{ __html: description }}
          />
        )}
      </div>
    </>
  );
};

export default SectionHeading;
