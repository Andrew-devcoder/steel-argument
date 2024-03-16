import { create } from "zustand";

const galleryListOption = [
    { gallery: "Тир 100м" },
    { gallery: "Тир 100м Рухома мішень" },
    { gallery: "Практичний малий тир" },
    { gallery: "Практичний великий тир" },
    { gallery: "Класичний 25м тир" },
];

export const useGallery = create((set) => ({
    galleryBlock: [
        {
            galleryListOption: galleryListOption,
            amount: [],
            time: [],
        },
    ],

    addEmptyGalleryBlock: () => {
        set((state) => ({
            galleryBlock: [
                ...state.galleryBlock,
                {
                    galleryListOption: galleryListOption,
                    amount: [],
                    time: [],
                },
            ],
        }));
    },

    delGallery: (index) => {
        set((state) => {
            const updatedGallery = state.galleryBlock.filter(
                (_, i) => i !== index
            );
            return { galleryBlock: updatedGallery || [] };
        });
    },
}));
