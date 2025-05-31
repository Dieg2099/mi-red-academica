export default function Admin() {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Panel de Administración</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Nombre</label>
          <input type="text" className="w-full border p-2 rounded" />
        </div>
        <div>
          <label className="block text-sm font-medium">Área</label>
          <input type="text" className="w-full border p-2 rounded" />
        </div>
        <div>
          <label className="block text-sm font-medium">Universidad</label>
          <input type="text" className="w-full border p-2 rounded" />
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Guardar Investigador
        </button>
      </form>
    </div>
  );
}