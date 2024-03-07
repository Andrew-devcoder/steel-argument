import { create } from "zustand";

const galleryListOption = [
    { gallery: "Тир 100м" },
    { gallery: "Тир 100м Рухома мішень" },
    { gallery: "Практичний малий тир" },
    { gallery: "Практичний великий тир" },
    { gallery: "Класичний 25м тир" },
];

// export const useGallery = create((set) => ({
//     galleryBlock: [
//         {
//             galleryListOption: galleryListOption,
//             amount: [],
//             time: [],
//         },
//     ],

//     addEmptyGalleryBlock: () => {
//         set((state) => ({
//             galleryBlock: [
//                 ...state.galleryBlock,
//                 {
//                     galleryListOption: galleryListOption,
//                     amount: [],
//                     time: [],
//                 },
//             ],
//         }));
//     },

//     delGallery: (index) => {
//         set((state) => {
//             const updatedGallery = state.galleryBlock.filter(
//                 (_, i) => i !== index
//             );
//             return { galleryBlock: updatedGallery || [] };
//         });
//     },
// }));

// type State = {
//     firstName: string;
//     // testValue: string;
//     gallery: string;
//     galleryListOption: string[];
// };

// type Action = {
//     updateFirstName: (firstName: State["firstName"]) => void;

//     // testfunction: (galleryOprion: State["galleryOprion"]) => void;
// };

// const usePersonStore = create<State & Action>((set) => ({
//     firstName: "",
//     updateFirstName: (firstName) => set(() => ({ firstName: firstName })),

//     // testValue: "",

//     // testfunction: (testValue) => set(() => ({ testValue: testValue })),

//     // galleryListOption: [
//     //     { gallery: "Тир 100м" },
//     //     { gallery: "Тир 100м Рухома мішень" },
//     //     { gallery: "Практичний малий тир" },
//     //     { gallery: "Практичний великий тир" },
//     //     { gallery: "Класичний 25м тир" }
//     // ];
// }));

// export { usePersonStore };

// test

type GalleryOption = {
    gallery: string;
};

type GalleryListOption = {
    galleryListOption: GalleryOption[];
};

const example: GalleryListOption = {
    galleryListOption: [
        { gallery: "Тир 100м" },
        { gallery: "Тир 100м Рухома мішень" },
        { gallery: "Практичний малий тир" },
        { gallery: "Практичний великий тир" },
        { gallery: "Класичний 25м тир" },
    ],
};

export { example };
