# Overview

This React-based application has a searchable database of recipes, lets
the user save recipes, review recipe details, add ingredients from
recipes to a grocery list, add other items to the grocery list, and
update and delete items from the grocery list. The application uses
`json-server` for the API and has a database of seeded recipes from
[<u>https://frosch.cosy.sbg.ac.at/datasets/json/recipes</u>](https://frosch.cosy.sbg.ac.at/datasets/json/recipes).

There are three primary components of the application. The first is the
Recipe Finder. Recipes are displayed in a list and details about each
recipe including the description, ingredients, and steps can be viewed.
In addition, there is a button to save a recipe and a link to view the
original recipe source.

Saved recipes are viewed on the Saved Recipes tab. Each recipe has its
own card with the ingredients and steps available to view. From the list
of ingredients, the user can add ingredients directly to the Grocery
List. There is also a button that allows a recipe to be removed from the
saved recipes list.

On the Grocery List tab, the user can view a list of items on the
grocery list. They also have the ability to add individual items through
a form at the top of the page. Items on the grocery list can be deleted
or toggled as purchased. Items marked as purchased remain on the Grocery
List but have a distinctive strikethrough text style.

Styling is done using React Bootstrap with limited CSS structure.

## Application Structure/Components

- App
- Navbar
- Home
- RecipeList
  - RecipeResult
  - StepListing
- SavedRecipes
  - Recipe
  - IngredientListing
  - StepListing
- Grocery List

##  Project Requirements

1.  Must be a single-page application with one `index.html` file using
    `create-react-app`.

    - *The application uses only a single-page HTML file without page
      reloads and was created using create-react-app.*

2.  Must have at least 5 components keeping code well organized.

    - *The application uses 10 different React components to keep the
      application code well organized.*

3.  Must have at least 3 client-side routes using [React
    Router](https://v5.reactrouter.com/web/guides/quick-start) including
    a navigation bar that allows users to navigate between routes.

    - *The application has 4 client-side routes ( `/`, `/recipes`,
      `/saved-recipes`, and `/grocery-list`) using React Router and includes
      a navigation bar that allows the user to navigate between routes.*

4.  Use a `json-server` to create a RESTful API for the backend.

    - *`json-server` is used for the API for the backend of the
      application.*

5.  Have both a `GET` and a `POST` request to the JSON server with a form to
    make the post request, specifically a controlled form/component.

    - *The application has `GET`, `PATCH`,`POST`, and `DELETE` requests to the
      JSON server including ones through a controlled form.*

6.  The `json-server` data should be simple while avoiding avoid nested
    data and associations.

    - *The `db.json` in the application has two object arrays groceries and
      recipes with a basic structure.*

7.  Upon return of the JSON data from the `POST` request, a state update
    by a `setState` function is required!

    - *`setState` is utilized for all requests from data returned by the
      JSON sever.*

8.  Utilize some styling by writing CSS files or incorporate a UI
    framework (like [React
    Bootstrap](https://react-bootstrap.github.io/), [Semantic
    UI](https://react.semantic-ui.com/), or [Material
    UI](https://material-ui.com/)).

    - *The application uses React Bootstrap for styling.*
