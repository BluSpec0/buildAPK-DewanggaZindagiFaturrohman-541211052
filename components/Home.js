import React from "react";
import Button from "./Button";
import Instagram from './../linking/Instagram';

import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

export default function HomePage() {
  return (
    <ScrollView>
      <View style={styles.background}>
        <View style={{ marginBottom: 36 }}>
          <Image
            source={require("../assets/Profile.jpeg")}
            style={styles.picture}
          />

          <View style={{ marginTop: 25 }}>
            <Text style={styles.name}>Dewangga Zindagi Faturrohman</Text>
            <Text style={styles.desc}>Student at SMK Telkom Purwokerto</Text>
          </View>

          <View style={{ marginHorizontal: 130, marginTop: 27 }}>
            <Button text="Contact Me" onPress={Instagram} />
          </View>
        </View>

        <View>
          <Text style={styles.h1}>My Recent Project</Text>

          <View style={{ marginTop: 35 }}>
            <Image
              source={require("../assets/Project1.png")}
              style={styles.projectpict}
            />

            <View style={{ marginTop: 8 }}>
              <Text style={styles.h2}>Project PLN</Text>
              <Text style={styles.desc2}>Re-Design PLN Website</Text>
              <Image
                source={require("../assets/Arrow.png")}
                style={styles.arrow}
              />
            </View>
          </View>

          <View style={{ marginTop: 25 }}>
            <Image
              source={require("../assets/Project2.png")}
              style={styles.projectpict}
            />

            <View style={{ marginTop: 8 }}>
              <Text style={styles.h2}>Project Marr Second</Text>
              <Text style={styles.desc2}>An E-Commerce App</Text>
              <Image
                source={require("../assets/Arrow.png")}
                style={styles.arrow}
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#D4ECDD",
    flex: 1,
    paddingTop: 76,
    paddingBottom: 46,
  },
  picture: {
    alignSelf: "center",
    width: 175,
    height: 175,
    borderRadius: 15,
  },
  projectpict: {
    alignSelf: "center",
    width: 324,
    height: 183,
    borderRadius: 8,
  },
  arrow: {
    alignSelf: "flex-end",
    width: 50,
    height: 50,
    marginRight: 31,
    marginTop: -45,
  },
  name: {
    color: "#112031",
    textAlign: "center",
    fontSize: 28,
    fontWeight: "800",
    lineHeight: 32,
    paddingHorizontal: 25,
  },
  desc: {
    opacity: 5,
    color: "#434952",
    textAlign: "center",
    fontSize: 17,
    fontWeight: "600",
    paddingHorizontal: 35,
    marginTop: 9,
  },
  desc2: {
    opacity: 5,
    color: "#434952",
    fontSize: 14,
    fontWeight: "600",
    marginLeft: 35,
    marginTop: 3,
  },
  h1: {
    color: "#112031",
    textAlign: "center",
    fontSize: 23,
    fontWeight: "800",
  },
  h2: {
    color: "#112031",
    marginLeft: 35,
    fontSize: 19,
    fontWeight: "800",
  },
});
