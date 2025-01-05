import React from 'react'
import { categories } from '../data/data'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


const Categories = () => {
    const navigate = useNavigate();

    const handleCategoryClick = (category) => {
        if(category === 'Menu')
{
    navigate('/menu')               
}
        else{
            navigate(`/${category}`);
        }
    }


  return (
    <div className="relative min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-white">
      <div className="container mx-auto px-4 pt-14 mb-16">
        <div className="text-center mb-8">
          <h1 className="font-bold text-3xl text-orange-600 mb-2">
            Hungry? We've Got You! 🍽️
          </h1>
          <p className="text-yellow-600">Choose from our delicious categories</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {categories.map((item, index) => (
            <div
              key={index}
              onClick={() => handleCategoryClick(item.name.toLowerCase())}
              className="group relative bg-white rounded-xl overflow-hidden cursor-pointer 
                       transform transition-all duration-300 hover:-translate-y-1 
                       border-2 border-amber-200
                       hover:border-amber-300 hover:shadow-[0_8px_20px_-6px_rgba(251,191,36,0.3)]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-orange-300/10 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
              
              <div className="relative p-4 flex flex-col items-center gap-3">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full 
                              p-2 flex items-center justify-center border border-amber-200
                              group-hover:from-orange-100 group-hover:to-amber-100 
                              transition-all duration-300 group-hover:border-amber-300">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <h2 className="font-medium text-amber-800 group-hover:text-amber-600 
                             transition-colors duration-300 text-center">
                  {item.name}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Categories

