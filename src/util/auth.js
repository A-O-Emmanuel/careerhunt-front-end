export default function authToken() {
    const token = localStorage.getItem('token')
    return token;
}


export function tokenLoader() {
    return authToken();
}