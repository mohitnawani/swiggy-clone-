export default function Cart({ counter }) {
  const len = counter.length;
  //   const flattened = counter.flat();

  return len === 0 ? (
    <div className="bg-white h-[400px] w-[300px] absolute top-[110%] right-10 flex flex-col justify-center items-center shadow-2xl rounded-xl">
      <div className="text-gray-700 font-bold text-lg text-center">
        YOUR CART IS EMPTY
      </div>
    </div>
  ) : (
    <div className="bg-white h-[400px] w-[300px] absolute top-[110%] right-10 flex flex-col justify-center items-center shadow-2xl rounded-xl overflow-x-auto">
      <h2 className="text-lg font-semibold mt-5">Your Cart Items</h2>

      <div className="w-[80%] h-[300px] mb-16">
        {counter.flat().map((item) => (
          <div key={item.id} className="mb-4">
            <div className="font-small">{item.name} x {item.quantity}</div>

            <div className="text-green-600 font-small">
              {"₹" +
                (item.defaultPrice
                  ? (item.defaultPrice / 100)* item.quantity
                  : (item.price / 100)* item.quantity)}
            </div>
          </div>
        ))}
      </div>

      <div className=" bg-gray-50 w-[80%] m-auto h-0.5"></div>
      <div className="bg-gray-50 w-[80%] m-auto h-0.5"></div>

      <div className="w-[80%] relative left-[50%] bottom-[10%]">
        <button className="bg-amber-500 h-5 w-[50%] m-auto absolute bottom-4 left-[50%] text-amber-50 ">
          Checkout
        </button>
      </div>
    </div>
  );
}
