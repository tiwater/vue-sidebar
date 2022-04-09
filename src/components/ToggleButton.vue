<template>
<button class="w-full bg-blue-300" @click="onToggle">
{{ expanded ? '<' : '>' }}
</button>
</template>
<script lang="ts" setup>

const props = defineProps({
  expanded: {
    required: true,
    type: Boolean,
  },
  toggle: {
    required: true,
    type: Function,
  }
});

const onToggle = () => props.toggle();

</script>