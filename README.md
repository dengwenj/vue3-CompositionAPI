# vue3_review

## Vue3 带来的什么

1 性能的提升
2 源码的升级

```
使用 Proxy代替defineProperty实现响应式
重写虚拟DOM的实现
```

3 Vue3 可以更好的支持 TypeScript
4 新的特性

```
1 Composition API（组合API）
2 新的内置组件
...
```

## Composition API 的优势

```
  1 Options API 存在的问题
      使用传统 Options API 中，新增或者修改一个需求，就需要分别在 data、methods、computed 里修改
  2 Composition API 的优势
      可以更加优雅的组织我们的代码，函数。让相关功能的代码更加有序的组织在一起
      想让组合式 API 发挥出威力，就要借助 hook 函数，封装起来。在 setup 里面只需要引入 hook 函数就行了，功能都封装起来了，任何地方都可以使用
```

## Vue3 的改变

```
1 全局 API 的转移
     将全局的 API，即：Vue.xxx 调整到应用实例（app）上，
     比如：Vue.use ==> app.use、Vue.prototype ==> app.config.globalProperties
2 data 始终声明为一个函数
3 移除 keyCode 作为 v-on 的修饰符
4 v-on.native 修饰符
5 移除过滤器（filter）（用方法或者计算属性代替）
......
```
