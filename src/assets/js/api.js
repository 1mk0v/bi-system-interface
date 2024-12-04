import Cookie from "@/assets/js/cookie.js"

class API {

    _getResponse(res) {
        if (res.status == 403) { location.reload() }
        if (res.status == 401) {
            const cookie = new Cookie()
            cookie.remove('token')
            location.reload()
        }
        return res.ok ? res.json() : Promise.reject(res)
    }

    _get_token() {
        const cookies = new Cookie()
        return cookies.get('token')
    }

    constructor(path) {
        this.host = `http://localhost:8000`
        this.path = path
        this.auth = `Bearer ${this._get_token()}`
    }

    async get(data = {}) {
        let params = '?' + new URLSearchParams(data)
        const res = await fetch(this.host + this.path + params , {
            method: 'GET',
            headers: {
                Authorization: this.auth
            }
          });
        return this._getResponse(res);
    }

    async post(body, headers = {}, paramsObject = {}) {
        let params = (paramsObject != {}) ? '?' + new URLSearchParams(paramsObject) : ''
        let newHeaders = {
            "accept": 'application/json',
            "Authorization":this.auth,
        }
        if (headers) {
            for (let key in headers) {
                newHeaders[key] = headers[key]
            }
        }
        const res = await fetch(this.host + this.path + params, {
            method: 'POST',
            headers: newHeaders,
            body: body
        })
        return this._getResponse(res);
    }

    async put(body, paramsObject) {
        let params = '?' + new URLSearchParams(paramsObject)
        const res = await fetch(this.host + this.path + params, {
            method: 'PUT',
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json',
                Authorization: this.auth
            },
            body: body
        })
        return this._getResponse(res);
    }

}

export { API }