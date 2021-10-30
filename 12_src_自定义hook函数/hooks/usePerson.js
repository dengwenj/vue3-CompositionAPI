import { reactive, onMounted } from 'vue'
export default function (title) {
  let perosn = reactive({
    name: 'dwj',
    age: 21,
  })

  onMounted(() => {
    setTimeout(() => {
      perosn.name = 'xd'
      perosn.age = 18
      perosn.title = title
    }, 2000)
  })

  return perosn
}
