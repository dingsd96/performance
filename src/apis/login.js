import http from "@/utils/axios"

export default {
  login(params) {
    return http.post(`crNursing/api/login`, params)
  },
}
