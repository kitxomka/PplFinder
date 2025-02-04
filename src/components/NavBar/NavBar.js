import React, { useEffect, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab"


const NavBar = (props) => {
  const savedTabIndex = JSON.parse(localStorage.getItem('value'));
  const [value, setValue] = useState(savedTabIndex || 0);

  useEffect(() => {
    localStorage.setItem('value', JSON.stringify(value));
    props.handleTabSet(value);
  }, [value]);

  const handleChange = (_e, newValue) => {
    setValue(newValue);
  };
 
  return (
    <AppBar position="static" color="transparent" style={{ position: "fixed", top: 0 }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="Navigation"
        indicatorColor="primary"
        textColor="primary"
      >
        <Tab label="Home" index={0} />
        <Tab label="Favorites" index={1} />
      </Tabs>
    </AppBar>
  );
};

export default NavBar;