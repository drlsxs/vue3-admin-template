/*
 * @Author: yangshilin
 * @Date: 2023-07-02 12:09:32
 * @LastEditors: yangshilin
 * @LastEditTime: 2023-07-02 12:12:18
 * @FilePath: scritps\preinstall.js
 * @Description: 请添加文件描述
 */

if (!/pnpm/.test(process.env.npm_execpath || "")) {
  console.warn(
    `\u001b[33mThis repository must using pnpm as the package manager ` +
      ` for scripts to work properly.\u001b[39m\n`
  );
  process.exit(1);
}
