import { create } from "zustand";

const galleryListOption = [
    { gallery: "Тир 100м" },
    { gallery: "Тир 100м Рухома мішень" },
    { gallery: "Практичний малий тир" },
    { gallery: "Практичний великий тир" },
    { gallery: "Класичний 25м тир" },
];

const timeWorkGallery = [
    { t: '00:30' },
    { t: '01:00' },
    { t: '01:30' },
    { t: '02:00' },
    { t: '02:30' },
    { t: '03:00' },
    { t: '03:30' },
    { t: '04:00' },
    { t: '04:30' },
    { t: '05:00' },
    { t: '05:30' },
    { t: '06:00' },
]

export const useGallery = create((set) => ({
    galleryBlock: [
        {
            galleryListOption: galleryListOption,
            amount: [],
            time: timeWorkGallery,
        },
    ],

    addEmptyGalleryBlock: () => {
        set((state) => ({
            galleryBlock: [
                ...state.galleryBlock,
                {
                    galleryListOption: galleryListOption,
                    amount: [],
                    time: timeWorkGallery,
                },
            ],
        }));
    },

    delGallery: (index) => {
        set((state) => ({
            galleryBlock: state.galleryBlock.filter((_, idx) => idx !== index)
        }));
    },

    updateGalleryOption: (newItem, selectedOption) => {
        set((state) => ({
            galleryBlock: state.galleryBlock.map((item) => {
                if (newItem === item) {
                    return {
                        ...item,
                        galleryListOption: selectedOption
                    };
                }
                return item;
            })
        }));
    }
}));
