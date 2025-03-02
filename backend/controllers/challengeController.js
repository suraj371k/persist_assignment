import Challenge from "../models/challengeModel.js";

// Create a new challenge
export const createChallenge = async (req, res) => {
    const { title, description, funding, deadline, visible = true } = req.body; // Default visible: true
    
    try {
        if (!title || !description || !funding) {
            return res.status(400).json({
                success: false,
                message: "All fields are required",
            });
        }

        const challenge = new Challenge({ title, description, funding, deadline, visible });
        await challenge.save();

        res.status(201).json({
            success: true,
            message: "Challenge created successfully",
            challenge,
        });

    } catch (error) {
        console.error("Error in creating challenge:", error);
        res.status(500).json({
            success: false,
            message: "Error in creating challenge",
        });
    }
};

// Fetch all challenges (optional filter: only visible challenges)
export const getAllChallenges = async (req, res) => {
    try {
        const { visible } = req.query; // Get visible filter from query params
        const filter = visible === "true" ? { visible: true } : {}; // Apply filter if required

        const challenges = await Challenge.find(filter);

        if (challenges.length === 0) {
            return res.status(404).json({ 
                success: false, 
                message: "No challenges found" 
            });
        }

        res.status(200).json({ 
            success: true, 
            message: "Fetched challenges successfully", 
            challenges 
        });

    } catch (error) {
        console.error("Error fetching challenges:", error);
        res.status(500).json({ 
            success: false, 
            message: "Error fetching challenges" 
        });
    }
};

// Fetch challenge by ID
export const getById = async (req, res) => {
    const { id } = req.params;

    try {
        if (!id.match(/^[0-9a-fA-F]{24}$/)) {
            return res.status(400).json({
                success: false,
                message: "Invalid challenge ID format",
            });
        }

        const challenge = await Challenge.findById(id);

        if (!challenge) {
            return res.status(404).json({
                success: false,
                message: "Challenge not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Fetched challenge successfully",
            challenge,
        });

    } catch (error) {
        console.error("Error fetching challenge:", error);
        res.status(500).json({
            success: false,
            message: "Error fetching challenge",
        });
    }
};

// Toggle challenge visibility
export const updateVisibility = async (req, res) => {
    const { id } = req.params;
    const { visible } = req.body; // Get new visibility status from request body

    try {
        if (!id.match(/^[0-9a-fA-F]{24}$/)) {
            return res.status(400).json({
                success: false,
                message: "Invalid challenge ID format",
            });
        }

        const challenge = await Challenge.findByIdAndUpdate(
            id,
            { visible },
            { new: true }
        );

        if (!challenge) {
            return res.status(404).json({
                success: false,
                message: "Challenge not found",
            });
        }

        res.status(200).json({
            success: true,
            message: `Challenge visibility updated to ${visible}`,
            challenge,
        });

    } catch (error) {
        console.error("Error updating visibility:", error);
        res.status(500).json({
            success: false,
            message: "Error updating challenge visibility",
        });
    }
};
