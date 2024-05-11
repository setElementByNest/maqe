import React, { useState, useEffect } from 'react';
import './App.css';
import Head from './components/head';
import authorsJson from './json/authors.json';
import postsJson from './json/posts.json';
import Boxcontent from './components/boxcontent';

function App() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    try {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    } catch (err) {
      setError(err);
      setIsLoading(false);
    }
  }, []);

  const findAuthors = (id) => {
    const authors = authorsJson.find((data) => data.id === id);
    return authors;
  };

  return (
    <div className="app">
      <div className="app-content">
        <Head />
        {error && <div>An error occurred: {error.message}</div>}
        {isLoading && <div>Loading...</div>}
        {!isLoading && !error && (
          <>
            {postsJson.map((data) => {
              return (
                <div key={data.id}>
                  <Boxcontent authors={findAuthors(data.author_id)} posts={data} />
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
}

export default App;