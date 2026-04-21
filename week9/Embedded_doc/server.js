const mongoose = require("mongoose");
const User = require("./models/User");


async function run() {
  try {
    // Connect MongoDB
    await mongoose.connect("mongodb://127.0.0.1:27017/testdb1");
    console.log("Connected to MongoDB");


    // Create User with embedded addresses
    const user = new User({
      name: "Swathi",
      email: "Swathi@example.com",
      addresses: [
        { street: "123 Main St", city: "New York", country: "USA" },
        { street: "456 Elm St", city: "Boston", country: "USA" }
      ]
    });


    // Save document
    await user.save();
    console.log("User saved successfully!");


    // Fetch all users
    const users = await User.find();
    console.log("All Users:", users);


  } catch (err) {
    console.log("Error:", err.message);
  } finally {
    // Disconnect MongoDB
    await mongoose.disconnect();
    console.log("Disconnected from MongoDB");
  }
}


// Run function
run();