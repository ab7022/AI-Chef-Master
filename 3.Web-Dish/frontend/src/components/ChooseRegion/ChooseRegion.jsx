import React from "react";
import {CountryFlag} from '../../Data/CountryFlagLuxuryData/CountryFlag'
function ChooseRegion() {
    return <div>
      <div>
         <img src={`https://flagcdn.com/${CountryFlag}.svg`} />
      </div>
  </div>;
}

export default ChooseRegion;
