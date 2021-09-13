import "./App.css";
import Navbar from "./Navbar";
import Cards from "./Components/Cards";
import Radio from "./Components/Radio";
import Checkbox from "./Components/Checkbox";
// import Brand from "./Components/Brand";
import React, { useState, useEffect } from "react";
import "./Components/Css/Style.css";
// import "bootstrap/dist/css/bootstrap.min.css";
const App = () => {
  const [items, myfun] = useState([]);
  const [searchItem, setsearchItem] = useState('');
  const [categoryItems, setCategory] = useState([]);
  const [brandItems, setBrand] = useState([]);
  const [genderItems, setGender] = useState([]);
  const myApi = () => {
    fetch("https://run.mocky.io/v3/bf175661-5e9f-4112-8580-d587759ff72e")
      .then((apiData) => apiData.json())
      .then((data) => data.products)
      .then((data) => myfun(data));
  };

  useEffect(() => {
    myApi();
  }, []);
  // <----------------------------This Area is show Gender Items ------------------------------------------------->
  var genItem = [];
  items.forEach((gender) => {
    genItem.push(gender.gender);
  });
  var genItem1 = new Set(genItem);
  var genArr = [];
  for (let i of genItem1) {
    genArr.push(i);
  }
  // <----------------------------This Area is Show Category--------------------------------------------------------->
  var catItems = [];
  items.forEach((cate) => {
    catItems.push(cate.category);
  });
  var categoryItem = new Set(catItems);
  var catArr = [];
  for (let j of categoryItem) {
    catArr.push(j);
  }
  // <---------------------This Area is Show brands----------------------------->
  var barItems = [];
  items.forEach((cate) => {
    barItems.push(cate.brand);
  });
  var brandItem = new Set(barItems);
  var brandArr = [];
  for (let j of brandItem) {
    brandArr.push(j);
  }
// <---------------filters Here --------------------->
const genderFilter = (event) => 
{
  setGender(event.target.value);
};
console.log(genderItems)
const searchFilter = (event) => {
  setsearchItem(event.target.value);
};
// ----------------------Brands Filter------------------->>
const brandFilters= (event)=>{
  if (event.target.value){
    setBrand([...brandItems, event.target.value]);
  }else {
    setBrand(
      brandItems.filter((elem)=>elem !== event.target.value)
    );
  }
}
// ----------------------Category Filter------------------->>
const categoryFilter = (event) => {
  if (event.target.checked) {
    setCategory([...categoryItems, event.target.value]);
  } else {
    setCategory(
      categoryItems.filter((elem) => elem !== event.target.value)
    );
  }
};
//------------------------Main Function------------------>>>
const allData =()=>{
    if(genderItems.length===0 && categoryItems.length===0 && brandItems.length===0 && searchItem=='')
  {
    return items;
  }
  else if (genderItems.length !==0 || categoryItems.length !==0 || brandItems.length !==0 ||  searchItem=='' )
{
  return items.filter(
    (product) =>
      genderItems.includes(product.gender) ||
      categoryItems.includes(product.category)||
      brandItems.includes(product.brand)
  );
}
else if (searchItem !== "") {
  return items.filter((product) =>
    product.product.toLowerCase().includes(searchItem.toLowerCase())
  )
}
  };
  
 
    // <-----------filters-------------------------------------------------------->
    return (
      <>
      
        <Navbar onChange={searchFilter}/>
        <div className="parent">
          <div className="main">
            <div className="genderclass">
              <h4>FILTERS</h4>
              {genArr.map((val) => {
                return (
                  <Radio gender={val} value={val} onClick={genderFilter} />
                );
              })}
              <hr />
              <h4>Categories</h4>
              {catArr.map((elem) => {
                return <Checkbox value={elem} onClick={categoryFilter}/>;
              })}
              <hr />
              <h4>Brand</h4>
              {brandArr.map((elm) => {
                return <Checkbox value={elm} onClick={brandFilters}/>;
              })}
            </div>
            {/* <---Cards-----------------> */}
            <div className="cards">
              <div className="cardclass">
                {allData().map((para,k) => {
                  return (
                    <Cards
                      key={k}
                      img={para.searchImage}
                      brand={para.brand}
                      product={para.product}
                      price={para.price}
                      mrp={para.mrp}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

export default App;
