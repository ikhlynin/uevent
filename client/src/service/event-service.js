import $api from '../http/index'

export default class EventService {
    static async newEvent(formData) {
        return $api.post('/createEvent', formData, {
            header: {
                'Content-Type': 'multipart/form-data',
            }
        }
        )
    }
    static async updateEvent(formData) {
        return $api.post('/editEvent', formData, {
            header: {
                'Content-Type': 'multipart/form-data',
            }
        }
        )
    }
    static async getEventComp(id, idUs) {
        return $api.get(`/getEventComp/${idUs}/${id}`)
    }

    static async getAllEvent() {
        return $api.get(`/getAllEvent`)
    }

    static async getEvent(id) {
        return $api.get(`/getEvent/${id}`)
    }
    static async getEventOneUs(idUs, idEv) {
        return $api.get(`/getEventOneUs/${idUs}/${idEv}`)
    }

    static async allSubscriber(id) {
        return $api.get(`/allSubscribers/${id}`)
    }
    static async allHistory(id) {
        return $api.get(`/allHistoryEve/${id}`)
    }


    static async payEvent(idUs, eventName, yourName, surname, promocode, isVisible, idEv, price) {
        return $api.post(`/createTicket`, { idUs, eventName, yourName, surname, promocode, isVisible, idEv, price })
    }
    static async deletEvent(id) {
        return $api.delete(`/deleteEvent/${id}`)
    }

}