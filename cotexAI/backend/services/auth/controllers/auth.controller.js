// import { getAuth } from "firebase-admin/auth";
// import crypto from "crypto";

// import { app } from "../config/firebase.js";
// import User from "../models/user.model.js";

// export const login = async (req, res) => {
//     try {
//         const { token } = req.body;

//         const decoded = await getAuth(app).verifyIdToken(token);

//         let user = await User.findOne({
//             firebaseUid: decoded.uid
//         });

//         if (!user) {
//             user = await User.create({
//                 firebaseUid: decoded.uid,
//                 name: decoded.name,
//                 email: decoded.email,
//                 avatar: decoded.picture
//             });
//         }

//         const sessionId = crypto.randomUUID();

//         res.cookie("session", sessionId, {
//             httpOnly: true,
//             secure: false,
//             sameSite: "strict",
//             maxAge: 7 * 24 * 60 * 60 * 1000
//         });

//         return res.status(200).json(user);

//     } catch (error) {
//         console.error("LOGIN ERROR:", error);

//         return res.status(500).json({
//             message: `login error ${error.message}`
//         });
//     }
// };


import { getAuth } from "firebase-admin/auth";
import crypto from "crypto";

import { app } from "../config/firebase.js";
import User from "../models/user.model.js";

export const login = async (req, res) => {
    try {
        const { token } = req.body;

        console.log("TOKEN RECEIVED:", !!token);

        const decoded = await getAuth(app).verifyIdToken(token);

        console.log("FIREBASE USER:", decoded);

        let user = await User.findOne({
            firebaseUid: decoded.uid
        });

        if (!user) {
            user = await User.create({
                firebaseUid: decoded.uid,
                name: decoded.name,
                email: decoded.email,
                avatar: decoded.picture
            });
        }

        const sessionId = crypto.randomUUID();

        res.cookie("session", sessionId, {
            httpOnly: true,
            secure: false,
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000
        });

        return res.status(200).json(user);

    } catch (error) {
        console.error("========== LOGIN ERROR ==========");
        console.error(error);
        console.error("=================================");

        return res.status(500).json({
            message: error.message
        });
    }
};