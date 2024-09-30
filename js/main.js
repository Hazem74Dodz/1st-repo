let allRecipes=[]
async function getpizza(meal) {
    let result = await fetch(`https://forkify-api.herokuapp.com/api/search?q=pizza${meal}`)
    let response = await result.json()
    allRecipes=response.recipes
    .console.log(allRecipes);
    displayData()
}

getpizza('pizza')
function displayData(){
    let cartoon =``
    for( let i=0 ; i < allRecipes.length; i++){
        cartoon+=`
        <div class="col-md-2">
            <div class='p-1 shadow'>
                <img src="${allRecipes[i].image_url}" class="w-100" alt="">
                <h4>${allRecipes[i].title.split(' ').slice(0,2).join(' ')}</h4>
            </div>
        </div>`
    }
    document.querySelector('.myData').innerHTML=cartoon
}