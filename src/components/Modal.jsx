import React from 'react';
import data from '../data';
import closeModal from '../images/close-modal.svg'
import checkIcon from '../images/icon-check.svg'
import { ModalContext } from '../App';
import ModalCard from './ModalCard';

const Modal = () => {
    const {setIsModalOpen, thanksModal, setThanksModal, selected, setSelected, navModal} = React.useContext(ModalContext)
    const [customPrice, setCustomPrice] = React.useState(1)

    const handleCloseModal = () => {
        setIsModalOpen(false)
        setThanksModal(false)
    }

    if(navModal) {
        return (
        <section className='modal nav-modal'>
            <div className='card-container nav-card'>
                <ul className='modal__nav-links'>
                    <li>About</li>
                    <li>Discover</li>
                    <li>Get Started</li>
                </ul>                
            </div>
        </section>
        )
    }

    if(thanksModal) {
        return (
            <section className='modal'>
            <div className='card-container modal__thanks'>
                <img src={checkIcon} alt="check" />
                <h2 className='modal__heading'>Thanks for your support</h2>
                <p className='modal__subtext'>Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed.</p>
                <button className='btn btn-thanks' onClick={handleCloseModal}>Got it!</button>
            </div>
        </section>
        )
    }

    return (
        <section className='modal'>
            <div className='card-container modal-container'>
                <button className='close-modal' onClick={() => setIsModalOpen(false)}>
                    <img src={closeModal} alt="close"/>
                </button>
                <h2>Back this project</h2>
                <p>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>

                  <article className={selected === 0 ? 'card card-modal selected-card' : 'card card-modal'} onClick={() => setSelected(0)}>
                <div className={selected === 0 ? 'card-heading border-bottom' : 'card-heading'}>
                    <h4>Pledge with no reward</h4>
                    <p>Choose to support us without a reward if you simply believe in our project.As a backer, you will be signed up to receive product updates via email.</p>
                </div>
                {selected === 0 ? 
                <div className='card-enter-pledge'>
                    <p>Enter your pledge</p>
                    <div className='card-enter-btns'>
                        <div className='card-enter-input'>
                        <input type="number" className='btn' min={1} value={customPrice} onChange={e => setCustomPrice(e.target.value)} />
                        <span>$</span>
                        </div>
                        <button className='btn btn-primary' onClick={() => setThanksModal(true)}>Continue</button>
                    </div>
                </div> : null
                }
                  </article>   

                  {data.map(item => {
                      return <ModalCard {...item} key={item.id} />
                  })}
            </div>
        </section>
    );
};

export default Modal;