


// document.getElementById('searchBtn').addEventListener('click', function () {

//     const showFoodsParentDiv = document.getElementById('showFoods');
//     showFoodsParentDiv.innerHTML = '';

//     const inputName = document.getElementById('inputFoodName').value;

//     fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputName}`)
//         .then(response => response.json())
//         .then(data => {

//             const foodAllInfo = data.meals; // all food information in array


//             foodAllInfo.forEach(element => {

//                 const secondParentDiv = document.createElement('div');

//                 // creating  image element and then appending to it's parent div (secondParentDiv)
//                 const image = document.createElement('img');
//                 image.src = `${element.strMealThumb}`;
//                 image.style.width = '300px';
//                 secondParentDiv.appendChild(image);

//                 // creating  food element and then appending to it's parent div (secondParentDiv)
//                 const food = document.createElement('h3');
//                 food.innerText = element.strMeal;
//                 secondParentDiv.appendChild(food);

//                 // appending sub div element to main div element
//                 showFoodsParentDiv.appendChild(secondParentDiv);


//             });

//         })

//         // if searched food name not found
//         .catch(err => {
//             alert('please enter valid name or letter');

//         });

// })


// //when clicked on a food image or name
// document.getElementById('showFoods').addEventListener('click', function (e) {

//     // getting clicked food image
//     const clickedFoodImage =  e.target.parentNode.childNodes[0].src;
//     document.getElementById('image').innerHTML = clickedFoodImage;

//     const clickedFoodName = e.target.parentNode.childNodes[1].innerText;

//     fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${clickedFoodName}`)
//         .then(response => response.json())
//         .then(data => {

//             const allInfo = data.meals[0]; // getting clicked food item object

//             // every array element contain ingredient and measure property 
//             let array = [ 
//                 [allInfo.strIngredient1, allInfo.strMeasure1],
//                 [allInfo.strIngredient2, allInfo.strMeasure2],
//                 [allInfo.strIngredient3, allInfo.strMeasure3],
//                 [allInfo.strIngredient4, allInfo.strMeasure4],
//                 [allInfo.strIngredient5, allInfo.strMeasure5],
//                 [allInfo.strIngredient6, allInfo.strMeasure6],
//                 [allInfo.strIngredient7, allInfo.strMeasure7],
//                 [allInfo.strIngredient8, allInfo.strMeasure8],
//                 [allInfo.strIngredient9, allInfo.strMeasure9],
//                 [allInfo.strIngredient10, allInfo.strMeasure10]

//             ];

//             let showIngredient = document.getElementById('showIngredients');

//            showIngredients.innerHTML = `<h2>${clickedFoodName}</h2><br>
//                                          <h5>Ingredients</h5>`;


//             // element[0] is ingredient name and element[1] is its measure                             
//             array.forEach(element => {
//                 showIngredients.innerHTML += `<p>  ${element[1]} ${element[0]}  </p>`;
//             });


//         })
// })




document.getElementById('searchBtn').addEventListener('click', () => {

    const showFoodsParentDiv = document.getElementById('showFoods');
    showFoodsParentDiv.innerHTML = '';

    const inputName = document.getElementById('inputFoodName').value;

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputName}`)
        .then(response => response.json())
        .then(data => {

            const foodAllInfo = data.meals; // all food information in array


            foodAllInfo.forEach(element => {

                const secondParentDiv = document.createElement('div');

                // creating  image element and then appending to it's parent div (secondParentDiv)
                const image = document.createElement('img');
                image.src = `${element.strMealThumb}`;
                secondParentDiv.appendChild(image);

                // creating  food element and then appending to it's parent div (secondParentDiv)
                const food = document.createElement('h3');
                food.innerText = element.strMeal;
                secondParentDiv.appendChild(food);

                // appending sub div element to main div element
                showFoodsParentDiv.appendChild(secondParentDiv);


            });

        })

        // if searched food name not found
        .catch(err => {
            document.getElementById('showIngredients').innerHTML = '';
            alert('please enter valid name or letter');

        });

})


//when clicked on a food image or name
document.getElementById('showFoods').addEventListener('click', (e) => {

    const clickedFoodImage = e.target.parentNode.childNodes[0].src;  // getting clicked food image
    
    const clickedFoodName = e.target.parentNode.childNodes[1].innerText;  // clicked food name


    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${clickedFoodName}`)
        .then(response => response.json())
        .then(data => {

            const allInfo = data.meals[0]; // getting clicked food item object


            // every array element contain ingredient and measure property 
            let allIngredients = [
                [allInfo.strIngredient1, allInfo.strMeasure1],
                [allInfo.strIngredient2, allInfo.strMeasure2],
                [allInfo.strIngredient3, allInfo.strMeasure3],
                [allInfo.strIngredient4, allInfo.strMeasure4],
                [allInfo.strIngredient5, allInfo.strMeasure5],
                [allInfo.strIngredient6, allInfo.strMeasure6],
                [allInfo.strIngredient7, allInfo.strMeasure7],
                [allInfo.strIngredient8, allInfo.strMeasure8],
                [allInfo.strIngredient9, allInfo.strMeasure9],
                [allInfo.strIngredient10, allInfo.strMeasure10]
            ];

            let showIngredients = document.getElementById('showIngredients');

            showIngredients.innerHTML = `<img src='${clickedFoodImage}' </img>
                                            <h2>  ${clickedFoodName} </h2> <br>
                                             <h5> Ingredients </h5>`;

            // show name of ingredients
            const ingredientItems = document.getElementById('ingredientItems');
            ingredientItems.innerHTML = '';

            // element[0] is ingredient name and element[1] is its measure                             
            allIngredients.forEach(element => {
                if (element[0] !== '' && element[1] !== '') {
                    ingredientItems.innerHTML += `<li>  ${element[1]} ${element[0]}  </li>`;
                }



            });


        });
})



