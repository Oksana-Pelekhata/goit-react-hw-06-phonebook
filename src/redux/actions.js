import { createAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

// export const addNewContact = (name, number) => {
//   return {
//     type: "contacts/addNewContact",
//     payload: {
//       id: nanoid(),
//       name,
//       number,
//     },
//   };
// };

// export const deleteContact = contactId => {
//   return {
//     type: "contacts/deleteContact",
//     payload: contactId,
//   };
// };


// export const setFilter = value => {
//   return {
//     type: "filters/setFilter",
//     payload: value,
//   };
// };

export const addNewContactAction = createAction("addNewContact")
export const deleteContactAction = createAction("deleteContact")
export const setFilterAction = createAction("setFilter")