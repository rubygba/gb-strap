// 当浏览器窗口改变时，保证跨列背景图居中
function setBgCenter(query) {
  _query = query || '.bg-cross'
  var body = document.querySelector('body');
  var cross = document.querySelectorAll(_query);
  var width = getStyle(body, 'width');

  for (var i = 0; i < cross.length; i++) {
    cross[i].style.width = width
  }

  window.onresize = function () {
    width = getStyle(body, 'width')
    for (var j = 0; j < cross.length; j++) {
      cross[j].style.width = width
    }
  }
}

// 获取dom对象当前属性/样式
function getStyle(obj, attr) {
  if (obj.currentStyle) {
    return obj.currentStyle[attr]
  }
  else {
    return getComputedStyle(obj, false)[attr]
  }
}
