import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link} from "react-router-dom"
import { productListAction } from "../Redux/Actions/Product";
const Product = () => {
  const dispatch = useDispatch();
  const productListReducer = useSelector((state) => state.productListReducer);
  const { loading, error, products = [],  } = productListReducer;


  useEffect(() => {
    dispatch(productListAction());
  }, [dispatch]);


  return (
    <div>
      {loading ? (<h1>loading</h1>) :
        error ? (<h1>{error}</h1>) :
          (
            <>
              <input type="text" class="items" placeholder="Search for items" />
              <ul class="list">
             <li><Link to={`./products/${product._id}`}>Fish meal</Link></li>
             <li><Link to={`./products/${product._id}`}>Mdecine</Link></li>
             <li><Link to={`./products/${product._id}`}>Tanks</Link></li>
             <li><Link to={`./products/${product._id}`}>Other Tools</Link></li>
           </ul>
              {products.map((product)=>
             
           <div class="myContainer">
             <div class="myCard-a"key={product.id}>
               <img src="images/fishmeal.jpeg" alt="fishmeal" />
               <div class="myCard1">
                 <h4><b>{product.name}</b></h4>
               </div>
             </div>
             <div class="myCard-b">
               <img src="images/medcine.jpeg" alt="medcine" />
               <div class="myCard2">
                 <h4><b>Medcine</b></h4>
               </div>
             </div>
             <div class="myCard-c">
               <img src="images/tanks.jpeg" alt="fishmeal" />
               <div class="myCard3">
                 <h4><b>Tanks</b></h4>
               </div>
             </div>
             <div class="myCard-d">
               <img src="images/tools.jpeg" alt="fishmeal" />
               <div class="myCard4">
                 <h4><b>Other tools</b></h4>
               </div>
             </div>
           </div>
             )}
              
            </>
          )}
    </div>
  )
}
export default Product;