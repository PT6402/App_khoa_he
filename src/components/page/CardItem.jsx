/* eslint-disable react/prop-types */
export default function CardItem({ dataReport }) {
  console.log(dataReport);
  return (
    <div className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4 mt-5">
      <div className="relative flex flex-col min-w-0 break-words bg-white shadow-2xl border rounded-2xl bg-clip-border">
        <div className="flex-auto p-4">
          <div className="flex flex-row -mx-3">
            <div className="flex-none w-full max-w-full px-3">
              <div>
                <p className="mb-3 font-sans text-sm text-center font-semibold leading-normal uppercase ">
                  Điểm +/- của chánh
                </p>
                <div className="flex justify-between">
                  <p className="font-bold ">Tổng + :</p>
                  <p>
                    {dataReport["+"]}/{dataReport.total * 22}
                  </p>
                  <p>
                    {((dataReport["+"] / dataReport.total) * 22).toFixed(2)}%
                  </p>
                </div>
                <div className="flex justify-between">
                  <p className="font-bold ">Tổng - :</p>
                  <p>
                    {dataReport["-"]}/{dataReport.total * 38}
                  </p>
                  <p>
                    {((dataReport["-"] / dataReport.total) * 38).toFixed(2)}%
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
