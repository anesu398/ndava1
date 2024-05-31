const tabs = document.querySelectorAll(".tab");

const indicator = document.querySelector(".indicator");

const indicator_drop = document.querySelector(".indicator-drop");

tabs.forEach((el) => el.addEventListener("click", clickTab));

const active_tab = document.querySelector("input:checked + label");
indicator.style.left = `${active_tab.offsetLeft + 12}px`;
indicator.style.backgroundColor = "#e2921a";
indicator.style.setProperty("--indicator", "#e2921a");

indicator_drop.style.left = "31px";
indicator_drop.style.top = "75px";
indicator_drop.style.opacity = "0";

function clickTab() {
  let active_tab = document.querySelector("input:checked + label");
  indicator.style.left = `${active_tab.offsetLeft + 12}px`;
  let active_tab_number = active_tab.getAttribute("for");

  indicator.className = "indicator indicator-animation";

  setTimeout(() => {
    indicator_drop.style.top = "55px";
    indicator_drop.style.left = `${active_tab.offsetLeft + 18}px`;
    indicator_drop.style.opacity = "1";
  }, 300);

  setTimeout(() => {
    indicator_drop.style.top = "75px";
    indicator_drop.style.left = "31px";
    indicator_drop.style.opacity = "0";
  }, 500);

  setTimeout(() => {
    indicator.className = "indicator";
  }, 500);

  switch (active_tab_number) {
    case "tab-one":
      indicator.style.backgroundColor = "#e18e1c";
      indicator.style.setProperty("--indicator", "#e18e1c");
      break;
    case "tab-two":
      indicator.style.backgroundColor = "#e3911a";
      indicator.style.setProperty("--indicator", "#e3911a");
      break;
    case "tab-three":
      indicator.style.backgroundColor = "#e1921a";
      indicator.style.setProperty("--indicator", "#e1921a");
      break;
    case "tab-four":
      indicator.style.backgroundColor = "#e39519";
      indicator.style.setProperty("--indicator", "#e39519");
      break;
    default:
      indicator.style.backgroundColor = "#e18e1c";
      indicator.style.setProperty("--indicator", "#e18e1c");
  }
}