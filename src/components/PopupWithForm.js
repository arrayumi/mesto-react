// import Popup from './Popup.js'

// export default class PopupWithForm extends Popup {
//     constructor(popupSelector, handleFormSubmit) {
//         super(popupSelector);
//         this._handleFormSubmit = handleFormSubmit;
//         this._form = this._popup.querySelector('.popup__form');
//         this._inputsList = this._form.querySelectorAll('.popup__input');
//     }

//     _getInputValues() {
//         this._inputsValues = {};
//         this._inputsList.forEach(input => {
//             this._inputsValues[input.name] = input.value;
//         })
//         return this._inputsValues;
//     }

//     close() {
//         super.close();
//         this._form.reset();
//     }

//     loading(isLoading, submitText) {
//         this._submitButton = this._popup.querySelector('.popup__button_type_save');
//         if (isLoading) {
//             this._submitButton.textContent = "Сохранение...";
//         }
//         else {
//             this._submitButton.textContent = submitText;
//         }
//     }

//     setEventListeners() {
//         super.setEventListeners();
//         this._form.addEventListener('submit', (evt) => {
//             evt.preventDefault();
//             this._handleFormSubmit(this._getInputValues());
//         })
//     }
// }