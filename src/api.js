export const getCategories = async () => {
    const response = await fetch('https://themealdb.com/api/json/v1/1/categories.php');
    return await response.json();
}

export const getMealsByCatName = async (name) => {
    const response = await fetch('https://themealdb.com/api/json/v1/1/filter.php?c=' + name);
    return await response.json();
}

export const getMealById = async (id) => {
    const response = await fetch('https://themealdb.com/api/json/v1/1/lookup.php?i=' + id);
    return await response.json();
}