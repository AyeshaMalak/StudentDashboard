function StatCard({ title, value, icon, color }) {
  return (
    <div className="bg-white rounded-xl w-[130px] h-[110px] p-3 flex flex-col justify-center shadow-sm border border-gray-100 hover:shadow-md transition">
      <div className="flex items-center gap-3">
        <div className={`p-2 ${color} text-white rounded-lg shadow`}>
          {React.cloneElement(icon, { className: "w-5 h-5" })}
        </div>
        <div>
          <p className="text-xs text-gray-500">{title}</p>
          <p className="text-lg font-bold text-gray-800">{value}</p>
        </div>
      </div>
    </div>
  );
}
