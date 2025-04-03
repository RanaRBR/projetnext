// import { createSlice } from "@reduxjs/toolkit";


// export const panierSlice = createSlice({
//     name: "panier",
//     initialState: {
//         panier: []
//     },
//     reducers: {
//         ajouter: (state, action) => {
//             const prod = action.payload;
//             const existeProd = state.panier.find(e => e.id === prod.id);
//             if (existeProd) {
//                 existeProd.quantity += 1;
//             } else {
//                 state.panier.push({ ...prod, quantity: 1 });
//             }
//         },
//         retirer: (state, action) => {
//             state.panier = state.panier.filter(e => e.id !== action.payload);
//         }
//     }
// });


// export const { ajouter, retirer } = panierSlice.actions;
// export default panierSlice.reducer;