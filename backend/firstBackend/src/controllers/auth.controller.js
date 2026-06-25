import User from "../models/user.model.js";

export const RegisterUser = async (req, res, next) => {

    try {

        const { fullName, email, password, phone, gender, dob } = req.body;

        if (!fullName || !email || !password || !phone || !gender || !dob) {
            const error = new Error("All Field Required");
            error.ErrStatusCode = 400;
            return next(error);
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            res.status(409).json({ message: "Email Already Registered" });
            return;
        }


        const photoUrl = `https://placehold.co/600x400?text=${fullName.charAt(0).toUpperCase()}`;


        const photo = {
            url: photoUrl,
            publicId: null,
        };

        await User.create({
            fullName,
            email,
            password,
            phone,
            gender,
            dob,
            photo,
        });

        console.log(2);
        

        res.status(201).json({ message: "User Created Successfully" });

    } catch (error) {

        next(error);
    }
};

export const LoginUser = async (req, res) => {
    // try {

    //     const { email, password } = req.body;

    //     if (!email || !password) {
    //         res.status(400).json({ message: "All Fields Required" });
    //     }

    // } catch (error) {

    // }
};

export const LogoutUser = (req, res) => {
    res.json({ message: "Logout Successfull form controller" });
};
