// components/OurProjects.tsx
"use client";

import React from "react";
import { FaUser, FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

/**
 * Interface for a single review.
 * Defines the structure of a review object.
 */
interface Review {
  id: string;
  userName: string;
  userImage?: string; // Optional user image
  rating: number; // Rating out of 5
  comment: string;
  date?: string; // Optional review date
}

/**
 * Sample review data.
 * In a real application, this data would likely come from an API call or a CMS.
 */
const sampleReviews: Review[] = [
  {
    id: "1",
    userName: "Sarah Johnson",
    rating: 5,
    comment: "Absolutely amazing service! The team delivered beyond our expectations and the results were fantastic.",
    date: "2024-01-15"
  },
  {
    id: "2",
    userName: "Michael Chen",
    // No userImage provided - will show icon
    rating: 4.5,
    comment: "Great experience working with this team. Professional, timely, and high-quality work. Highly recommended!",
    date: "2024-01-10"
  },
  {
    id: "3",
    userName: "Emily Davis",
    userImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    rating: 4,
    comment: "Very satisfied with the outcome. The project was completed on time and met all our requirements.",
    date: "2024-01-08"
  },
  {
    id: "4",
    userName: "Sarah Johnson",
    rating: 5,
    comment: "Absolutely amazing service! The team delivered beyond our expectations and the results were fantastic.",
    date: "2024-01-15"
  },
  {
    id: "5",
    userName: "Michael Chen",
    // No userImage provided - will show icon
    rating: 4.5,
    comment: "Great experience working with this team. Professional, timely, and high-quality work. Highly recommended!",
    date: "2024-01-10"
  },
  {
    id: "6",
    userName: "Emily Davis",
    userImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    rating: 4,
    comment: "Very satisfied with the outcome. The project was completed on time and met all our requirements.",
    date: "2024-01-08"
  },
];

/**
 * Component to render star ratings
 */
const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - Math.ceil(rating);

  // Add full stars
  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <FaStar key={`full-${i}`} className="text-yellow-400" />
    );
  }

  // Add half star if needed
  if (hasHalfStar) {
    stars.push(
      <FaStarHalfAlt key="half" className="text-yellow-400" />
    );
  }

  // Add empty stars
  for (let i = 0; i < emptyStars; i++) {
    stars.push(
      <FaRegStar key={`empty-${i}`} className="text-yellow-400" />
    );
  }

  return <div className="flex items-center gap-1">{stars}</div>;
};

/**
 * Component to render user profile
 */
const UserProfile: React.FC<{ userName: string; userImage?: string }> = ({ userName, userImage }) => {
  const [imageError, setImageError] = React.useState(false);

  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="w-12 h-12 rounded-full overflow-hidden bg-purple-600 flex items-center justify-center">
        {userImage && !imageError ? (
          <img 
            src={userImage} 
            alt={userName}
            className="w-full h-full object-cover"
            onError={() => setImageError(true)}
          />
        ) : (
          <FaUser className="text-white text-lg" />
        )}
      </div>
      <div>
        <h4 className="text-white font-medium">{userName}</h4>
      </div>
    </div>
  );
};

const Reviews: React.FC = () => {
  return (
    <section className="min-h-screen bg-black text-white py-16 px-4 sm:px-6 lg:px-8 font-inter">
      <div className="max-w-7xl mx-auto">
        {/* Header Section: Title and See More link */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-12">
          <h1 className="text-6xl mx-auto max-w-2xl mb-3 md:leading-none font-semibold tracking-tighter bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] text-transparent bg-clip-text text-center">
            Reviews
          </h1>
        </div>
        

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {sampleReviews.map((review) => (
            <div
              key={review.id}
              className="bg-[#0E0320] bg-opacity-50 rounded-xl shadow-lg p-8 min-h-64 flex flex-col justify-between"
            >
              <div>
                {/* User Profile */}
                <UserProfile userName={review.userName} userImage={review.userImage} />
                
                {/* Star Rating */}
                <div className="mb-4 flex">
                  <StarRating rating={review.rating} />
                  <span className="text-gray-400 text-sm ml-2">
                    {review.rating}/5
                  </span>


                </div>
                
                {/* Review Comment */}
                <p className="text-gray-300 text-base leading-relaxed">
                  {review.comment}
                </p>
              </div>
              
              {/* Review Date */}
              {review.date && (
                <div className="mt-4 pt-4 border-t border-gray-700">
                  <span className="text-gray-500 text-sm">
                    {new Date(review.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;