<script setup lang="ts">
/**
 * Vue 3 Component Template
 * 
 * This template follows Vue 3 best practices:
 * - TypeScript with proper types
 * - Composition API with <script setup>
 * - Proper prop/emit definitions
 * - Lifecycle cleanup
 */
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'

// ============================================================================
// Props & Emits
// ============================================================================

interface Props {
  /** Required title prop */
  title: string
  /** Optional count with default */
  count?: number
  /** Optional items array */
  items?: string[]
}

const props = withDefaults(defineProps<Props>(), {
  count: 0,
  items: () => []
})

const emit = defineEmits<{
  /** Emitted when count changes */
  (e: 'update:count', value: number): void
  /** Emitted on form submit */
  (e: 'submit', data: { name: string }): void
}>()

// ============================================================================
// State
// ============================================================================

const isLoading = ref(false)
const inputValue = ref('')
const internalCount = ref(props.count)

// ============================================================================
// Computed
// ============================================================================

const doubleCount = computed(() => internalCount.value * 2)

const isValid = computed(() => inputValue.value.length >= 3)

// ============================================================================
// Watchers
// ============================================================================

watch(() => props.count, (newVal) => {
  internalCount.value = newVal
})

// ============================================================================
// Methods
// ============================================================================

function increment() {
  internalCount.value++
  emit('update:count', internalCount.value)
}

function handleSubmit() {
  if (!isValid.value) return
  emit('submit', { name: inputValue.value })
  inputValue.value = ''
}

// ============================================================================
// Lifecycle
// ============================================================================

let intervalId: ReturnType<typeof setInterval> | null = null

onMounted(() => {
  // DOM is ready - safe to use refs, add event listeners, etc.
  console.log('Component mounted')
  
  // Example: Start an interval
  intervalId = setInterval(() => {
    console.log('Tick')
  }, 1000)
})

onUnmounted(() => {
  // Cleanup: Remove event listeners, clear timers, close connections
  if (intervalId) {
    clearInterval(intervalId)
  }
})

// ============================================================================
// Expose (optional - for parent access)
// ============================================================================

defineExpose({
  increment,
  reset: () => { internalCount.value = 0 }
})
</script>

<template>
  <div class="component-wrapper">
    <!-- Header -->
    <header>
      <h2>{{ title }}</h2>
      <span class="count">{{ internalCount }} (x2: {{ doubleCount }})</span>
    </header>

    <!-- Content -->
    <main>
      <!-- Loading State -->
      <div v-if="isLoading" class="loading">
        Loading...
      </div>

      <!-- Main Content -->
      <template v-else>
        <!-- Form -->
        <form @submit.prevent="handleSubmit">
          <input
            v-model="inputValue"
            type="text"
            placeholder="Enter name..."
            :class="{ invalid: inputValue && !isValid }"
          />
          <button type="submit" :disabled="!isValid">
            Submit
          </button>
        </form>

        <!-- Items List -->
        <ul v-if="items.length > 0">
          <li v-for="item in items" :key="item">
            {{ item }}
          </li>
        </ul>
        <p v-else class="empty">No items</p>
      </template>
    </main>

    <!-- Actions -->
    <footer>
      <button @click="increment">Increment</button>
    </footer>
  </div>
</template>

<style scoped>
.component-wrapper {
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.count {
  font-weight: bold;
  color: #42b883;
}

.loading {
  text-align: center;
  padding: 2rem;
}

form {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

input {
  flex: 1;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}

input.invalid {
  border-color: #ff6b6b;
}

button {
  padding: 0.5rem 1rem;
  background: #42b883;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  padding: 0.5rem;
  border-bottom: 1px solid #eee;
}

.empty {
  color: #999;
  font-style: italic;
}

footer {
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #eee;
}
</style>
