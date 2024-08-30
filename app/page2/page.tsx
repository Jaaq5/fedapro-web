"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Facebook, DollarSign, MapPin, Phone, Mail, Menu } from "lucide-react";
import asadaData from "@/app/data/asadas-data"; // Asegúrate de ajustar la ruta según tu estructura

export default function LandingPage() {
  const [isHovered, setIsHovered] = useState(false);
  const [openModal, setOpenModal] = useState<string | null>(null);
  const [currentTab, setCurrentTab] = useState("asada01"); // Asegúrate de definir un valor por defecto

  useEffect(() => {
    // Set a timer to trigger the hover effect after 5 seconds
    const timer = setTimeout(() => {
      setIsHovered(true);
    }, 5000);

    // Clear the timer if the component unmounts before the timer finishes
    return () => clearTimeout(timer);
  }, []);

  const AsadaTab = ({ number }: { number: string }) => {
    const data = asadaData.find((asada) => asada.number === number);

    if (!data) return <div>No data found</div>;

    return (
      <div className="flex flex-wrap justify-center space-x-4 text-center">
        <div className="flex items-center space-x-2">
          <Phone className="h-4 w-4" />
          <a href={`tel:${data.phone}`} className="hover:underline">
            {data.phone}
          </a>
        </div>
        <div className="flex items-center space-x-2">
          <Mail className="h-4 w-4" />
          <a href={`mailto:${data.email}`} className="hover:underline">
            {data.email}
          </a>
        </div>
        <a
          href={data.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 hover:underline"
        >
          <Facebook className="h-4 w-4" />
          <span>Facebook</span>
        </a>
        <div className="flex items-center space-x-2">
          <Phone className="h-4 w-4" />
          <a
            href={`https://wa.me/${data.phone}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            SINPE Móvil: {data.sinpe}
          </a>
        </div>
        <Link
          href={data.paymentLink}
          target="_blank"
          className="flex items-center space-x-2 text-green-600 hover:text-green-800 hover:underline"
        >
          <DollarSign className="h-4 w-4" />
          <span>Consulte su monto a pagar</span>
        </Link>
        <a
          href={data.wazeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 hover:underline"
        >
          <MapPin className="h-4 w-4" />
          <span>Abrir en Waze</span>
        </a>
        <p className="w-full text-center">{data.address}</p>
      </div>
    );
  };

  const NavItems = () => (
    <>
      <Link href="#" className="hover:text-blue-300">
        Inicio
      </Link>
      <Link href="#" className="hover:text-blue-300">
        Servicios
      </Link>
      <Link href="#" className="hover:text-blue-300">
        Contacto
      </Link>
    </>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-green-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <motion.div
              whileHover={{ rotateY: 360 }}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
              transition={{
                rotateY: {
                  duration: isHovered ? 0.5 : 2,
                  ease: "easeInOut",
                },
              }}
            >
              <Image
                src="/31901816_922455351254295_8673612842827513856_n.jpg"
                width={50}
                height={50}
                alt="FEDAPRO Logo"
                className="rounded-full"
              />
            </motion.div>
            <motion.span
              className="text-2xl font-bold hidden md:inline"
              whileHover={{ color: "#CDDC39" }}
            >
              FEDAPRO
            </motion.span>
          </div>
          <div className="hidden md:flex flex-1 justify-center space-x-4 md:space-x-6">
            <NavItems />
          </div>
          <Button
            variant="outline"
            className="bg-white text-green-600 hover:bg-blue-300 hover:text-green-800 hidden md:inline"
          >
            Iniciar Sesión
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-6 w-6 text-black" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col space-y-4 mt-8">
                <motion.span
                  className="text-2xl font-bold text-green-600"
                  whileHover={{ color: "#CDDC39" }}
                >
                  FEDAPRO
                </motion.span>
                <NavItems />
                <Button
                  variant="outline"
                  className="bg-white text-green-600 hover:bg-blue-300 hover:text-green-800"
                >
                  Iniciar Sesión
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>

      <header className="bg-green-500 text-white py-8 px-4">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold text-center">
            Contacta con tu ASADA fácilmente
          </h1>
        </div>
      </header>

      <main className="flex-grow container mx-auto py-8 px-4">
        <div className="hidden md:block">
          {/* Desktop Tabs */}
          <Tabs defaultValue="asada01" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-7 gap-4">
              {asadaData.map((asada) => (
                <TabsTrigger
                  key={`asada${asada.number}`}
                  value={`asada${asada.number}`}
                  className={`relative px-4 py-2 rounded-md text-center transition-colors duration-300 ease-in-out ${
                    currentTab === `asada${asada.number}`
                      ? "bg-[#22c55e] text-white"
                      : "bg-green-200 text-gray-900 hover:bg-[#22c55e] hover:text-white"
                  }`}
                  onClick={() => setCurrentTab(`asada${asada.number}`)}
                >
                  {`ASADA ${asada.number}`}
                </TabsTrigger>
              ))}
            </TabsList>
            <div className="mt-8">
              {asadaData.map((asada) => (
                <TabsContent
                  key={`asada${asada.number}`}
                  value={`asada${asada.number}`}
                  className="mt-20"
                >
                  <AsadaTab number={asada.number} />
                </TabsContent>
              ))}
            </div>
          </Tabs>
        </div>

        <div className="md:hidden">
          {/* Mobile Modal for Tabs */}
          {asadaData.map((asada) => (
            <Sheet
              key={`mobile-asada${asada.number}`}
              open={openModal === `asada${asada.number}`}
              onOpenChange={() => setOpenModal(null)}
            >
              <SheetTrigger asChild>
                <Button
                  onClick={() => setOpenModal(`asada${asada.number}`)}
                  className={`w-full mb-2 ${
                    openModal === `asada${asada.number}`
                      ? "bg-[#22c55e] text-white"
                      : "bg-transparent text-gray-700"
                  }`}
                >
                  {`ASADA ${asada.number}`}
                </Button>
              </SheetTrigger>
              <SheetContent>
                <AsadaTab number={asada.number} />
              </SheetContent>
            </Sheet>
          ))}
        </div>
      </main>

      <footer className="bg-green-800 text-white py-6 px-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2024 FEDAPRO. Todos los derechos reservados.</p>
          </div>
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-blue-300">
              Política de Privacidad
            </Link>
            <Link href="#" className="hover:text-blue-300">
              Términos de Servicio
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
