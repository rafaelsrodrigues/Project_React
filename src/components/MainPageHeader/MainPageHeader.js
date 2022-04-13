import React from "react";
import { HeaderContainer, LogoHeader } from "./MainPageHeader.style";
import LogoCompassMain from "../../assets/img/LogoCompassoMain.png";
import { Clock } from "../Clock/Clock";
import { Weather } from "../Weather/Weather";

export default function MainPageHeader() {
  return (
    <div>
      <HeaderContainer>
        <LogoHeader src={LogoCompassMain} />
        <Clock />
        <Weather />
      </HeaderContainer>
    </div>
  );
}
