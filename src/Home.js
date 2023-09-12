function Home() {
    return (
        <div>
        <h1>Welcome to the Recipe/Grocery Tracker</h1>
        <p>With this application, you can easily:</p>
        <ol>
            <li>Search for recipes on the Recipe Finder tab.</li>
                <ul>
                    <li>Searchable recipe database.</li>
                    <li>Review recipe directions and ingredients.</li>
                    <li>Save recipes that you want to cook later.</li>
                    <li>View the recipe's original web page for more information.</li>
                </ul>
            <li>Review recipes that you have saved in the Saved Recipes tab.</li>
                <ul>
                    <li>Review saved recipe cards.</li>
                    <li>Remove saved recipe cards.</li>
                    <li>Add ingredients from saved recipes to your Grocery List.</li>
                </ul>
            <li>Update/View your grocery list on the Grocery List tab.</li>
                <ul>
                    <li>Manually add items to your Grocery List.</li>
                    <li>Mark off ingredients that you have purchased.</li>
                    <li>Delete items no longer needed on your list.</li>
                </ul>
        </ol>
        <p>This application is made with React and styled with React Bootstrap.  Recipe data is from <a href="https://frosch.cosy.sbg.ac.at/datasets/json/recipes">here</a>.</p>
        </div>
    )
}

export default Home;