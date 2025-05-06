import User from "../models/User.js";

// Update User CartData: /api/cart/update
export const updateCart = async (req, res) => {
    try {
        const { userId, cartItems } = req.body;
       // console.log("Received data:", req.body);
        // Check if userId and cartItems are provided
        if (!userId || !cartItems) {
            return res.status(400).json({ success: false, message: "User ID and Cart Items are required" });
        }

        // Optionally, add more validation for cartItems if needed (e.g., ensure it's an object)

        // Find the user and update their cartItems
        const updatedUser = await User.findByIdAndUpdate(userId, { cartItems }, { new: true });
        
        // If user not found
        if (!updatedUser) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        res.json({ success: true, message: "Cart Updated", user: updatedUser });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};
