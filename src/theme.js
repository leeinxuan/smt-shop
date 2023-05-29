import { theme } from "antd";

const darkTheme = {
  algorithm: theme.darkAlgorithm,
  token: {
    colorPrimary: "#1677ff",
    colorBgBase	: "#F18BA2",
    colorBg:"#1A1A29",
    colorTextBase: "#ffffff",
    colorTextBase2: "#ffffff",
    colorTextBase3: "#FCE1E7",
    colorBgHeader: "#F18BA2",
    inputContainer:"#747BA8"
  },
  components: {
    Button: {
      colorPrimary: "#F18BA2",
      colorPrimaryHover: "#FFB6C7",
      colorBorder: "#F18BA2",
            lineWidth: "4",
            colorText: "#F18BA2",
    },
    Input:{
        colorBgContainer:" #696D8A",
        colorBorder:"#696D8A",
        colorTextQuaternary:"#FFFFF",
        
    },
    Badge:{fontSize:"16"}
  },
};

const lightTheme = {
  algorithm: theme.defaultAlgorithm,
  token: {
    colorBgBase	: "#FCE1E7",
    colorBg:"#ffffff",
    colorTextBase: "#434868",
    colorTextBase2: "#000000",
    colorTextBase3: "#747BA8",
    colorBgHeader: "#FCE1E7",
    inputContainer:"#FCE1E7"
    // colorBorder: "#F18BA2",
    //         lineWidth: "4",
    //         colorText: "#F18BA2",
  },
  components: {
    Button: {
      colorPrimary: "#F18BA2",
     colorPrimaryHover: "#FFB6C7",
      colorBorder: "#F18BA2",
            lineWidth: "4",
            colorText: "#F18BA2",
    },
    Input:{
        colorBgContainer:"#696D8A",
        // colorBorder:"#696D8A",
        colorTextQuaternary:"#FFFFF",
       

    },
    Badge:{fontSize:"16"}
  },
};

export { lightTheme, darkTheme };

