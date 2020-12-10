
    //生成随机六位数 100000 -999999
    let num = parseInt(Math.random() * 900000 + 100000);
    $('#yzm').text(num);
    //获取的内容需要写在点击事件里
    $('button').click(function () {


      let name = $('input')[0].value;
      let pwd1 = $('input')[1].value;
      let pwd2 = $('input')[2].value;
      let varCode = $('input')[3].value;
      //判断name是否为空
      if (name == '') {
        $('.spanspan')[0].innerText = '用户名不能为空';
        return;
      } else {
        $('.spanspan')[0].innerText = '';
      }
      //判断密码是否为空
      if (pwd1 == '') {
        $('.spanspan')[1].innerText = '密码不能为空';
        return;
      } else {
        $('.spanspan')[1].innerText = '';
      }
      //判断确认密码是否为空
      if (pwd2 == '') {
        $('.spanspan')[2].innerText = '确认密码不能为空';
        return;
      } else {
        $('.spanspan')[2].innerText = '';
      }

      //判断密码和确认密码是否相同
      if(pwd1!=pwd2){
        $('.spanspan')[1].innerText = '两次密码不一致';
        $('.spanspan')[2].innerText = '两次密码不一致';
        return;
      }else{
        $('.spanspan')[1].innerText= '';
        $('.spanspan')[2].innerText  = '';

      }
      //判断验证码是否为空
      if (varCode == '') {
        $('.spanspan')[3].innerText = '验证码不能为空';
        return;
      } else {
        $('.spanspan')[3].innerText = '';
      }

      //判断验证码是否相同
      if(varCode!=num){
        $('.spanspan')[3].innerText = '验证码不正确';
        return;
      }else {
        $('.spanspan')[3].innerText = '';
      }
      
      $.ajax({
        url:'../server/goods_res.php',
        data:{userName:name,userPwd:pwd1},
        type:'post',
        dataType:'json',
        success:function(res){
          console.log(res)
          if(res==1){
            //成功alert
            window.alert('恭喜您，注册成功');
            window.location.href='./login.html';
          }else{
            //失败alert
            window.alert('您输入的用户已存在');
          }
        }
      })
    })
  