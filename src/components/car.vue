<template>
<div>
<div>
<!--  <vside></vside>&lt;!&ndash;  引入左侧菜单组件&ndash;&gt;-->
  <div class="con">
    <div class="same_module">
      <div class="bigboxbox">
        <div class="logobox">
          <img src="../assets/carimage/changan-logo.svg" alt="长安汽车">
        </div>
        <div class="navigationbox">

          <div class="title up" @mouseover="slide(data)">
            <span>标题一</span><i class="arrow"></i>
          </div>
          <div class="detail" style="height:0">
            <div class="inner">
              <p>这是一段文本</p>
              <p>这是一段文本</p>
              <p>这是一段文本</p>
              <p>这是一段文本</p>
            </div>
          </div>

          <div class="title up" @mouseover="slide(data)">
            <span>标题二</span><i class="arrow"></i>
          </div>
          <div class="detail" style="height:0">
            <div class="inner">
              <p>这是er段文本</p>
              <p>这是er段文本</p>
              <p>这是re段文本</p>
              <p>这是er段文本</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="imgbox">
    <el-carousel trigger="click" height="500px" :interval="6000" arrow="always" style="width:100%; ">
      <el-carousel-item v-for="item in img" :key="item">
        <img :src="item.src" style="width:100%;height: 100% " alt="图片丢失了">
      </el-carousel-item>
    </el-carousel>
  </div>

  <div>

  </div>



  </div>
</div>
</template>

<script>
  import vside from './slde.vue'//将slde作为一个标签，这里是vside
    export default {
        name: "car",
      components:{//将visde注册为组件，作为标签使用
        vside
      },
      data(){
          return{
            img:[
              {
               src:require('../assets/carimage/a0fv5.jpg')
              },
              {
                src:require('../assets/carimage/b08c.jpg')
              },
              {
                src:require('../assets/carimage/cb7e19b10.jpg')
              }
            ],
            // carimg:[
            //   {
            //     name:'UNI-K',
            //     src:require('../assets/carimage/car1.png')
            //   },
            //   {
            //     name:'HGJGJ',
            //     src:require('../assets/carimage/car2.png')
            //   },
            //   {
            //     name:'GVHGHGFH',
            //     src:require('../assets/carimage/car3.png')
            //   },
            //   {
            //     name:'BBNVCNV',
            //     src:require('../assets/carimage/car4.png')
            //   },
            //   {
            //     name:'FGBFDHFDH',
            //     src:require('../assets/carimage/car5.png')
            //   },
            //   {
            //     name:'FGHTGFYERSDR',
            //     src:require('../assets/carimage/car6.png')
            //   }
            // ],
            activeIndex: '1'
          }
      },
      methods:{
        slide:function(data){
          let curTarget = data.currentTarget,
            containsCurClass = curTarget.classList.contains("up"),
            nextSibling = curTarget.nextSibling;
          while(nextSibling.nodeType == 3 && /\s/.test(nextSibling.nodeValue)){
            nextSibling = nextSibling.nextSibling;
          };
          let detailScrollHeight = nextSibling.scrollHeight;
          if(containsCurClass){
            curTarget.classList.remove("up");
            this.toggleSlide(nextSibling,detailScrollHeight,'500');
          }else{
            curTarget.classList.add("up");
            this.toggleSlide(nextSibling,0,'500');
          }
        },
        toggleSlide:function(dom,height,time){
          dom.style.transition = 'height ' + time + 'ms';
          dom.style.height = height + 'px';
        }
      }
    }
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  .bigboxbox{
    width: 100%;
    height: 100px;
    background: pink;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .logobox{
    width: 20%;
    height: 80%;
    /*background: yellowgreen;*/
  }
  .navigationbox{
    width: 65%;
    height: 100%;
    background: red;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 20px;
  }
  .pros{
    width: 100%;
    height: 30px;
    background: yellow;
  }
  .same_module{
    width: 100%;
    border:1px solid grey;
  }
  .title{
    width: 100px;
    color:#fff;
    height:30px;
    line-height:30px;
    background:blue;
    padding:0 10px;
    cursor: pointer;
    overflow: hidden;
  }
  .title span{vertical-align:middle;}
  .title .arrow{float: right;}
  .detail{
    width: 100%;
    overflow: hidden;
    position: absolute;
    left: 0;
    top: 100px;
    z-index: 999;
  }
  .detail .inner{padding:5px 10px;background: #808080;color:#fff;}
  .detail p{line-height: 26px;}
  .arrow{
    display: inline-block;
    border-top: 2px solid;
    border-right: 2px solid;
    width: 8px;
    height: 8px;
    border-color: #EA6000;
    transform: rotate(315deg);
    position: relative;
    transition: all 0.5s ease-in;
    transform-origin: center center;
    top:50%;
    margin-top:-10px;
  }
  .up .arrow{
    transform: rotate(135deg);
  }

  .imgbox{
    width: 100%;
    height: 500px;
    background: goldenrod;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .demo{
    width: 100%;
    height: 100%;
    background: goldenrod;
  }
</style>
