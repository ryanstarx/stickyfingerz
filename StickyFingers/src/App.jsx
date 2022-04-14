import SideBar from "./components/sidebar/sidebar";
import MainPage from "./components/main-page/main-page";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <SideBar></SideBar>
      <MainPage></MainPage>
    </div>
  );
}

