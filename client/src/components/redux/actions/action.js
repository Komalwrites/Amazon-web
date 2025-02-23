import { createAsyncThunk } from '@reduxjs/toolkit';
export const getProducts = createAsyncThunk(
    'products/getProducts',
    async () => {
      try {
        const response = await fetch('https://amazon-web-server-6o27.onrender.com/getproducts', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        // Check if response is successful
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        const data = await response.json();
        return data;
      } catch (error) {
        return (error.message);
      }
    }
  );
