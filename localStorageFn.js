const FN = {

  // 获取localStorage数据
  getLocalData: function (key) {
    let _detail = JSON.parse(localStorage.getItem(key));
    return _detail;
  },

  // 保存用户信息
  saveUserInfo: function (data) {
    localStorage.setItem('USER_INFO', JSON.stringify(data));
  },
  
}

export default FN;