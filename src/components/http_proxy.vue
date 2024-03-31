<template>
  <div>
    <div class="product-introduction">
      <h2>🌍免费HTTP代理</h2>
      <p>🕵️还在为论文、大作业的数据获取而ip被封发愁吗，来试试免费的http代理吧！
<!--        在这里让爬取数据不再遥不可及。-->
<!--        致力于为广大的科研学生和教师提供免费的HTTP代理服务，助力您更轻松地进行网络爬虫和数据采集。-->
      </p>
      <p>⚠️本站提供HTTP代理旨在满足科研和教学中对学术论文、抓取网页数据，请勿用作商业用途。</p>
<!--      <p>为了确保您的隐私和安全，我们采用了严格的数据保护措施，保证您的个人信息和访问数据的机密性。您可以放心使用我们的代理服务，专注于您的科研和教学工作。</p>-->
      <p>👐🏽无论您是科研学生还是教师，欢迎收藏本站和加群，免费使用我们的HTTP代理。</p>
<!--      <form>-->
<!--        <input type="email" placeholder="输入您的电子邮件地址" required>-->
<!--        <button type="submit">获取代理信息</button>-->
<!--      </form>-->
    </div>
    <div>
      <p>
      <strong><span>什么？爬虫不会使用代理？</span></strong>
      <span class="label" style="background-color: #0094D9; "
            onclick="javascript:window.open('./tech.html')">代理使用教程</span>
      </p>
    </div>
    <div>
      <table class="layui-table">
        <colgroup>
          <col width="150">
          <col width="150">
          <col width="150">
          <col width="150">
          <col width="150">
        </colgroup>
        <thead>
        <tr>
          <th>代理</th>
          <th>代理类型</th>
          <th>可用</th>
          <th>地区</th>
          <th>最近更新时间</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="proxy in proxies" :key="proxy.proxy">
          <td>{{ proxy.proxy }}</td>
          <td>{{ proxy.https?'https':'http' }}</td>
          <td>{{ proxy.last_status?'是':'否' }}</td>
          <td>{{ proxy.region }}</td>
          <td>{{ proxy.last_time }}</td>


          <!-- 添加更多表格行，根据你的 JSON 数据结构 -->
        </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>
<script>
// import {RouterView,RouterLink} from "vue-router";
import axios from "axios";

export default {

  data() {
    return {
      proxies: [],
    }
  },
  created() {
    this.initProxy();
  },
  methods: {
    initProxy() {
      axios.get('/proxy/get_all')
          .then(response => {
            console.log(response)
            this.proxies = response.data.proxys; // 将获取到的 JSON 数据赋值给 proxies 数组
          })
          .catch(error => {
            console.error(error);
          });
    },
  }
}

</script>

<style>
.page {
  width: 96%;
  max-width: 700px;
  margin: 23px auto;
  display: block;
}
.product-introduction {
  font-family: Arial, sans-serif;
  font-size: 16px;
  color: #333;
}

h2 {
  font-size: 24px;
  font-weight: bold;
}

p {
  margin-bottom: 10px;
}

form input[type="email"] {
  padding: 5px;
  font-size: 14px;
}

form button[type="submit"] {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>