import React, { useState } from 'react';
import fetchUserData from '../services/githubService';

function Search() {
  const [username, setUsername] = useState(''); // Input value
  const [userData, setUserData] = useState(null); // Fetched user data
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state

  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setUserData(null);
    try {
      const data = await fetchUserData(username);
      setUserData(data);
    } catch (err) {
      setError("Look's like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={handleInputChange}
        />
        <button type="submit">Search</button>
      </form>

      <div>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {userData && (
          <div>
            <img src={userData.avatar_url} alt={`${userData.login} avatar`} width="100" />
            <h2>{userData.name || userData.login}</h2>
            <p>
              <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
                View Profile
              </a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
