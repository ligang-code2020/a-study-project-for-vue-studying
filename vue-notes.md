### Vue 项目的创建

> 第一步安装脚手架： `npm install -g @vue/cli`

> 第二步创建项目：`vue create projectName`

---

### Vue 文件格式

```html
<template></template>

<script></script>

<style></style>
```

> 1.template 标签的根结构只能包含一个元素，可以是 div，也可以是其他，但是有且只能一个。

---

### Vue 项目结构

> `index.html` 是主页，项目入口

> `App.vue` 是根组件

> `main.js` 入口文件

---

## Vue-router

> ### 1. Vue-router 的使用方式

</br>

```js
// 在main.js中引入
import VueRouter from "vue-router";

// 导入路由主体
import App from "./components/app.vue";
import Home from "./components/home.vue";

// 挂载属性
Vue.use(VueRouter);

// 创建路由对象并配置路由规则

const router = new VueRouter({
  routes: [
    {
      path: "/home",
      name: "home",
      component: "Home",
    },
  ],
});

new Vue({
  el: "#app",
  router,
  render: (c) => c(App),
});

// 在app.vue中占位
<template>
  <div>
    <router-view></router-view>
  </div>
</template>;
```

> ### 2. 使用路由跳转的方式

 </br>

```js
1.直接修改地址栏

2.this.$router.push('路由地址')

3.<router-link to="路由地址"></router-link>
```

> ### 3. router 间的传参

> > 1.声明式导航：`<router-link></router-link>`

> > > 1.使用 router 中 `name` 和 `params` 进行搭配传参，但是刷新后参数会消失，也有解决的办法。

```html
// 传入参数
<router-link :to={name:'About',params:{userid:111}}>About</router-link>

// 接受参数
this.$route.params.userid

// 说明

这种跳转传参在浏览器的url栏是不会暴露参数的，并且刷新就会丢失参数。解决办法是在main.js中的路由path中加上参数名称，但是如此一来参数就会暴露在url中，这样就跟query模式传参没什么区别了。

routes:
[
  path:"/about/:userid" //多个参数可以追加
  name:"About"
  comonent:About
]
```

> > > 2.使用 `path` 和 查询参数 `query` 进行搭配传参。刷新页面不都是参数，且会在 url 中出现

```html
// 传入参数
<router-link :to={path:'/about',query:{userid:111}}>
</router-link>

// 接受参数
this.$route.query.userid
```

> > 2.编程式导航：`this.$router.push`

> > > 1.`name` 与 `params` 搭配

```html
// 传入参数
<template>
  <div>
    <button @click="routerTo">About</button>
  </div>
</template>

<script>
  export default {
    method: {
      routerTo() {
        this.$router.push({
          name: "About",
          params: {
            userid: 1111,
          },
        });
      },
    },
  };
</script>

// 接收参数

<template>
  <div>
    这是params传过来的参数：{{this.$route.params.userid}}
  </div>
</template>
```

> > > 2.`path` 与 `query` 搭配

```html
// 传入参数
<template>
  <div>
    <button @click="routerTo">About</button>
  </div>
</template>

<script>
  export default {
    method: {
      routerTo() {
        this.$router.push({
          path: "/about",
          query: {
            userid: 1111,
          },
        });
      },
    },
  };
</script>

// 接收参数

<template>
  <div>
    这是params传过来的参数：{{this.$route.query.userid}}
  </div>
</template>
```

> ### Vue 父子组件传值

---

</br>

![avatar](src\images\props&emit.png)

父组件通过 props 传值给子组件，子组件通过 emit(自定义事件)传值给父组件

> > `props`
> >
> > > 子组件通过 props 接受从父组件传来的值,而且是单项数据流动,可以继续传入子孙组件,但是不可以逆向传值。

```html
<template>
  <div>
    {task.id} {task.title}
  </div>
  <div :class="task.reminder"></div>
</template>

<script>
  export default{
    props:{
      // 定义task的类型
      task:{
        type:Object
        // 可以定义默认值
        default:'eating'
      }
    }
  }
</script>
```

> > `emit`
> >
> > > 子组件通过 emit 自定义事件传值给父组件

```html
第三层组件(孙) Task.vue

<template>
  // toggle-reminder为自定义事件，task.id为传替参数，向上传递
  <div @click="$emit('toggle-reminder',task.id)"></div>
  // delete-task为自定义事件，task.id为参数
  <div @dbclick="$emit('delete-task',task.id)"></div>
</template>

第二层组件(父) Task.vue

<template>
  <div>
    <Task
      :task="item"
      // 接收子组件自定义事件 toggle-reminder
      @toggle-reminder="$emit('toggle-reminder',item.id)"
      // 接收子组件自定义事件 delete-task
      @delete-task="$emit('delete-task',item.id)">
    </Task>
  </div>
</template>

第三层组件(爷) Home.vue

<template>
  <div>
    <Tasks
    :tasks="tasks"
    // 接收子组件自定义事件 toggle-reminder
    @toggle-reminder="toggleReminder"
    // 接收子组件自定义事件 delete-task
    @delete-task="deleteTask"
    > 
    </Tasks>
  </div>
</template>
```
