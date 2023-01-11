import './App.css';
const PRODUCTS = [
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
  {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
  {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
  {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
  {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
  {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
];



const FilterableProductTable = ({products}) => {
  const groupedProducts = products.reduce((acc,product) => {
        if(!acc[product.category]){
          acc[product.category] = [product]
        } else {
          acc[product.category].push(product)
        }

        return acc;
  },{}); 

  return(
    <>
    <SearchBar />
    <br/>
    <ProductTable groupedProducts={groupedProducts} />
    </>
  );
}

const SearchBar = () => {
  return (
    <form className="center-align">
      <input type="text" placeholder="Search..." />
      <br/>
      <br/>
      <label>
        <input type="checkbox"/>
        {' '}
        Only show products in stock
      </label>
    </form>
  )
}

const ProductTable = ({groupedProducts}) => {
  const rows = [];
  for(let category in groupedProducts){
    rows.push(<ProductCategoryRow category={category} key = {category}/>)
    groupedProducts[category].forEach(product => {
      rows.push(<ProductRow product={product} key = {product.name}/>)
    })
    rows.push(<br/>)
  }
  return (
   <table className="center-align">
    <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
        <tr></tr>
      </thead>
      <tbody>{rows}</tbody>
   </table>
  );
}


const ProductCategoryRow = ({category}) => {
  return (
    <tr>
      <th colSpan="2">{category}</th>
    </tr>
  );
}


const ProductRow = ({product}) => {
  const name = product?.stocked ? product?.name :
    <span style={{ color: 'red' }}>
      {product?.name}
    </span>;

  return (
    <tr>
      <td>{name}</td>
      <td>{product?.price}</td>
    </tr>
  );
}


const App = () => {
  return(
    <div className="App">
    <h1 className="center-align">Inventory List</h1>
    <FilterableProductTable products = {PRODUCTS} />
    </div>
  );
}


export default App;
