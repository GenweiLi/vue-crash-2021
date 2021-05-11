<template>
  <div>
    <div :key="task.id" v-for="task in tasks">
       <Task :task="task" @delete-task="$emit('delete-task', task.id)" @toggle-reminder="$emit('toggle-reminder', task.id)"/>
    </div>
  </div>
</template>

<script>
import Task from "./Task"

export default {
  name: "Tasks",
  components: {Task},
  props: {
    tasks: Array,
  },
  emit: ['delete-task', 'toggle-reminder']
};
</script>
