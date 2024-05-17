const setLightTheme = () => {
  localStorage.setItem("theme", "light");
  document.documentElement.style.setProperty("--primary-background", "#fafafa");
  document.documentElement.style.setProperty(
    "--secondary-background",
    "#eaeaea"
  );
  document.documentElement.style.setProperty("--primary-foreground", "#1b1e27");
  document.documentElement.style.setProperty(
    "--secondary-foreground",
    "#2c2c36"
  );
};

const setDarkTheme = () => {
  localStorage.setItem("theme", "dark");
  document.documentElement.style.setProperty("--primary-background", "#1b1e27");
  document.documentElement.style.setProperty(
    "--secondary-background",
    "##2c2c36"
  );
  document.documentElement.style.setProperty("--primary-foreground", "#fafafa");
  document.documentElement.style.setProperty(
    "--secondary-foreground",
    "#eaeaea"
  );
};

if (localStorage.getItem("theme") == "light") {
  setLightTheme();
}
