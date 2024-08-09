const {Menu, shell, ipcMain, BrowserWindow} = require("electron")
// 1、顶部菜单
// 判断是否为 mac 电脑
const isMac =  process.platform == 'darwin'
const menuTemplate = [
  {
    label: "文件",
    submenu: [
      {
        label: "新建",
        click: function() {

        }
      },
      {
        label: "打开",
        click: function() {
          
        }
      },
      {
        label: "保存",
        click: function() {
          
        }
      },
      {
        type: "separator"
      },
      {
        label: "打印",
        click: function() {
          
        }
      },
      {
        label: "退出",
        role: isMac ? 'close':'quit'
      }
    ]
  },
  {
    label: "编辑",
    submenu: [
      {
        label: "撤销",
        role: 'undo'
      },
      {
        label: "恢复",
        role: "redo"
      },
      {
        type: "separator"
      },
      {
        label: "剪切",
        role: "cut"
      },
      {
        label: "复制",
        role: "copy"
      },
      {
        label: "黏贴",
        role: "paste"
      },
      {
        label: "删除",
        role: "delete"
      },
      {
        label: "全选",
        role: "selectall"
      }
    ]
  },
  {
    label: "视图",
    submenu: [
      {
        label: "重新加载",
        role: "reload"
      },
      {
        label: "缩小",
        role: "zoomout"
      },
      {
        label: "放大",
        role: "zoomin"
      },
      {
        label: "重置缩放",
        role: "resetzoom"
      },
      {
        type: "separator"
      },
      {
        label: "全屏",
        role: "togglefullscreen"
      }
    ]
  },
  {
    label: "帮助",
    submenu: [
      {
        label: "关于",
        click(){
          shell.openExternal("https://blog.csdn.net/qq_46143850")
        }
      }
    ]
  }
]

let menuBuilder = Menu.buildFromTemplate(menuTemplate)
Menu.setApplicationMenu(menuBuilder)


// 2、定义右键菜单
const contextMenuTemplate = [
  {
    label: "撤销",
    role: 'undo'
  },
  {
    label: "恢复",
    role: "redo"
  },
  {
    type: "separator"
  },
  {
    label: "剪切",
    role: "cut"
  },
  {
    label: "复制",
    role: "copy"
  },
  {
    label: "黏贴",
    role: "paste"
  },
  {
    label: "删除",
    role: "delete"
  },
  {
    label: "全选",
    role: "selectall"
  }
]
let contextmenu = Menu.buildFromTemplate(contextMenuTemplate)
// 弹出右键菜单
 ipcMain.on("showContextmenu", (e,data)=>{
  console.log("收到来自渲染进程的右键弹出的事件", data)
  // 在当前窗口中弹出右键菜单
  contextmenu.popup({
    window: BrowserWindow.getFocusedWindow()
  })
 })