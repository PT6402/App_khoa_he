/* eslint-disable react/prop-types */
import { Switch } from "@headlessui/react";
import { useState } from "react";

export default function SwitchItem({ handleGetStatus }) {
  const [enabled, setEnabled] = useState(false);
  handleGetStatus(enabled);
  return (
    <div className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4 mt-5">
      <div className="relative flex flex-col min-w-0 break-words bg-white shadow-2xl border rounded-2xl bg-clip-border">
        <div className="flex-auto p-4">
          <div className="flex flex-row -mx-3">
            <div className="flex-none w-full max-w-full px-3 items-center justify-center">
              <div className="flex items-center justify-center">
                <div className="flex justify-between items-center w-full">
                  <p>Ngày mới</p>
                  <div>
                    <Switch
                      checked={enabled}
                      onChange={setEnabled}
                      className="group relative flex h-8 w-16 cursor-pointer rounded-full bg-gray-300 p-1 transition-colors duration-200 ease-in-out focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[checked]:bg-blue-500  "
                    >
                      <span
                        aria-hidden="true"
                        className="pointer-events-none inline-block size-6 translate-x-0  rounded-full bg-white ring-0 shadow-lg transition duration-200 ease-in-out group-data-[checked]:translate-x-8"
                      />
                    </Switch>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
