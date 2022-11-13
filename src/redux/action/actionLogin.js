export default function handleLogin(action) {
    return {
        type: "LOGIN",
        payload: action
    }
}

export function handleLogOut() {
    return {
        type: "LOGOUT"
    }
}