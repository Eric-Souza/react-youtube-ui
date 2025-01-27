import React, { FC } from "react";
import { View } from "react-native";
import { dashboardStyles } from "./index.styles";
import Header from "../Header";
import SideMenu from "../SideMenu";
import VideoGrid from "../VideoGrid";
import Categories from "../Categories";

const Dashboard = (): FC => {
  return (
    <View style={dashboardStyles.container}>
      <Header />

      <View style={dashboardStyles.content}>
        <SideMenu />

        <View style={dashboardStyles.mainContent}>
          <Categories />

          <View style={dashboardStyles.scrollableContent}>
            <VideoGrid />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Dashboard;
