import React, { useState } from "react";
import axios from "axios";

const SearchArtist = () => {
  
  const [artist, setArtist] = useState(""); // Stocke le nom entré par l'utilisateur
  const [artistData, setArtistData] = useState(null); // Stocke les infos de l'artiste
  const [error, setError] = useState(""); // Stocke les erreurs

  const handleSearch = async () => { //attendre le resultat
    if (!artist) return;

    try {
        const response = await axios.get(`/api/deezer/search/artist?q=${encodeURIComponent(artist)}`);

          
      if (response.data.data.length > 0) {
        const artistInfo = response.data.data[0]; // Récupère le premier résultat
        setArtistData({
          id: artistInfo.id,
          name: artistInfo.name,
          picture: artistInfo.picture_medium, // URL de l'image
        });
        
        setError("");
      } else {
        setArtistData(null);
        setError("Aucun artiste trouvé !");
      }
    } catch (error) {
      setArtistData(null);
      setError("Erreur lors de la récupération des données.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Recherche d'Artiste Deezer</h2>
      <input
        type="text"
        placeholder="Nom de l'artiste"
        value={artist}
        onChange={(e) => setArtist(e.target.value)}
        style={{ padding: "10px", marginRight: "10px" }}
      />
      <button onClick={handleSearch} style={{ padding: "10px" }}>Rechercher</button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {artistData && (
        <div style={{ marginTop: "20px" }}>
          <h3>{artistData.name}</h3>
          <p><strong>ID Deezer :</strong> {artistData.id}</p>
          <img src={artistData.picture} alt={artistData.name} style={{ borderRadius: "50%", width: "150px" }} />
        </div>
      )}
    </div>
  );
};

export default SearchArtist;
