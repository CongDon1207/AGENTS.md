/**
 * Vue Composable Template
 * 
 * This template follows composable best practices:
 * - Clear naming convention (use*)
 * - Proper TypeScript types
 * - Cleanup on unmount
 * - Reusable across components
 */
import { ref, computed, onMounted, onUnmounted, watch, type Ref } from 'vue'

// ============================================================================
// Types
// ============================================================================

export interface UseFetchOptions<T> {
    immediate?: boolean
    initialData?: T
    onSuccess?: (data: T) => void
    onError?: (error: Error) => void
}

export interface UseFetchReturn<T> {
    data: Ref<T | null>
    error: Ref<Error | null>
    isLoading: Ref<boolean>
    execute: () => Promise<void>
    refresh: () => Promise<void>
}

// ============================================================================
// useFetch Composable
// ============================================================================

export function useFetch<T>(
    url: string | Ref<string>,
    options: UseFetchOptions<T> = {}
): UseFetchReturn<T> {
    const {
        immediate = true,
        initialData = null,
        onSuccess,
        onError
    } = options

    const data = ref<T | null>(initialData) as Ref<T | null>
    const error = ref<Error | null>(null)
    const isLoading = ref(false)

    let abortController: AbortController | null = null

    async function execute() {
        // Abort previous request
        if (abortController) {
            abortController.abort()
        }

        abortController = new AbortController()
        isLoading.value = true
        error.value = null

        const urlValue = typeof url === 'string' ? url : url.value

        try {
            const response = await fetch(urlValue, {
                signal: abortController.signal
            })

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
            }

            data.value = await response.json()
            onSuccess?.(data.value as T)
        } catch (e) {
            if (e instanceof Error && e.name !== 'AbortError') {
                error.value = e
                onError?.(e)
            }
        } finally {
            isLoading.value = false
        }
    }

    // Auto-execute on mount if immediate
    if (immediate) {
        onMounted(execute)
    }

    // Watch URL changes
    if (typeof url !== 'string') {
        watch(url, execute)
    }

    // Cleanup on unmount
    onUnmounted(() => {
        if (abortController) {
            abortController.abort()
        }
    })

    return {
        data,
        error,
        isLoading,
        execute,
        refresh: execute
    }
}

// ============================================================================
// useLocalStorage Composable
// ============================================================================

export function useLocalStorage<T>(
    key: string,
    defaultValue: T
): Ref<T> {
    const storedValue = localStorage.getItem(key)
    const data = ref<T>(
        storedValue ? JSON.parse(storedValue) : defaultValue
    ) as Ref<T>

    watch(
        data,
        (newValue) => {
            localStorage.setItem(key, JSON.stringify(newValue))
        },
        { deep: true }
    )

    return data
}

// ============================================================================
// useDebounce Composable
// ============================================================================

export function useDebounce<T>(value: Ref<T>, delay = 300): Ref<T> {
    const debouncedValue = ref(value.value) as Ref<T>
    let timeoutId: ReturnType<typeof setTimeout> | null = null

    watch(value, (newValue) => {
        if (timeoutId) {
            clearTimeout(timeoutId)
        }

        timeoutId = setTimeout(() => {
            debouncedValue.value = newValue
        }, delay)
    })

    onUnmounted(() => {
        if (timeoutId) {
            clearTimeout(timeoutId)
        }
    })

    return debouncedValue
}

// ============================================================================
// useEventListener Composable
// ============================================================================

export function useEventListener<K extends keyof WindowEventMap>(
    target: Window | HTMLElement | Ref<HTMLElement | null>,
    event: K,
    handler: (event: WindowEventMap[K]) => void
) {
    const getTarget = () => {
        if (target instanceof Window) return target
        if (target instanceof HTMLElement) return target
        return target.value
    }

    onMounted(() => {
        const el = getTarget()
        el?.addEventListener(event, handler as EventListener)
    })

    onUnmounted(() => {
        const el = getTarget()
        el?.removeEventListener(event, handler as EventListener)
    })
}

// ============================================================================
// useToggle Composable
// ============================================================================

export function useToggle(initialValue = false) {
    const state = ref(initialValue)

    function toggle() {
        state.value = !state.value
    }

    function setTrue() {
        state.value = true
    }

    function setFalse() {
        state.value = false
    }

    return {
        state,
        toggle,
        setTrue,
        setFalse
    }
}

// ============================================================================
// useCounter Composable
// ============================================================================

export function useCounter(initialValue = 0, options?: { min?: number; max?: number }) {
    const count = ref(initialValue)

    const { min = -Infinity, max = Infinity } = options || {}

    function increment(delta = 1) {
        count.value = Math.min(max, count.value + delta)
    }

    function decrement(delta = 1) {
        count.value = Math.max(min, count.value - delta)
    }

    function set(value: number) {
        count.value = Math.max(min, Math.min(max, value))
    }

    function reset() {
        count.value = initialValue
    }

    return {
        count,
        increment,
        decrement,
        set,
        reset
    }
}
