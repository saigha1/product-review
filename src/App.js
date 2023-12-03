
import './App.css';
import image from  "./images/image-product-desktop.jpg"
import cart from "./images/icon-cart.svg"

function App() {
  return (
    <div className="App">
      <div className = "innerContainer">
          <div >
            <img  className = "Image" src = {image} alt = "product-desktop" />
          </div>
          <div className = "text">
            <div className = "textContainer">
              <h4>P E R F U M E</h4>

              <h1> Gabrielle Essence Eau De Parfum</h1>
              <p>A floral, solar and coluptuous interpretation commposed by Olivier Polge, perfumer-Creator for the House of CHANEL.</p>

              <div className ="Price">
              <h1 className = "greenText" >$149.99</h1>
              <p className ="stroke">$169.99</p>
              </div>

            { <button><img src = {cart} alt = "cart"/><p>Add to Cart</p></button> }
            

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
