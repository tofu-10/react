import React, { useState, useEffect, useRef } from "react";

export default function MoodMusic({ mood }) {
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPlaying, setCurrentPlaying] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const token =
    "BQDz-6iiUoq0vmBl0WmnKAGN6hwqZQ-sNEW-NMzwrkbTY-9nfmrRnA6UhLozmUkU9xoe4QryqRVjyMgjU7yTsPA1TmKs6xhyZUGgKICOAPIVomPggTd4EtBz3sfjZYq6a8FU0G3vahkrDue6xRy9hniTqsNFVo0OQE4E1LuEfHGQwHl5dBiPTd0bi5W7K4AfX1-ttJfyXBNz1rdCOU-yShne64c_12XJEdRKvO5D2Eb2rGdNABXbBBpxZbOieAF2STMqLCEsYWiEo_dEicXLTT-loqTz7ifeDH7xi-Inid3iI6-DnJdT6ZVkEK4i2cDH";

  const fetchSpotifyTracks = async (moodQuery) => {
    if (!moodQuery) return;

    setLoading(true);
    setError(null);

    try {
      const res = await fetch(
        `https://api.spotify.com/v1/search?q=${moodQuery}&type=track&limit=10`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();

      if (data.tracks && data.tracks.items.length > 0) {
        setTracks(data.tracks.items);
      } else {
        setError("No tracks found for this mood");
      }

      console.log("Spotify Data:", data);
      console.log("Mood:", moodQuery);
    } catch (err) {
      console.error("Error fetching Spotify tracks:", err);
      setError("Failed to load tracks. Token might be expired.");
    } finally {
      setLoading(false);
    }
  };

  // Play/Pause functions
  const playTrack = (track) => {
    if (!track.preview_url) {
      alert("No preview available for this track");
      return;
    }

    if (currentPlaying === track.id && isPlaying) {
      // Pause current track
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      // Stop current track if playing
      if (audioRef.current) {
        audioRef.current.pause();
      }

      // Play new track
      audioRef.current.src = track.preview_url;
      audioRef.current.play();
      setCurrentPlaying(track.id);
      setIsPlaying(true);
    }
  };

  const stopAllTracks = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setCurrentPlaying(null);
    setIsPlaying(false);
  };

  // Handle audio end
  const handleAudioEnd = () => {
    setCurrentPlaying(null);
    setIsPlaying(false);
  };

  // Auto-fetch when component mounts with mood
  useEffect(() => {
    if (mood) {
      fetchSpotifyTracks(mood);
    }
  }, [mood]);

  if (loading)
    return (
      <div className="glass" style={{ padding: "2rem", textAlign: "center" }}>
        Loading your {mood} playlist... 🎵
      </div>
    );
  if (error)
    return (
      <div className="glass" style={{ padding: "2rem", textAlign: "center" }}>
        Error: {error} 😔
      </div>
    );

  return (
    <div
      className="glass"
      style={{
        padding: "2rem",
        margin: "2rem",
        borderRadius: "20px",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "2rem",
        }}
      >
        🎶 {mood} Vibes
      </h2>

      {/* Hidden audio element */}
      <audio
        ref={audioRef}
        onEnded={handleAudioEnd}
        style={{ display: "none" }}
      />

      {tracks.length > 0 && (
        <div style={{ display: "grid", gap: "1rem" }}>
          {tracks.map((track, index) => (
            <div
              key={track.id}
              style={{
                display: "flex",
                alignItems: "center",
                padding: "1rem",
                background:
                  currentPlaying === track.id
                    ? "rgba(29, 185, 84, 0.3)"
                    : "rgba(255,255,255,0.1)",
                borderRadius: "12px",
                gap: "1rem",
                border:
                  currentPlaying === track.id
                    ? "2px solid #1DB954"
                    : "2px solid transparent",
                transition: "all 0.3s ease",
              }}
            >
              {/* Album Art */}
              {track.album.images[2] && (
                <img
                  src={track.album.images[2].url}
                  alt={track.album.name}
                  style={{
                    width: "64px",
                    height: "64px",
                    borderRadius: "8px",
                  }}
                />
              )}

              {/* Track Info */}
              <div style={{ flex: 1 }}>
                <h4
                  style={{
                    margin: "0 0 0.5rem 0",
                    color: "#fff",
                  }}
                >
                  {track.name}
                </h4>
                <p
                  style={{
                    margin: "0",
                    color: "#ccc",
                    fontSize: "0.9rem",
                  }}
                >
                  by {track.artists.map((artist) => artist.name).join(", ")}
                </p>
                <p
                  style={{
                    margin: "0.25rem 0 0 0",
                    color: "#aaa",
                    fontSize: "0.8rem",
                  }}
                >
                  {track.album.name}
                </p>
              </div>

              {/* Play/Pause Button */}
              <button
                onClick={() => playTrack(track)}
                disabled={!track.preview_url}
                style={{
                  background: track.preview_url ? "#1DB954" : "#666",
                  border: "none",
                  borderRadius: "50%",
                  width: "50px",
                  height: "50px",
                  color: "white",
                  fontSize: "1.2rem",
                  cursor: track.preview_url ? "pointer" : "not-allowed",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.3s ease",
                }}
              >
                {currentPlaying === track.id && isPlaying ? "⏸️" : "▶️"}
              </button>

              {/* Spotify Link */}
              <a
                href={track.external_urls.spotify}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: "#1DB954",
                  color: "white",
                  padding: "0.5rem 1rem",
                  borderRadius: "20px",
                  textDecoration: "none",
                  fontSize: "0.9rem",
                }}
              >
                Full Song
              </a>
            </div>
          ))}
        </div>
      )}

      {/* Control buttons */}
      <div
        style={{
          textAlign: "center",
          marginTop: "2rem",
          display: "flex",
          gap: "1rem",
          justifyContent: "center",
        }}
      >
        <button
          onClick={stopAllTracks}
          style={{
            background: "rgba(255,0,0,0.3)",
            border: "none",
            padding: "0.75rem 2rem",
            borderRadius: "25px",
            color: "white",
            cursor: "pointer",
            fontSize: "1rem",
          }}
        >
          ⏹️ Stop All
        </button>

        <button
          onClick={() => fetchSpotifyTracks(mood)}
          style={{
            background: "rgba(255,255,255,0.2)",
            border: "none",
            padding: "0.75rem 2rem",
            borderRadius: "25px",
            color: "white",
            cursor: "pointer",
            fontSize: "1rem",
          }}
        >
          🔄 Refresh Playlist
        </button>
      </div>

      {/* Now Playing indicator */}
      {currentPlaying && isPlaying && (
        <div
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            background: "rgba(29, 185, 84, 0.9)",
            padding: "1rem",
            borderRadius: "15px",
            color: "white",
            fontSize: "0.9rem",
            backdropFilter: "blur(10px)",
            zIndex: 1000,
          }}
        >
          🎵 Now Playing: {tracks.find((t) => t.id === currentPlaying)?.name}
        </div>
      )}
    </div>
  );
}
