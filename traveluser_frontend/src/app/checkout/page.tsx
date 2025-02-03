"use client";
import Footer from "@/app/components/footer";
import Navbar from "@/app/components/navbar";
import { useRouter } from "next/navigation"; // Import useRouter hook
import { useState } from "react";

export default function Checkout() {
  const router = useRouter(); // Initialize the useRouter hook
  const [cardHolderName, setCardHolderName] = useState<string>("");
  const [cardNumber, setCardNumber] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false); // state to control modal visibility

  const handleProceedToCheckout = () => {
    // Validate form fields
    if (!cardHolderName || !cardNumber || !password) {
      alert("Please fill out all fields");
      return;
    }

    // Show the modal
    setShowModal(true);
  };

  const handleBackClick = () => {
    // Redirect to the homepage when the "Back" button is clicked
    router.push("/");
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4 mt-6 text-black">
        <h1 className="text-3xl font-bold text-black">Checkout</h1>

        {/* Checkout Form */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold">Enter Checkout Info</h3>
          <form className="mt-4">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Card Holder Name
              </label>
              <input
                type="text"
                value={cardHolderName}
                onChange={(e) => setCardHolderName(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="Enter your name"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Card Number
              </label>
              <input
                type="text"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="Enter your card number"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="Enter your password"
              />
            </div>

            <button
              type="button"
              onClick={handleProceedToCheckout}
              className="bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-blue-600 transition duration-200 w-full"
            >
              Proceed to Checkout
            </button>
          </form>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg max-w-sm w-full">
            <h2 className="text-2xl font-semibold mb-4">Checkout Successful</h2>
            <p>Your checkout info has been submitted successfully.</p>
            <div className="mt-6 flex justify-end">
              <button
                onClick={handleBackClick} // Trigger the back navigation
                className="bg-blue-800 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-600 transition duration-200"
              >
                Back
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
