//判断购物车有没有内容
if (localStorage.getItem('car')) {
    $('main div')[0].className = ''
} else {
    $('main div')[0].className = 'empty'
}



//获取本地购物车数据库
console.log(localStorage.getItem('car'),'car')
let arr = JSON.parse(localStorage.getItem('car'));
let str1 = '';
console.log(arr)
function setPage() {
    //定义bool
    // 如果有buy==0就为false
    // 让全选框取消
    let bool = true;
    if (arr) {
        arr.forEach(function (item) {
            if (item.buy == 0) {
                bool = false;
            }
        })
    }


    if (localStorage.getItem('car')) {
        //定义空字符串
        let str = '';
        // 定义种类
        let onlyNum = 0;
        // 定义总数量
        let allNums = 0;
        // 定义总价钱
        let money = 0;
        //循环遍历arr
        for (let key in arr) {
            //如果有buy属性
            if (arr[key].buy == 1) {
                //种类++，总价=数量*价格。数量=循环的num+的和
                onlyNum++;
                money += parseFloat(arr[key].price * arr[key].num)
                allNums += arr[key].num;
            }


            str += ` <li>
                    <input name='checkbox' style='position: absolute;top: 48%;
                left: 31px;' type="checkbox" class="check-one" goods_id="${arr[key].id}" ${arr[key].buy == 1 ? 'checked' : ''}>

                    <a href="JavaScript:;"><img style="width: 100%;height: 100%" src="${arr[key].images}" alt=""></a>

                    <h6 class="xx">
                        <a href="JavaScript:;">${arr[key].name}</a>
                        <span>${arr[key].title}</span>
                    </h6>
                    <h1>￥${arr[key].price}</h1>
                    <h2>
                        <button type="button" class="btn btn-default btn-lg active jian" name='red' id='${arr[key].id}' ${arr[key].num <= 1 ? 'disabled' : ''}>-</button>
                        <span>${arr[key].num}</span>
                        <button type="button" name='add' id='${arr[key].id}' class="btn btn-default btn-lg active">+</button>

                    </h2>
                    <h3>￥${arr[key].price}</h3>
                    <h4 name='del' goodId='${arr[key].id}'>X</h4>
                </li>`
        }

        str += ` <div class="full">


            <h1><input type="checkbox" name="buyAll" id="" ${bool ? 'checked' : ''}>全选</h1>
                <h2 name='delAll'>删除选中的商品</h2>
                <h3>已选择<span>${onlyNum}</span>种商品</h3>
                <h4>共计<span>${allNums}</span>件商品</h4>
                <h5>应付总额：<span>￥${money}</span></h5>
                <h6><button>现在结算</button></h6>
            </div>  
                `
        //吧模板字符串写入到页面
        $('.list').html(str);
    }
    else {
        $('.list').html(`
         <h1 style="width: 100%; font-size:40px"'>购物车里什么都没有，快去选购吧</h1>`);
    }




}

//执行函数，生成基础页面
setPage()
//判断购物车有没有内容
if (localStorage.getItem('car')) {
    $('main div')[0].className = ''
} else {
    $('main div')[0].className = 'empty'
}



//获取本地购物车数据库
let arr = JSON.parse(localStorage.getItem('car'));
let str1 = '';
console.log(arr)
function setPage() {
    //定义bool
    // 如果有buy==0就为false
    // 让全选框取消
    let bool = true;
    if (arr) {
        arr.forEach(function (item) {
            if (item.buy == 0) {
                bool = false;
            }
        })
    }


    if (localStorage.getItem('car')) {
        //定义空字符串
        let str = '';
        // 定义种类
        let onlyNum = 0;
        // 定义总数量
        let allNums = 0;
        // 定义总价钱
        let money = 0;
        //循环遍历arr
        for (let key in arr) {
            //如果有buy属性
            if (arr[key].buy == 1) {
                //种类++，总价=数量*价格。数量=循环的num+的和
                onlyNum++;
                money += parseFloat(arr[key].price * arr[key].num)
                allNums += arr[key].num;
            }


            str += ` <li>
                    <input name='checkbox' style='position: absolute;top: 48%;
                left: 31px;' type="checkbox" class="check-one" goods_id="${arr[key].id}" ${arr[key].buy == 1 ? 'checked' : ''}>

                    <a href="JavaScript:;"><img style="width: 100%;height: 100%" src="${arr[key].images}" alt=""></a>

                    <h6 class="xx">
                        <a href="JavaScript:;">${arr[key].name}</a>
                        <span>${arr[key].title}</span>
                    </h6>
                    <h1>￥${arr[key].price}</h1>
                    <h2>
                        <button type="button" class="btn btn-default btn-lg active jian" name='red' id='${arr[key].id}' ${arr[key].num <= 1 ? 'disabled' : ''}>-</button>
                        <span>${arr[key].num}</span>
                        <button type="button" name='add' id='${arr[key].id}' class="btn btn-default btn-lg active">+</button>

                    </h2>
                    <h3>￥${arr[key].price}</h3>
                    <h4 name='del' goodId='${arr[key].id}'>X</h4>
                </li>`
        }

        str += ` <div class="full">


            <h1><input type="checkbox" name="buyAll" id="" ${bool ? 'checked' : ''}>全选</h1>
                <h2 name='delAll'>删除选中的商品</h2>
                <h3>已选择<span>${onlyNum}</span>种商品</h3>
                <h4>共计<span>${allNums}</span>件商品</h4>
                <h5>应付总额：<span>￥${money}</span></h5>
                <h6><button>现在结算</button></h6>
            </div>  
                `
        //吧模板字符串写入到页面
        $('.list').html(str);
    }
    else {
        $('.list').html(`
         <h1 style="width: 100%; font-size:40px"'>购物车里什么都没有，快去选购吧</h1>`);
    }




}

//执行函数，生成基础页面
setPage()