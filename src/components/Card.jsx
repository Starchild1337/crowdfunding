import React from 'react';
import { ModalContext } from '../App';

const Card = ({name, id, pledge, info, left}) => {
    const {setIsModalOpen, setSelected} = React.useContext(ModalContext)

    const handleSelectButton = (id) => {
        setIsModalOpen(true)
        setSelected(id)
    }

    return (
        <article className={left === 0 ? 'card sold-out' : 'card'}>
            <div className='card-heading'>
                <h4>{name}</h4>
                <span className='pledge'>Pledge {pledge}$ or more</span>
            </div>
            <p>{info}</p>
            <div className='card-select'>
                <div className='card-left-count'>
                    <h3>{left}</h3>
                    <span>left</span>
                </div>
                <button disabled={!left} onClick={() => handleSelectButton(id)} className={left === 0 ? 'btn btn-sold-out' : 'btn btn-primary'}>{left === 0 ? 'Out of stock' : 'Select Reward'}</button>
            </div>
        </article>
    );
};

export default Card;