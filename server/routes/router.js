const express = require("express");
const router = new express.Router();
const Products = require('../models/productSchema');
const USER = require('../models/userSchema');
const bcrypt = require('bcrypt');
const authenticate = require("../middleware/authenticate");

// get the products data
router.get("/getproducts", async (req, res) => {
    try {
        const productsdata = await Products.find();
        res.status(200).json(productsdata);
        // console.log(productsdata);
    } catch (error) {
        console.log("error" + error.message);
    }
});

// get individual product
router.get("/getproduct/:id", async (req, res) => {

    try {
        const { id } = req.params;
        // console.log(id);

        const individual = await Products.findOne({ id: id });
        // console.log(individual + "individual product found");

        res.status(201).json(individual);
    } catch (error) {
        res.status(400).json(error);
    }
});

// Register the user
router.post("/register", async (req, res) => {
    
    const { fname, email, password, cpassword } = req.body;

    if (!fname || !email || !password || !cpassword) {
        res.status(422).json({ error: "fill all the details" });
    };

    try {

        const preuser = await USER.findOne({ email: email });

        if (preuser) {
            res.status(422).json({ error: "This user already exists" });
        } else if (password !== cpassword) {
            res.status(422).json({ error: "Password is not matching" });;
        } else {

            const finaluser = new USER({
                fname, email, password, cpassword
            });

            // yaha pe hasing krenge

            const storedata = await finaluser.save();
            // console.log(storedata + "user successfully added");
            res.status(201).json(storedata);
            
        }

    } catch (error) {
        console.log("error the bhai catch ma for registration time" + error.message);
        res.status(422).send(error);
    }

});


// Login User
router.post("/signin", async (req, res) => {
    // console.log(req.body);
    const { email, password } = req.body;

    if (!email || !password) {
        res.status(400).json({ error: "fill the details" });
    }

    try {
        const userlogin = await USER.findOne({ email: email });
        // console.log(userlogin);
        if (userlogin) {
            const isMatch = await bcrypt.compare(password, userlogin.password);
            // console.log(isMatch);

            if (!isMatch) {
                res.status(400).json({ error: "Invalid password" });
            } else {
                
                const token = await userlogin.generateAuthtoken();
                // console.log(token); 

                 res.cookie('Amazon', token, {
                    maxAge: 7 * 24 * 60 * 60 * 1000, // MS
                    httpOnly: true, 
                    sameSite: 'none', 
                    secure: true,
                    path:'/',
                    domain:'amazon-web-client.onrender.com'
                })
                res.status(201).json(userlogin);
            }

        } else {
            res.status(400).json({ error: "User does not exist" });
        }

    } catch (error) {
        res.status(400).json({ error: "Invalid crediential pass" });
        console.log("error the bhai catch ma for login time" + error.message);
    }
});

// adding the data into cart
router.post("/addcart/:id", authenticate, async (req, res) => {

    try {
        const { id } = req.params;
        const cart = await Products.findOne({ id: id });
        // console.log(cart + "cart milta hain");

        const Usercontact = await USER.findOne({ _id: req.userID });
        // console.log(Usercontact + "user milta hain");
        
        if (Usercontact) {
            const cartData = await Usercontact.addcartdata(cart);

            await Usercontact.save();
            // console.log(cartData + " thse save wait kr");
            // console.log(Usercontact + "userjode save");
            res.status(201).json(Usercontact);     
        }
    } catch (error) {
        console.log(error);
    }
});


// get data into the cart
router.get("/cartdetails", authenticate, async (req, res) => {
    try {
        const buyuser = await USER.findOne({ _id: req.userID });
        // console.log(buyuser + "user hain buy pr");
        res.status(201).json(buyuser);
    } catch (error) {
        console.log(error + "error for buy now");
    }
});

// get user is login or not
router.get("/validuser", authenticate, async (req, res) => {
    try {
        const validuserone = await USER.findOne({ _id: req.userID });
        // console.log(validuserone + "user hain home k header main pr");
        res.status(201).json(validuserone);
    } catch (error) {
        console.log(error + "error for valid user");
    }
});

// remove item from the cart

router.delete("/delete/:id", authenticate, async (req, res) => {
    try {
        const { id } = req.params;

        req.rootUser.carts = req.rootUser.carts.filter((cruval) => {
            return cruval.id != id
        });

        req.rootUser.save();
        res.status(201).json(req.rootUser);
        console.log("item remove");

    } catch (error) {
        console.log(error + "jwt provide then remove");
        res.status(400).json(error);
    }
});


router.get("/logout", authenticate, async (req, res) => {
    try {
        req.rootUser.tokens = req.rootUser.tokens.filter((curelem) => {
            return curelem.token !== req.token
        });

        res.clearCookie("Amazon", { path: "/" });
        req.rootUser.save();
        res.status(201).json(req.rootUser.tokens);
        console.log("user logout");

    } catch (error) {
        console.log(error + "error for user logout");
    }
});

module.exports= router;
