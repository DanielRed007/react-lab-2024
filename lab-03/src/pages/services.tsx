import { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import CheckoutAccordion from "@/components/checkout-accordion/CheckoutAccordion";

export default function Index() {
  // State for controlling the modal
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <main className="container mx-auto my-auto py-8 h-auto">
        <h2 className="text-4xl font-bold mb-4">Test Checkout Component</h2>

        <div className="flex justify-center items-center mt-10">
          <h2 className="text-2xl font-bold mb-4 mr-9">Modals</h2>
        </div>

        <div className="flex justify-center items-center mt-10">
          <h2 className="text-2xl font-bold mb-4 mr-9">Dropdown</h2>
          <div className="flex justify-center flex-row w-4/6 h-96 rounded bg-yellow-500 shadow-lg mx-4">
            <CheckoutAccordion />
          </div>
        </div>
      </main>
    </div>
  );
}
