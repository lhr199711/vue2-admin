import service from "@u/request";

/** 获取验证码 */
export function GetSms(data) {
  return service.request({
    url: "/getSms/",
    method: "post",
    data,
  });
}
