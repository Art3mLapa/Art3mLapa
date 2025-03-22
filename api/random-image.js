export default function handler(req, res) {
  const images = [
    "https://kappa.lol/36TrNe",
    "https://kappa.lol/m-s2yR",
    "https://kappa.lol/RDXU7H",
    "https://kappa.lol/8J_7Kv"
  ];

  const randomImage = images[Math.floor(Math.random() * images.length)];

  res.status(200).json({ image: randomImage });
}