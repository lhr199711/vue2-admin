/**
 * 邮箱校验
 */
export function validateEmail(str) {
  let reg =
    /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,5}$/;
  if (reg.test(str)) {
    return true;
  } else {
    return false;
  }
}
/**
 * 6-20英文+数字校验
 */
export function validatePsd(str) {
  let reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/;
  if (reg.test(str)) {
    return true;
  } else {
    return false;
  }
}
/**
 * 6位验证码格式校验
 */
export function validateCode(str) {
  let reg = /^[a-z0-9]{6}$/;
  if (reg.test(str)) {
    return true;
  } else {
    return false;
  }
}
