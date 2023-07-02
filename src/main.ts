/*
 * @Author: yangshilin
 * @Date: 2023-06-29 21:36:58
 * @LastEditors: yangshilin
 * @LastEditTime: 2023-07-02 11:41:22
 * @FilePath: src\main.ts
 * @Description: 请添加文件描述
 */
import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

const fun = () => {
  console.log("我爱你祖国");
};

fun();

createApp(App).mount("#app");
