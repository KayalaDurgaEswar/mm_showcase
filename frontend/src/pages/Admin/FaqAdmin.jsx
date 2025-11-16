import React, { useEffect, useState } from "react";
import API from "../../api/api";

export default function FaqAdmin() {
  const [faqs, setFaqs] = useState([]);
  const [modal, setModal] = useState(false);
  const [form, setForm] = useState({ question: "", answer: "" });

  const load = () => {
    API.get("/faqs").then((r) => setFaqs(r.data)).catch(()=>{});
  };

  useEffect(() => load(), []);

  const save = async () => {
    if (form._id) {
      await API.put(`/faqs/${form._id}`, form);
    } else {
      await API.post("/faqs", form);
    }
    load();
    setModal(false);
    setForm({ question: "", answer: "" });
  };

  const remove = async (id) => {
    if (!confirm("Delete FAQ?")) return;
    await API.delete(`/faqs/${id}`);
    load();
  };

  return (
    <div>
      <div className="flex justify-between mb-6">
        <h2 className="text-2xl font-bold">Manage FAQs</h2>
        <button
          onClick={() => {
            setForm({ question: "", answer: "" });
            setModal(true);
          }}
          className="px-4 py-2 bg-brand text-white rounded"
        >
          + Add FAQ
        </button>
      </div>

      <table className="w-full bg-white shadow rounded overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3">Question</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {faqs.map((f) => (
            <tr key={f._id} className="border-t">
              <td className="p-3">{f.question}</td>
              <td className="p-3 space-x-3">
                <button className="text-blue-600" onClick={() => { setForm(f); setModal(true) }}>Edit</button>
                <button className="text-red-600" onClick={() => remove(f._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal */}
      {modal && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
          <div className="bg-white p-6 rounded w-96 shadow-lg">
            <h3 className="text-xl font-bold mb-4">{form._id ? "Edit FAQ" : "Add FAQ"}</h3>

            <input
              placeholder="Question"
              className="border p-2 w-full mb-3 rounded"
              value={form.question}
              onChange={(e) => setForm({ ...form, question: e.target.value })}
            />

            <textarea
              placeholder="Answer"
              className="border p-2 w-full mb-3 rounded"
              rows={4}
              value={form.answer}
              onChange={(e) => setForm({ ...form, answer: e.target.value })}
            ></textarea>

            <div className="flex justify-end gap-3">
              <button onClick={() => setModal(false)}>Cancel</button>
              <button onClick={save} className="px-4 py-2 bg-brand text-white rounded">
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
