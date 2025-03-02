import { create } from 'zustand';
import axios from 'axios';

const API_URL = "https://persist-assignment-1.onrender.com";

export const useChallenges = create((set) => ({
    challenges: [],
    error: null,
    loading: false,

    fetchChallenges: async () => {
        set({ loading: true, error: null });
        try {
            const response = await axios.get(API_URL);
            set({ challenges: response.data.challenges, loading: false });
        } catch (error) {
            set({ error: error.message, loading: false });
        }
    },

    createChallenge: async (challenge) => {
        set({ loading: true, error: null });
        try {
            const response = await axios.post(API_URL, challenge);
            set((state) => ({
                challenges: [...state.challenges, response.data.challenge],
                loading: false
            }));
        } catch (error) {
            set({ error: error.message, loading: false });
        }
    },

    toggleVisibility: async (id, currentStatus) => {
        try {
            await axios.patch(`${API_URL}/visibility/${id}`, {
                visible: !currentStatus
            });

            // Update local state
            set((state) => ({
                challenges: state.challenges.map((challenge) =>
                    challenge._id === id ? { ...challenge, visible: !currentStatus } : challenge
                ),
            }));
        } catch (error) {
            set({ error: error.message });
        }
    }
}));
