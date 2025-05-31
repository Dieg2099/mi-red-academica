export default function InvestigadorCard({ nombre, area, universidad }) {
  return (
    <div className="border rounded-lg shadow overflow-hidden p-4">
      <h3 className="font-bold text-xl">{nombre}</h3>
      <p className="text-gray-600">{area}</p>
      <p className="text-sm text-gray-500">{universidad}</p>
    </div>
  );
}