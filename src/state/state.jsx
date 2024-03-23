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
            timeWorkGallery: timeWorkGallery,
        },
    ],

    addEmptyGalleryBlock: () => {
        set((state) => ({
            galleryBlock: [
                ...state.galleryBlock,
                {
                    galleryListOption: galleryListOption,
                    amount: [],
                    timeWorkGallery: timeWorkGallery,
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
    },

    updateTimeGallery: (newItem, selectedOption) => {
        set((state) => ({
            galleryBlock: state.galleryBlock.map((item) => {
                if (newItem === item) {
                    return {
                        ...item,
                        timeWorkGallery: selectedOption
                    };
                }
                return item;
            })
        }));
    }


}));


export const useGuns = create((set) => ({
    pistolList: [
        { gun: 'пістолети...' },
        {
            gun: 'Smith & Wesson / CZ P-07',
            cal: '22lr',
            price: '300 грн'
        },
        {
            gun: 'Glock RBF Custom',
            cal: '22lr',
            price: '400 грн'
        },
        {
            gun: 'Sig Sauer X-5',
            cal: '9x19',
            price: '950 грн'
        },
        {
            gun: 'Alien',
            cal: '9x19',
            price: '1 000 грн'
        },
        {
            gun: 'Sig Sauer P320',
            cal: '9x19',
            price: '400 грн'
        },
        {
            gun: 'CZ 75 Shadow 2',
            cal: '9x19',
            price: '600 грн'
        },
        {
            gun: 'Beretta M9',
            cal: '9x19',
            price: '500 грн'
        },
        {
            gun: 'glock 17 / 19 / 19x',
            cal: '9x19',
            price: '300 грн'
        },
        {
            gun: 'glock 45 / 43x',
            cal: '9x19',
            price: '400 грн'
        },
        {
            gun: 'Kimber',
            cal: '.45ACP',
            price: '900 грн'
        },
        {
            gun: 'Arsenal FireArms',
            cal: '.45ACP',
            price: '1 500 грн'
        },
    ],

    riflesList: [
        { gun: '...' },
        {
            gun: 'Anschutz 1416 / Ruger 10/22',
            cal: '22lr',
            price: '400 грн'
        },
        {
            gun: 'Tikka T3x / T3',
            cal: '.223Rem/.308Win',
            price: '600 грн'
        },
        {
            gun: 'AR-15 / Вулкан',
            cal: '.223Rem/7.60x39',
            price: '500 грн'
        },
        {
            gun: 'Springfield',
            cal: '.308Win',
            price: '900 грн'
        },
        {
            gun: 'DB / Kriss / Stribog',
            cal: '9x21/9x19',
            price: '600 грн'
        },
        {
            gun: 'Benelli / Maverick',
            cal: '20/12',
            price: '400 грн'
        },
    ]
}))
