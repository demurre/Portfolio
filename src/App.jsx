import { ConfigProvider, theme } from "antd";
import MainPage from "./pages/MainPage/MainPage";

const App = () => (
  <ConfigProvider
    theme={{
      algorithm: theme.darkAlgorithm,
      token: {
        colorPrimary: "var(--primary-text-color)",
        borderRadius: "var(--border-radius-m)",
        colorBorder: "var(--primary-text-color)",
        fontSize: "var(--font-size-m)",
        fontFamily: "var(--font)",
        colorText: "var(--primary-text-color)",
      },
      components: {
        Button: {
          colorPrimary: "var(--secondary-color)",
          colorText: "var(--primary-text-color)",
          colorPrimaryHover: "#181818",
          paddingBlock: "24px",
          borderRadius: "var(--border-radius-m)",
        },
        Carousel: {},
      },
    }}
  >
    <MainPage />
  </ConfigProvider>
);

export default App;
