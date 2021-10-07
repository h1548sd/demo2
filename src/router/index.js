//配置路由相关信息
import Vue from 'vue'
import Router from 'vue-router'//从安装的框架package.json中导出安装好的vue-router，在这进行导入名字为Router

// import HelloWorld from '@/components/HelloWorld'
// import car from '@/components/car'
// import slde from '@/components/slde'
// import imgswitch from '@/components/imgswitch'

//懒加载方式
const HelloWorld = () =>import('../components/HelloWorld')
const car = () =>import('../components/car')
const slde = () =>import('../components/slde')
const imgswitch = () =>import('../components/imgswitch')

//通过Vue.use(插件),安装插件
// plugin（插件）
Vue.use(Router)

//创建Router对象，并将其导出export default，export default new Router相当于
// const router = new Router（{}）
//export default router

export default new Router({
  //配置路由与组件之间的应用关系
  routes: [
    {
      path:'/',
      meth:{//元数据（描述数据的数据）
        title:'首页'
      },
      redirect:'car'
    },
    {
      path: '/HelloWorld',//表示当路径中出现/HelloWorld时，就使用 component: HelloWorld这个组件
      name: 'HelloWorld',
      component: HelloWorld
    },
     {
      path: '/',
      name: 'car',
      component: car
    },
    // {
    //   path: '/slde',
    //   name: 'slde',
    //   component: slde
    // },

    {
      path: '/imgswitch',
      name: 'imgswitch',
      component: imgswitch,
      children:[
        {
          path: 'imgswitchnew',//子组件不需要加‘/’
          name: 'imgswitchnew',
          component: imgswitchnew,
        },
        {
          path: 'imgswitchnew1',
          name: 'imgswitchnew1',
          component: imgswitchnew1,
        }
      ]//表示imgswitchnew和imgswitchnew1是imgswitch下的子组件
    }
  ],
  mode:'history'//模式为history
})

//全局导航守卫，使页面名字精准显示跳转后title的内容
//导航钩子的三个参数解析:
// to:即将要进入的目标的路由对象.
// from:当前导航即将要离开的路由对象.
// next:调用该方法后,才能进入下一个钩子.
//该处为：前置钩子（前置守卫（guard）），及前置回调，就是在路由跳转之前进行的一个回调
router.beforeEach((to, from, next) => {
//从from跳转到to
  document.title = to.matched[0].meta.title;
  console.log(to);
  next()
})
//后置钩子(hook)
router.afterEach((to,from) =>{

})


