import RecipeList from './RecipeList';

const Home = () => {
  const recipes = [  
    { title: 'Kimchi Fried Rice', body: 'lorem ipsum...', creator: 'Kevin', id: 1 },
    { title: 'Tomato Soup', body: 'lorem ipsum...', creator: 'Kevin', id: 2 },
    { title: 'Chicken', body: 'lorem ipsum...', creator: 'Kevin', id: 3 }
  ];

  return ( 
    <div className="home">
      <RecipeList recipes={recipes} title="My Recipes"></RecipeList>
    </div> 
  );
}
 
export default Home;