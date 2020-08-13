import "react-native-gesture-handler";

import React, { useState } from "react";
import LoginComplete from "./logincomplete.js";
import Auth from "./login";

const App = () => {
  const [isLoggedIn, setLogin] = useState(false);
  {
    if (isLoggedIn) {
      return <LoginComplete />;
    } else {
      return <Auth func={() => setLogin(true)} />;
    }
  }
};

export default App;
