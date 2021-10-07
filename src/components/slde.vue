<template>
<!--  router表示使用 vue-router 的模式，启用该模式会在激活导航时以 index 作为 path 进行路由跳转，
如 path: '/car',根据 index: 'car',跳转到car页面-->



  <div class="sidebox">
  <el-menu
    class="sidebar-el-menu"
    background-color="#324157"
    text-color="#bfcbd9"
    active-text-color="#20a0ff"
    unique-opened
    router
  >
    <template v-for="item in items">
      <template v-if="item.subs"><!--      subs判断items菜单下是否还有子菜单-->
        <el-submenu :index="item.index" :key="item.index"><!-- ’:‘表示该值为变量，不是固定不变的-->
          <template slot="title">
            <i :class="item.icon"></i>
            <span slot="title">{{ item.title }}</span>
          </template>
          <template v-for="subItem in item.subs"><!--      开始渲染二级菜单-->
            <el-submenu
              v-if="subItem.subs"
              :index="subItem.index"
              :key="subItem.index"
            >
              <template slot="title">{{ subItem.title }}</template>
              <el-menu-item
                v-for="(threeItem,i) in subItem.subs"
                :key="i"
                :index="threeItem.index"
              >{{ threeItem.title }}</el-menu-item>
            </el-submenu>
            <el-menu-item
              v-else
              :index="subItem.index"
              :key="subItem.index"
            >{{ subItem.title }}</el-menu-item>
          </template>
        </el-submenu>
      </template>
      <template v-else><!--      菜单下无子菜单，开始渲染-->
        <el-menu-item :index="item.index" :key="item.index">
          <i :class="item.icon"></i><!--      渲染菜单图标-->
          <span slot="title">{{ item.title }}</span><!--     渲染菜单名-->
        </el-menu-item>
      </template>
    </template>
  </el-menu>
</div>
</template>

<script>
    export default {
      name: "slde",
      data() {
        return {
          items: [
            {
              icon: 'el-icon-s-home',
              //router	是否使用 vue-router 的模式，启用该模式会在激活导航时以 index 作为 path 进行路由跳转
              index: 'car',
              title: '系统首页'
            },
            {
              icon: 'el-icon-menu',
              index: 'table',
              title: '商品信息'
            },
            {
              icon: 'el-icon-s-order',
              index: '3',
              title: '信息填写',
              subs: [
                {
                  index: 'form',
                  title: '添加'
                },
                {
                  index: '3-2',
                  title: '三级菜单',
                  subs: [
                    {
                      index: 'editor',
                      title: '富文本编辑器'
                    },
                    {
                      index: 'markdown',
                      title: 'markdown编辑器'
                    }
                  ]
                },
                {
                  index: 'upload',
                  title: '文件上传'
                }
              ]
            },
            {
              icon: 'el-icon-document-copy',
              index: 'tabs',
              title: '系统信息'
            },

            {
              icon: 'el-icon-user-solid',
              index: 'icon',
              title: '账户信息'
            },
            {
              icon: 'el-icon-pie-chart',
              index: 'charts',
              title: '数据图表'
            },
            {
              icon: 'el-icon-rank',
              index: '6',
              title: '拖拽组件',
              subs: [
                {
                  index: 'drag',
                  title: '拖拽列表'
                },
                {
                  index: 'dialog',
                  title: '拖拽弹框'
                }
              ]
            },
            {
              icon: 'el-icon-picture-outline-round',
              index: 'i18n',
              title: '国际化功能'
            }
          ]
        }
      },
      methods: {

      },
      mounted(){
        document.title='用户'
      },
      created() {//当组件创建出来时，就会回调这个生命周期函数
        console.log('created');
      },
      mounted() {//当模板（页面）内容挂在到DOM上时，就会回调这个生命周期函数
        console.log(' mounted');
      },
      updated() {//当页面发生刷新更新时，就会回调这个生命周期函数
        console.log('updated');
      },
      destroyed() {//销毁

      },
      // activated，deactivated这两个函数，只有该组件被保持了状态使用了keep-alive时，才是有效的，即<keep-alive> <router-view/> </keep-alive>
      //activated() {//活跃的，当页面处于活跃状态时，就会执行该函数},
      //deactivated(){//不活跃的// }


    }
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  .sidebox{
    width: 250px;
    height: 100%;
    background: #324157;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 6666;
  }

</style>
