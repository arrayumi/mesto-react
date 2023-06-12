import { useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

export default function Card({ card: { link, name, likes, _id, owner }, onCardClick, onCardLike, onCardDelete }) {

    const currentUser = useContext(CurrentUserContext);

    const isOwn = owner._id === currentUser._id;
    const isLiked = likes.some(i => i._id === currentUser._id);
    const cardLikeButtonClassName = ( 
        `cards__like-button ${isLiked && 'cards__like-button_active'}` 
      );

    function handleClick() {
        onCardClick({ link, name });
    }

    function handleLikeClick() {
        onCardLike({_id, likes});
    }

    function handleCardDelete() {
        onCardDelete(_id);
    }

    return (
        <li className="cards__item" id={_id}>
            <article className="cards__article">
                <img className="cards__image" src={link} alt={name} onClick={handleClick} />
                <div className="cards__item-description">
                    <h2 className="cards__title">{name}</h2>
                    <div className="cards__likes-container">
                        <button className={cardLikeButtonClassName} type="button" onClick={handleLikeClick}></button>
                        <p className="cards__likes-counter">{likes.length}</p>
                    </div>
                </div>
                {isOwn && <button className="cards__delete-button" type="button"onClick={handleCardDelete}/>}
            </article>
        </li>
    )
}


// export default class Card {
//     constructor(data, template, handleCardClick, handleDeleteConfirmation, handleCardLike) {
//         this._handleCardClick = handleCardClick;
//         this._handleDeleteConfirmation = handleDeleteConfirmation;
//         this._handleCardLike = handleCardLike;
//         this._title = data.name;
//         this._image = data.link;
//         this._template = template;
//         this._cardsItem = this._template.querySelector('.cards__item').cloneNode(true);
//         this._cardImage = this._cardsItem.querySelector('.cards__image');
//         this._cardTitle = this._cardsItem.querySelector('.cards__title');
//         this._likesCounterElement = this._cardsItem.querySelector('.cards__likes-counter');

//         this._likeButton = this._cardsItem.querySelector('.cards__like-button');
//         this._deleteButton = this._cardsItem.querySelector('.cards__delete-button');
//     }

//     _renderLikes(likesCounter) {
//         this._likesCounterElement.textContent = likesCounter;
//       }

//     _handleLike = (likesCounter) => {
//         this._renderLikes(likesCounter);
//         this._likeButton.classList.toggle('cards__like-button_active');
//     }


//     deleteCard(card) {
//         card.remove();
//         card = null;
//     }

//     _setEventListeners = () => {
//         this._likeButton.addEventListener('click', () => {
//             this._handleCardLike(this._cardsItem, this._handleLike)
//         });

//         this._deleteButton.addEventListener('click', () => {
//             this._handleDeleteConfirmation(this._cardsItem, this.deleteCard);
//         });

//         this._cardImage.addEventListener('click', () => this._handleCardClick(this._image, this._title));
//     }

//     render({ cardsId, likes, ownerId, userId }) {
//         this._setEventListeners();
//         this._cardImage.src = this._image;
//         this._cardImage.alt = this._title;
//         this._cardTitle.textContent = this._title;
//         this._likesCounterElement.textContent = this._likesCounter;

//         if (ownerId !== userId) {
//             this._deleteButton.remove();
//         }

//         this._renderLikes(likes.length);

//         if (likes.find((user) => user._id === userId)) {
//             this._likeButton.classList.add('cards__like-button_active');
//           }

//         this._cardsItem._id = cardsId;
//         return this._cardsItem;
//     }
// }