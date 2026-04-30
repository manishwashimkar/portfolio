export default function handler(_req, res) {
  res.status(200).json({
    success: true,
    message: "Portfolio API is running.",
  });
}
