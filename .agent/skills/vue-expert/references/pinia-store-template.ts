/**
 * Pinia Store Template
 * 
 * This template follows Pinia best practices:
 * - Setup store syntax (recommended)
 * - TypeScript with proper types
 * - Composable-style organization
 * - Clear separation of state/getters/actions
 */
import { ref, computed } from 'vue'
import { defineStore, acceptHMRUpdate } from 'pinia'

// ============================================================================
// Types
// ============================================================================

export interface User {
    id: string
    name: string
    email: string
}

// ============================================================================
// Store Definition
// ============================================================================

export const useUserStore = defineStore('user', () => {
    // ----------------------------------------
    // State
    // ----------------------------------------

    const currentUser = ref<User | null>(null)
    const users = ref<User[]>([])
    const isLoading = ref(false)
    const error = ref<string | null>(null)

    // ----------------------------------------
    // Getters (Computed)
    // ----------------------------------------

    const isAuthenticated = computed(() => currentUser.value !== null)

    const userCount = computed(() => users.value.length)

    const getUserById = computed(() => {
        return (id: string) => users.value.find(u => u.id === id)
    })

    // ----------------------------------------
    // Actions
    // ----------------------------------------

    async function fetchUsers() {
        isLoading.value = true
        error.value = null

        try {
            const response = await fetch('/api/users')
            if (!response.ok) throw new Error('Failed to fetch')
            users.value = await response.json()
        } catch (e) {
            error.value = e instanceof Error ? e.message : 'Unknown error'
        } finally {
            isLoading.value = false
        }
    }

    async function login(email: string, password: string) {
        isLoading.value = true
        error.value = null

        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            })

            if (!response.ok) throw new Error('Login failed')

            currentUser.value = await response.json()
        } catch (e) {
            error.value = e instanceof Error ? e.message : 'Unknown error'
            throw e
        } finally {
            isLoading.value = false
        }
    }

    function logout() {
        currentUser.value = null
    }

    function addUser(user: User) {
        users.value.push(user)
    }

    function updateUser(id: string, updates: Partial<User>) {
        const index = users.value.findIndex(u => u.id === id)
        if (index !== -1) {
            users.value[index] = { ...users.value[index], ...updates }
        }
    }

    function removeUser(id: string) {
        users.value = users.value.filter(u => u.id !== id)
    }

    // ----------------------------------------
    // Return
    // ----------------------------------------

    return {
        // State
        currentUser,
        users,
        isLoading,
        error,

        // Getters
        isAuthenticated,
        userCount,
        getUserById,

        // Actions
        fetchUsers,
        login,
        logout,
        addUser,
        updateUser,
        removeUser
    }
})

// ============================================================================
// HMR Support
// ============================================================================

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
}
