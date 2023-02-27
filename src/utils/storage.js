class Stroage {
    set(key, value) {
        if (typeof value === 'object') {
            sessionStorage.setItem(key, JSON.stringify(value))
        }
        sessionStorage.setItem(key, JSON.stringify(value))
    }
    get(key) {
        const value = sessionStorage.getItem(key)
        try {
            return JSON.parse(value)
        } catch (error) {
            return value
        }
    }
    remove(key) {
        sessionStorage.removeItem(key)
    }
}

const storage = new Stroage
export default storage