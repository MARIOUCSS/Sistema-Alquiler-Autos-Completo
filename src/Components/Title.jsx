import React from "react";

function Title({
  title1,
  title2,
  titleStyles,
  title2Styles,
  paraStyles,
  para,
}) {
  return (
    <div className={titleStyles}>
      <h4 className="text-solid">{title1}</h4>
      <div className="flex flex-col xl:flex-row xl:justify-between">
        <h1 className={`${title2Styles} capitalize`}>{title2}</h1>
        <p
          className={`${paraStyles} max-w-lg xl:place-self-end xl:relative xl:botton-3`}
        >
          {para
            ? para
            : "Find reliable cart with transparent pricing, verified inspection, flexible pickup and delivery option"}
        </p>
      </div>
    </div>
  );
}
1:53
export default Title;
