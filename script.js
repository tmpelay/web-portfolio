const themeBtn = document.getElementById("theme");

const setLightTheme = () => {
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

themeBtn.addEventListener("change", (e) => {
  if (e.target.checked) {
    setLightTheme();
  } else {
    setDarkTheme();
  }
});
