import service from "@u/request";

/** 获取验证码 */
export function GetSms(data) {
  return service.request({
    url: "/getSms/",
    method: "post",
    data,
  });
}

/** 用户注册 */
export function UserRegister(data) {
  return service.request({
    url: "/register/",
    method: "post",
    data,
  });
}

/** 用户登录 */
export function UserLogin(data) {
  return service.request({
    url: "/login/",
    method: "post",
    data,
  });
}
