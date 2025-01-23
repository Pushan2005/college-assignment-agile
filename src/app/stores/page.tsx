import Link from "next/link";

const dealerships = [
    {
        name: "Mumbai Porsche",
        address: "123 Marine Drive, Mumbai",
        phone: "+91 9999999999",
    },
    {
        name: "Delhi Porsche",
        address: "456 Connaught Place, New Delhi",
        phone: "+91 9999999999",
    },
    {
        name: "Bangalore Porsche",
        address: "789 MG Road, Bangalore",
        phone: "+91 9999999999",
    },
    {
        name: "Chennai Porsche",
        address: "321 Marina Beach Rd, Chennai",
        phone: "+91 9999999999",
    },
];

export default function DealershipPage() {
    return (
        <div className="min-h-screen bg-gray-100">
            {/* Header */}
            <header className="bg-gray-800 text-white">
                <div className="container mx-auto px-4 py-6 flex justify-between items-center">
                    <Link href="/" className="text-2xl font-bold">
                        Porsche
                    </Link>
                    <nav>
                        <ul className="flex space-x-6">
                            <li>
                                <a
                                    href="/models"
                                    className="hover:text-gray-300"
                                >
                                    Models
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/stores"
                                    className="hover:text-gray-300"
                                >
                                    Stores
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
            {/* Dealership Section */}
            <section className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {dealerships.map((dealership, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
                        >
                            <div className="p-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    {dealership.name}
                                </h2>
                                <p className="text-gray-600 mb-2">
                                    {dealership.address}
                                </p>
                                <p className="text-gray-600 mb-2">
                                    {dealership.phone}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 bottom-0 absolute w-screen text-white py-8">
                <div className="container mx-auto px-4 text-center">
                    <p>
                        &copy; {new Date().getFullYear()} Porsche. All rights
                        reserved.
                    </p>
                    <p className="mt-2">
                        Discover our full range of vehicles at your nearest
                        Porsche dealership.
                    </p>
                </div>
            </footer>
        </div>
    );
}
