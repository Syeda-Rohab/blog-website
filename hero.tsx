import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <div>
       <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src="data:image/jpeg;base64,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"
            alt="blog"
          />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              Detail
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              The Catalyzer
            </h1>
            <p className="leading-relaxed mb-3">
              Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
              microdosing tousled waistcoat.
            </p>
            <div className="flex items-center flex-wrap ">
              <Link href={"/blog"} className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"> 
                
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </Link>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx={12} cy={12} r={3} />
                </svg>
                1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                </svg>
                6
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src="data:image/jpeg;base64,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"
            alt="blog"
          />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              Detail
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              The 400 Blows
            </h1>
            <p className="leading-relaxed mb-3">
              Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
              microdosing tousled waistcoat.
            </p>
            <div className="flex items-center flex-wrap">
            
              
              <Link href={"/blog"} className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"> 
                
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </Link>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx={12} cy={12} r={3} />
                </svg>
                1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                </svg>
                6
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src="data:image/jpeg;base64,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"
            alt="blog"
          />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              Detail
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Shooting Stars
            </h1>
            <p className="leading-relaxed mb-3">
              Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
              microdosing tousled waistcoat.
            </p>
            <div className="flex items-center flex-wrap ">
            <Link href={"/blog"} className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"> 
                
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </Link>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx={12} cy={12} r={3} />
                </svg>
                1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                </svg>
                6
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src="data:image/jpeg;base64,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"
            alt="blog"
          />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              Detail
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              The Catalyzer
            </h1>
            <p className="leading-relaxed mb-3">
              Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
              microdosing tousled waistcoat.
            </p>
            <div className="flex items-center flex-wrap ">
            <Link href={"/blog"} className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"> 
                
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </Link>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx={12} cy={12} r={3} />
                </svg>
                1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                </svg>
                6
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src="data:image/jpeg;base64,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"
            alt="blog"
          />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              Detail
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              The 400 Blows
            </h1>
            <p className="leading-relaxed mb-3">
              Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
              microdosing tousled waistcoat.
            </p>
            <div className="flex items-center flex-wrap">
            <Link href={"/blog"} className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"> 
                
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </Link>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx={12} cy={12} r={3} />
                </svg>
                1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                </svg>
                6
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src="data:image/jpeg;base64,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"
            alt="blog"
          />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              Detail
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Shooting Stars
            </h1>
            <p className="leading-relaxed mb-3">
              Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
              microdosing tousled waistcoat.
            </p>
            <div className="flex items-center flex-wrap ">
              <Link href={"/blog"} className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"> 
                
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </Link>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx={12} cy={12} r={3} />
                </svg>
                1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                </svg>
                6
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIALcAwwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAEAAIDBQYBBwj/xAA9EAACAQMDAQYDBQcCBgMAAAABAgMABBEFEiExBhMiQVFhFDJxB4GhsfAjQlJikcHRM+EVQ1NykvEkgrL/xAAbAQACAwEBAQAAAAAAAAAAAAACAwEEBQAGB//EACcRAAICAQQBBAIDAQAAAAAAAAABAhEDBBIhMRMUIkFRBTJhcbFS/9oADAMBAAIRAxEAPwDdfMaeBjimqacTWkzFQhup60xTzUqUISHAU7FdWnULGDQKeq1ynDpQkjgcU8NUZNNw1cTZMxphWuCngVxxGV281wtxUj1Djk1KOY1hUW2p9lc7uiTFyiQEVFKnFFd3XGTiiTFOJW42mpYz4TUs0O5hXVhwMelE5ARiwOZ2yKdG9ESxcVCI6m0zttM5L4hUDBhxRJSm7alATQJ3uOD5UqJMWTmlRcC6kSbq6vWuBakjjoCwrY6MVOK4qVIq4OF6mltjooS1IFqeG2GA8vSpJZ4LdCSwUe+BSJZIosRwyYMI2/hruxqGl1yxDYM8eR/NSXWrVz4JY/8AyFL88Bj07CwtO20yG9ikwd680RuRxRqafQDxtEBFdApzCkBxR2RQxkpBKkrma4GkcxXK74m4VacltK/zDaK5tLslRb6I2C4oaU7as1tFHBO41OlnGOdi80PligvTSl/BRLudhtUt9AaKS0nf/lP/APbj86ulVE+Va6xyPmoHnfwNjo0u2UctvGhAurgRN0VAN39aHls5157osvky9DRmpaCl9L3vxEisfTmo9QTVNPt0lsmW4WBCZYmyGcAZ8OBy2BjGfSlR1GRPktS0GCcUoSpgDwuo+Rh91RedWWj9odJ1uBHgkAduqnwsDRN3stl7xlDxn99ecfWn+qRUyfjZwdSKgBcClRou7MgZZfvFKu9VEV6CRAsVSBKcKd5U+2ISSG4oq3i7te8f6gUPEN0wFN7RXxsdPbu/nI2iq+fJtRawY9zsq9e7SNC7W9kN8w4Z/Jay0vxN2264mZm9zU9vEWO5up5NHxwVkym5Pk0oxSKoWXr1pwtOauO5pdxQBUV0XxFvzHIw9KsrTW5YsLccj1pjxUJdReGuU5R6J2KXZrrC/iulBV/KjW5Ga80iu59PnMkL8D5lrf8AZ+aXU7ZLhkaNG9Ryf9qvYNTu4ZVzaeuUEqrM4C0WlqPmlrss8VsoC9arbm9klyA3HlTpZmuELx6b7D5bm3h+U5I8hQUupPI6pDhCx25PlmgWY+fWptLDGd3QAuMKmRnBJ60lyb7LkccUXFmAUOXaTB5c+be1EM48ulRPJsUcg8eVCvPyfP39KjdQSg2GGWo2l/hG4/8Adigmn/mqJrrHHh/8iP70G8asIY87DgJuz+4CCR93661DJftbMiTyorSHbGJAPEcE4BHHkf6H0qD42MgqcZ46cfj+utSreKT4TnPJ8Pl9f10qVNHeN/QI2l6Td3aahc2TRXe0g4JUHPHiA4P1PtXLLRm05mOiT7rXbgW08pZVPXIY5OPY5qxRo8HY2zd5BsYqU71hBg2qR1AU8f0/XNT2c8k0q/0r5dGs2kZjJcxk8lYs7Qfau1YwXSzwpLbsrROoZSQTkUqnahXP0U6vSMlDCTiu95u4rWcTzfkDLV/26VWdsyxigX1enNP3M8TjoGwan7Txd7pwlHVG3fdWdreHRq6N3EzlomMD2qzjj4FB2flirSJelZ0S6xix1J3fFPphepZyB50oKcbRR8zcU/StNOo3n7Ti3jxv/m9BQVudDLSI9C7OpfSi9vVPdA5RPJ/rWmurtYV7qEA+WR5U6/uFhTuo+nQVUu/rVuGNQQltyZ12JJJ6+dMJqMtTS9GMSFK9XOlRpDZLJ+/Iclvb9CqSPDXMSkAqzc5PX7qvHmiDSQoAvdqDtH82f8VDdB1Yy5mxkHqKAkmrkjDnA8XkOmaEkzk56+dVZS5LuPGqJJZmYYqFpWxj9frmoyahc8ml2yxGCJe+bopyenXpXDcEr4mXcSdpIzn8PpUJOBhfP28//fH/AKqKQhPHtYg8NgEk9QcDr7/jU2FssOd7mThZou5kBV8JnII64yP0fuJ+j3ckRlCq7BiqxB3AIwv6OKq9Ns/iopLhlMAU5HeLggdcnP18qMvbyG4eO0tWEU+wqZ4uDEOCOD1Jxx6YJ9adBuitlSftSM5qerXw1C4+GhvLaIyErGowBnknHlk8/fSo6WyZ3J+PPQDPennAx/CfzpUzyMsR2JdFlmuM/FC/EceLpS+IXFeg2nzfy0R3zNt8PrmtHpri/wBK2Sea4IrNTPvFT6TqYsrgK7eFuKydc9s0bn417sbB+4awvZIJOQD4fcVcW48FG6pYRapbq8JxIOY28/pVG0lxYP3d5CYz056H76z5Lb10aC5LGQcUJMetcF4HHHSoZ3yM0DfAxKiKSQ7lRBlmYLj1raWsA03TkiBzJjLH3rK9mrY3WvRk/JCDIfr0H5/hWo1NwZMDpinYY0rF5H8FXMxYlj1oZ2qeShJT1p5yOM1Rs9RSPQs0+wVw1BiyKs8ZZtviFXkgBaSVCPF5nGDjp+dZW0gudSuFjgTbGWAaQjgYrWdzyVVsMvBJGAR0pcxseAOaMFcyBQhGfIAGhZY5YoyxRnwMh4xnPU1VdtLDUL2K0it5YWjjJMsTNhXGOAfuzQ0EqNZxSQR3CxHhoow4eJ8HcpC8gcDnkfhlLRfhje1NMtcht2GUhRggHgH9ZoWeRUCtKVU4wfEACfrmohf3Fu5UsJcLnEy8kH3HPX8qHbUrZsGeKRWIPjhZeATnw4wR5dPQdcUNfQ5QkgjeGVkUEjqBjwtkEZ4HPQ/096UNvawCKS9kjtzMB3YxkyYGckfeM/Tk8UOL3TZyix3/AMM3zN3u5AxHTx5A8hxnnpnrSfSnSVvj41uy0RZn5bex+YKg6L4T6dT61yVdk8dXQyfWJb/cu1PhEDApFGW34IwOQpz7ccE1aWccomitzum2xqPE2SPc5PXr78jyHFfC7b0t5YpFXOFKxsu3g8Hz69Bxx1bzqaW7KSRcIkqDCx97liucr6n908Z9fejQE1xSRoFLoqqTnAHzMwP30qoDNKpwlxLGBxtSJGA+89aVSJ8LCXh8BoYQyZ4XirXu93FPSGvS76PnXhb4KjunViW9KqNUnjjDgt0/Otq2msbdpGbZkEjHnVP2e7IHUNVfUNUUmzjb9lC3/NI8z/L+f55P5CUcjSibv4zHLFFuRf8AYe3lTSobm4nZzIuQvRVFWOqw2+pRGAtuXzx5VlftQ7RJ2f0r/wCLNsuMjwg/hXkul/aRq63okaTdHnJWqqg1Gi/uuR63c6Lc2WWQ94nrQcjuiHerVBof2naZdIseoYhk9TWni1LRNTTfHNBKT6OMj+9K8Vh76I+wo7yS+m9ML/era7OWY+pNd0GOCE3Edq5IPiw1cnGCfrViEdsaFSdsr5ulBz9KOnWgLg+A1IUWV1zJsFVu25v7kW9mhaQnn296IkWW8u0tbdfGxwW9BW60bSLXTLYLGAXPzv5sa4fupFf2csb2xi+Guo0AU/OnIajb0bp1KnjOM1ZsVA5xn2qrvwAd8Rzt8RA86GfQWOW6VlQ2nW6yjEJwH7wHOBurk8CzzIQuH6qTkEY9x9fzoszqxG4YYeLHHnQ8sjB3PDM3yru2/lVZqy6pSsof+CLbYFoJrcxPlI533Rnz4HJUZ9OePeorjQUedJ4c229z38JOVbIIJHo3nxwccjrVo82y4mmS3d3RAHIXaHABACnPUfToT7VFPeNLcCFoO5iyqm4jfeVBx5dPXJ8h+HbSxHLIz79ne9jMF4NsgwBcwoGVvqP3fv8AU49pdPsNcsY7iKDVlug4ICTRfK20Dg+Ijjb6jpkVZC/YGU3DND1EYUKxHHOfUdOnrVbqGp3KIZLFTPIuVzGMbWI2qPlPUY5JGMVyTQ65T7J47jWJb2CPVNUt0ggjXPdw7e8LA87zkHGPLHXOBxXTbxl7e7mGZDG6GBhkg4GT14BAwenOPWgyk1raSQSuu6Zi0zrEoWUseVIOSMcjgnPFSw3Ny4hS0CNc3RzIygpIBg4BGcA8ccfdU8A+NpWuC0+LKZUW0bDPUOW/EHFKpI45IEEfwNq23qSgYk/WlRUKt/ZdRpkGjLK03N3jfKOi03T4TcNz8q9TVmF76QRR8RDhz/atTNlaW1Hj9Ngv3MDe3ub6+WPhLNBlz+9If4R6D3obtZ2kg0KzEcJBnIwiKOnFP7U9oodEte5twHumGEjHlXgPayfXfjmvr1iQx4DeVUk1Hvs0eXwgPtJPqOt6nJLdlpNzEhfSqFY+7JBGCPKvQvs9iXVZJjd7CwOAB5VRfaBoUmlajvH+lIOKjHLdPaHOKglRng60jOIuVYr9CRVY7MOKZvarCio8MQ05Htf2Aawza1qenzTM/fQLLGGYnG04P/6FeuXQ/aH618ufZ9rp7P8Aa/TtQdtsQkEc2P8Aptwf6Zz91fVF6oZVlByHHFA+yVwqKycdapdSfYjVfS8oTWY13vJCsEIy7tjHrQhL6LPsvaKEe7k+djx9KvJ9SVFQBSxY48I6VSWTC3WOMP4wozVjHlZ42ib5evFLvkvPHSLNmXaGbOT61W3r88OQOpweTVX2ku515tG3zRnLIc8Cu2dw7WHfXLeNvmJ6CgnKx+PBSU2RvewXM4jgDm5BO6IsFZh658/KpZ7d2VWhIIPXH+9VV/bjvJHTPeKfA4OD7Y++qK67R6npcT9+Le5V2BGQVYnpyR93lS1yXY4G+YGiMTtG4wVfB42efvg1BLYXGC/hTjk4wMfUnFLTJNR1LSYp5TJZLMDiMSb2VTjachRz7e4OaA1S/t+ymnzXOtCS8naRO6wBlwRnr0XBB/oK7+DlLavg6dEmuQrrOpjbncrKQfpggHp60NpXZe5tdS76WVGIZ+6TOVORtL5yeenl0zQNrPrPaNU1Cwto9NsAAElnyrPxglQOvHHvxT7bsdc3H7RtWuwXJLPG5T8AefLrUXXDH724fsjS22lW1q+XYt3a4CqfDjnoOcjy6+VTWXwtm5MxQXEhEm75UDbdqgZ5PA9D0PTis4vZS4kRYJ9Uv5VGQiNcsQT6Hr7/AI0faaTZ6Sry3EbQsnzeAnd9MDnj/FcqQmaT7lZdEw3H7aQyxs4yVXkD8K7UwGBjw12jtFemHvc3OlwSxXluIoEG74xHDJjzyPmBx6jH1p0+smHQbi909FdI0Z1kZsBsdTWe0vtVPFeHTdcVQsinazHwyD2NCaPfRaB2uurISyz6Xdw95bQjxLC2eVHoD5ffRLLv9xj+LYtpi+zV7edoe0El1dtvY9M9BQ/2sd5GsVuH5c8j1rZdjooLjWtZ1BLZYI3mYpGvRcf3rMds0XUddkcnKQjbn3osGGWbKK1Oojp8Vso/sxaWy1Ud43hbgivUO22hLrfZ6XYMybSQfevLoJxZ3sTINuDjNez9lL0appajO7K4NM1GLw5rQOlz+fF/R8tTxtFI8bjDoxVh7iowK2X2p6MdJ7VTFU2xXP7RPr5/jWTji3GrMfdyTdIkhi3DPtX0h9kvaMdoOzSWN1JuvbICJ93JZf3G+8cH3FfPEC4wPStP2P1q40DVob+BjtXwyp5SIfL8iPcfWm5MVx4K/lqXPR9ESIQGB6g1le0SSfEwC3fY7SAbvStXY3ttrOnxXti6tuTPuRWR+0COVNPNxDlWiIfcOp9ap38ItxfKYZp4FtcSLJJ3hTktV/bEMO//AHcE1m9Ga21LS0n0zJZ1HeFj09avXl7m2ht+ox4qWzUye7oifDlpNvjfj0oZowirbrwvVfpRIOQD6UI7MboyFGEaqRkdDSZION1RDf4mjbLYKjAFUmn2Flf36xagowBlU/6h64PH6xVzcMu4gkMAecnp9az+qd5E9pCkhW7kdf8AQBOw54+mKBF7FzHbdGwPdGVLe32jcuVKxkKgGOPy4rzjtoLnXe0Z05mLQWqd4ojTLMSPMHg4/vXoS2zR2ojjdg4UqWJyx9z7nFBWGiwWckkmA07knvmHi58s+n+KliMM4wdyMFqfbGO0lttLsnmEduqpLcBAD0x4V6cc/QitJa6lqMxWOxkXv/2bNuOQUYZzjj6+VcvOyIl1YahGLNZAysO9t944UjB5BxnBz1GKPs7KHRNPNvpyjfjCPJgtI2MgZPsMAeVIlC3aHRypqmjrX2o2kpaUxtGxOTHC3A44yASPY48uvSjopIrgCSNULY+YHDdQQT0I5welMgvopWhjmV0S42lHYcoWAK9OhzwQevvU3wbRuwR1jlBDhYujrnz9c5PPlTknQiTXyuQC7iT4hitwYgcHZvbjiuVdJKyqAHVPZjgiuVNC7PnK67SXdwsMDTNshfMQ809q9L+zHW7Ka4uo9QdTcbh3W/0xz+dYV+zltGklwsu4Ku7B9an7KaN8TI17JIYyM7GBNWcGJZuMZiazUR0y35Oj363FkYmSJFUOcZHFZLVOwq3E00lrdMm993IB61kodW1bSYmjSb4jx7tzUVJ9pLQySJNEygrnPvTPHqdO+hHl0msiuS+0L7O9P+Kl/wCMyG5YYMaglRj3ANbvT9Ms9Ji7qxhSKMHPhXGa8hn+1aOLuriCPfNjBSmW/wBq2qXcy93bwpGGG4MxJIzSpyyT5kixjxwxqoGg+3Hs891oSatHFua1fLEeSnAP4kf0rxGGPivq29SLtN2LuEXG2+s2Cj0JXj8a+VxlcKwwQcEVd0/KK+dtMfDFzRy7kTiuQDwmn97hgNvSr0UUJScmbH7Pe1F1o03dtuaBj8nr/v8An0r164Sz7T6Q3wzrukQ4HvXhFlCZohgbQefvrU9n9butLuE2vj1H7rj/ADVPUaaUffEnT66Kl45HdEup+zWqz6Zdl4QpIw3B5PH3VtIbtrkrsGSw8ugFSynQ+2FrHHqMey6jH7OZcCSP6HzHtyKpZNI1js1K7OvxtiwwLmEcqP5l/d/EfSqf7HpsGfHONPsv2aNPFI5JPHFRm4ERzEuT6tz+FUNvq8TgePPHXNTPqEQGc5z/ADdKVKJbUH8hssyzSZlijyTyxP51Bps1pNrXwtmY3PM0hBycjAAyfr+FUGtagk8EiI7wv+6FGQx9DU/YWz1CPWb19RtZYDbIu1z4QwYZPnz0odpYlFRxttm8/XFNYV0f6lOkoSjfILN0/v8AdQF/bSSxgxFo5MHay43RnoGAPHrweDVhKf1/Sg7uNrgK0RKyIAqkefsaGh0JcnJYBJFA0mMI6s+Rt37enH1yce/tQMsO65t7yV3+It/DuEhCFTgMCM+vrnoKRmcyKzNIHjOJIT+8CCCB78+tGSj9s7eLu32t4iSOn168flXDLo5Jb2MrtI+8M53HxnzpVxFwox+HNKpBs8I0S5vLqR9NzujY4Z/TFbdVj06zS3TyFA6DpkVhp63Df60gy1B6rfbckNxivRabBHBjv5Z881+olrc+yP6xINV1LYD4qzN3eNM31pt5cd85PvQ2M0vJkcmaWm00cURrDmj9GX9uKCIq00KPvJWPoKrZKSsuJn0H9l9/u7NiCT/ksQpPp1rwrXLVYdf1CNf9NbqXb9NxxXo+kar/AMG0Gdt/duwJQ/divMiZZLgvMdzMcsfU0rRXJsjWOkiWKPw8V1I13ii4Yc4NTR267jWvGBjSypWWGmhRF91F92JfBnpyD6Ggre1djhKtNPsZu/XdT7VUzOlFylcRsNzNbOquxRweHXzrWaP2zntGEV4C8f8AF0/rQ1xYW81oIpk69D559qzGpWV7pUwFzHmA/JJ5N/isvPp4SdxNPBqMuFe49HuNO7PdpEM0WLS5PWW3IGT7r0NZnWuyHaKwRpbHbqcKjjuSFfHup/sazMN6yOHicxv6q2Kv9O7a6hYhVlbvUHGfOqEscom7p/yjrgD7P2KPNFeakXikiZhLZ3MRUjB4IHXyrVx6vHO7MCd8ZwVB4OQev+1S23bjStQTudQhBB696gNKXRey2quZLWaW0lZNmYJeDn2PFJbT7NWOux5FyOtNYaWKOVVKO7kMrdRj+xqzecNEsinOeCaq7Lsh8LZpb2mqpOE6GRcMR7kH+1WB0rUobaRFiSRseHa/+cUIfkxvoTkt4j1qF5lTn9fr/FQS2+q4GbB/LO0g5/ofSgng1PPNlcZ/7D611DY7fsLnaKYZ+Vh545pCYx4bzChQBz/T8P6UAINUbgWNwG8sIQAf1ipk0vWHAb4NxubGMjI468nHkK7aHuh8sM+IX0H3UqYuia2RwqRD+AuvH40qLaL34/8ApHlmq6oiptRsAcVkb68aVm8XnQck7yfM1RVsZM29nktNoo4UOroHNcUU8Usts5irnszcxRXRSVgob1qoKU14S48NBkhujRMZJOzX63qq3LR2ls4ZE64psMGFBK8+VVWgWZ3eKtZBbIwGPmA4q3pMGyBkfkNQt5HFAxQH1qf4Ztw8NFxRyhcMvAqeKCaZCqL8vNXkjGllbfA7TbUd6N521eRWph3Mhzk5zWb/AG2/YytuqSS5uoF7vvGHtnpQtW+CceTbwyxuLiSK7QmTI3cr6UVqurRG3EJRZYnGHVuQazXfMpJk5Y+dNnuVaLlufKo2IN5cjdIA1CNIXJgPgzwp6gUILrio76cjIboaorm6eJyUbHPSqeaMTS02GUkaAz11Lx4uYpCp9iaz0OpFjhl586J+MXzqpsTLW3LDg0cPaPUrfGy5fj+Kj4e3urQ4/bbsVjviFNcaSlPBB/AazZUegRfabqSY31MPtVvP4a81MlNLrUengOWoy/Z6U/2rXv7q0JcfajqjjwDbXnpeuFq708AvUZDat9o2tMxPeNz70qxPeUqnwQ+iPLk+yrRqeDzSpU5Fhki1IFpUqNCmSKlPVPEKVKjQls1WkJClup2+LjNX9pGsuH9KVKtDF+p5vWt2yd5trbR0FGWc2w74l/aHiuUqY+ikvbTRPdXBGQEXvSOWqols2cNK7+eaVKoXCG728jsr7mQIhGKrHy/iJ4pUqXLsu4FwA6gVEJJ6+VUTTAK4K8kcUqVVMhs6Re0BD87jwRUyTluGpUqq/JoNKiVnTHh3A03vW9aVKufAqkc+IYV34riu0qFNh7UxhuvrTGuaVKusJQid7/I+WlSpVJ1I/9k="
            alt="blog"
          />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              Detail
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              The Catalyzer
            </h1>
            <p className="leading-relaxed mb-3">
              Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
              microdosing tousled waistcoat.
            </p>
            <div className="flex items-center flex-wrap ">
            <Link href={"/blog"} className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"> 
                
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </Link>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx={12} cy={12} r={3} />
                </svg>
                1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                </svg>
                6
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src="data:image/jpeg;base64,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"
            alt="blog"
          />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              Detail
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              The 400 Blows
            </h1>
            <p className="leading-relaxed mb-3">
              Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
              microdosing tousled waistcoat.
            </p>
            <div className="flex items-center flex-wrap">
            <Link href={"/blog"} className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"> 
            
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </Link>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx={12} cy={12} r={3} />
                </svg>
                1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                </svg>
                6
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src="data:image/jpeg;base64,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"
            alt="blog"
          />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              Detail
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Shooting Stars
            </h1>
            <p className="leading-relaxed mb-3">
              Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
              microdosing tousled waistcoat.
            </p>
            <div className="flex items-center flex-wrap ">
            <Link href={"/blog"} className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"> 
                
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </Link>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx={12} cy={12} r={3} />
                </svg>
                1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                </svg>
                6
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Hero
