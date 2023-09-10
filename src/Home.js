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
                    <li>Save recipes that you want to cook for later.</li>
                    <li>View the recipes original web page for more information.</li>
                </ul>
            <li>Review recipes that you have saved in the Saved Recipes tab.</li>
                <ul>
                    <li>Review recipe cards of the recipes that you have saved.</li>
                    <li>Remove recipes from your saved list that you no longer want.</li>
                    <li>Add ingredients from recipes to your Grocery List.</li>
                </ul>
            <li>Update/View your grocery list on the Grocery List tab.</li>
                <ul>
                    <li>Manually add items to your Grocery List.</li>
                    <li>Mark off ingredients that you have purchased.</li>
                    <li>Delete items that you no longer need on your list.</li>
                </ul>
        </ol>
        <p>This application is made with React and styled with React Bootstrap.  Recipe data is from <a href="https://frosch.cosy.sbg.ac.at/datasets/json/recipes">here</a>.</p>
        </div>
    )
}

export default Home;