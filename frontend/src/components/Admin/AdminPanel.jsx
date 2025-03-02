import { useChallenges } from "../../store/useChallenge";
import { useEffect } from "react";
import axios from "axios";

const AdminPanel = () => {
  const { challenges, fetchChallenges, loading, error } = useChallenges();

  useEffect(() => {
    fetchChallenges();
  }, []);

  // Toggle Visibility
  const toggleVisibility = async (id, currentStatus) => {
    try {
      await axios.patch(
        `http://localhost:8000/api/challenges/visibility/${id}`,
        {
          visible: !currentStatus,
        }
      );

      // Refetch challenges after toggling
      fetchChallenges();
    } catch (err) {
      console.error("Error updating visibility:", err);
    }
  };

  if (loading)
    return (
      <p className="text-center text-gray-500 mt-4">Loading challenges...</p>
    );
  if (error)
    return <p className="text-center text-red-500 mt-4">Error: {error}</p>;

  return (
    <div className="container mx-auto p-6 max-w-6xl">
      <h1 className="text-2xl font-bold text-center mb-6 text-white">
        Admin Panel - Manage Challenges
      </h1>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-200 bg-black text-white shadow-md rounded-lg min-w-[600px]">
          <thead className="bg-gray-800 border-b">
            <tr>
              <th className="py-3 text-sm md:text-lg font-semibold px-4 border">S.No</th>
              <th className="py-3 text-sm md:text-lg font-semibold px-4 border">Title</th>
              <th className="py-3 text-sm md:text-lg font-semibold px-4 border">Funding ($)</th>
              <th className="py-3 text-sm md:text-lg font-semibold px-4 border">Deadline</th>
              <th className="py-3 text-sm md:text-lg font-semibold px-4 border hidden md:table-cell">Description</th>
              <th className="py-3 text-sm md:text-lg font-semibold px-4 border">Status</th>
            </tr>
          </thead>
          <tbody>
            {challenges.length > 0 ? (
              challenges.map((challenge, index) => (
                <tr key={challenge._id} className="border-b hover:bg-gray-700">
                  <td className="py-3 px-4 border text-center">{index + 1}</td>
                  <td className="py-3 px-4 border text-center">{challenge.title}</td>
                  <td className="py-3 px-4 border text-center">${challenge.funding}</td>
                  <td className="py-3 px-4 border text-center">
                    {new Date(challenge.deadline).toLocaleDateString()}
                  </td>
                  <td className="py-3 px-4 border hidden md:table-cell">{challenge.description}</td>
                  <td className="py-3 px-4 border text-center">
                    <button
                      onClick={() => toggleVisibility(challenge._id, challenge.visible)}
                      className={`px-3 py-1 md:px-4 md:py-2 rounded-md text-white text-sm md:text-base transition-all duration-200 ease-in-out ${
                        challenge.visible
                          ? "bg-green-500 hover:bg-green-600"
                          : "bg-red-500 hover:bg-red-600"
                      }`}
                    >
                      {challenge.visible ? "Visible" : "Hidden"}
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center py-4 text-gray-500">
                  No challenges found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPanel;
