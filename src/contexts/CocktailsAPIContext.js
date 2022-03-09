// // - Após a submissão mealsToken e cocktailsToken devem estar salvos em localStorage
// import React, { createContext, useState } from 'react';
// import PropTypes from 'prop-types';
// import { fetchDrinks } from '../services/cocktailAPI';

// export const cocktailAPIContext = createContext();

// export default function cocktailAPIContextProvider({ children }) {
//   const [apiResponse, setApiResponse] = useState([]);
//   const [load, setLoad] = useState(true);

//   const handleAPI = async () => {
//     const results = await fetchDrinks();
//     setLoad(false);
//     setApiResponse(results.meals);
//   };

//   return (
//     <cocktailAPIContext.Provider
//       value={ { handleAPI, load, apiResponse,
//       } }
//     >
//       {children}
//     </cocktailAPIContext.Provider>
//   );
// }
