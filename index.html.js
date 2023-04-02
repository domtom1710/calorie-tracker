// Define an empty array to store the user's meals
const meals = [];

// Define a function to add a meal to the meals array
function addMeal() {
  // Get the values of the input fields
  const name = document.getElementById("name").value;
  const protein = Number(document.getElementById("protein").value);
  const carbs = Number(document.getElementById("carbs").value);
  const fat = Number(document.getElementById("fat").value);
  
  // Calculate the total calories and macronutrients for the meal
  const calories = protein * 4 + carbs * 4 + fat * 9;
  const meal = { name, protein, carbs, fat, calories };
  
  // Add the meal to the meals array
  meals.push(meal);
  
  // Update the UI to display the new meal and the total macronutrients
  updateUI();
}

// Define a function to update the UI with the meals and total macronutrients
function updateUI() {
  // Get a reference to the table body element
  const tableBody = document.getElementById("meals-table-body");
  
  // Clear the table body
  tableBody.innerHTML = "";
  
  // Loop through the meals array and add a row to the table for each meal
  meals.forEach((meal) => {
    // Create a new table row element
    const row = document.createElement("tr");
    
    // Add the meal name, macronutrient values, and calories to the row
    row.innerHTML = `
      <td>${meal.name}</td>
      <td>${meal.protein}g</td>
      <td>${meal.carbs}g</td>
      <td>${meal.fat}g</td>
      <td>${meal.calories} calories</td>
    `;
    
    // Add the row to the table body
    tableBody.appendChild(row);
  });
  
  // Calculate the total macronutrients for all meals
  const totalProtein = meals.reduce((acc, meal) => acc + meal.protein, 0);
  const totalCarbs = meals.reduce((acc, meal) => acc + meal.carbs, 0);
  const totalFat = meals.reduce((acc, meal) => acc + meal.fat, 0);
  const totalCalories = meals.reduce((acc, meal) => acc + meal.calories, 0);
  
  // Update the UI to display the total macronutrients
  document.getElementById("total-protein").textContent = `${totalProtein}g`;
  document.getElementById("total-carbs").textContent = `${totalCarbs}g`;
  document.getElementById("total-fat").textContent = `${totalFat}g`;
  document.getElementById("total-calories").textContent = `${totalCalories} calories`;
}
