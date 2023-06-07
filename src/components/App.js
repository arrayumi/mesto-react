import React, { useState } from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import ImagePopup from './ImagePopup.js';
import PopupWithForm from './PopupWithForm.js';


function App() {
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState({});

    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true);
    }

    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true);;
    }

    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true);;
    }

    function handleCardClick(card) {
        setSelectedCard(card);
    }

    function closeAllPopups() {
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setIsEditAvatarPopupOpen(false);
        setSelectedCard({});
    }

    return (
        <div className="page">
            <Header />
            <Main
                onEditAvatar={handleEditAvatarClick}
                onEditProfile={handleEditProfileClick}
                onAddPlace={handleAddPlaceClick}
                onCardClick={handleCardClick} />

            <PopupWithForm
                title={"Редактировать профиль"}
                name={"edit-profile"}
                onClose={closeAllPopups}
                isOpen={isEditProfilePopupOpen}
                buttonText={"Сохранить"}>
                <>
                    <label className="popup__field">
                        <input id="input-username" className="popup__input popup__input_type_name" type="text" placeholder="Имя"
                            name="name" required minLength="2" maxLength="40" />
                        <span id="input-username-error" className="popup__input-error"></span>
                    </label>
                    <label className="popup__field">
                        <input id="input-about" className="popup__input popup__input_type_about" type="text"
                            placeholder="О себе" name="about" required minLength="2" maxLength="200" />
                        <span id="input-about-error" className="popup__input-error"></span>
                    </label>
                </>
            </PopupWithForm>

            <PopupWithForm
                title={"Новое место"}
                name={"add-card"}
                onClose={closeAllPopups}
                isOpen={isAddPlacePopupOpen}
                buttonText={"Создать"}>
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
                </>
            </PopupWithForm>

            <PopupWithForm
                title={"Обновить аватар"}
                name={"add-card"}
                onClose={closeAllPopups}
                isOpen={isEditAvatarPopupOpen}
                buttonText={"Сохранить"}>
                <>
                    <label className="popup__field">
                        <input id="input-avatar-url" className="popup__input popup__input_type_url" type="url"
                            placeholder="Ссылка на картинку" name="avatar" required />
                        <span id="input-avatar-url-error" className="popup__input-error"></span>
                    </label>
                </>
            </PopupWithForm>

            <PopupWithForm
                title={"Вы уверены?"}
                name={"confirmation"}
                onClose={closeAllPopups}
                buttonText={"Да"}>
            </PopupWithForm>

            <ImagePopup
                card={selectedCard}
                onClose={closeAllPopups} />

            <Footer />
        </div>
    );
}

export default App;
