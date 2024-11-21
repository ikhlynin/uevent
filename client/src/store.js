import { makeAutoObservable } from 'mobx'
import axios from 'axios';
import { API_URL } from './http';
import AuthService from './service/auth-service';
import UserService from './service/user-service';
import CompanyService from './service/company-service';
import EventService from './service/event-service';

export default class Store {
    user = { id: '', email: '', name: '', img: '', status: '', activated: false, isadmin: false }
    isAuth = false;
    isLoading = false;

    constructor() {
        makeAutoObservable(this);
    }

    setAuth(bool) {
        this.isAuth = bool
    }

    setUser(activated, email, id, img, name, status, isadmin) {
        this.user.id = id
        this.user.email = email
        this.user.name = name
        this.user.img = img
        this.user.status = status
        this.user.activated = activated
        this.user.isadmin = isadmin
    }

    setLoading(bool) {
        this.isLoading = bool
    }

    async checkAuth() {
        this.setLoading(true)

        try {

            const response = await axios.get(`${API_URL}/refresh`, { withCredentials: true })
            localStorage.setItem('token', response.data.accessToken)
            this.setAuth(true)
            this.setUser(
                response.data.user.activated, response.data.user.email,
                response.data.user.id, response.data.user.img,
                response.data.user.name, response.data.user.status,
                response.data.user.isAdmin)
        } catch (e) {

        } finally {
            this.setLoading(false)
        }
    }

    async login(email, password) {
        try {
            const response = await AuthService.login(email, password)
            localStorage.setItem('token', response.data.accessToken)
            this.setAuth(true)
            this.setUser(
                response.data.user.activated, response.data.user.email,
                response.data.user.id, response.data.user.img,
                response.data.user.name, response.data.user.status,
                response.data.user.isAdmin)
            // let userInfo = JSON.parse(JSON.stringify(store.user)) так надо достовать данніе о юзере со стора глобалього
            return (true)
        } catch (e) {
            console.log(e.response?.data?.message)
            return (e)
        }
    }
    async registration(email, password) {
        try {
            const response = await AuthService.registration(email, password)
            localStorage.setItem('token', response.data.accessToken)
            this.setAuth(true)
            console.log(response)
            this.setUser(
                response.data.user.activated, response.data.user.email,
                response.data.user.id, response.data.user.img,
                response.data.user.name, response.data.user.status,
                response.data.user.isAdmin)
            return (true)

        } catch (e) {
            console.log(e.response?.data?.message)
            return (e)
        }
    }

    async logout() {
        try {
            await AuthService.logout()
            localStorage.removeItem('token')
            localStorage.setItem('active_cals', '')
            this.setAuth(false)
            this.setUser({})
        } catch (e) {
            console.log(e.response?.data?.message)
        }
    }

    /////////////////////////////////////////////////USER///////////////////////////////////////////
    async updateUser(files, name, status) {
        try {
            const formData = new FormData()
            formData.append('name', name)
            formData.append('nameImg', files.name)
            formData.append('status', status)
            formData.append('avatar', files)
            const response = await UserService.update(formData)
            console.log(response)
            this.setUser(
                response.data.isActivated, response.data.email,
                response.data.id, response.data.img,
                response.data.name, response.data.status,
                response.data.isAdmin)

            return (true)

        } catch (e) {
            console.log(e.response?.data?.message)
            return (e)
        }
    }

    /////////////////////////////////////////////////COMPANY///////////////////////////////////////////
    async getCompanies(id) {

        try {
            const dataCompany = await CompanyService.getCom(id)
            return (dataCompany)
        } catch (e) {
            console.log(e.response?.data?.message)
            return (e)
        }

    }

