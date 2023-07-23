import React, { createContext, useState, useContext } from 'react';

const Context = createContext();

export const FavoriteContext = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  
  // Add a movie to favorites
  const addFavorite = (product) => {
    const updatedFavorites = [...favorites, product];
    setFavorites(updatedFavorites);
  };

  // Remove a product from favorites
  const removeFavorite = (productId) => {
    const updatedFavorites = favorites.filter((product) => product._id !== productId);
    setFavorites(updatedFavorites);
  };

  const toggleFavorite = (product) => {
    if (isFavorite(product._id)) {
      removeFavorite(product._id);
    } else {
      addFavorite(product);
    }
  };
  // Check if a product is in favorites
  const isFavorite = (productId) => {
    
    // return favorites.find(item=>item._id == productId)

    return favorites.some((product) => product._id === productId);
  };


  // Step 3: Provide the context value to the children components
  return (
    <Context.Provider
      value={{ 
        favorites, 
        toggleFavorite, 
        isFavorite
      }}
    >
      {children}
    </Context.Provider>
  );
};

// Step 4: Create a custom hook to consume the FavoritesContext
export const useFavoriteContext = () => useContext(Context);
