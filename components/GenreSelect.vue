<template>
    <div>
        <label :for="select">Filter by {{ select }}</label>

        <select @change="$emit('change', $event.target.value)" name="select" :id="select">
            <option value>-- Please select a {{ select }}</option>
            <option v-for="option in selectOptions" :key="option" :value="option">{{ option }}</option>
        </select>
    </div>
  </template>

<script>
export default {
  props: {
    select: {
      type: String,
      default: 'genre'
    },
    selectOptions: {
      type: Array,
      default: () => ['35 Comedy', '28 Action', '12 Adventure']
    }
  }
}

</script>
