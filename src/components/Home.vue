<template>
<!--  <div class="page">-->
  <div>

    <!--块内容-->
    <div class="block">

      <!--块顶部内容-->
      <div class="top" style="margin-bottom: 20px;">
        <p class="topTitle">出去走走</p>
        <p class="topContent">时光荏苒，切勿辜负了光阴</p>
      </div>




    <!--介绍与标签-->
    <div class="introduce">
      <div class="scroll-container">
        <div
            class="scroll-text"
            :class="{ paused: isPaused }"
            :style="{ animationDuration: duration }"
            @click="toggleScroll"
            ref="scrollContainer">
          {{ text }}
        </div>
      </div>
      <p style="font-size: 15px;">今日已帮助 <span class="layui-badge layui-bg-orange">{{ totalCnt + 236 }}</span>人刷步️!
      </p>
      <p><strong>进步太慢也是一种退步,赶快开始刷步吧！</strong></p>
      <p style="font-size: 15px;">第一次使用？强烈推荐先看<span style="font-size: 20px;"><strong>使用帮助</strong>️</span>⬇️
      </p>
      <p style="font-size: 15px;">不知道账号密码？先看<span style="font-size: 20px;"><strong>使用帮助</strong>️</span>⬇️
      </p>

      <p>
<!--      <span class="label" style="background-color: #0094D9; "-->
<!--            onclick="javascript:window.open('./http_proxy')">免费代理</span>-->

        <span class="label" style="background-color: #0094D9; "
              onclick="javascript:window.open('./tech.html')">使用帮助</span>

        <span class="label" style="background-color: coral; "
              onclick="javascript:window.open('./contact.html')">交流群</span>

        <!--            <span class="label" style="background-color: #07c160; " onclick="javascript:window.open('https://wzz.wangzouzou.com/motion/user/phones.html')">自动版</span>-->

        <span class="label" style="background-color: #666666; "
              onclick="javascript:window.open('https://haokawx.lot-ml.com/Product/Index/535665')">流量卡</span>
      </p>


    </div>

    <hr>
    <div>
      <div class="layui-form-item layui-form">
        <label class="layui-form-label">账号</label>
        <div class="layui-input-block">
          <div class="layui-input-wrap"><input v-model="user" type="text" name="xmphone" id="xmphone" autocomplete="off"
                                               placeholder="请输入" lay-verify="required" class="layui-input"
                                               lay-affix="clear">
            <div class="layui-input-affix layui-input-suffix"><i class="layui-icon layui-icon-clear"></i></div>
          </div>
        </div>

      </div>
      <div class="layui-form-item layui-form">
        <label class="layui-form-label">密码</label>
        <div class="layui-input-block">
          <div class="layui-input-wrap"><input v-model="password" type="password" name="xmpwd" id="xmpwd"
                                               autocomplete="off" placeholder="请输入" lay-verify="required"
                                               class="layui-input" lay-affix="eye">
            <div class="layui-input-affix layui-input-suffix"><i class="layui-icon layui-icon-eye-invisible"></i></div>
          </div>
        </div>
      </div>
      <div class="layui-form-item layui-form">
        <label class="layui-form-label">步数</label>
        <div class="layui-input-block">
          <!--        <div class="layui-input-wrap"><input v-model="step" type="number" name="steps" id="steps" autocomplete="off" placeholder="默认：68888" lay-verify="required" class="layui-input" oninput="if(value>100000)value=100000;if(value<0)value=0" lay-affix="number" step="256"><div class="layui-input-affix layui-input-split layui-input-number layui-input-suffix"><i class="layui-icon layui-icon-up"></i><i class="layui-icon layui-icon-down"></i></div></div>-->
          <div class="layui-input-wrap"><input ref="getStepValue" type="number" name="steps" id="steps" autocomplete="off"
                                               placeholder="默认：68888" lay-verify="required" class="layui-input"
                                               oninput="if(value>100000)value=100000;if(value<0)value=0"
                                               lay-affix="number" step="256">
            <div class="layui-input-affix layui-input-split layui-input-number layui-input-suffix"><i
                class="layui-icon layui-icon-up"></i><i class="layui-icon layui-icon-down"></i></div>
          </div>
        </div>
      </div>
      <button type="button" v-on:click="sub()" class="layui-btn layui-btn-fluid subButton">提交</button>
    </div>

    <p style="font-size: 15px;text-align: center">请把网站添加至书签，别把我弄丢了</p>
    <p style="text-align: center">
      ➡️➡️➡️➡️➡️
      <span class="label" style="background-color:rgb(255,125,125);"
            onclick="javascript:window.open('https://dpurl.cn/3yFMbJVz')">美团大额红包</span>

      <span class="label" style="background-color:rgb(51,151,228); "
            onclick="javascript:window.open('https://u.ele.me/GsR1ZE9C')">饿了么大额红包</span>

      <span class="label" style="background-color:rgb(255,125,125);" onclick="javascript:window.open('./bawangcan.html')">外卖返利App</span>


      <span class="label" style="background-color:rgb(255,125,65); "
            onclick="javascript:window.open('https://kurl03.cn/7HJYyq')">滴滴打车红包</span>
      ⬅️⬅️⬅️⬅️️⬅️
    </p>

      <hr>
      <!--图片公众号-->
      <div class="block gzh">
        <h3>本站公众号</h3>
        <p>微信内浏览长按即可识别，点点关注不迷路</p>
        <img src="../../src/assets/images/wxgzh.png">
      </div>

      <!--底部图片信息-->
      <div class="bottomImg none">
        <a href="https://haokawx.lot-ml.com/Product/Index/535665" target="_blank">
          <img src="https://img.faithxy.com/image/motion/2204/云上流量卡铺2.png">
        </a>
      </div>

    </div>

    </div>


