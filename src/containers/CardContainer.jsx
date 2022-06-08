import React from 'react';
import bookmark from '../images/icon-bookmark.svg'
import mastercraft from '../images/logo-mastercraft.svg'
import Card from '../components/Card';
import data from '../data'
import { ModalContext } from '../App';

const CardContainer = () => {
    const {setIsModalOpen, setSelected} = React.useContext(ModalContext)

    const [isBookMarked, setIsBookMarked] = React.useState(false)

    const handleDonationButton = () => {
        setIsModalOpen(true)
        setSelected(null)
    }

    return (
        <>
            <section className='card-container'>
                <img src={mastercraft} alt="mastercraft" className='mastercraft'/>
                <div className='card-container-heading'>
                    <h1>Mastercraft Bamboo Monitor Riser</h1>
                    <p>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
                </div>
                <div className='card-btns'>
                    <button className='btn btn-primary' onClick={handleDonationButton}>Back this project</button>
                    <button className={isBookMarked ? 'btn btn-bookmark bookmarked' : 'btn btn-bookmark'} onClick={() => setIsBookMarked(true)}>
                        <img src={bookmark} alt="bookmark" />
                        <span>{isBookMarked ? 'Bookmarked' : 'Bookmark'}</span>
                    </button>
                </div>
            </section>

            <section className='card-container'>
                <div className='progress-container'>
                <div className='progress'>
                    <h2>$89,914</h2>
                    <p className='progress-info'>of $100,000 backed</p>
                </div>
                <div className='progress'>
                    <h2>5,007</h2>
                    <p className='progress-info'>total backers</p>
                </div>
                <div className='progress'>
                    <h2>56</h2>
                    <p className='progress-info'>days left</p>
                </div>
                </div>
                <div className='progress-meter'></div>
            </section>

            <section className='card-container about-section'>
                <h4>About this project</h4>
                <p className='about'>The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand.</p>
                <p>Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand.</p>
                {data.map(item => {
                    return <Card {...item} key={item.id} />
                })}
            </section>
        </>
    );
};

export default CardContainer;