    async getCompany(id, idUs) {
        try {
            const dataCompany = await CompanyService.getComOne(id, idUs)
            return (dataCompany)
        } catch (e) {
            console.log(e.response?.data?.message)
            return (e)
        }

    }
    async newCompany(files, name, description, email, location) {
        try {
            const formData = new FormData()
            formData.append('name', name)
            formData.append('nameImg', files.name)
            formData.append('description', description)
            formData.append('email', email)
            formData.append('location', location)
            formData.append('companyImg', files)
            const response = await CompanyService.newCom(formData)

            return (response.data)

        } catch (e) {
            console.log(e.response?.data?.message)
            return (e)
        }
    }
    async updateCompany(files, id, name, description, email, location) {
        try {
            const formData = new FormData()
            formData.append('id', id)
            formData.append('name', name)
            formData.append('nameImg', files.name)
            formData.append('description', description)
            formData.append('email', email)
            formData.append('location', location)
            formData.append('companyImg', files)
            const response = await CompanyService.updateCom(formData)
            return (true)

        } catch (e) {
            console.log(e.response?.data?.message)
            return (e)
        }
    }

    async deletCompany(id) {
        try {
            await CompanyService.deletCom(id)
            return true

        } catch (e) {
            console.log(e.response?.data?.message)
            return (e)
        }

    }

    /////////////////////////////////////////////////EVENT///////////////////////////////////////////
    async newEvent(files, name, description, type, startDate, endDate, location, city, price, comp) {
        try {
            const formData = new FormData()
            formData.append('name', name)
            formData.append('nameImg', files.name)
            formData.append('description', description)
            formData.append('type', type)
            formData.append('startDate', startDate)
            formData.append('endDate', endDate)
            formData.append('location', location)
            formData.append('city', city)
            formData.append('price', price)
            formData.append('idComp', comp)
            formData.append('eventImg', files)
            const response = await EventService.newEvent(formData)

            return (response.data)

        } catch (e) {
            console.log(e.response?.data?.message)
            return (e)
        }
    }

    async getEventOneComp(id, idUs) {
        try {
            const dataCompany = await EventService.getEventComp(id, idUs)
            return (dataCompany)
        } catch (e) {
            console.log(e.response?.data?.message)
            return (e)
        }

    }
    async getAllEvent() {
        try {
            const dataCompany = await EventService.getAllEvent()
            return (dataCompany)
        } catch (e) {
            console.log(e.response?.data?.message)
            return (e)
        }

    }

    async getEvent(id) {
        console.log(id)
        try {
            const dataCompany = await EventService.getEvent(id)
            console.log(dataCompany)
            return (dataCompany)
        } catch (e) {
            console.log(e.response?.data?.message)
            return (e)
        }

    }
    async getEventOneUS(id, idEv) {
        try {
            const dataCompany = await EventService.getEventOneUs(id, idEv)
            return (dataCompany)
        } catch (e) {
            console.log(e.response?.data?.message)
            return (e)
        }

    }

    async updateEvent(files, id, name, description, type, startDate, endDate, location, city, price, comp) {
        try {
            const formData = new FormData()
            formData.append('id', id)
            formData.append('name', name)
            formData.append('nameImg', files.name)
            formData.append('description', description)
            formData.append('type', type)
            formData.append('startDate', startDate)
            formData.append('endDate', endDate)
            formData.append('location', location)
            formData.append('city', city)
            formData.append('price', price)
            formData.append('eventImg', files)
            const response = await EventService.updateEvent(formData)

            return (response.data)

        } catch (e) {
            console.log(e.response?.data?.message)
            return (e)
        }
    }
    async deletEvent(id) {
        try {
            await EventService.deletEvent(id)
            return true

        } catch (e) {
            console.log(e.response?.data?.message)
            return (e)
        }

    }

    async payEvent(idUs, eventName, yourName, surname, promocode, isVisible, idEv, price) {
        console.log("fff")
        try {
            await EventService.payEvent(idUs, eventName, yourName, surname, promocode, isVisible, idEv, price)
            return true

        } catch (e) {
            console.log(e.response?.data?.message)
            return (e)
        }
    }




    async allSubscriber(id) {
        try {
            const dataCompany = await EventService.allSubscriber(id)
            return (dataCompany)
        } catch (e) {
            console.log(e.response?.data?.message)
            return (e)
        }

    }


    async getHistory(id) {
        try {
            const dataCompany = await EventService.allHistory(id)
            return (dataCompany)
        } catch (e) {
            console.log(e.response?.data?.message)
            return (e)
        }

    }


}