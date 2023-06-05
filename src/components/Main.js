import React from 'react';

function Main({onEditProfile, onAddPlace, onEditAvatar}) {


    return (
        <main className="page__element content">
            <section className="profile" aria-label="Профиль">
                <div className="profile__avatar">
                    <img className="profile__avatar-image" src="#" alt="Аватар." onClick={onEditAvatar} />
                </div>
                <div className="profile__info">
                    <div className="profile__name-container">
                        <h1 className="profile__name"></h1>
                        <button className="profile__button profile__button_type_edit" type="button" onClick={onEditProfile}></button>
                    </div>
                    <h2 className="profile__caption"></h2>
                </div>
                <button className="profile__button profile__button_type_add" type="button" onClick={onAddPlace}></button>
            </section>

            <section className="cards" aria-label="Фотографии">
                <ul className="cards__list">

                    <template id="cards-item">
                        <li class="cards__item">
                            <article class="cards__article">
                                <img class="cards__image" src="#" alt="#" />
                                <div class="cards__item-description">
                                    <h2 class="cards__title"></h2>
                                    <div class="cards__likes-container">
                                        <button class="cards__like-button" type="button"></button>
                                        <p class="cards__likes-counter"></p>
                                    </div>
                                </div>
                                <button class="cards__delete-button" type="button"></button>
                            </article>
                        </li>
                    </template>

                </ul>
            </section>
        </main>
    )
}

export default Main;