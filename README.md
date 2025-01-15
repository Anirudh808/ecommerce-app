# Welcome to My ecommerce application.

## Todos

- implement product data fetching function in db/products.ts that accepts arguments for filtering and sorting products.
- expected arguments - {
  filter: {
  brand,
  averageRating,
  productCategory,
  connectivityTech,
  price
  },
  sort: {
  averageRating,
  price
  }
  }

- create a product card tile, and complete products page.
- The layout should contain a navbar, sidebar containing all filter options, a tab in the top right for sorting options and display all the product cards and paginate upto 16 products per page and each row should contain upto 4 cards, atlast a footer.

- complete product detail page
- This page should contain a 2 column layout one for diplaying images like amazon, and on the right side show produt title, price, feature bullets. buttons to add to cart and buy now to direct checkout. and a footer below the page.

- Implement user signup and login.
- When an user signs up, create a new user in db with password hashed and sign a jwt and set cookie to user's browser local storage.

- implement cart functionality.
- for now implement this feature only to authenticated users.
- When an user clicks on add to cart button check whether the user is logged in or not. By checking the localstorage of the user.
- If an user is logged in and clicks on add to cart button the product Id and userId should be added to the cart table.
- For the layout display products in a table format and allow user to add quantity of a product from the cart, and delete the product from the cart.
- Also add a checkout button in the cart page.

- design and implement checkout page.
- if the user clicks on buy now button from a product and does direct checkout, show the particular product in checkout page and show products from cart below it with less importance but show a checkmark infornt of those products to allow user to add those products to checkout. At this point users not allowed to change quantity.
- Once order is complete add the products list array along with the user id to orders table.
