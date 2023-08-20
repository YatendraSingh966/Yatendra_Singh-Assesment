import "./App.css";
import { Space } from "antd";
import AppHeader from "./components/AppHeader";
import PageContent from "./components/PageContent";
import SideMenu from "./components/SideMenu";
import AppFooter from "./components/AppFooter";

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Space className="SideMenuAndPageContent">
        <SideMenu />
        <PageContent />
      </Space>
      <AppFooter />
    </div>
  );
}

export default App;
