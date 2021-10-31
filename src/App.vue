<template>
  <div>
    <!-- 
      shallowReactive: 只处理对象最外层属性的响应式（浅响应式）
      shallowRef:只处理基本数据类型的响应式，不进行对象的响应式处理
    -->

    <!-- 
      readonly：让一个响应式数据变为只读的（深只读）
      shallowReadonly：让一个响应式数据变为只读的（浅只读）
      应用场景：不希望数据被修改时
    -->

    <!-- 
       实现后代组件通信
         父组件有一个 provide 选项来提供数据，子组件有一个 inject 选项来开始使用这些数据
    -->

    <!-- 
      响应式数据的判断
        isRef:检查一个值是否为一个 ref 对象
        isReactive：检查一个对象是否是由 reactive 创建的响应式代理
        isReadonly：检查一个对象是否是由 readonly 创建的只读代理
        isProxy：检查一个对象是否是由 reactive 或者 readonly 方法创建的代理
    -->

    <F>
      <S></S>
    </F>
  </div>
</template>

<script>
import F from './components/F'
import S from './components/S'
export default {
  components: { F, S },
}
</script>

<style></style>
