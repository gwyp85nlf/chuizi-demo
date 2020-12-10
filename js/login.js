
console.log(window.location.search.substring(window.location.search.indexOf('=')+1))

 //提交事件
 $('.btn').click(function(){
   $(function(){
  $('#login').validate({
    rules:{
      username:{
        required:true,
        minlength:5,
        maxlength:10
        
      },
      password:{
        required:true,
        minlength:6,
        maxlength:12
      }
    },
    messages:{
      username:{
        required:'请准确填写用户名',
        minlength:'最少5个字符',
        maxlength:'最多10个字符'
      },
      password:{
        required:'请准确填写密码',
        minlength:'长度为六位',
        maxlength:'长度为六位'
      },

    
    }
  })
})
     //获取表单内容
     let name=$('input')[0].value;
     let pwd=$('input')[1].value;
     if(!name||!pwd)return alert('请完整填写表单')
     $.ajax({
         url:'../server/goods_login.php',
         type:'post',
         data:{userName:name,userPwd:pwd},
         dataType:'json',
         success:function(res){
             //成功时
             if(res=='1'){
                 //设置本地存储
                 localStorage.setItem('login','1');
                 window.alert('恭喜你，登录成功');


                 //判断有没有从那个网址传过来的参数
                 // 如果有，从哪来回哪去
                 //   如果没有，跳转首页面

                 // 如果有地址window.location.search 是有内容的
                 // 如果没有window.location.search  是空的
                
                 if(window.location.search){
                   window.location.href= window.location.search.substring(window.location.search.indexOf('=')+1);
                 }else{
                   window.location.href='../index.html';
                 }
             }else{
               window.alert('账号或密码错误');

             }
         }
     })

 })




 /* //从哪来到哪去
 // 1.在其它页面中，点击加入购物车，或者其他标签时
 // 跳转指定页面，同时要传参，传参当前页面地址

 // 2.跳转至之地那个页面，例如登录页面
 //    在登陆成功之后，
 //       判断是否有地址传参
 //       有地址传参就去来的页面
 //       没有传参地址，就是返回首页面 */

 /* const span=document.querySelector('.demo1>span');
 
 span.addEventListener('click',function(){
   this.style='backgroundImg:url("../img/login/checkbox_188421c8c6@2x.png")'
   console.log(span)
 }) */