import { Link } from "react-router-dom";

const MovieCompo = ({ id, medium_cover_image, title, summary, genres }) => {
  return (
    <div>
      <img src={medium_cover_image} />
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <p>{summary}</p>
      <ul>
        {genres.map((genre, i) => {
          return <li key={i}>{genre}</li>;
        })}
      </ul>
    </div>
  );
};

export default MovieCompo;
