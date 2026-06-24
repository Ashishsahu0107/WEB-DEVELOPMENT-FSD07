import User from "../models/user.model.js";

export const LoginUser = async (req, res) => {
    try {
        const { fullName, email, password, phone, gender, dob } = req.body;

        if (!fullName || !email || !password || !phone || !gender || !dob) {
            res.status(400).json({ message: "All fields required" });
            return;
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            res.status(409).json({ message: "Email Already Registered" });
            return;
        }


        
        
        //create a new user registration will do this tomarrow

    } catch (error) {
        
    }
};




export const RegisterUser = (req, res) => {
    res.json({message : "register Successfull form controller"})
};

export const LogoutUser = (req, res) => {
    res.json({message : "Logout Successfull form controller"})
};
