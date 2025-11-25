import { create } from "zustand";

//Usamos zustand para poder obtener un estado global del slide actual del carrusel
export const useSlideStore = create((set) => ({
    currentSlide: 0,
    setCurrentSlide: (index) => set(() => ({ currentSlide: index}))
}))
