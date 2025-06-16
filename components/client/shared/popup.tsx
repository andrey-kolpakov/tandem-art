'use client'

// import {useEffect} from 'react'
import {usePopupStore} from '@/store/popupStore'
import '@/components/client/shared/styles/popup.scss'

function Popup() {
    const {currentPopup, closePopup} = usePopupStore()

    // Закрытие по клику на фон
    const handleBackdropClick = () => {
        console.log('123')

        if (!currentPopup) return
        closePopup()
    }

    // // Закрытие при нажатии ESC
    // useEffect(() => {
    //     const handleKeyDown = (event: KeyboardEvent) => {
    //         if (event.key === 'Escape') {
    //             closePopup()
    //         }
    //     }
    //     window.addEventListener('keydown', handleKeyDown)
    //     return () => window.removeEventListener('keydown', handleKeyDown)
    // }, [closePopup])

    // if (!currentPopup) {
    //     return null
    // }

    return (
        <div className={`popup-container ${currentPopup ? 'popup-container--active' : ''}`}>
            <div className="current-popup">{currentPopup?.content}</div>
            <div className="popup-container__backdrop" onClick={handleBackdropClick}></div>
        </div>
    )
}

export {Popup}
