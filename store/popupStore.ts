import {create} from 'zustand'
import React from "react";

interface PopupState {
    currentPopup: { content: React.JSX.Element | React.ReactNode } | null
    openPopup: (content: React.JSX.Element | React.ReactNode) => void
    closePopup: () => void
}

export const usePopupStore = create<PopupState>((set) => ({
    currentPopup: null,
    openPopup: (content) => set({currentPopup: {content}}),
    closePopup: () => set({currentPopup: null}),
}))
