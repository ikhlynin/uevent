import $api from '../http/index'

export default class CompanyService {
    static async getCom(id) {
        return $api.get(`/getCo/${id}`)
    }
    static async getComOne(id, idUs) {
        return $api.get(`/getCoOne/${id}/${idUs}`)
    }
    static async deletCom(id) {
        return $api.delete(`/deleteCo/${id}`)
    }


    static async newCom(formData) {
        return $api.post('/createCo', formData, {
            header: {
                'Content-Type': 'multipart/form-data',
            }
        }
        )
    }
    static async updateCom(formData) {
        return $api.post('/editCo', formData, {
            header: {
                'Content-Type': 'multipart/form-data',
            }

        }
        )
    }
}