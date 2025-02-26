import { useContext } from 'react';
import { InventoryContext } from './InventoryList';
import { FETCH_ACTIONS } from './index1.js';
import axios from 'axios';

const DeleteProduct = ({ productId }) => {
  const { dispatch } = useContext(InventoryContext);

  const handleDelete = async () => {
    try {
        await axios.delete('/api/addproduct',{
            data:{
                productId:productId,
              
            }
        })
       
      dispatch({ type: FETCH_ACTIONS.DELETE, id: productId });
    } catch (error) {
      console.error('Failed to delete product:', error);
    }
  };

  return (
    <button onClick={handleDelete} className="border-2 block hover:bg-red-500 hover:text-black border-red-500 px-4 py-2 text-black cursor-pointer">
      Delete
    </button>
  );
};

export default DeleteProduct;