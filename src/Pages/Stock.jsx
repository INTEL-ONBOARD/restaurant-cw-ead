import React, { useEffect, useState } from 'react';

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
    <div className="flex items-center md:mx-auto md:w-full md:max-w-sm justify-center bg-gray-50">
<div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Add Product</h2>
  </div>

  <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
    <form className="space-y-4" action="#" method="POST" onSubmit={handleAddDish}>
      <div>
        <label for="productname" class="block text-sm font-medium leading-6 text-black">Product Name</label>
        <div className="mt-2">
          <input id="productname" required class="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
        </div>
      </div>

      <div>
        <label for="price" class="block text-sm font-medium leading-6 text-gray-900">Price</label>
        <div className="mt-2">
          <input id="price" required class="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
        </div>
      </div>

      <div>
        <label for="price" class="block text-sm font-medium leading-6 text-gray-900">Quantity</label>
        <div className="mt-2">
          <input id="price" required class="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
        </div>
      </div>

      
<div class="flex items-center justify-center w-full">
    <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
        <div class="flex flex-col items-center justify-center pt-5 pb-6">
            <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
            </svg>
            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
            <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
        </div>
        <input id="dropzone-file" type="file" class="hidden" />
    </label>
</div> 


      <div>
        <button type="button" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Add Product</button>
      </div>
    </form>

    </div>
    </div>
    </div>

  );
};

export default Stock;
