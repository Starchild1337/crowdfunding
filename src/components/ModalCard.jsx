import React from 'react';
import './ModalCard.css'
import { ModalContext } from '../App';

const ModalCard = ({id, name, pledge, info, left}) => {
    const {selected, setSelected, setThanksModal} = React.useContext(ModalContext)
    const [price, setPrice] = React.useState(pledge)

    let selectedCard = 'card card-modal-item'
    let cardCursor = 'modal-card-heading'
    if(id === selected) {
        selectedCard = 'card card-modal-item selected-card'
        cardCursor = 'modal-card-heading border-bottom'
    }
    if(left === 0) {
        selectedCard = 'card card-modal-item sold-out'
        cardCursor = 'modal-card-heading modal-card-disabled'
    }


    return (
        <article className={selectedCard} >
            <div className={cardCursor} onClick={() => setSelected(id)}>
                <div className='card-heading'>
                    <h4>{name}</h4>
                    <span className='pledge'>Pledge {pledge}$ or more</span>
                <div className='card-left-count'>
                    <h3>{left}</h3>
                    <span>left</span>
                </div>
                </div>
                <p>{info}</p>
            </div>
            {id === selected ? 
            <div className='card-enter-pledge'>
                <p>Enter your pledge</p>
                <div className='card-enter-btns'>
                    <div className='card-enter-input'>
                    <input type="number" className='btn' min={pledge} value={price} onChange={e => setPrice(e.target.value)} />
                    <span>$</span>
                    </div>
                    <button className='btn btn-primary' onClick={() => setThanksModal(true)}>Continue</button>
                </div>
            </div> : null
            }
        </article>
    );
};

export default ModalCard;