</template>

<script>
import axios from "axios";


export default {
  created() { //init
    this.initTotalCnt();
    this.initProxy();
  },
  mounted() {
    layui.use('element', function () {
      var layer = layui.layer
    })
    this.$nextTick(() => {
      const textWidth = this.$refs.scrollContainer.scrollWidth;
      let duration = textWidth / 30;
      // 设置一定速度值，避免太短或太长导致过快或过慢
      if (duration < 1.5) {
        duration = 1.5
      }// 10s for 1000px
      this.duration = duration + "s";
      console.log(textWidth, this.duration)
    });

  },
  data() {
    return {
      text: '[新用户⚠️]近期zepp life新号会触发风控，导致无法刷步成功，可等待一两天后再进行刷步',
      duration: "0s",
      isPaused: false,
      msg: "微信运动步数",
      user: "",
      step: 0,
      password: "",
      imgViewDialogVisible: false, // 控制dialog显示隐藏
      imgViewDialog_imgSrc: "", // 控
      // totalCnt: this.getTotalCnt(),
      totalCnt: 0,
      proxies:[],
    }
  },
  methods: {
    toggleScroll() {
      this.isPaused = !this.isPaused;
    },
    /**
     * 图片dialog_显示
     */
    imgViewDialog_show: function (item) {
      this.imgViewDialogVisible = true;
      this.imgViewDialog_imgSrc = item.src;
    },
    /**
     * 图片dialog_关闭
     */
    imgViewDialog_close: function () {
      this.imgViewDialogVisible = false;
      var self = this;
      setTimeout(function () {
        self.imgViewDialog_imgSrc = "";
      }, 100);
    },
    initProxy(){
      axios.get('/proxy/get_all')
          .then(response => {
            console.log(response)
            this.proxies = response.data.proxys; // 将获取到的 JSON 数据赋值给 proxies 数组
          })
          .catch(error => {
            console.error(error);
          });
    },
    initTotalCnt() {
      axios.get('/api/get_push_step_cnt')
          .then((res) => {
            if (res.status === 200 && res.data.code === 0) {
              this.totalCnt = res.data.data.cnt;
            }
          }).catch(function (error) {
        console.log('init totalCnt:' + error);
      });
    },
    sub() {
      if (this.$refs.getStepValue.value === '') {
        this.step = 68888
      } else {
        this.step = Number(this.$refs.getStepValue.value)
      }
      let valid = this.f(this.user, this.password);
      let layer = layui.layer
      if (!valid) {
        // layui.use('element',function (){
        //   var layer = layui.layer
        //   layer.msg("输入格式有误，请检查")
        // })
        layer.msg("输入格式有误，请检查")
        return;
      }
      axios.post('/api/push_step', {user: this.user, password: this.password, step: this.step})
          .then((res) => {
            if (res.status === 200 && res.data.code === 0) {
              layer.msg("刷步成功！稍后可在微信运动查看")
            } else {
              layer.msg('status=' + res.status + ',登陆出现错误，请检查或在交流群反馈');
            }
            console.log(JSON.stringify(res))
          }).catch(function (error) {
        console.log(error);
        layer.msg('登陆出现错误，请检查或在交流群反馈');
      });
    },
    //生成随机数
    randomNum(minNum, maxNum) {
      switch (arguments.length) {
        case 1:
          return parseInt(Math.random() * minNum + 1, 10);
          break;
        case 2:
          return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
          break;
        default:
          return 0;
          break;
      }
    },
    f(phone, pwd) {    /*检测格式*/
      var layer = layui.layer;
      var mobile = /^1[3-9]\d{9}$/; // 手机号码验证
      var email = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/; // 邮箱验证
      var flag = mobile.test(phone) || email.test(phone);
      if (!flag) {
        console.log('账号格式错误'); //todo import layer
        layer.msg('账号格式错误'); //todo import layer
        return false;
      }
      if (pwd == null || "" == pwd) {
        console.log('请填写密码');
        layer.msg('请填写密码');//todo import layer
        return false;
      }
      if (pwd.indexOf(" ") != -1) {
        console.log('密码不能包含空格哦');
        layer.msg('密码不能包含空格哦');//todo import layer
        return false;
      }
      return true;
    }
  }
}

</script>

<!--文字滚动效果-->
<style>
.scroll-container {

//width: 400px;
  width: 100%;
  height: 1.2em;
  overflow: hidden;
  border: 1px solid #ccc;
  background-color: whitesmoke;

  position: relative;
}

.scroll-text {
  position: absolute;
  top: 0;
  left: 0;
  white-space: nowrap;
  animation: scrollText 0s linear infinite;
  transition: transform 0.3s ease-out;
  cursor: pointer;
}

.scroll-text.paused {
  animation-play-state: paused;
}

.scroll-text:hover {
  animation-play-state: paused;
}

@keyframes scrollText {
  0% {
    /* 播放完成循环播放 */
    transform: translateX(300px);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>