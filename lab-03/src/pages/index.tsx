import Head from "next/head";
import { Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { Dialog } from "@headlessui/react";
import { useLabContext } from "@/context/LabContext";
import { useTimeoutFn } from "react-use";

export default function Index() {
  const [isOpen, setIsOpen] = useState(false);
  let [isShowing, setIsShowing] = useState(true);
  let [, , resetIsShowing] = useTimeoutFn(() => setIsShowing(true), 500);
  const { openModal } = useLabContext();

  return (
    <div>
      <main className="container mx-auto py-8 h-dvh">
        <h2 className="text-4xl font-bold mb-4">
          NextJS + Context API Workshop
        </h2>

        <div className="flex justify-center mt-10">
          <div className="max-w-xs w-48 h-48 rounded bg-yellow-500 overflow-hidden shadow-lg mx-4">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-center mt-9">
                Payments
              </div>
              <button
                onClick={openModal}
                className="bg-gray-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mx-auto block"
              >
                Just Click
              </button>
            </div>
          </div>
          <div className="max-w-xs w-48 h-48 rounded bg-yellow-500 overflow-hidden shadow-lg mx-4">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-center mt-9">
                Modal 2
              </div>
              <button className="bg-gray-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mx-auto block">
                Button
              </button>
            </div>
          </div>
          <div className="max-w-xs w-48 h-48 rounded bg-yellow-500 overflow-hidden shadow-lg mx-4">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-center mt-9">
                Modal 3
              </div>
              <button className="bg-gray-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mx-auto block">
                Button
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
