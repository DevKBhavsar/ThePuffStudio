import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa' // You'll need to install react-icons
import logo from '../assets/logo.png'
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault()
    // Add your search logic here
   navigate(`/search/${searchQuery}`)
  }

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      {/* Logo Section */}
      <div className="flex items-center cursor-pointer"
      onClick={() => navigate('/')}
      >
        
        <img 
          src={logo}
          alt="The Puff Studio" 
          className="h-8 w-auto"
          onClick={() => navigate('/')}
        />
      </div>
      

      {/* Search Section */}
      <div className="flex gap-2 ">

                    {/* Search Icon and input */}
                    <form
                        onSubmit={handleSearch}
                        className="bg-wine-500 rounded-full shadow-orange-500 shadow-sm flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]"
                    >

                        <input
                            //change place holder later in tailwind config
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="bg-wine-500 p-2 w-full focus:outline-none rounded-full placeholder-gray-400 placeholder:italic"
                            type="text"
                            placeholder="Search food.."
                        />
                    </form>
                </div>
    </nav>
  )
}

export default Navbar
