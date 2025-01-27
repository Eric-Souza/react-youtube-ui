import React, { FC } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { sideMenuStyles } from "./index.styles";
import { sideMenuItems } from "../../defs/sideMenuItems";

const SideMenu = (): FC => {
  return (
    <View style={sideMenuStyles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {sideMenuItems.map((item, index) => {
          if (item.separator) {
            return <View key={index} style={sideMenuStyles.separator} />;
          }

          if (item.header) {
            return (
              <Text key={index} style={sideMenuStyles.sectionHeader}>
                {item.header}
              </Text>
            );
          }

          return (
            <TouchableOpacity
              key={item.id}
              style={[
                sideMenuStyles.menuItem,
                item.selected && sideMenuStyles.selectedMenuItem,
              ]}
            >
              {item.icon && (
                <Text style={sideMenuStyles.icon}>{item.icon}</Text>
              )}

              <Text
                style={[
                  sideMenuStyles.label,
                  item.selected && sideMenuStyles.selectedLabel,
                  !item.icon && sideMenuStyles.signInText,
                ]}
              >
                {item.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default SideMenu;
