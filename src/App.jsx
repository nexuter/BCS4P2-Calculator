function App() {
  return (
    <main className="bg-pink-100 min-h-screen flex justify-center items-center">
      <form
        className="bg-gray-300 px-8 py-12 rounded-lg shadow-lg"
        onClick={(e) => e.preventDefault()}
      >
        <input
          className="py-4 px-8 text-2xl w-full rounded-xl text-right"
          type="text"
          value="0"
        />
        <div className="grid grid-cols-4 mt-8 gap-4">
          <button className="button-style">7</button>
          <button className="button-style">8</button>
          <button className="button-style">9</button>
          <button className="button-style">/</button>
          <button className="button-style">4</button>
          <button className="button-style">5</button>
          <button className="button-style">6</button>
          <button className="button-style">x</button>
          <button className="button-style">1</button>
          <button className="button-style">2</button>
          <button className="button-style">3</button>
          <button className="button-style">-</button>
          <button className="button-style">AC</button>
          <button className="button-style">0</button>
          <button className="button-style">.</button>
          <button className="button-style">+</button>
        </div>
      </form>
    </main>
  );
}

export default App;
