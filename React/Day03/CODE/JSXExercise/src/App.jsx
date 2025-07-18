function App() {
  return (
    <>
      <h1>JSX Exercise</h1>
      <hr />

      <img
        src="https://tse2.mm.bing.net/th/id/OIP.Ga9Kl90m1yNTvZmRgVif_wHaHa?pid=ImgDet&w=184&h=184&c=7&dpr=1.3&o=7&rm=3"
        alt="Batman"
        className="photo"
      />
      <h2>Batman Trilogy</h2>
      <ul>
        <li>Batman Begins</li>
        <li>Batman The Dark Knight</li>
        <li>Batman The Dark Knight Rises</li>
      </ul>

      <button onClick={() => {alert("Function Called");}}>CLick Me</button>
    </>
  );
}

export default App;
