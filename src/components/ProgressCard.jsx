function ProgressCard({ title, subtitle, percentage, completed, remaining, gpa, grade }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <div className="text-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-xs text-gray-500">{subtitle}</p>
      </div>

      <div className="flex justify-center mb-4">
        <CircularProgress
          percentage={percentage}
          size={window.innerWidth < 768 ? 120 : 160} // responsive size
          strokeWidth={16}
          color="rgb(16, 185, 129)"
          bgColor="rgb(243, 244, 246)"
        >
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-800">{gpa ?? `${percentage}%`}</div>
            <div className="text-xs text-gray-500">{gpa ? "/ 4.0" : "Complete"}</div>
          </div>
        </CircularProgress>
      </div>

      <div className="space-y-2 text-sm">
        {completed !== undefined && (
          <>
            <div className="flex justify-between">
              <span className="text-gray-600">Completed</span>
              <span className="font-semibold text-gray-800">{completed} hrs</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Remaining</span>
              <span className="font-semibold text-gray-800">{remaining} hrs</span>
            </div>
          </>
        )}
        {gpa && (
          <>
            <div className="flex justify-between">
              <span className="text-gray-600">Current GPA</span>
              <span className="font-semibold text-gray-800">{gpa}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Letter Grade</span>
              <span className="font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-lg text-xs">{grade}</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
