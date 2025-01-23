import Image from "next/image";
import Link from "next/link";

const carModels = [
    {
        name: "Black",
        image: "/p1.webp",
        desc: "Sleek and sophisticated black finish with premium leather interior. Perfect for executive travel.",
    },
    {
        name: "Gray",
        image: "/p2.webp",
        desc: "Modern metallic gray exterior complemented by advanced safety features and comfort technology.",
    },
    {
        name: "White",
        image: "/p3.webp",
        desc: "Classic pearl white model featuring panoramic sunroof and premium sound system.",
    },
    {
        name: "Red",
        image: "/p4.webp",
        desc: "Bold racing red with sport-tuned suspension and enhanced performance package.",
    },
    {
        name: "Convertible Gray",
        image: "/p5.webp",
        desc: "Elegant gray convertible with automatic soft-top and wind deflector for comfortable open-air driving.",
    },
    {
        name: "Convertible Pink",
        image: "/p6.webp",
        desc: "Unique pink finish convertible with custom interior trim and state-of-the-art entertainment system.",
    },
];

export default function GalleryPage() {
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

            {/* Gallery Section */}
            <section className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {carModels.map((car, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
                        >
                            <div className="relative h-64">
                                <Image
                                    src={car.image || "/placeholder.svg"}
                                    alt={car.name}
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                            <div className="p-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    {car.name}
                                </h2>
                                <p className="text-gray-600 mb-4">{car.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-8">
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
