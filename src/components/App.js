import React, { useState, useEffect } from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import ImagePopup from './ImagePopup.js';
import PopupWithFormReact from './PopupWithFormReact.js';


function App() {
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);

    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true);
    }

    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true);;
    }

    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true);;
    }

    function closeAllPopups() {
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setIsEditAvatarPopupOpen(false);
    }

    return (
        <div className="page">
            <Header />
            <Main
                onEditAvatar={handleEditAvatarClick}
                onEditProfile={handleEditProfileClick}
                onAddPlace={handleAddPlaceClick} />

            <PopupWithFormReact
                title={"Редактировать профиль"}
                name={"edit-profile"}
                onClose={closeAllPopups}
                isOpen={isEditProfilePopupOpen}>
                <>
                    <label className="popup__field">
                        <input id="input-username" className="popup__input popup__input_type_name" type="text" placeholder="Имя"
                            name="name" required minLength="2" maxLength="40" />
                        <span id="input-username-error" class="popup__input-error"></span>
                    </label>
                    <label className="popup__field">
                        <input id="input-about" className="popup__input popup__input_type_about" type="text"
                            placeholder="О себе" name="about" required minLength="2" maxLength="200" />
                        <span id="input-about-error" class="popup__input-error"></span>
                    </label>
                    <button class="popup__button popup__button_type_save" type="submit">Сохранить</button>
                </>
            </PopupWithFormReact>

            <PopupWithFormReact
                title={"Новое место"}
                name={"add-card"}
                onClose={closeAllPopups}
                isOpen={isAddPlacePopupOpen}>
                <>
                    <label className="popup__field">
                        <input id="input-name" className="popup__input popup__input_type_name" type="text"
                            placeholder="Название" name="name" required minLength="2" maxLength="30" />
                        <span id="input-name-error" className="popup__input-error"></span>
                    </label>
                    <label className="popup__field">
                        <input id="input-url" className="popup__input popup__input_type_url" type="url"
                            placeholder="Ссылка на картинку" name="link" required />
                        <span id="input-url-error" className="popup__input-error"></span>
                    </label>
                    <button className="popup__button popup__button_type_save" type="submit">Создать</button>
                </>
            </PopupWithFormReact>

            <PopupWithFormReact
                title={"Обновить аватар"}
                name={"add-card"}
                onClose={closeAllPopups}
                isOpen={isEditAvatarPopupOpen}>
                <>
                    <label className="popup__field">
                        <input id="input-avatar-url" className="popup__input popup__input_type_url" type="url"
                            placeholder="Ссылка на картинку" name="avatar" required />
                        <span id="input-avatar-url-error" className="popup__input-error"></span>
                    </label>
                    <button className="popup__button popup__button_type_save" type="submit">Сохранить</button>
                </>
            </PopupWithFormReact>

            <Footer />
        </div>
    );
}

export default App;
