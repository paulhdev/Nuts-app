import React from "react";
import { StatusBar } from "react-native";
import theme from "./global/theme";

import Routes from "./routes";

export default function App() {
  return (
    <>
      <StatusBar 
        backgroundColor={theme.colors.primary} 
        barStyle="light-content" />
      <Routes />
    </>
  );
}
