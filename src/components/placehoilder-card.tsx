export default function PlaceholderCard() {
  return (
    <>
      <div className="grid m-8 rounded w-64 animate-pulse h-96">
        <div className="h-48 rounded-t bg-dark-600"></div>
        <div className="flex-1 px-4 py-8 space-y-4 sm:p-8 bg-dark-900">
          <div className="w-full h-6 rounded bg-dark-600"></div>
          <div className="w-full h-6 rounded bg-dark-600"></div>
          <div className="w-3/4 h-6 rounded bg-dark-600"></div>
        </div>
      </div>
    </>
  );
}
