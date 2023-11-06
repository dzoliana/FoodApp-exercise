<h1 align="center">FoodApp</h1>

- main page with list of meals
- button Add To Cart for adding meals
- Modal window Cart with list of added items we can change their amounts and 2 buttons for Close and Checkout
- Modal window Checkout with form input info and 2 buttons Close and Submit
- Modal window with success message
- handling errors and loading situations

> Main page
> <img src="/src/assets/main.png" alt="drawing" width="500"/>

> Cart
> <img src="/src/assets/Cart.png" alt="drawing" width="500"/>

> Checkout
> ![main](/src/assets/Checkout.png "Checkout")

> Order success
> ![main](/src/assets/Success.png "Order success")

> Fetching data
> ![main](/src/assets/Fetching.png "Fetching data")

> Error fetching
> ![main](/src/assets/ErrorFetching.png "Error fetching")

<p>
    <img src="/src/assets/main.png" hspace="10" >
    > Main page
    <img src="/src/assets/Cart.png" hspace="10" >
    > Cart
    <img src="/src/assets/Checkout.png" hspace="10" >
    > Checkout
    <img src="/src/assets/Success.png" hspace="10" >
    > Order success
    <img src="/src/assets/Fetching.png" hspace="10" >
    > Fetching data
    <img src="/src/assets/ErrorFetching.png" hspace="10" >
    > Error fetching
</p>

## Getting started

This project was bootstrapped with **Create React App**.

1. Clone/Download the repo.
2. Open backend folder
   1. Run `npm install`.
   2. Run `npm start`
3. Open project folder
   1. Run `npm install`
   2. Run `npm run dev` to spin the up the local dev server port.
4. Make required changes to suit your needs.

## Deployed site

## Workflow

- add Header
- add Meals component
  - fetch data from backend with fetchMeals() function
- add MealItem component with meal details
  -add util folder with formating.js file for currency formatting
- adding UI folder
  - add Button component
- add folder store
  - add CartContext component with CartContextProvider() function for managing cart data in centralized way
- creating 'handleAddMealToCart' for handling button click in MealItem.jsx
- creating 'totalCartItems' in Header.jsx for updating number of items in cart
- creating Modal.jsx for cart opening
  - using createPortal
- creating Cart.jsx component for cart details
- creating UserProgressContext.jsx for managing modal window (progress property for show or hide)
- adding Cart component in App.jsx
- creating CartItem.jsx for item details in Cart
- creating Checkout.jsx component for checkout button
- creating Input.jsx component for optimizing code inputs inside form
- form submission and sending request to beckend

  - adding function handleSubmit in Checkout component

    ```
    const fd = new FormData(event.target);
    const customerData = Object.fromEntries(fd.entries()); //{email: test@example.com}
    ```

    - creating form data object to constructor function FormData for holding user entered values
    - converting form data object fd to simpler JS object using Object.fromEntries() and passing form data entries()

    ```
    fetch("http://localhost:3000/orders", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            order: {
              items: cartCtx.items,
              customer: customerData,
            },
          }),
        });
    ```

    - using method 'POST' for sending data to backend
    - adding headers so backend understands that we are submitting some data in JSON format
    - stringifying takes any standard JS value to convert it to JSON
      - object with order property which hold a nested object with items and customer property

- creating new folder hooks with file useHttp.js
- creating Error.jsx component for dispaying error text and message
- using useHttp in Meals and Checkout component
- adding Modal in Checkout for displaying Success msg
- adding function handleFinish() (in Checkout) to clear Cart
  - adding clearCart function and new action (CLEAR_CART) to CartContext
