export default function handler(req, res) {

const database = {
  "9876543210": {
    name: "Rahul Sharma",
    email: "rahul@gmail.com",
    city: "Mumbai",
    state: "Maharashtra",
    country: "India",
    carrier: "Jio",
    spam: false,
    source: "community database"
  },

  "9123456780": {
    name: "Spam Caller",
    email: "unknown@mail.com",
    city: "Delhi",
    state: "Delhi",
    country: "India",
    address: "Vile Parle East",
    carrier: "Airtel",
    spam: true,
    source: "user report"
  }
};

const { number } = req.query;

if (database[number]) {
  res.status(200).json(database[number]);
} else {
  res.status(404).json({
    message: "Number not found"
  });
}

}