const CODE = {
  UNKNOWN: 9999,
  // 微信错误
  WEIXIN: 1,
  WEIXIN_LOGIN: 2,
  WEIXIN_QR_CODE: 3,
  WEIXIN_STORAGE_SET: 4,
  // 权限错误
  LOGIN: 1000,
  // http 调用错误
  HTTP: 2000,
  // http 内部参数错误
  HTTP_PARAMS: 2002,
  // http 业务错误 - 用户接口
  HTTP_API_USER_LOGIN: 2100,
  HTTP_API_USER_DETAIL: 2101,
  HTTP_API_USER_UPDATE: 2102,
  // http 业务错误 - TOTP 接口
  HTTP_API_TOTP_ALL: 2200,
  HTTP_API_TOTP_DETAIL: 2201,
  HTTP_API_TOTP_CREATE: 2202,
  HTTP_API_TOTP_UPDATE: 2203,
  HTTP_API_TOTP_DELETE: 2204,
  // http 业务错误 - shortlink 接口
  HTTP_API_SHORTLINK_CREATE: 2300,
}

const MESSAGE = {
  [CODE.UNKNOWN]: '未知错误',
  [CODE.WEIXIN]: '微信调用错误',
  [CODE.WEIXIN_LOGIN]: '微信登录错误',
  [CODE.WEIXIN_QR_CODE]: '二维码识别出错',
  [CODE.WEIXIN_STORAGE_SET]: '微信存储出错',
  [CODE.LOGIN]: '登录失败',
  [CODE.HTTP]: '网络请求失败',
  [CODE.HTTP_PARAMS]: '内部参数错误',
  [CODE.HTTP_API_USER_LOGIN]: '业务登录失败',
  [CODE.HTTP_API_USER_DETAIL]: '查询详情失败',
  [CODE.HTTP_API_USER_UPDATE]: '更新失败',
  [CODE.HTTP_API_TOTP_ALL]: '查询列表失败',
  [CODE.HTTP_API_TOTP_DETAIL]: '查询详情失败',
  [CODE.HTTP_API_TOTP_CREATE]: '新增失败',
  [CODE.HTTP_API_TOTP_UPDATE]: '更新失败',
  [CODE.HTTP_API_TOTP_DELETE]: '删除失败',
  [CODE.HTTP_API_SHORTLINK_CREATE]: '生成失败',
}

const WECHAT_MESSAGE = {
  3: '系统权限未授予微信',
  5: '请求超时',
}

export { CODE, MESSAGE, WECHAT_MESSAGE }