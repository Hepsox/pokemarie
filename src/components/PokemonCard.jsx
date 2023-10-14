import PropTypes from "prop-types";

function PokemonCard({ pokemon }) {
  return (
    <div>
      <figure>
        {pokemon.imgSrc !== undefined ? (
          <img src={pokemon.imgSrc} />
        ) : (
          <p>???</p>
        )}

        <figcaption>{pokemon.name}</figcaption>
      </figure>
    </div>
  );
}
PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
  }).isRequired,
};
export default PokemonCard;
