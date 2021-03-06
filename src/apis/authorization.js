import { apiHelper } from '../utils/helpers'

export default {
  signIn({ email, password }) {
    return apiHelper.post('/signIn', { email, password })
  },
  signUp(data) {
    return apiHelper.post('/signup', { ...data })
  },
}
