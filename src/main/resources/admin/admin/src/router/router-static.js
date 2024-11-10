import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
    // 解决多次点击左侧菜单报错问题
    const VueRouterPush = VueRouter.prototype.push
    VueRouter.prototype.push = function push (to) {
    return VueRouterPush.call(this, to).catch(err => err)
    }
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
import beifen from '@/views/modules/databaseBackup/beifen'
import huanyuan from '@/views/modules/databaseBackup/huanyuan'

     import users from '@/views/modules/users/list'
    import daibanshiyi from '@/views/modules/daibanshiyi/list'
    import dictionary from '@/views/modules/dictionary/list'
    import fuwuxiangmu from '@/views/modules/fuwuxiangmu/list'
    import gongzuorenyuan from '@/views/modules/gongzuorenyuan/list'
    import jiankangdangan from '@/views/modules/jiankangdangan/list'
    import jiashu from '@/views/modules/jiashu/list'
    import news from '@/views/modules/news/list'
    import yisheng from '@/views/modules/yisheng/list'
    import yishengYuyue from '@/views/modules/yishengYuyue/list'
    import yonghu from '@/views/modules/yonghu/list'
    import config from '@/views/modules/config/list'
    import dictionaryDaibanshiyi from '@/views/modules/dictionaryDaibanshiyi/list'
    import dictionaryFuwuxiangmu from '@/views/modules/dictionaryFuwuxiangmu/list'
    import dictionaryJiankang from '@/views/modules/dictionaryJiankang/list'
    import dictionaryJiankangdangan from '@/views/modules/dictionaryJiankangdangan/list'
    import dictionaryNews from '@/views/modules/dictionaryNews/list'
    import dictionarySex from '@/views/modules/dictionarySex/list'
    import dictionaryShenfen from '@/views/modules/dictionaryShenfen/list'
    import dictionaryYisheng from '@/views/modules/dictionaryYisheng/list'
    import dictionaryYishengYuyueYesno from '@/views/modules/dictionaryYishengYuyueYesno/list'
    import dictionaryZhiwei from '@/views/modules/dictionaryZhiwei/list'





//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }, {
        path: '/huanyuan',
        name: '数据还原',
        component: huanyuan
    }, {
        path: '/beifen',
        name: '数据备份',
        component: beifen
    }, {
        path: '/users',
        name: '管理信息',
        component: users
    }
    ,{
        path: '/dictionaryDaibanshiyi',
        name: '事宜类型',
        component: dictionaryDaibanshiyi
    }
    ,{
        path: '/dictionaryFuwuxiangmu',
        name: '服务项目类型',
        component: dictionaryFuwuxiangmu
    }
    ,{
        path: '/dictionaryJiankang',
        name: '健康指标',
        component: dictionaryJiankang
    }
    ,{
        path: '/dictionaryJiankangdangan',
        name: '档案类型',
        component: dictionaryJiankangdangan
    }
    ,{
        path: '/dictionaryNews',
        name: '公告类型',
        component: dictionaryNews
    }
    ,{
        path: '/dictionarySex',
        name: '性别',
        component: dictionarySex
    }
    ,{
        path: '/dictionaryShenfen',
        name: '身份',
        component: dictionaryShenfen
    }
    ,{
        path: '/dictionaryYisheng',
        name: '科室',
        component: dictionaryYisheng
    }
    ,{
        path: '/dictionaryYishengYuyueYesno',
        name: '预约审核',
        component: dictionaryYishengYuyueYesno
    }
    ,{
        path: '/dictionaryZhiwei',
        name: '职位',
        component: dictionaryZhiwei
    }
    ,{
        path: '/config',
        name: '轮播图',
        component: config
    }


    ,{
        path: '/daibanshiyi',
        name: '事宜信息',
        component: daibanshiyi
      }
    ,{
        path: '/dictionary',
        name: '字典',
        component: dictionary
      }
    ,{
        path: '/fuwuxiangmu',
        name: '服务项目信息',
        component: fuwuxiangmu
      }
    ,{
        path: '/gongzuorenyuan',
        name: '社区工作人员',
        component: gongzuorenyuan
      }
    ,{
        path: '/jiankangdangan',
        name: '档案信息',
        component: jiankangdangan
      }
    ,{
        path: '/jiashu',
        name: '家属',
        component: jiashu
      }
    ,{
        path: '/news',
        name: '公告信息',
        component: news
      }
    ,{
        path: '/yisheng',
        name: '医生',
        component: yisheng
      }
    ,{
        path: '/yishengYuyue',
        name: '医生预约',
        component: yishengYuyue
      }
    ,{
        path: '/yonghu',
        name: '老人',
        component: yonghu
      }


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
