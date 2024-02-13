import Head from "next/head";

import { Dialog } from "@headlessui/react";
import { useState } from "react";
import Header from "../components/header/Header";

export default function Index() {
  // State for controlling the modal
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Main Content Body */}
      <main className="container mx-auto py-8 h-dvh">
        {/* Your main content goes here */}
        <h2 className="text-3xl font-bold mb-4">Welcome to Our Website</h2>
        <p className="text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non
          gravida odio. Integer vel lorem vitae elit varius venenatis sed ac
          lorem.
        </p>
        {/* Button to trigger the modal */}
        <button
          onClick={() => setIsOpen(true)}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Open Modal
        </button>
        {/* Modal */}
        <Dialog
          open={isOpen}
          onClose={() => setIsOpen(false)}
          className="fixed inset-0 z-10 overflow-y-auto"
        >
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-50" />
          <div className="flex items-center justify-center min-h-screen">
            <Dialog.Title className="text-lg font-bold">
              Modal Title
            </Dialog.Title>
            <Dialog.Description className="text-sm mt-2">
              Modal Content Goes Here...
            </Dialog.Description>
            <button
              onClick={() => setIsOpen(false)}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Close
            </button>
          </div>
        </Dialog>
      </main>
    </div>
  );
}
