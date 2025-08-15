import React from "react";

import Reports from "./Components/Reports/report";
import Status from "./Components/Status/status";

import { Tabs } from "antd";
import { Content } from "antd/es/layout/layout";
import Rezerv from "./Components/Tabs/1-One/rezerv";
import Active from "./Components/Tabs/2-Two/active";
import Offline from "./Components/Tabs/3-Three/offline";
import Repair from "./Components/Tabs/4-Four/repair";

const Home = () => {
  const tabItems = [
    {
      key: "1",
      label: "Rezervdə olan maşınlar",
      children: (
        <Content>
          <Rezerv />
        </Content>
      ),
    },
    {
      key: "2",
      label: "Aktiv maşınlar",
      children: (
        <Content>
          <Active />
        </Content>
      ),
    },
    {
      key: "3",
      label: "Xəttdə olmayan maşınlar",
      children: (
        <Content>
          <Offline />
        </Content>
      ),
    },
    {
      key: "4",
      label: "Təmirdə olan maşınlar",
      children: (
        <Content>
          <Repair />
        </Content>
      ),
    },
  ];

  return (
    <div>
      <div className="col thon_home_oneMain p-4">
        <Reports />
        <hr className="my-3" />
        <Status />
      </div>

      <div className="mt-4 tab-wrapper">
        <Tabs defaultActiveKey="1" tabBarGutter={16} size="middle" items={tabItems} />
      </div>
    </div>
  );
};

export default Home;
