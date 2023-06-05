export default class Api {
    constructor(config) {
        this._url = config.url;
        this._headers = config.headers;
    }

    _checkRes(res) {
        if (res.ok) return res.json();
        return Promise.reject(`Ошибка: ${res.status}`);
    }

    getUserInfo() {
        return fetch(`${this._url}/users/me`, {
            headers: this._headers,
        })
            .then(res => this._checkRes(res))
    }

    getCards() {
        return fetch(`${this._url}/cards`, {
            headers: this._headers,
        })
            .then(res => this._checkRes(res))
    }

    setUserInfo({ name, about }) {
        return fetch(`${this._url}/users/me`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({ name, about }),
        })
            .then((res) => this._checkRes(res));
    }

    setUserAvatar({ avatar }) {
        return fetch(`${this._url}/users/me/avatar`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({ avatar }),
        })
            .then((res) => this._checkRes(res));
    }


    addItem({ name, link }) {
        return fetch(`${this._url}/cards`, {
            method: "POST",
            headers: this._headers,
            body: JSON.stringify({ name, link }),
        })
            .then((res) => this._checkRes(res));
    }

    deleteItem(id) {
        return fetch(`${this._url}/cards/${id}`, {
            method: 'DELETE',
            headers: this._headers,
        })
            .then((res) => this._checkRes(res));
    }


    addLike(id) {
        return fetch(`${this._url}/cards/${id}/likes`, {
            method: "PUT",
            headers: this._headers,
        })
            .then((res) => this._checkRes(res));
    }

    removeLike(id) {
        return fetch(`${this._url}/cards/${id}/likes`, {
            method: "DELETE",
            headers: this._headers,
        })
            .then((res) => this._checkRes(res));
    }

}