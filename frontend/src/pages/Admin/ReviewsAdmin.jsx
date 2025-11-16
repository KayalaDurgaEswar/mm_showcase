import React, { useEffect, useState } from "react";
import API from "../../api/api";

export default function ReviewsAdmin() {
  const [reviews, setReviews] = useState([]);

  const load = () => {
    API.get("/reviews").then((r) => setReviews(r.data)).catch(()=>{});
  };

  useEffect(() => load(), []);

  const deleteReview = async (id) => {
    if (!confirm("Delete review?")) return;
    await API.delete(`/reviews/${id}`);
    load();
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Manage Reviews</h2>

      <table className="w-full bg-white shadow rounded overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3">Name</th>
            <th className="p-3">Rating</th>
            <th className="p-3">Message</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {reviews.map((r) => (
            <tr key={r._id} className="border-t">
              <td className="p-3">{r.name}</td>
              <td className="p-3">{r.rating}★</td>
              <td className="p-3">{r.message}</td>
              <td className="p-3">
                <button className="text-red-600" onClick={() => deleteReview(r._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
