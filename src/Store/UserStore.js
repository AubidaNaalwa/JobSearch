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
            SignIn: action,
            checkIfSigned: action,
            signOut:action
        })
    }

    SignIn = async(email, password)=> {
        try {
            const response = await axios.post('/signIn', { email, password })
            if (response.data.name) {
                this.signed = true
                localStorage.setItem('Signed', true);
            }
        } catch (error) {
            console.log(error)
            this.signed = false
            localStorage.setItem('Signed', false);
        }
    }

    checkIfSigned = ()=> {
        if (localStorage.getItem('Signed')) {
            this.signed = true
      
        } else {
            this.signed = false
      
        }
    }
     signOut = ()=>{
        localStorage.clear()
        this.checkIfSigned()
    }

}