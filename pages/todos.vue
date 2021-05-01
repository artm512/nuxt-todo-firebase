<template>
  <div>
    <div class="form">
      <form @submit.prevent="add">
        <input v-model="name" />
        <button>Add</button>
      </form>
    </div>
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
