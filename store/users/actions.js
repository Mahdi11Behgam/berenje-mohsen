import { auth, specific_user_ref, users_db } from "~/plugins/firebase"
import * as firebase from "firebase/compat/app"
import "firebase/compat/auth"

export default {
    store_userdata(context) {
        auth.onAuthStateChanged(
            async usr => {
                console.log("user not found!")
                if (usr) {
                    const userUID = usr.uid;
                    let userRef = await specificUserRef(userUID).get()
                    let userData = await userRef.data()
                    if (usr.emailVerified) {
                        if (!userData.emailVerified) {
                            const date = Math.floor(Date.now() / 1000)
                            let clientIP = ""
                            await fetch('https://api.ipify.org?format=json')
                                .then(x => x.json())
                                .then(({ ip }) => {
                                    clientIP = ip;
                                });
                            let history = {
                                timestamp: date,
                                log: "User authenticated !",
                                status: "completed !",
                                ip: clientIP,
                            }
                            userData.history.push(history)
                            userData.emailVerified = true
                            usersDb.doc(userUID).update(userData)
                        }
                    }
                    context.commit("user_log_controller", true);
                    context.commit("store_userdata", userData);
                }
            }
        )
    },
    async register(context,payload){
        payload.loading.start()
        console.log(payload)
        payload.loading.finish()
    }
};