import React from 'react';
import { useEffect, useState } from 'react';
import api from '../utils/api.js';
import Card from './Card.js';

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {

    const [userAvatar, setUserAvatar] = useState("");
    const [userName, setUserName] = useState("");
    const [userDescription, setUserDescription] = useState("");
    const [cards, setCards] = useState([]);

    const cardsList = cards.map(card => 
        <Card key={card._id} card={card} onCardClick={onCardClick}/>
)

    useEffect(() => {
        Promise.all([
            api.getUserInfo(),
            api.getCards(),
        ])
            .then(([userData, cards]) => {
                setUserAvatar(userData.avatar);
                setUserName(userData.name);
                setUserDescription(userData.about);
                setCards(cards);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <main className="page__element content">
            <section className="profile" aria-label="Профиль">
                <div className="profile__avatar" onClick={onEditAvatar} >
                    <img className="profile__avatar-image" src={userAvatar} alt="Аватар." />
                </div>
                <div className="profile__info">
                    <div className="profile__name-container">
                        <h1 className="profile__name">{userName}</h1>
                        <button className="profile__button profile__button_type_edit" type="button" onClick={onEditProfile}></button>
                    </div>
                    <h2 className="profile__caption">{userDescription}</h2>
                </div>
                <button className="profile__button profile__button_type_add" type="button" onClick={onAddPlace}></button>
            </section>

            <section className="cards" aria-label="Фотографии">
                <ul className="cards__list">

                    {cardsList}

                </ul>
            </section>
        </main>
    )
}

export default Main;