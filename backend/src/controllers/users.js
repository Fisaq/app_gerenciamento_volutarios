import UsersDataAccess from '../dataAccess/users.js'
import { ok, serverError } from '../helpers/httpResponse.js'

export default class UsersControllers {
    constructor() {
        this.UsersDataAccess = new UsersDataAccess()
    }

    async getUsers() {
        try {
            const users = await this.DataAccess.getUsers()
            console.log(users)

            return ok(users)
        } catch (error) {
            return serverError(error)
        }
    }

}