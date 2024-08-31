"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Facebook, DollarSign, MapPin, Phone, Mail, Menu } from "lucide-react";

export default function LandingPage() {
  const [isHovered, setIsHovered] = useState(false);
  const [openModal, setOpenModal] = useState<string | null>(null);

  const AsadaTab = ({ number }: { number: string }) => (
    <div className="flex flex-wrap justify-center space-x-4 text-center">
      <div className="flex items-center space-x-2">
        <Phone className="h-4 w-4" />
        <a href={`tel:+5068888${number}000`} className="hover:underline">
          +506 8888-{number}000
        </a>
      </div>
      <div className="flex items-center space-x-2">
        <Mail className="h-4 w-4" />
        <a href={`mailto:asada${number}@gmail.com`} className="hover:underline">
          asada{number}@gmail.com
        </a>
      </div>
      <a
        href="https://www.facebook.com"
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
          href={`https://wa.me/5068888${number}000`}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          SINPE Móvil: 8888-{number}000
        </a>
      </div>
      <Link
        href="https://acueductoscr.com/recibos"
        target="_blank"
        className="flex items-center space-x-2 text-green-600 hover:text-green-800 hover:underline"
      >
        <DollarSign className="h-4 w-4" />
        <span>Consulte su monto a pagar</span>
      </Link>
      <a
        href="https://www.waze.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 hover:underline"
      >
        <MapPin className="h-4 w-4" />
        <span>Abrir en Waze</span>
      </a>
      <p className="w-full text-center">Aquí una dirección, Distrito, Cantón</p>
    </div>
  );

  const NavItems = () => (
    <>
      <Link href="#" className="hover:text-yellow-300">
        Inicio
      </Link>
      <Link href="#" className="hover:text-yellow-300">
        Servicios
      </Link>
      <Link href="#" className="hover:text-yellow-300">
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
            className="bg-white text-green-600 hover:bg-yellow-300 hover:text-green-800 hidden md:inline"
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
                  className="bg-white text-green-600 hover:bg-yellow-300 hover:text-green-800"
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
            Contacte a su ASADA
          </h1>
        </div>
      </header>

      <main className="flex-grow container mx-auto py-8 px-4">
        <div className="hidden md:block">
          {/* Desktop Tabs */}
          <Tabs defaultValue="asada01" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-7 gap-4">
              {Array.from({ length: 14 }, (_, i) => (
                <TabsTrigger key={`asada${i + 1}`} value={`asada${i + 1}`}>
                  {`ASADA ${String(i + 1).padStart(2, "0")}`}
                </TabsTrigger>
              ))}
            </TabsList>
            <div className="mt-8">
              {Array.from({ length: 14 }, (_, i) => (
                <TabsContent
                  key={`asada${i + 1}`}
                  value={`asada${i + 1}`}
                  className="mt-20"
                >
                  <AsadaTab number={String(i + 1).padStart(2, "0")} />
                </TabsContent>
              ))}
            </div>
          </Tabs>
        </div>

        <div className="md:hidden">
          {/* Mobile Modal for Tabs */}
          {Array.from({ length: 14 }, (_, i) => (
            <Sheet
              key={`mobile-asada${i + 1}`}
              open={openModal === `asada${i + 1}`}
              onOpenChange={() => setOpenModal(null)}
            >
              <SheetTrigger asChild>
                <Button
                  onClick={() => setOpenModal(`asada${i + 1}`)}
                  className="w-full mb-2"
                >
                  {`ASADA ${String(i + 1).padStart(2, "0")}`}
                </Button>
              </SheetTrigger>
              <SheetContent>
                <AsadaTab number={String(i + 1).padStart(2, "0")} />
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
            <Link href="#" className="hover:text-yellow-300">
              Política de Privacidad
            </Link>
            <Link href="#" className="hover:text-yellow-300">
              Términos de Servicio
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
