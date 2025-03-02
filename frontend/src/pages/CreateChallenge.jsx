import React, { useState } from "react";
import { useChallenges } from "../store/useChallenge";
import { toast } from "react-toastify";

const CreateChallenge = () => {
  const { createChallenge, loading, error } = useChallenges();

  const [challenge, setChallenge] = useState({
    title: "",
    funding: "",
    deadline: "",
    description: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    const formattedValue = name === "deadline" ? value.split("T")[0] : value;

    setChallenge({ ...challenge, [name]: formattedValue });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createChallenge(challenge);
      setSuccessMessage(toast.success("Challenge Created Successfully"));
      setChallenge({ title: "", funding: "", deadline: "", description: "" });
    } catch (err) {
      toast.err("Error In Creating Challenge")
      console.error("Error creating challenge:", err);
    }
  };

  return (
    <div className="bg-black w-full min-h-auto p-10">
    <div className="max-w-md mx-auto rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-white mb-4">Create Challenge</h2>

      {error && <p className="text-red-500">{error}</p>}
      {successMessage && <p className="text-green-500">{successMessage}</p>}

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="title"
          placeholder="Challenge Title"
          value={challenge.title}
          onChange={handleChange}
          className="p-2 rounded bg-gray-700 text-white focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="number"
          name="funding"
          placeholder="Funding Amount"
          value={challenge.funding}
          onChange={handleChange}
          className="p-2 rounded bg-gray-700 text-white focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="date"
          name="deadline"
          value={challenge.deadline}
          onChange={handleChange}
          className="p-2 rounded bg-gray-700 text-white focus:ring-2 focus:ring-blue-500"
          required
        />
        <textarea
          name="description"
          placeholder="Challenge Description"
          value={challenge.description}
          onChange={handleChange}
          className="p-2 rounded bg-gray-700 text-white h-24 focus:ring-2 focus:ring-blue-500"
          required
        />

        <button
          type="submit"
          className={`bg-blue-600 text-white p-2 cursor-pointer rounded transition ${
            loading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
          }`}
          disabled={loading}
        >
          {loading ? "Creating..." : "Create Challenge"}
        </button>
      </form>
      </div>
    </div>
  );
};

export default CreateChallenge;
