<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <Button 
    v-show="homePage"
    :text="showAddTask? 'Close' : 'Add task'" 
    :color="showAddTask ? 'red' : 'green'" 
    @btn-click="$emit('toggle-add-task')" />
  </div>
</template>

<script>
import Button from "./Button";

export default {
  name: "Header",
  components: {Button},
  props: {
    title: String,
    showAddTask: Boolean
  },
  computed: {
    homePage() {
      if (this.$route.path == '/'){
        return true; 
      } else {
        return false;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>
