import React from "react";

import classes from "./glassContainer.module.css";

const glassContainer = (props) => {
  return (
    <div style={{ zIndex: "-1" }} className={classes.upperLayer}>
      REVA University is a private university[1] in Kattigenahalli, Yelahanka,
      Bangalore. It was established under the Government of Karnataka Act, 2012.
      It is managed by the Rukmini Educational Charitable Trust.[2] The
      university currently offers UG, PG and several certificate/diploma level
      programs in engineering, architecture, science & technology, commerce,
      management, law, & arts. The university also facilitates research leading
      to doctoral degrees in all disciplines. Dr. P. Shyama Raju is chancellor
      of the university
    </div>
  );
};

export default glassContainer;
