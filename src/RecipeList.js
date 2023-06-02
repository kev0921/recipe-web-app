const RecipeList = (props) => {
    const recipes = props.recipes
    const title = props.title

    return ( 
        <div className="recipe-list">
            <h2>{ title }</h2>
            {recipes.map((recipe) => (
                <div className="recipe-preview" key={recipe.id}>
                    <h2>{ recipe.title }</h2>
                    <p>Created by { recipe.creator }</p>
                </div>
            ))}
        </div>
        );
}
 
export default RecipeList;