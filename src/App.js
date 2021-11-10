import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./component/navbar/Navbar";
import Movie from "./component/Movie";
import api from "./api";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <div className='my__container'>
        <h1>Only on Netflix</h1>
        <div className='netflix__description'>
          <p>
            Netflix is the home of amazing original programming that you can’t
            find anywhere else. Movies, TV shows, specials and more, all
            tailored specifically to you.
          </p>
        </div>
        <Movie title='Popular on Netflix' url={api.fetchTrending} />
        <Movie title='Netflix Original' url={api.fetchNetflicOriginals} />
        <Movie title='Drama Romance' url={api.fetchRomanceMovies} />
        <Movie title='Western Movies' url={api.fetchWestern} />
        <Movie title='Actions Movies' url={api.fetchActionMovies} />
        <Movie title='Top Rated' url={api.fetchTopRated} />
        <Movie title='Comedy' url={api.fetchComedyMovies} />
        {/* <Movie title='Documentaries' url={api.fetchDocumentaries} /> */}
        <Movie title='Horor Movies' url={api.fetchHororMovies} />
      </div>
    </div>
  );
}

export default App;
