'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getCategories } from '../../services';
import SearchBar, { handleSearch } from '../../components/SearchBar';

const NavBar = () => {
  const [categories, setCategories] = useState([]);
  const pathname = usePathname();

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  const onSearch = async (searchTerm, sortBy, setSearchResults, setNoResults) => {
    handleSearch(searchTerm, sortBy, setSearchResults, setNoResults, onSearch);
  };

  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="w-full inline-block py-8">
        <div className="md:float-left block">
          <Link href="/">
            <span className="cursor-pointer font-bold text-2xl md:text-4xl text-white">Home </span>
          </Link>
          <span className="font-bold text-2xl md:text-4xl text-white">|</span>
          <Link href="/contact">
            <span className="cursor-pointer font-bold text-2xl md:text-4xl text-white mt-2"> Contact</span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((category, index) => (
            <Link key={index} href={`/category/${category.slug}`}>
              <span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
      {pathname !== '/' && (
        <SearchBar onSearch={onSearch} className="w-full block" />
      )}
    </div>
  );
};

export default NavBar;
