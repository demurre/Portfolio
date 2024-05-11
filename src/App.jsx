import { ConfigProvider } from "antd";
import "./App.css";
import MainPage from "./pages/MainPage";
import { theme } from "antd";

const App = () => (
  <ConfigProvider
    theme={{
      algorithm: theme.darkAlgorithm,
      token: {
        colorPrimary: "#ececec",
        borderRadius: 6,
        colorBorder: "#ececec",
        fontSize: 22,
        fontFamily: "Satoshi",
      },
      components: {
        Button: {
          defaultBg: "#ececec",
          defaultColor: "#3c4043",
          defaultHoverBg: "#dadce0",
          defaultHoverColor: "#3c4043",
        },
      },
    }}
  >
    <MainPage />
  </ConfigProvider>
);

export default App;
