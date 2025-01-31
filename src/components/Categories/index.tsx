import React, { useState } from "react";
import { ScrollView, View, Text, Pressable } from "react-native";
import { categories } from "../../defs/categoriesItems";
import { categoryStyles } from "./index.styles";

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <View style={categoryStyles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={categoryStyles.innerContainer}
      >
        {categories.map((category) => (
          <Pressable
            key={category}
            onPress={() => setSelectedCategory(category)}
            style={[
              categoryStyles.chip,
              selectedCategory === category && categoryStyles.activeChip,
            ]}
          >
            <Text
              style={[
                categoryStyles.text,
                selectedCategory === category && categoryStyles.activeText,
              ]}
            >
              {category}
            </Text>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

export default Categories;
