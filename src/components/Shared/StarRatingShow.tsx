// its a simple component where you can enter number of star you want to display as prop

interface ratingProps {
  rating:number;
  
}
const StarRating = ({ rating}:ratingProps) => {
  
  // Create an array of 5 elements
  const stars = Array.from({ length: 5 }, (_, index) => {
    // Check if the current index should be filled
    return index < Math.floor(rating) ? "★" : "☆";
  });

  return (
    <div className="flex text-[20px] text-[#FFD700]">
      {stars.map((star, index) => (
        <span key={index}>{star}</span>
      ))}
    </div>
  );
};

export default StarRating;
