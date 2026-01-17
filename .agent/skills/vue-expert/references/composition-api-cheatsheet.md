# Vue 3 Composition API Cheatsheet

## Reactivity

```typescript
import { ref, reactive, computed, watch, watchEffect, toRefs, toRef } from 'vue'

// Ref - for primitives
const count = ref(0)
count.value++ // Use .value in script

// Reactive - for objects
const state = reactive({ count: 0, name: 'Vue' })
state.count++ // No .value needed

// Computed
const double = computed(() => count.value * 2)

// Watch
watch(count, (newVal, oldVal) => {
  console.log(`Changed from ${oldVal} to ${newVal}`)
})

// Watch with options
watch(
  () => state.count,
  (newVal) => console.log(newVal),
  { immediate: true, deep: true }
)

// WatchEffect - auto-tracks dependencies
watchEffect(() => {
  console.log('Count is:', count.value)
})

// toRefs - for destructuring reactive
const { count: countRef } = toRefs(state)

// toRef - single property ref
const nameRef = toRef(state, 'name')
```

## Component Setup

```vue
<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

// Props with types
const props = defineProps<{
  title: string
  count?: number
}>()

// Props with defaults
const props = withDefaults(defineProps<{
  title: string
  count?: number
}>(), {
  count: 0
})

// Emits with types
const emit = defineEmits<{
  (e: 'update', value: number): void
  (e: 'submit'): void
}>()

// v-model with defineModel (Vue 3.4+)
const modelValue = defineModel<string>()

// Expose to parent
defineExpose({
  publicMethod: () => console.log('exposed')
})

// Component options
defineOptions({
  inheritAttrs: false
})
</script>
```

## Lifecycle Hooks

```typescript
import {
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  onErrorCaptured
} from 'vue'

onMounted(() => {
  // DOM is ready
})

onUnmounted(() => {
  // Cleanup subscriptions, timers, etc.
})

onErrorCaptured((err, instance, info) => {
  // Handle child component errors
  return false // Stop propagation
})
```

## Template Refs

```vue
<script setup lang="ts">
import { ref, onMounted, useTemplateRef } from 'vue'

// Option 1: Traditional
const inputRef = ref<HTMLInputElement | null>(null)

// Option 2: useTemplateRef (Vue 3.5+)
const input = useTemplateRef<HTMLInputElement>('input')

onMounted(() => {
  inputRef.value?.focus()
})
</script>

<template>
  <input ref="inputRef" />
  <input ref="input" />
</template>
```

## Provide/Inject

```typescript
// Parent component
import { provide, ref } from 'vue'

const theme = ref('dark')
provide('theme', theme)

// With readonly protection
provide('theme', readonly(theme))

// Child component
import { inject } from 'vue'

const theme = inject('theme', 'light') // Default: 'light'

// With type
const theme = inject<Ref<string>>('theme')
```

## Composables Pattern

```typescript
// useCounter.ts
import { ref, computed } from 'vue'

export function useCounter(initialValue = 0) {
  const count = ref(initialValue)
  const double = computed(() => count.value * 2)
  
  function increment() {
    count.value++
  }
  
  function reset() {
    count.value = initialValue
  }
  
  return { count, double, increment, reset }
}

// Usage in component
const { count, increment } = useCounter(10)
```

## Pinia Store

```typescript
// stores/counter.ts
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  // State
  const count = ref(0)
  const name = ref('Counter')
  
  // Getters
  const doubleCount = computed(() => count.value * 2)
  
  // Actions
  function increment() {
    count.value++
  }
  
  async function fetchData() {
    const data = await api.getData()
    count.value = data.count
  }
  
  return { count, name, doubleCount, increment, fetchData }
})

// Usage
const store = useCounterStore()
store.increment()
store.$patch({ count: 10, name: 'Updated' })
store.$reset()
```

## SSR (Nuxt.js)

```vue
<script setup lang="ts">
// Data fetching
const { data, pending, error, refresh } = await useFetch('/api/data')

// With key for caching
const { data } = await useAsyncData('users', () => $fetch('/api/users'))

// Client-only code
onMounted(() => {
  // Safe to use window, document here
})

// Check environment
if (process.client) {
  // Client-only code
}
</script>

<template>
  <!-- Client-only component -->
  <ClientOnly>
    <SomeClientComponent />
    <template #fallback>
      <p>Loading...</p>
    </template>
  </ClientOnly>
</template>
```

## Performance Tips

```vue
<script setup lang="ts">
import { shallowRef, shallowReactive, triggerRef } from 'vue'

// For large objects that don't need deep reactivity
const largeData = shallowRef({ /* big object */ })

// For arrays of many items
const items = shallowReactive([/* many items */])

// Manual trigger when needed
triggerRef(largeData)

// Async components for code splitting
const HeavyComponent = defineAsyncComponent(() =>
  import('./HeavyComponent.vue')
)
</script>

<template>
  <!-- Keep components alive -->
  <KeepAlive :max="10">
    <component :is="currentTab" />
  </KeepAlive>
  
  <!-- Suspense for async -->
  <Suspense>
    <AsyncComponent />
    <template #fallback>
      <LoadingSpinner />
    </template>
  </Suspense>
</template>
```
