import { observable, action, makeObservable } from 'mobx'
import axios from "axios";

export default class UserStore {
    constructor() {
        this.userName = ""
        this.password = ""
        this.name = ""
        this.jobs = []
        this.contacts = []
        this.signed = false
        makeObservable(this, {
            userName: observable,
            password: observable,
            name: observable,
            jobs: observable,
            contacts: observable,
            SignInIn: action
        })
    }

    async SignInIn(email, password) {
        try {
            const response = await axios.post('/signIn', { email, password })
            console.log("user is  : " + response.data.name)
        } catch (error) {
            console.log(error)
        }
    }

}