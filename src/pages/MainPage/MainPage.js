import React from "react";
import MainPageBody from "../../components/MainPageBody/MainPageBody";
import { MainPageFooter } from "../../components/MainPageFooter/MainPageFooter";
import MainPageHeader from "../../components/MainPageHeader/MainPageHeader";

export default function MainPage() {
  return (
    <div>
      <MainPageHeader />
      <MainPageBody />
      <MainPageFooter />
    </div>
  );
}
