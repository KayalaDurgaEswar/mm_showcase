import React, { useEffect, useState } from "react";
import API from "../../api/api";

export default function ProjectsAdmin() {
  const [projects, setProjects] = useState([]);
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    title: "",
    category: "Kitchens",
    description: "",
    imageUrl: "",
  });

  const load = () => {
    API.get("/projects").then((r) => setProjects(r.data)).catch(()=>{});
  };

  useEffect(() => load(), []);

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const data = new FormData();
    data.append("image", file);

    const res = await API.post("/upload/image", data, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    setForm({ ...form, imageUrl: res.data.secure_url || res.data.url || res.data.path || res.data });
  };

  const saveProject = async () => {
    setLoading(true);

    if (form._id) {
      await API.put(`/projects/${form._id}`, form);
    } else {
      await API.post("/projects", form);
    }

    setLoading(false);
    setModal(false);
    setForm({ title: "", category: "Kitchens", description: "", imageUrl: "" });
    load();
  };

  const editProject = (p) => {
    setForm(p);
    setModal(true);
  };

  const deleteProject = async (id) => {
    if (!confirm("Delete project?")) return;
    await API.delete(`/projects/${id}`);
    load();
  };

  return (
    <div>
      <div className="flex justify-between mb-6">
        <h2 className="text-2xl font-bold">Manage Projects</h2>
        <button
          onClick={() => {
            setForm({ title: "", category: "Kitchens", description: "", imageUrl: "" });
            setModal(true);
          }}
          className="px-4 py-2 bg-brand text-white rounded"
        >
          + Add Project
        </button>
      </div>

      {/* TABLE */}
      <table className="w-full bg-white shadow rounded overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3">Image</th>
            <th className="p-3">Title</th>
            <th className="p-3">Category</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((p) => (
            <tr key={p._id} className="border-t">
              <td className="p-3">
                <img src={p.imageUrl} className="w-20 h-14 object-cover rounded" alt="" />
              </td>
              <td className="p-3">{p.title}</td>
              <td className="p-3">{p.category}</td>
              <td className="p-3 space-x-3">
                <button className="text-blue-600" onClick={() => editProject(p)}>
                  Edit
                </button>
                <button className="text-red-600" onClick={() => deleteProject(p._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* MODAL */}
      {modal && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
          <div className="bg-white p-6 rounded w-96 shadow-lg">
            <h3 className="text-xl font-bold mb-4">{form._id ? "Edit" : "Add"} Project</h3>

            <input
              placeholder="Title"
              className="border p-2 w-full mb-3 rounded"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
            />

            <select
              className="border p-2 w-full mb-3 rounded"
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
            >
              <option>Kitchens</option>
              <option>Wardrobes</option>
              <option>Partitions</option>
              <option>Windows</option>
            </select>

            <textarea
              className="border p-2 w-full mb-3 rounded"
              rows={3}
              placeholder="Description"
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
            ></textarea>

            {/* IMAGE UPLOAD */}
            <input type="file" className="mb-3" onChange={handleUpload} />
            {form.imageUrl && <img src={form.imageUrl} className="w-full h-40 object-cover rounded" alt="" />}

            <div className="flex justify-end mt-4 gap-3">
              <button onClick={() => setModal(false)}>Cancel</button>
              <button
                className="px-4 py-2 bg-brand text-white rounded"
                onClick={saveProject}
                disabled={loading}
              >
                {loading ? "Saving..." : "Save"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
