<?php
$cat_one_id = $_GET['cat_one_id'];

?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <link rel="stylesheet" href="../bootstrap-3.3.7-dist/css/bootstrap.min.css">
  <link rel="stylesheet" href="../css/base.css">
  <link rel="stylesheet" href="../css/list.css">

</head>
<body>
  <h1>我是一个列表页面</h1>

  <div class="pagi"></div>



  <div class="container">
    <ul>
      <!-- <li class="list-item">
        <div class="panel panel-primary">
          <div class="panel-body">
            <ol class="breadcrumb">
              <li><a href="#">一级分类</a></li>
              <li><a href="#">二级分类</a></li>
              <li class="active">三级分类</li>
            </ol>
          </div>
          <div class="panel-footer">
            <div class="row">
              <div class="">
                <div class="thumbnail">
                  <img src="https://g-search3.alicdn.com/img/bao/uploaded/i4/i3/2898933862/O1CN01ExuNHp1eOq9TKoRh6_!!2898933862.jpg_580x580Q90.jpg_.webp" alt="...">
                  <div class="caption">
                    <h3>商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述</h3>
                    <p>
                      <i class="glyphicon glyphicon-yen"></i>
                      <span>1234.56</span>
                    </p>
                    <p><a href="javascript:;" class="btn btn-primary" role="button">查找相似商品</a> <a href="#" class="btn btn-danger" role="button">查看商品详情</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li> -->
    
  
    </ul>
  </div>



  <script src="../jquery.min.js"></script>
  <script>
      const oUl = document.querySelector('ul');




      // 向一个PHP程序,发送ajax请求
      // 做数据库查询操作
      // 返回值就是查询结果

      $.ajax({
        url:'../php/goods_select.php',
        type:'get',
        data: { cat_one_id : '<?php echo $cat_one_id; ?>' },
        dataType : 'json',
        async : true,
        success : function(res){
          // 请求成功,生成li标签,写入到ul中
          // 使用模板字符串生li标签

          console.log(res);

          // 生成一个字符串
          let str = '';

          // JavaScript
          res.forEach(function(v){
            // 每次循环一个res中的对象,就生成一个li标签
            
            str += `
            <li class="list-item">
              <div class="panel panel-primary">
                <div class="panel-body">
                  <ol class="breadcrumb">
                    <li><a href="#">${v.cat_one_id}</a></li>
                    <li><a href="#">${v.cat_two_id}</a></li>
                    <li class="active">${v.cat_three_id}</li>
                  </ol>
                </div>
                <div class="panel-footer">
                  <div class="row">
                    <div class="">
                      <div class="thumbnail">
                        <img src="${v.goods_big_logo}" alt="...">
                        <div class="caption">
                          <h3>${v.goods_name}</h3>
                          <p>
                            <i class="glyphicon glyphicon-yen"></i>
                            <span>${v.goods_price}</span>
                          </p>
                          <p><a href="javascript:;" class="btn btn-primary" role="button">查找相似商品</a> <a href="./detail.html?id=${v.goods_id}" class="btn btn-danger" role="button">查看商品详情</a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            `;
          })

          oUl.innerHTML = str;
        }
      })
  
  </script>

</body>
</html>
