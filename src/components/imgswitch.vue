<template>
  <!-- vueswiper -->
  <div class="vueswiperwrap">
    <div class="vueswiper">
      <div class="item" v-for="i in imgArr" :transition="need" v-show="index==active?true:false">
        <img :src="i.src" @click="bling()" />
      </div>
    </div>

    <!-- 焦点控件 -->
    <ul class="iconlist">
      <li v-for="(i,index) in imgArr" @click="add(index)" :class="index==active?'active':''"></li>
    </ul>

    <!-- 左右控件 -->
    <a href="javascript:;" class="to-left fa fa-angle-left" @click="left"></a>
    <a href="javascript:;" class="to-right fa fa-angle-right" @click="right"></a>

  </div>

</template>

<script>
    export default {
      name: "imgswitch",
      data() {
        return {
          imgArr: [
            {
            src:require( '../assets/carimage/car1.png')
            },
            {
              src:require( '../assets/carimage/car2.png')
            },
            {
              src:require( '../assets/carimage/car3.png')
            },
            {
              src:require( '../assets/carimage/car4.png')
            },
            {
              src:require( '../assets/carimage/car5.png')
            },
            {
              src:require( '../assets/carimage/car6.png')
            }
            ],
          index:0,
          active: 0,
          need: "leo",
          timer: null
        }
      },
      methods:{
        add:function(idx){//焦点控件
          console.log(idx)
          this.active=idx
          if(this.active<idx){
            this.need="leo"
          }else{
            this.need="sky"
          }

        },
        left:function(){//左控件
          this.need="sky";
          this.index--;
          if(this.index<0){
            this.index=this.imgArr.length-1;
          }
        },
        right:function(){//右
          this.need="leo";
          this.index++;
          if(this.index==this.imgArr.length-1){
            this.index=0;
          }
        },
        bling:function(){//点击图片后自动切换
          let self=this;
          setInterval(function(){
            self.i=self.imgArr[self.index++];
            if(self.index>self.imgArr.length-1){
              self.index=0;
            }
          },5000)
        }
      }
    }
</script>

<style scoped>
  /* vueswiper */
  .vueswiperwrap{
    position: relative;
    background: #324157;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    overflow: hidden;
  }
  /* vueswiper */
  .vueswiper{
    width: 100%;
    height: 100%;
    position: relative;
    box-sizing: border-box;
  }
  .vueswiper .item
  {
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    overflow: hidden;
  }
  .vueswiper .item img
  {display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  /* iconlist */
  .iconlist{
    width: 100%;
    position: absolute;
    bottom: 50px;
    left: 0;
    display: flex;
    display: -webkit-flex;
    -webkit-justify-content: center;
    justify-content: center;}
  .iconlist li{
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #FFFFFF;
    margin-right: 10px;
  }
  .iconlist li:last-child{
    margin-right: 0;
  }
  .iconlist li.active{
    background-color: #E9470A;
  }

  .vueswiperwrap .fa{
    display: block;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #FFFFFF;
    text-align: center;
    line-height: 50px;
    font-size: 30px;
    color: #222222;
    box-shadow: 0px 0px 5px rgba(0,0,0,0.3);
    position: absolute;
    top: 50%;
    margin-top: -25px;
  }
  .vueswiperwrap .to-left{
    left: 2%;
  }
  .vueswiperwrap .to-right{
    right: 2%;
  }
  /* 切换动画 */
  /* 注：(v-enter/v-leave)vue提供的过渡动画类名 */
  .leo-transition{
    -webkit-transition:all 1s;
    -webkit-transform:translateX(0);
    transition:all 1s;
    transform:translateX(0)
  }
  .leo-enter{
    -webkit-transform:translateX(100%);
    transform:translateX(100%)
  }
  .leo-leave{
    -webkit-transform:translateX(-100%);
    transform:translateX(-100%)
  }
  .sky-transition{
    -webkit-transition:all 1s;
    -webkit-transform:translateX(0);
    transition:all 1s;
    transform:translateX(0)
  }
  .sky-enter{
    -webkit-transform:translateX(-100%);
    transform:translateX(-100%)
  }
  .sky-leave{
    -webkit-transform:translateX(100%);
    transform:translateX(100%)
  }


</style>
