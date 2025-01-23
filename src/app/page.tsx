import Image from "next/image";
import heroImage from "../../public/porsche-1.webp";
import Link from "next/link";

export default function AutoLandingPage() {
    return (
        <div className="min-h-screen bg-gray-900 text-white">
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

            <section className="relative h-[600px]">
                <Image
                    src={heroImage}
                    alt="Luxury car on a scenic road"
                    layout="fill"
                    objectFit="cover"
                    className="brightness-50"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
                    <h1 className="text-5xl font-bold mb-4">
                        Experience Luxury and Performance
                    </h1>
                    <p className="text-xl mb-8">
                        Discover our latest models and redefine your driving
                        experience
                    </p>
                    <a
                        href="/models"
                        className="bg-white bg-opacity-20 backdrop-blur-[2px] text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition duration-300"
                    >
                        Become Exclusive
                    </a>
                </div>
            </section>
        </div>
    );
}
