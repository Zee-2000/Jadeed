const Product = ()=>
{
  return(
    <>
       
  <input type="text" class="items" placeholder="Search for items"/>
  <ul className="list">
    <li><a href="#">Fish meal</a></li>
    <li><a href="#">Mdecine</a></li>
    <li><a href="#">Tanks</a></li>
    <li><a href="#">Other Tools</a></li>
  </ul>
  <div className="myContainer">
    <div className="myCard-a">
    <img src="images/fishmeal.jpeg" alt="fishmeal"/>
    <div className="myCard1">
      <h4><b>Fish Meal</b></h4>
    </div>
    </div>
    <div className="myCard-b">
    <img src="images/medcine.jpeg" alt="medcine"/>
    <div className="myCard2">
      <h4><b>Mdecine</b></h4>
    </div>
    </div>
   
    <div className="myCard-c">
    <img src="images/tanks.jpeg" alt="fishmeal"/>
    <div className="myCard3">
      <h4><b>Tanks</b></h4>
    </div>
    </div>
    <div clasclassNames="myCard-d">
    <img src="images/tools.jpeg" alt="fishmeal"/>
    <div className="myCard4">
      <h4><b>Other tools</b></h4>
    </div>
  </div>
</div>
    </>
  )
}
export default Product;