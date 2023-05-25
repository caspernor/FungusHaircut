export default async function handler(req, res) {
  const googlePlaceId = "ChIJi5a4zd9QWARADhjzldYQRy4";
  const googlePlacesKey = process.env.API_KEY;
  const googlePlacesUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${googlePlaceId}&key=${googlePlacesKey}`;

  const response = await fetch(googlePlacesUrl);
  const data = await response.json();

  res.status(200).json(data);
}
