import React from 'react';

function ImagePopup() {
    return (
        <div className="popup popup_type_image">
            <div className="popup__image-container">
                <img className="popup__image" src="#" alt="#" />
                <p className="popup__image-caption"></p>
                <button className="popup__button popup__button_type_close" type="button"></button>
            </div>
        </div>
    )
}

export default ImagePopup;