class Stroage {
    set(key, value) {
        if (typeof value === 'object') {
            localStorage.setItem(key, JSON.stringify(value))
        }
        localStorage.setItem(key, JSON.stringify(value))
    }
    get(key) {
        const value = localStorage.getItem(key)
        try {
            return JSON.parse(value)
        } catch (error) {
            return value
        }
    }
    remove(key) {
        localStorage.removeItem(key)
    }
}

const storage = new Stroage
export default storage