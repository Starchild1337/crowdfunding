import React from 'react'
import Header from './components/Header'
import CardContainer from './containers/CardContainer'
import Modal from './components/Modal'

export const ModalContext = React.createContext()

function App() {
  const [isModalOpen, setIsModalOpen] = React.useState(false)
  const [selected, setSelected] = React.useState(null)
  const [thanksModal, setThanksModal] = React.useState(false)
  const [navModal, setNavModal] = React.useState(false)

  return (
    <ModalContext.Provider value={{isModalOpen, setIsModalOpen, selected, setSelected, thanksModal, setThanksModal, navModal, setNavModal}}>
      <Header />
      <CardContainer isModalOpen={isModalOpen} />
      {isModalOpen ? <Modal /> : null}
    </ModalContext.Provider>
  )
}

export default App
