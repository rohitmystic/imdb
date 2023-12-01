import React, { useState, useEffect } from 'react';

const ContentCatalogue = () => {
  const [videos, setVideos] = useState([]);
  const [filteredVideos, setFilteredVideos] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const API_KEY = 'AIzaSyAmgRWue0IBtnEN-XGw9YtZBFJU8g6nqlI';
  const API_URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=movie&key=${API_KEY}`;

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        const data = await response.json();
        setVideos(data.items);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, [API_URL]);

  useEffect(() => {
    filterVideos();
  },);

  const filterVideos = () => {
    let filtered = videos;

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(
        video => video.snippet.title.toLowerCase().includes(selectedCategory.toLowerCase())
      );
    }

    if (searchQuery.trim() !== '') {
      filtered = filtered.filter(
        video => video.snippet.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredVideos(filtered);
  };

  const handleCategoryChange = category => {
    setSelectedCategory(category);
  };

  const handleSearchInputChange = e => {
    const query = e.target.value;
    setSearchQuery(query);
  };

  return (
    <div className="container mx-auto my-7 lg:px-16">
      <div className="flex items-center my-6">
        <label className="font-bold">Filter by Category:</label>
        <select className="ml-3 p-2 border" onChange={(e) => handleCategoryChange(e.target.value)}>
          <option value="all">All</option>
          <option value="comedy">Comedy</option>
          <option value="action">Action</option>
        </select>
        <input
          type="text"
          className="ml-3 p-2 border"
          placeholder="Search videos..."
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredVideos.length === 0 ? (
          <div className="text-center text-gray-600">
            No videos found for the selected category and search query.
          </div>
        ) : (
          filteredVideos.map(video => (
            <div key={video.id.videoId}>
              <div className="aspect-w-16 aspect-h-16 ">
                <iframe
                  title={video.snippet.title}
                  src={`https://www.youtube.com/embed/${video.id.videoId}`}
                  allowFullScreen
                  className="w-full h-full rounded-md"
                ></iframe>
              </div>
              <h2 className="text-xl font-semibold line-clamp-1">{video.snippet.title}</h2>
              <p className="text-gray-600 line-clamp-2">{video.snippet.description}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ContentCatalogue;
