import "./Tabs.css";
import { useState } from "react";
import Gist from "super-react-gist";

export default function Tabs() {
  const [tabs, setTabs] = useState([
    { id: 1, isOpen: true },
    { id: 2, isOpen: false },
    { id: 3, isOpen: false },
  ]);

  const [tabsContent, setTabsContent] = useState(0);

  function handleTabsContent(num: number) {
    const array = [...tabs];
    function resetTabs() {
      for (let i = 0; i < array.length; i++) {
        array[i].isOpen = false;
      }
    }
    resetTabs();
    array[num].isOpen = true;
    setTabs(array);
    setTabsContent(num);
  }

  return (
    <div className="Tabs__component">
      <h1 className="Tabs__h1">Tabs</h1>
      <div className="Tabs">
        <div className="Tabs__wrapper">
          {tabs.map((tab, index) => (
            <div
              className="Tab"
              key={tab.id}
              onClick={() => {
                handleTabsContent(index);
              }}
              style={{
                backgroundColor: tab.isOpen
                  ? "rgb(150, 150, 150)"
                  : "rgb(75, 75, 75)",
              }}
            >
              Tab {tab.id}
            </div>
          ))}
        </div>
        <div className="Tabs__content">
          {tabs[tabsContent].id}. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Sit amet purus gravida quis blandit turpis cursus. Leo
          duis ut diam quam nulla porttitor massa id.
        </div>
      </div>

      <div className="Tabs__gist">
        <Gist url="https://gist.github.com/thekingvice/c5dbcf4cceaffccb4f3cd54b9ce0ec5f" />
        <a
          className="Sandbox__link"
          href="https://codesandbox.io/s/tabs-w7xjf8"
          target="_blank"
        >
          Test on CodeSandbox
          <img
            className="Sandbox__icon"
            src="/codesandbox.svg"
            alt="codesandbox-logo"
          />
        </a>
      </div>
    </div>
  );
}
