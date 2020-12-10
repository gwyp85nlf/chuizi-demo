
// 获取地址栏中数据参数
function getUrl(val) {
    let obj = {};
    // 现根据经&符号,将字符串转化为数组
    let arr = val.split('&');
    // 在根据=等号,转化数组中的数据为新的数组
    let newArr = [];
    // 循环遍历数组arr
    arr.forEach(function (item) {
        // 将数组arr中的数据,根据=,再分割为新数组
        newArr = item.split('=');
        // 新数组中的[0]就是键值对的键名
        // 新数组中的[1]就是键值对的数据
        // 作为对象中的属性和属性值,赋值给对象
        obj[newArr[0]] = newArr[1];
    })
    // 最终返回值是获取到的对象
    return obj;
}

function setLi(ele,obj) {
    const data = obj.data;
    console.log(data);
    //定义空字符串
    let str='';
    // 循环遍历（对象只能用for in循环）
    for (let key = 0; key < data.list.length; key++) {
        //声明变量存储li的值 要用+=
  
         str += `<li>
         <a href="register/detail.html?id=${data.list[key].spuInfo.skuId}"><img src="${data.list[key].spuInfo.images}" alt=""></a>
            <h3>${data.list[key].spuInfo.spuTitle}</h3>
            <p>${data.list[key].spuInfo.activeTitle}</p>
            <span>￥${data.list[key].spuInfo.price}</span>    
            </li>`

        //    将li的内容写入到ul中
        $(ele).html(str)
    }
}




