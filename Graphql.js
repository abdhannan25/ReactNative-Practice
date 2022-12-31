import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Button,
  FlatList,
} from "react-native";
import React, { Component, useEffect, useState } from "react";
import countryQuery, {CodeQuery}  from "./Queries";

import { useQuery, gql } from "@apollo/client";

export default function Home({ navigation }) {
  const data = useQuery(countryQuery());
  const datasecond = useQuery(CodeQuery());

  // const { data, loading } = useQuery(CodeQuery())

  useEffect(() => {
    console.log("First Query GraphQL ===", data?.data);
    console.log("Second Query GraphQL ===", datasecond?.data);
  }, []);
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Text style={{ fontSize: 38, justifyContent: "center" }}> GraphQL </Text>
      <FlatList
        data={data.data.countries}
        renderItem={({ item }) => (
          <View
            style={{ backgroundColor: "green", marginBottom: 10, height: 40 }}
          >
            <Text style={{ color: "white" }}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
});
