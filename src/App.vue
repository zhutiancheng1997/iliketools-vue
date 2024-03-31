<template>
  <div class="page">
    <!--    <div class="main-content">-->
    <!--    <RouterLink class="box_1" to="/home"  active-class="active">点我➡️微信刷步</RouterLink>-->
    <!--    <RouterLink class="box_2" to="/http_proxy"  active-class="active">点我➡️免费代理</RouterLink>-->
    <router-link to="/" id="box" active-class="active">微信刷步</router-link>
    <router-link to="/http_proxy" id="box" active-class="active">️免费代理</router-link>
    <router-view></router-view>
    <!--    </div>-->
  </div>
</template>

<script>
import {RouterView, RouterLink} from "vue-router";
import axios from "axios";

export default {}
</script>

<style>
#box {
  display: inline-block;
  padding: 10px 20px;
  text-decoration: none;
  background: #4092D2;
  font-weight: bold;
  font-size: 18px;
  justify-content: center;
  transition: background-color 0.3s ease;
  border: 1px rgb(224, 224, 224) solid;
  border-radius: 10px;
}

#box:hover {
  background-color: #eaeaea;
}

a {
  text-decoration: none;
  color: #fff;
}

.active {
  background-color: rgb(22, 122, 214);
  color: white;
}


.page {
  width: 96%;
  max-width: 700px;
  margin: 23px auto;
  display: block;
}

</style>