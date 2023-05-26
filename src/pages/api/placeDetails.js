export default async function handler(req, res) {
  const googlePlaceId = "ChIJz4nFCKpTUkYRiprQMrhGoyU";
  const googlePlacesKey = process.env.GOOGLE_PLACES_KEY;
  const googlePlacesUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${googlePlaceId}&key=${googlePlacesKey}`;

  const response = await fetch(googlePlacesUrl);
  const data = await response.json();

  res.status(200).json(data);
}
