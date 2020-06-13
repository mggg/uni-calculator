<template>
  <form class="form-inline">
    <div class="form-group" style="display:flex;justify-content: space-between">
      <label :for="id">{{ label }}</label>
      <div style="display:flex">
        <input type="number" class="form-control" :id="id" aria-describedby="addon"/>
        <div class="input-group-append">
          <span id="addon" class="input-group-text">{{ counts }}</span>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: 'FormQ',
  props: {
    id: String,
    label: String,
    counts: String
  }
}
</script>

<style scoped>
a {
  color: #42b983;
}
.form-inline {
  display: block;
  margin-bottom: 20px;
}
.form-inline input {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.form-inline .input-group-append, .form-inline .input-group-text {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
</style>
