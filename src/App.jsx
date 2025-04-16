import "./App.css";

function App() {
  // object cards stored in an array containing id, name, price and image
  const products = [
    {
      id: 1,
      name: "Social Apps",
      price: "$200",
      image:
        "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnJhbmRzfGVufDB8fDB8fHww",
    },
    {
      id: 2,
      name: "Best Candy Bars",
      price: "$400",
      image:
        "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YnJhbmRzfGVufDB8fDB8fHww",
    },
    {
      id: 3,
      name: "Netflix and Chill",
      price: "$200",
      image:
        "https://images.unsplash.com/photo-1621955964441-c173e01c135b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGJyYW5kc3xlbnwwfHwwfHx8MA%3D%3D",
    },
  ];
  return (
    <>
      <div className="App.">
        {/* navbar */}
        <nav className="bg-gray-800 flex justify-between p-2">
          <div className="flex gap-2">
            <div className="flex items-center">
              <img src="/mark.svg" alt="" className="h-8 w-10" />
            </div>
            <button className="py-2 px-3 bg-gray-900 rounded-2xl text-gray-300 hover:text-white hover:bg-gray-500">
              Dashboard
            </button>
            <button className="py-2 px-3 rounded-2xl text-gray-300 hover:text-white hover:bg-gray-500">
              Team
            </button>
            <button className="py-2 px-3 rounded-2xl text-gray-300 hover:text-white hover:bg-gray-500">
              Projects
            </button>
            <button className="py-2 px-3 rounded-2xl text-gray-300 hover:text-white hover:bg-gray-500">
              Calender
            </button>
          </div>
          <div className="flex gap-2">
            <button className="py-2 px-3 rounded-2xl text-gray-300 hover:text-white hover:bg-gray-500">
              Login
            </button>
            <button className="py-2 px-3 rounded-2xl text-gray-300 hover:text-white hover:bg-gray-500">
              Sign Up
            </button>
          </div>
        </nav>
        {/* body  */}
        {/* webpage header */}
        <h1 className=" mb-4 flex mt-4 text-4xl justify-center font-semibold">
          The Future, One Line At A time
        </h1>
        {/* calling the product array using the map function to get data on items stored */}
        <div className="flex gap-2 p-2 justify-center bg-gray-200">
          {products.map((products, index) => (
            <div key={index}>
              <img
                className="rounded-2xl object-cover w-90 h-70  shadow-2xl  shadow-gray-600"
                src={products.image}
                alt=""
              />
              <p className="flex justify-center">{products.name}</p>
              <p className="flex justify-center">{products.price}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
