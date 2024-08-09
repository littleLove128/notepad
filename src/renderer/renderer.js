
const {ipcRenderer} = require("electron")

window.onload = ()=>{
  // 监听右键 点击事件
  window.addEventListener("contextmenu", (e)=>{
    console.log("contextmenu 1551")
    ipcRenderer.send("showContextmenu", "showContextmenu")
  }, false)

}