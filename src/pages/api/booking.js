export default async function handler(req, res) {
    if (req.method === 'GET') {
      try {
        console.log('called')
        const response = await fetch('http://127.0.0.1:5000/');
        const data = await response.json();

        console.log(response)
        
        // Modify the data or perform additional operations as needed
        
        res.status(200).json(data);
      } catch (error) {
        res.status(500).json({ message: 'An error occurred' });
      }
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  }