/* eslint-disable react/prop-types */
export default function CardLoad({ dataReport }) {
  console.log(dataReport);
  return (
    <div className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4 mt-5">
      <div className="relative flex flex-col min-w-0 break-words bg-white shadow-2xl border rounded-2xl bg-clip-border">
        <div className="flex-auto p-4">
          <div className="flex flex-row -mx-3">
            <div className="flex-none w-full max-w-full px-3 items-center justify-center">
              <div className="flex items-center justify-center">
                tải báo cáo ...
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
