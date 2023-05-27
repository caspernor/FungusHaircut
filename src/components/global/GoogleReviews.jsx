import {
  ChatBubbleLeftEllipsisIcon,
  TagIcon,
  UserCircleIcon,
} from "@heroicons/react/20/solid";
import useGoogleReviews from "../../../hooks/useGoogleReviews";
import Image from "next/image";

export default function GoogleReviews() {
  const { reviews, error, loading } = useGoogleReviews();

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (loading) {
    return <p>Loading ...</p>;
  }

  console.log(reviews);

  return (
      <div className="relative bg-orangesmash py-24 sm:py-32">
      <div className="absolute inset-0 mt-16 mx-4 mb-4 border-8 rounded-xl border-cream" />
      <div className="absolute inset-6 mt-16 mx-4 mb-4 border-4 rounded-xl border-cream opacity-70" />
      <div className="absolute inset-12 mt-16 mx-4 mb-4 border-2 rounded-xl border-cream opacity-40" />
      <div className="max-w-7xl">
        <div className="flow-root">
          <ul role="list" className="-mb-8 mx-20 mt-14">
            {reviews.map((review) => (
              <li key={`${review.author_name}-${review.time}`}>
                <div className="relative pb-8">
                  <div className="relative flex items-start space-x-3">
                    <div className="relative">
                      <img
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400 ring-8 ring-white"
                        src={review.profile_photo_url}
                        alt=""
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div>
                        <div className="text-sm">
                          <a href="#" className="font-medium text-gray-900">
                            {review.author_name}
                          </a>
                        </div>
                        <p className="mt-0.5 text-sm text-gray-500">
                          Commented {review.relative_time_description}
                        </p>
                      </div>
                      <div className="mt-2 text-sm text-gray-700">
                        <p>{review.text}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
