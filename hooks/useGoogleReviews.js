import { useEffect, useState } from "react";

const useGoogleReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch("/api/placeDetails");
        if (!response.ok) {
          throw new Error("Error fetching reviews");
        }
        const data = await response.json();
        setReviews(data.result.reviews);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  return { reviews, error, loading };
};

export default useGoogleReviews;
