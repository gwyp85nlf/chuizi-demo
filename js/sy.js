

//浏览器的滚动事件
$(window).scroll(function () {
    //大于nav高度时吸顶
    if ($(window).scrollTop() > $('nav').height()) {
        $('nav').css({ top: 0 })
    } else {
        $('nav').css({ top: 45 })
    }
})



//使用代理服务器传参
$.ajax({
    url: '/JD?category_id=185&page=1&sort=sort&num=20&type=shop&channel_id=1001',
    dataType: 'json',
    success: function (res) {
        //引用外部js方法
        // setLi($('.aaa ul'), res)
        console.log(res);
        const data = res.data;
        //定义空字符串
        let str = '';
        // 循环遍历（对象只能用for in循环）
        for (let key = 0; key < data.list.length; key++) {
            //声明变量存储li的值 要用+=
            str += `<li>
                        <a href="register/detail.html?id=${data.list[key].spuInfo.skuId}"  display='block'>
                            <img src="${data.list[key].spuInfo.images}" alt="">
                        </a>
                        <h3>${data.list[key].spuInfo.spuTitle}</h3>
                        <p>${data.list[key].spuInfo.activeTitle}</p>
                        <span>￥${data.list[key].spuInfo.price}</span>    
                    </li>`
        }
        //    将li的内容写入到ul中
        $('.aaa ul').html(str)
    }
})

//点击购物车时，判断有没有localSTtorage
// 有就跳转页面，
$('#car').click(function () {

    if (localStorage.getItem('login') == 1) {
        window.location.href = './register/car.html';
    } else {
        window.alert('请您先登录');
        window.location.href = './register/login.html';

    }
})



// //判断登录事件
// console.log($('#login').text())
// if ($('#login').text() == '登录') {
//     //如果localStorage的状态码为1，让登录变为注销
//     if (localStorage.getItem('login') == 1) {
//         //点击注销时触发事件       

//         $('#login').text('注销').click(function () {
//             //如果点击确认，删除本地localstorage
//             //    否者直接return

//             if ($('#login').text() == '注销') {
//                 if (window.confirm('确定注销吗') == true) {
//                     localStorage.removeItem('login');
//                     //清除本地存储之后，text变成登录

//                     $('#login').text('登录').click(function () {
//                         window.location.href = './register/login.html';
//                     })
//                 } else {
//                     return;
//                 }
//             }
//         });
//     }
//     //如果变为登录跳转页面
//       else{
//         $('#login').text('登录').click(function () {
//             window.location.href = './register/login.html';
//         });
//     }
// }

if (localStorage.getItem('login') == 1) {
    $('#login').text('注销');
}

if ($('#login').text() == '登录') {
    $('#login').click(function () {
        window.location.href = './register/login.html';
    })
} else {
    $('#login').click(function () {
        $('#login').text('登录');
        localStorage.removeItem('login');
        window.location.reload();
    })};

  //搜索引擎事件
  const Lul =document.querySelector('.l-box>ul'); 
  //给文本框绑定input事件
  const Linp=document.querySelector('.l-box>input'); 
  Linp.addEventListener('input',function(){
      const value = this.value.trim()//拿到文本框内容去除首位空格
       if(!value)return/*  Lul.style='display:none' */
       //准备发送请求动态创建script标签
       const script = document.createElement('script');
       //准备一个请求地址wd这个参数换成文本框里面的输入内容
       const url = `https://www.baidu.com/sugrec?pre=1&p=3&ie=utf-8&json=1&prod=pc&from=pc_web&sugsid=1446,32857,33124,33061,32973,33099,33101,32962,22159&wd=${value}&req=2&csor=1&cb=bindHtml&_=1605768936993`
       script.src=url;
       document.body.appendChild(script);
       script.remove()
  })
  //全局准备一个jsonp的处理函数
  function bindHtml(res){
      //没有g这个数据就不渲染页面了
      if(!res.g){
         Lul.classList.remove('active')
         return
      }
      let str = ''
      for(let i=0;i<res.g.length;i++){
          str += `
          <li style="height:20px">${res.g[i].q}</li>
          `
      }
      Lul.innerHTML = str;
      Lul.classList.add('active')
      Linp.addEventListener('blur',()=>{Lul.style='display:none'
      window.history.go(0);
      })
     
  }
 
 //渐隐渐显轮播图
class Banner{
    constructor (ele){
        this.ele=document.querySelector(ele)
        this.imgBox = this.ele.querySelector('.imgBox')
        this.pointBox=this.ele.querySelector('.pointBox')
        this.leftRightBox=this.ele.querySelector('.leftRightBox')
        this.index=0;
        this.timer=0;
        this.init()
    }
    init(){
        this.setPoint()
        this.autoPlay()
        this.overOut()
       /*  this.leftRight() */
        this.pointEvent()
        this.changePage()
    }
    //设置焦点
    setPoint(){
        const pointNum = this.imgBox.children.length;
        const frg=document.createDocumentFragment();
        for(let i=0;i<pointNum;i++){
            const li = document.createElement('li');
            if(i === 0)li.className='active'
            li.setAttribute('i',i)
            frg.appendChild(li)
        }
        this.pointBox.appendChild(frg)
        this.pointBox.style.width=pointNum*20*1.5+'px'
    }
    changeOne(type){
        this.imgBox.children[this.index].classList.remove('active')
        this.pointBox.children[this.index].classList.remove('active')
        if(type === true){
            this.index++
        }else if(type === false){
            this.index--
        }else{
            this.index=type
        }
        if(this.index>=this.imgBox.children.length)this.index=0;
        if(this.index<0)this.index=this.imgBox.children.length-1;
        this.imgBox.children[this.index].classList.add('active')
        this.pointBox.children[this.index].classList.add('active')
    }
    //自动轮播
    autoPlay(){
        this.timer=setInterval(()=>{
            this.changeOne(true)
        },2000)
    }
    //移入移出
    overOut(){
        this.ele.addEventListener('mouseover',()=>clearInterval(this.timer))
        this.ele.addEventListener('mouseout',()=>this.autoPlay())
    }
 /*    leftRight(){
        this.leftRightBox.addEventListener('click',e =>{
            e=e || window.event
            const target = e.target || e.srcElement
            if(target.className === 'left'){
                this.changeOne(false)
            }
            if(target.className === 'right'){
                this.changeOne(true)
            }
        })
    } */
    //切换焦点
    pointEvent(){
        this.pointBox.addEventListener('click',e =>{
            e=e || window.event
            const target = e.target||e.srcElement
            if(target.nodeName === 'LI'){
                const i = target.getAttribute('i')-0
                this.changeOne(i)
            }
        })
    }
    //切换页面
    changePage(){
        document.addEventListener('visibilitychange',()=>{
            const state = document.visibilityState
            if(state === 'hidden')clearInterval(this.timer)
            if(state === 'visible')this.autoPlay()
        })
    }
}

