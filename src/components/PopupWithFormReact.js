import React from 'react';

function PopupWithFormReact({ title, name, children, onClose, isOpen }) {
    return (
        <div className={`popup popup_type_${name} ${isOpen ? "popup_opened" : ""}`}>
            <div className="popup__container">
                <h2 className="popup__title">{title}</h2>

                <form className="popup__form" name={`${name}`} noValidate>
                    {children}
                </form>

                <button className="popup__button popup__button_type_close" type="button" onClick={onClose}></button>
            </div>
        </div>


/* 
            <div class="popup popup_type_edit-profile">
                <div class="popup__container">
                    <h2 class="popup__title">Редактировать профиль</h2>
                    <form class="popup__form" name="edit-profile-form" novalidate>
                        <label class="popup__field">
                            <input id="input-username" class="popup__input popup__input_type_name" type="text" placeholder="Имя"
                                name="name" required minlength="2" maxlength="40" />
                            <span id="input-username-error" class="popup__input-error"></span>
                        </label>
                        <label class="popup__field">
                            <input id="input-about" class="popup__input popup__input_type_about" type="text"
                                placeholder="О себе" name="about" required minlength="2" maxlength="200" />
                            <span id="input-about-error" class="popup__input-error"></span>
                        </label>
                        <button class="popup__button popup__button_type_save" type="submit">Сохранить</button>
                    </form>
                    <button class="popup__button popup__button_type_close" type="button"></button>
                </div>
            </div>

            <div class="popup popup_type_add-card">
                <div class="popup__container">
                    <h2 class="popup__title">Новое место</h2>
                    <form class="popup__form" name="save-card-form" novalidate>
                        <label class="popup__field">
                            <input id="input-name" class="popup__input popup__input_type_name" type="text"
                                placeholder="Название" name="name" required minlength="2" maxlength="30" />
                            <span id="input-name-error" class="popup__input-error"></span>
                        </label>
                        <label class="popup__field">
                            <input id="input-url" class="popup__input popup__input_type_url" type="url"
                                placeholder="Ссылка на картинку" name="link" required />
                            <span id="input-url-error" class="popup__input-error"></span>
                        </label>
                        <button class="popup__button popup__button_type_save" type="submit">Создать</button>
                    </form>
                    <button class="popup__button popup__button_type_close" type="button"></button>
                </div>
            </div>


            <div class="popup popup_type_confirmation">
                <div class="popup__container popup__container_type_confirmation">
                    <h2 class="popup__title popup__title_type_confirmation">Вы уверены?</h2>
                    <form class="popup__form" name="confirmation-form" novalidate>
                        <button class="popup__button popup__button_type_save" type="submit">Да</button>
                    </form>
                    <button class="popup__button popup__button_type_close" type="button"></button>
                </div>
            </div>

            <div class="popup popup_type_update-avatar">
                <div class="popup__container popup__container_type_update-avatar">
                    <h2 class="popup__title popup__title_type_update-avatar">Обновить аватар</h2>
                    <form class="popup__form" name="edit-avatar-form" novalidate>
                        <label class="popup__field">
                            <input id="input-avatar-url" class="popup__input popup__input_type_url" type="url"
                                placeholder="Ссылка на картинку" name="avatar" required />
                            <span id="input-avatar-url-error" class="popup__input-error"></span>
                        </label>
                        <button class="popup__button popup__button_type_save" type="submit">Сохранить</button>
                    </form>
                    <button class="popup__button popup__button_type_close" type="button"></button>
                </div>
            </div>
        </> */
    )
}

export default PopupWithFormReact;