# DigiTools-Platform

DigiTool-platform is a single page application for buying different ai model subscription.Here card datas are rendered dynamically.There is cart notification functionality,add to cart functionality,one can remove the card from cart also,notifications are showed using reacr toastify.

## Technologies used

-React.js
-Tailwind CSS, DaisyUI
-JavaScript (ES6+)
-React-Toastify (NPM Package)
-JSON (for product data)

## 3 Features developed in this project

-Smart card system
Any product can be added to the cart with a single click. The navbar instantly updates showing the total item count and live subtotal price — all managed through React state with no page reload required. Users can also view a cart summary dropdown directly from the navbar.

-Toast notification
Every cart interaction is accompanied by a real-time toast notification using React Toastify. When a user adds a product to the cart, an instant feedback message pops up.

-Empty Cart Conditional Rendering
When no product has been added to the cart, the navbar cart dropdown intelligently reflects the empty state — showing 0 Items and a $0 subtotal. The cart count badge and total price both update conditionally.
