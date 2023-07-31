import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [styledImage, setStyledImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };

  const handleUpload = async () => {
    setLoading(true);
    const formData = new FormData();
    formData.append("image", selectedImage);

    try {
      const response = await axios.post("/api/style-transfer", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setStyledImage(response.data.styled_image);
    } catch (error) {
      console.error("Error during style transfer:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Fast Neural Style Transfer Web App</h1>
        <input type="file" accept="image/*" onChange={handleImageChange} />
        {selectedImage && (
          <>
            <img src={selectedImage} alt="Selected" style={{ maxWidth: "100%" }} />
            <button onClick={handleUpload} disabled={loading}>
              {loading ? "Processing..." : "Style Transfer"}
            </button>
          </>
        )}
        {styledImage && (
          <>
            <h2>Styled Image</h2>
            <img src={styledImage} alt="Styled" style={{ maxWidth: "100%" }} />
            <a href={styledImage} download>
              Download Styled Image
            </a>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
