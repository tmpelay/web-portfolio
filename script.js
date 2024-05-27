const themeBtn = document.getElementById("theme");

const esBtn = document.getElementById("es");
const enBtn = document.getElementById("en");

const setLanguage = (lang) => {
  localStorage.setItem("lang", lang);
  const elements = document.getElementsByClassName(lang);

  if (lang == "es") {
    const other = document.getElementsByClassName("en");
    for (let e of other) {
      e.style.display = "none";
    }
  } else if (lang == "en") {
    const other = document.getElementsByClassName("es");
    for (let e of other) {
      e.style.display = "none";
    }
  }

  for (let e of elements) {
    e.style.display = "block";
  }
};

if (localStorage.getItem("lang") == "en") {
  setLanguage("en");
} else {
  setLanguage("es");
}

esBtn.addEventListener("click", () => {
  setLanguage("es");
});

enBtn.addEventListener("click", () => {
  setLanguage("en");
});

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
  themeBtn.checked = true;
  setLightTheme();
}

themeBtn.addEventListener("change", (e) => {
  if (e.target.checked) {
    setLightTheme();
  } else {
    setDarkTheme();
  }
});
