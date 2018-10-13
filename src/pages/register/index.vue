<template>
  <div class="container-login">
    <div class="bg-pic">
      <img src="http://p3gbjsikb.bkt.clouddn.com/img/bg/bg-2.jpg" alt="">
    </div>
    <div class="back-x">
      <div class="back2">
				<i class="iconfont icon-back2"></i>
    	</div>
    </div> 
    <div class="list-block">
      <ul>
       <p class='title'>注&nbsp;册</p>
        <li>
          <div class="item-input">
            <input type="text" id="nickname" placeholder="用户名" value="">
          </div>
        </li>
        <li>
          <div class="item-input">
            <input type="password" id="password" placeholder="密码" class="">
          </div>
        </li>
        <li>
          <div class="item-input">
            <input type="password" id="password1" placeholder="确认密码" class="">
          </div>
        </li>
       </ul>
    </div>
    <router-link to="/register">
      <button class="btn-big2">注&nbsp;册</button>
    </router-link>
    <div class="cancel-small">
      <hr><br>
      <router-link class="gray" to="/login">取消注册</router-link>
    </div>
    <!-- <div class="row">
      <div class="col-50"><a href="#" id="login-btn" class="button button-big button-fill button-success">登录</a></div>
    </div> -->
  </div>
</template>

<script type='text/javascript' src='http://g.alicdn.com/sj/lib/zepto/zepto.min.js' charset='utf-8'></script>
<script type='text/javascript' src='http://g.alicdn.com/msui/sm/0.6.2/js/sm.min.js' charset='utf-8'></script>
<script type='text/javascript' src='http://g.alicdn.com/msui/sm/0.6.2/js/sm-extend.min.js' charset='utf-8'></script>
<script type='text/javascript' src='@/js/utils.js'></script>

<script>
export default {
  name: 'register',
  data: function () {
    return {
      bannerType: 1,
      street: ''
    }
  },
  created () {}
}
</script>
<!--<script>
    $(function (){
        $('#register-btn').on('click', function (){
            var username = $('#name').val();
            var password = $('#password').val();
            AjaxIO.post("/register", {registerId: username, password: password},
                         function (result) {
                        if (result.data.token) {
                            localStorage.setItem("token",result.data.token);
                            location.href = "coupon.html";
                        }
            });

        });
    });
</script>-->

<style scoped>
.bg-pic{
  z-index: -20;
}
.bg-pic img{
  width: 100%;
  height: 600px;
}
.container-login{
  position: relative;
  /* opacity:0.45;
  filter:alpha(opacity=45);
  background:rgb(43, 44, 46);  */
}
.container-register{
  position: relative;
}
.back-x{
  position: absolute;
  top: 20px;
  left: 5%;
  border-radius: 100%;
  color: #FFF;
  font-size: 20px;
}
.list-block{
  z-index: 5;
  position: absolute;
  top: 120px;
  width: 80%;
  margin-left: 10%;
  border-radius: 3px;
  color: #FFF;
}
p.title{
  text-align:center;
  font-size: 25px;
}
.item-input{
  padding: 15px 0;
}
.item-input input{
  opacity:0.55;
  filter:alpha(opacity=55);
  background:rgb(119, 123, 128);
  color: #FFF;
  width: 80%;
  border: none;
  border-radius: 20px;
  padding: 6px 25px;
  font-size: 18px;
}
.btn-big2{
  position: absolute;
  top: 340px;
  text-align: center;
  padding: 0;
  width: 78%;
  background: rgb(21, 22, 23); 
  border: none;
  border-radius: 30px;
  color: #FFF;
  font-size: 20px;
  line-height: 40px;
}
.btn-big2{
  top: 400px;
}
.cancel-small{
  position: absolute;
  top: 480px;
  color: #FFF;
  font-size: 14px;
  text-align: center;
  width: 100%
}
.cancel-small hr{
  margin: 7px 0;
  margin: 10px 30px;
  border: 0;
  opacity:0.45;
  filter:alpha(opacity=45);
  background:rgb(119, 123, 128);
  height: 1px
}
.gray{
  color: rgb(175, 170, 170);
}
</style>
