import { useState } from "react";

const XDictionary = ({ dictionary }) => {
  const [definition, setDefinition] = useState("");
  const [inputSearch, setInputSearch] = useState("");

  const handleSearch = () => {
    if (!inputSearch) {
      setDefinition("Word not found in the dictionary.");
      return;
    }

    const word = dictionary.find(
      (data) => data.word.toLowerCase() === inputSearch.toLowerCase()
    )
    if (word) {
      setDefinition(word.meaning);
    } else {
      setDefinition("Word not found in the dictionary.");
    }
  }

  return (
    <div>
      <h1>Dictionary App</h1>

      <div className="input-box">
        <input
          type="text"
          placeholder="Search for a word..."
          onChange={(e) => setInputSearch(e.target.value)}
          value={inputSearch}
        />
        <button onClick={handleSearch}>Search</button>

        <br />
        <b>Definition: </b>
      </div>

      <div className="definition">
        <p>{definition}</p>
      </div>
    </div>
  )
}

export default XDictionary;
