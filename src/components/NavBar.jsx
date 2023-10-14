function NavBar({ pokemonIndex, setPokemonIndex, pokemonList }) {
  return (
    <div>
      {pokemonIndex > 0 ? (
        <button
          onClick={() => {
            setPokemonIndex(pokemonIndex - 1);
          }}
        >
          Précédent
        </button>
      ) : (
        ""
      )}

      {pokemonIndex < pokemonList.length - 1 ? (
        <button
          onClick={() => {
            setPokemonIndex(pokemonIndex + 1);
          }}
        >
          Suivant
        </button>
      ) : (
        ""
      )}
    </div>
  );
}

export default NavBar;
