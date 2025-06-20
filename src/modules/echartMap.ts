import * as echarts from "echarts";
import sdData from "@/assets/data/山东省";
import mapBg from "@/assets/images/2.png";
echarts.registerMap("sd", sdData as any);
// 获取地图配置
export const getMapOption = () => {
  // 渐变层颜色
  const colorList: string[] = [
    "#8b5e70",
    "#81596d",
    "#78556a",
    "#6e5068",
    "#644c65",
    "#5b4762",
    "#51435f",
    "#483e5c",
    "#3e3a59",
    "#343557",
    "#2b3154",
    "#212c51",
  ];
  // 生成渐变图层
  const geoList: any = [];
  for (let i = 1; i <= colorList.length; i++) {
    geoList.push({
      map: "sd",
      aspectScale: 0.9,
      z: 12 - i,
      layoutCenter: ["50%", `${i * 0.3 + 50}%`], //地图位置
      layoutSize: "100%",
      itemStyle: {
        normal: {
          areaColor: colorList[i - 1],
          borderWidth: 0,
        },
      },
    });
  }
  const option = {
    geo: [
      // 最外围发光边界
      {
        map: "sd",
        aspectScale: 0.9,
        layoutCenter: ["50%", "50%"], //地图位置
        layoutSize: "100%",
        z: 12,
        itemStyle: {
          normal: {
            areaColor: "#1f2428",
            borderColor: "rgb(235, 174, 92)",
            borderWidth: 12,
            shadowColor: "rgba(235, 174, 92, 0.4)",
            shadowBlur: 20,
          },
        },
      },
      // 最外层遮罩蒙版
      {
        map: "sd",
        aspectScale: 0.9,
        layoutCenter: ["50%", "50%"], //地图位置
        layoutSize: "100%",
        z: 14,
        itemStyle: {
          normal: {
            areaColor: "rgba(106, 125, 171, 0.45)",
            borderWidth: 0,
          },
        },
        label: {
          show: true,
          color: "#fff",
          fontSize: 14,
        },
      },
      ...geoList,
    ],
    series: [
      // 内部蓝色边界
      {
        type: "map",
        mapType: "sd",
        aspectScale: 0.9,
        layoutSize: "100%",
        layoutCenter: ["50%", "50%"], //地图位置
        z: 13,
        itemStyle: {
          normal: {
            areaColor: {
              image: mapBg,
            },
            borderColor: "#8aa5db",
            borderWidth: 2,
          },
        },
      },
    ],
  };
  return option;
};
