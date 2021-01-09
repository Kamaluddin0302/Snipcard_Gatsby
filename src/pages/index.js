import * as React from "react";

// styles

// markup
const IndexPage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <button
        class="snipcart-add-item"
        data-item-id="starry-night"
        data-item-price="79.99"
        data-item-url="/"
        data-item-description="High-quality replica of The Starry Night by the Dutch post-impressionist painter Vincent van Gogh."
        data-item-image="https://tse3.mm.bing.net/th?id=OIP.N-nNsFsylwYc2N5hu9ROZAHaEd&pid=Api&P=0&w=273&h=165"
        data-item-name="The Starry Night"
      >
        Add to cart
      </button>{" "}
    </div>
  );
};

export default IndexPage;
