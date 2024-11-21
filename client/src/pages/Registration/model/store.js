import AuthService from '../../../service/auth_service';

async function registration(email, password) {
    try {
        const response = await AuthService.registration(email, password)
        localStorage.setItem('token', response.data.accessToken)
        this.setAuth(true)
        this.setUser(response.data.user.email, response.data.user.id, response.data.user.activated)

    } catch (e) {
        console.log(e.response?.data?.message)
        return (e)
    }
}
export { registration }