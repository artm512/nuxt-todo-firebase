<template>
  <div>
    <div class="form">
      <form @submit.prevent="add">
        <input v-model="name" />
        <button>Add</button>
      </form>
    </div>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        {{ todo }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      done: false,
    }
  },
  computed: {
    todos() {
      return this.$store.state.todos.todos
    },
  },
  created() {
    this.$store.dispatch('todos/init')
  },
  methods: {
    add() {
      this.$store.dispatch('todos/add', this.name)
      this.name = ''
    },
  },
}
</script>
