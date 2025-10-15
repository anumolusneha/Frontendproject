import React from "react";

export default function UserProfile() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-[500px]">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-4">
          User Profile
        </h2>

        <table className="w-full border-collapse rounded-lg overflow-hidden shadow-sm">
          <thead>
            <tr className="bg-blue-200 text-left">
              <th className="py-2 px-4">Avatar</th>
              <th className="py-2 px-4">First Name</th>
              <th className="py-2 px-4">Middle Name</th>
              <th className="py-2 px-4">Last Name</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-50">
              <td className="py-2 px-4">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="John"
                  className="w-10 h-10 rounded-full"
                />
              </td>
              <td className="py-2 px-4">John</td>
              <td className="py-2 px-4">A.</td>
              <td className="py-2 px-4">Doe</td>
            </tr>
            <tr className="bg-blue-50">
              <td className="py-2 px-4">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="Jane"
                  className="w-10 h-10 rounded-full"
                />
              </td>
              <td className="py-2 px-4">Sneha</td>
              <td className="py-2 px-4">B.</td>
              <td className="py-2 px-4">Smith</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
