import http from "../utils/http";


/**
 * 获取首页列表
 */
function getUserInfo(){
  return new Promise((resolve, reject) => {
    http("get",'/GetUserInfo').then(res => {
      resolve (res);
    },error => {
      reject(error)
    })
  }) 
}

export {
   getUserInfo
}