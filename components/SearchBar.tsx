import React, { useState, useEffect } from 'react';
import { getPosts } from '../services';

const handleSearch = async (searchTerm, sortBy, setSearchResults, setNoResults, onSearch) => {
  try {
    if (typeof searchTerm !== 'string') {
      console.warn('Invalid search term:', searchTerm);
      return;
    }

    console.log("Starting search...");
    const response = await getPosts();
    const posts = response.map(item => item.node);

    console.log("Fetched posts:", posts);

    const normalizedSearch = searchTerm.toLowerCase().trim();

    let filteredPosts = posts.filter(post =>
      post.title.toLowerCase().includes(normalizedSearch)
    );

    if (sortBy === 'title') {
      filteredPosts.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === 'date') {
      filteredPosts.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    }

    setSearchResults(filteredPosts);
    setNoResults(normalizedSearch === '' && filteredPosts.length === 0);
    onSearch(filteredPosts);
    console.log("Finished search.");
  } catch (error) {
    console.error('Error fetching posts:', error);
    onSearch([], error);
  }
};

const SearchBar = ({ onSearch, className }: { onSearch: any; className?: string }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [noResults, setNoResults] = useState(false);
  const [sortBy, setSortBy] = useState('title'); // Default sorting option

  useEffect(() => {
    handleSearch(searchTerm, sortBy, setSearchResults, setNoResults, onSearch);
  }, [searchTerm, sortBy]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };   

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      setSearchTerm(''); 
      setNoResults(searchTerm.trim() === '' || searchResults.length === 0);
    }
  };  

  return (
    <>
      <div className="search flex">
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          onKeyDown={handleKeyPress} 
          placeholder={noResults ? "No results found" : "Search by title..."} 
          className="px-4 py-4 border-none rounded-l-md outline-none rounded-none text-xl w-full border-gray-300 inline-block focus:outline-none focus:border-blue-500"
        />
        <select value={sortBy} onChange={handleSortChange}>
          <option value="title">Sort by Title</option>
          <option value="date">Sort by Date</option>
        </select>
        <button onClick={() => { handleKeyPress({ key: 'Enter' }); }}>
          <img
            src="/search-alt-2-svgrepo-com.svg"
            alt="search"
            className="w-16 h-16 cursor-pointer rounded-r-md bg-white justify-end inline-flex rounded-none"
          />
        </button>
      </div>
      {searchTerm && (
        <div className='text-center text-lg'>
          {searchResults.length > 0 && (
              <div className="dropdown p-2 rounded-lg shadow-lg">
                <ul className='bg-gray-100 border border-gray-200'>
                  {searchResults.map((post, index) => (
                    <li key={index} className="py-2 px-4">
                      <a href={`/post/${post.slug}`} className="hover:bg-gray-200">{post.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
        </div>
      )}
    </>
  );
};

export default SearchBar;
export { handleSearch };
