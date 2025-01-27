import React, { FC } from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { headerStyles } from "./index.styles";

const Header = (): FC => {
  return (
    <View style={headerStyles.header}>
      <View style={headerStyles.leftSection}>
        <TouchableOpacity style={headerStyles.menuButton}>
          <Text style={headerStyles.menuIcon}>☰</Text>
        </TouchableOpacity>

        <Image
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg",
          }}
          style={headerStyles.logo}
        />
      </View>

      <View style={headerStyles.searchSection}>
        <View style={headerStyles.searchBar}>
          <TextInput
            style={headerStyles.searchInput}
            placeholder="Search"
            placeholderTextColor="#888"
          />

          <TouchableOpacity style={headerStyles.searchButton}>
            <Text>🔍</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={headerStyles.micButton}>
          <Text>🎤</Text>
        </TouchableOpacity>
      </View>

      {/* Right Section */}
      <View style={headerStyles.rightSection}>
        <TouchableOpacity style={headerStyles.iconButton}>
          <Text>⋮</Text>
        </TouchableOpacity>

        <TouchableOpacity style={headerStyles.signInButton}>
          <Text style={headerStyles.signInText}>SIGN IN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
