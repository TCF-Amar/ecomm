import React from 'react'

function GoToTopBtn() {
    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: 'smooth'
        })
    }
  return (
    <button onClick={scrollToTop} className="fixed bottom-4 right-4  bg-gray-600 text-white rounded-full w-10 text-2xl h-10 shadow-lg z-[1000] hover:bg-gray-700 transition-colors duration-300">
      ↑
    </button>
  )
}

export default GoToTopBtn