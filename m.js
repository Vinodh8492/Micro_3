const fs = require('fs');

// Specify the path to your JSON file
const jsonFilePath = './m.json'; // Adjust the path as needed

// Read the JSON file
fs.readFile(jsonFilePath, 'utf8', (err, fileData) => {
  if (err) {
    console.error('Error reading JSON file:', err);
    return;
  }

  // Parse the JSON data
  const jsonData = JSON.parse(fileData);

  // Extract all food items and store them in an array
  const allFoodItems = jsonData.map(item => item.foodname);

  // Extract food items with category "Vegetable" and store them in a separate array
  const vegetableItems = jsonData.filter(item => item.category === 'Vegetable')
    .map(item => item.foodname);

  // Extract food items with category "Fruit" and store them in a separate array
  const fruitItems = jsonData.filter(item => item.category === 'Fruit')
    .map(item => item.foodname);

  // Extract food items with category "Protein" and store them in a separate array
  const proteinItems = jsonData.filter(item => item.category === 'Protein')
    .map(item => item.foodname);

  // Extract food items with category "Nuts" and store them in a separate array
  const nutsItems = jsonData.filter(item => item.category === 'Nuts')
    .map(item => item.foodname);

  // Extract food items with category "Grains" and store them in a separate array
  const grainsItems = jsonData.filter(item => item.category === 'Grain')
    .map(item => item.foodname);

  // Extract food items with category "Dairy" and store them in a separate array
  const dairyItems = jsonData.filter(item => item.category === 'Dairy')
    .map(item => item.foodname);

  // Extract food items with a calorie content above 100 and store them in a separate array
  const highCalorieItems = jsonData.filter(item => item.calorie > 100)
    .map(item => item.foodname);

  // Extract food items with a calorie content below 100 and store them in a separate array
  const lowCalorieItems = jsonData.filter(item => item.calorie < 100)
    .map(item => item.foodname);
    
    
    const proteinSortedItems = jsonData.slice().sort((a, b) => b.protiens - a.protiens)
    .map(item => item.foodname);

  // Sort food items by carbohydrate content from lowest to highest and store them in a separate array
  const carbSortedItems = jsonData.slice().sort((a, b) => a.cab - b.cab)
    .map(item => item.foodname);

  // Log all the food items, vegetable items, fruit items, protein items, nuts items, grains items, dairy items, high calorie items, low calorie items, protein-sorted items, and carb-sorted items
  console.log('All Food Items:', allFoodItems);
  console.log('Vegetable Items:', vegetableItems);
  console.log('Fruit Items:', fruitItems);
  console.log('Protein Items:', proteinItems);
  console.log('Nuts Items:', nutsItems);
  console.log('Grains Items:', grainsItems);
  console.log('Dairy Items:', dairyItems);
  console.log('High Calorie Items:', highCalorieItems);
  console.log('Low Calorie Items:', lowCalorieItems);
  console.log('Protein-Sorted Items (Highest to Lowest):', proteinSortedItems);
  console.log('Carb-Sorted Items (Lowest to Highest):', carbSortedItems);
});














