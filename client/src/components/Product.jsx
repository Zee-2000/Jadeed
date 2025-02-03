import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productListAction } from "../Redux/Actions/Product";
const Product = () => {
  const dispatch = useDispatch();
  const productListReducer = useSelector((state) => state.productListReducer);
  const { loading, products,  error, totalPages, page } = productListReducer;

  useEffect(() => {
    dispatch(productListAction())
  }, [dispatch]);
  return (
    <div>
      {loading ? (<h1>loading</h1>) :
        error ? (<h1>{error}</h1>) :
          (
            <>
              <input type="text" class="items" placeholder="Search for items" />
              <ul class="list">
                <li><a href="#">Fish meal</a></li>
                <li><a href="#">Mdecine</a></li>
                <li><a href="#">Tanks</a></li>
                <li><a href="#">Other Tools</a></li>
              </ul>
              <div class="myContainer">
                <div class="myCard-a">
                  <img src="images/fishmeal.jpeg" alt="fishmeal" />
                  <div class="myCard1">
                    <h4><b>Fish Meal</b></h4>
                  </div>
                </div>
                <div class="myCard-b">
                  <img src="images/medcine.jpeg" alt="medcine" />
                  <div class="myCard2">
                    <h4><b>Mdecine</b></h4>
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
            </>
          )}
    </div>
  )
}
export default Product;