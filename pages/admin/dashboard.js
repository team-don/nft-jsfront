import React from "react";

// components

import CardLineChart from "components/Cards/CardLineChart.js";
import CardBarChart from "components/Cards/CardBarChart.js";
import CardPageVisits from "components/Cards/CardPageVisits.js";
import CardSocialTraffic from "components/Cards/CardSocialTraffic.js";

// layout for page

import Admin from "layouts/Admin.js";

export default function Dashboard() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full xl:w-12/12 mb-12 xl:mb-0 px-4">
          {/*<CardLineChart />*/}
            <CardPageVisits />
        </div>
          {/*<div className="w-full xl:w-4/12 px-4">*/}

              {/*<CardSocialTraffic />*/}
              {/*<CardBarChart />*/}
          {/*</div>*/}
      </div>
      {/*  <div className="flex flex-wrap ">*/}
      {/*      <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">*/}
      {/*          <CardLineChart />*/}
      {/*          /!*<CardPageVisits />*!/*/}
      {/*  </div>*/}
      {/*  <div className="w-full xl:w-4/12 px-4">*/}
      {/*      <CardBarChart />*/}
      {/*    /!*<CardSocialTraffic />*!/*/}
      {/*  </div>*/}
      {/*</div>*/}
    </>
  );
}

Dashboard.layout = Admin;
