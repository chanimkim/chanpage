import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSpinner,
  faCircleNotch,
  faSync,
  faCog,
  faStroopwafel,
  faWalking,
  faStar
} from "@fortawesome/free-solid-svg-icons";

function AnimatingIcons() {
  return (
    <section>
      <div className="fa-3x">
        {/* <FontAwesomeIcon icon={faSpinner} pulse /> */}
        <FontAwesomeIcon icon={faWalking} spin />
        &nbsp;
        <FontAwesomeIcon icon={faStar} spin />
      </div>
    </section>
  );
}

export default AnimatingIcons;
