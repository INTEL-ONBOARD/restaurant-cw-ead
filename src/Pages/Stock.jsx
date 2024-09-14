import React, { useState, useEffect } from 'react';

const Stock = () => {
  const [dishes, setDishes] = useState([]);
  const [newDish, setNewDish] = useState('');
  const [editingDish, setEditingDish] = useState(null);

  useEffect(() => {
    // Fetch dishes from API
    // setDishes(responseData);
  }, []);

  const handleAddDish = () => {
    // Add dish to API and update state
    setDishes([...dishes, newDish]);
    setNewDish('');
  };

  const handleDeleteDish = (dish) => {
    // Delete dish from API and update state
    setDishes(dishes.filter(d => d !== dish));
  };

  const handleUpdateDish = (updatedDish) => {
    // Update dish in API and update state
    setDishes(dishes.map(d => (d === editingDish ? updatedDish : d)));
    setEditingDish(null);
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Stock</h1>
      <div className="mb-4">
        <input
          type="text"
          value={newDish}
          onChange={(e) => setNewDish(e.target.value)}
          placeholder="Add new dish"
          className="p-2 border border-gray-300 rounded"
        />
        <button
          onClick={handleAddDish}
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add Dish
        </button>
      </div>
      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2">Dish</th>
            <th className="border border-gray-300 p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {dishes.map((dish, index) => (
            <tr key={index}>
              <td className="border border-gray-300 p-2">{dish}</td>
              <td className="border border-gray-300 p-2">
                <button
                  onClick={() => setEditingDish(dish)}
                  className="px-2 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteDish(dish)}
                  className="ml-2 px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {editingDish && (
        <div className="mt-4">
          <h2 className="text-xl font-semibold mb-2">Edit Dish</h2>
          <input
            type="text"
            value={editingDish}
            onChange={(e) => setEditingDish(e.target.value)}
            className="p-2 border border-gray-300 rounded"
          />
          <button
            onClick={() => handleUpdateDish(editingDish)}
            className="ml-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Update
          </button>
        </div>
      )}
    </div>
  );
};

export default Stock;
