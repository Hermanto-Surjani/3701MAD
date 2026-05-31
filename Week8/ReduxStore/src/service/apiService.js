const baseUrl = 'https://fakestoreapi.com/';

export const fetchAllProducts = async () => {
  try {
    const res = await fetch(baseUrl + 'products');
    return await res.json();
  } catch (e) {
    throw new Error("Can't load products.");
  }
};

export const fetchProductByID = async (id) => {
  try {
    const res = await fetch(baseUrl + `products/${id}`);
    return await res.json();
  } catch (e) {
    throw new Error("Can't find product.");
  }
};
