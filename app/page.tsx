"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Facebook,
  DollarSign,
  MapPin,
  Phone,
  Smartphone,
  Mail,
  Menu,
  Clock,
  Landmark,
  Coins,
  MapPinned,
  Map,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import asadaData from "@/app/data/asadas-data"; // Asegúrate de ajustar la ruta según tu estructura

export default function Component() {
  const [isHovered, setIsHovered] = useState(false);
  const [currentTab, setCurrentTab] = useState("asada01");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsHovered(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const AsadaInfo = ({ number }: { number: string }) => {
    const data = asadaData.find((asada) => asada.number === number);

    if (!data) return <div>No data found</div>;

    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-white shadow-md">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-4 text-gray-800">Contacto</h3>
            <div className="space-y-2 text-lg">
              <a
                href={`tel:${data.phone}`}
                className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-300"
              >
                <Phone className="h-5 w-5" />
                <span>Oficina: {data.phone}</span>
              </a>
              <a
                href={`https://wa.me/${data.phone.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-600 hover:text-green-600 transition-colors duration-300"
              >
                <Smartphone className="h-5 w-5" />
                <span>Celular fontanero: {data.phone}</span>
              </a>
              <a
                href={`mailto:${data.email}`}
                className="flex items-center space-x-2 text-gray-600 hover:text-red-600 transition-colors duration-300"
              >
                <Mail className="h-5 w-5" />
                <span>Correo: {data.email}</span>
              </a>
              <a
                href={data.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors duration-300"
              >
                <Facebook className="h-5 w-5" />
                <span>Facebook</span>
              </a>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-white shadow-md">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-4 text-gray-800">
              Medios de pago
            </h3>
            <div className="space-y-2 text-lg">
              <a
                href={`https://wa.me/${data.sinpe.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-600 hover:text-green-600 transition-colors duration-300"
              >
                <Coins className="h-5 w-5" />
                <span>SINPE Móvil: {data.sinpe}</span>
              </a>
              <Link
                href={data.paymentLink}
                target="_blank"
                className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-300"
              >
                <Landmark className="h-5 w-5" />
                <span>Banco Nacional</span>
              </Link>
              <Link
                href={data.paymentLink}
                target="_blank"
                className="flex items-center space-x-2 text-gray-600 hover:text-green-600 transition-colors duration-300"
              >
                <DollarSign className="h-5 w-5" />
                <span>Consulte su monto a pagar</span>
              </Link>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-white shadow-md">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-4 text-gray-800">Dirección</h3>
            <div className="space-y-2 text-lg">
              <a
                href={data.wazeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors duration-300"
              >
                <MapPinned className="h-5 w-5" />
                <span>Abrir en Waze</span>
              </a>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  data.address
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors duration-300"
              >
                <Map className="h-5 w-5" />
                <span>Abrir en Google Maps</span>
              </a>
              <p className="flex items-start space-x-2 text-gray-600">
                <MapPin className="h-5 w-5 mt-1 flex-shrink-0" />
                <span>{data.address}</span>
              </p>
              <p className="flex items-center space-x-2 text-gray-600">
                <Clock className="h-5 w-5" />
                <span>{data.hours}</span>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  };

  const NavItems = () => (
    <>
      <Link
        href="#"
        className="text-gray-200 hover:text-white transition-colors duration-300 text-lg"
      >
        Inicio
      </Link>
      <Link
        href="#"
        className="text-gray-200 hover:text-white transition-colors duration-300 text-lg"
      >
        Servicios
      </Link>
      <Link
        href="#"
        className="text-gray-200 hover:text-white transition-colors duration-300 text-lg"
      >
        Contacto
      </Link>
    </>
  );

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <nav className="bg-gradient-to-r from-green-600 to-blue-600 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <motion.div
              whileHover={{ rotateY: 360 }}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
              animate={isHovered ? { rotateY: 360 } : { rotateY: 0 }}
              transition={{
                rotateY: {
                  duration: 2,
                  ease: "easeInOut",
                },
              }}
            >
              <Image
                src="/31901816_922455351254295_8673612842827513856_n.jpg"
                width={50}
                height={50}
                alt="FEDAPRO Logo"
                className="rounded-full border-2 border-white"
              />
            </motion.div>
            <motion.span
              className="text-2xl font-bold text-white"
              whileHover={{ color: "#E2E8F0" }}
            >
              FEDAPRO
            </motion.span>
          </div>
          <div className="hidden md:flex flex-1 justify-center space-x-4 md:space-x-6">
            <NavItems />
          </div>
          <Button
            variant="outline"
            className="bg-white text-green-600 hover:bg-green-100 hidden md:inline text-lg"
          >
            Iniciar Sesión
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="md:hidden bg-white"
              >
                <Menu className="h-6 w-6 text-green-600" />
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-white">
              <div className="flex flex-col space-y-4 mt-8">
                <motion.span
                  className="text-2xl font-bold text-green-600"
                  whileHover={{ color: "#2563EB" }}
                >
                  FEDAPRO
                </motion.span>
                <NavItems />
                <Button
                  variant="outline"
                  className="bg-green-600 text-white hover:bg-green-700 text-lg"
                >
                  Iniciar Sesión
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>

      <header className="bg-gradient-to-r from-green-500 to-blue-500 py-8 px-4">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold text-center text-white">
            Contacta con tu ASADA fácilmente
          </h1>
        </div>
      </header>

      <main className="flex-grow container mx-auto py-8 px-4">
        <div className="hidden md:block">
          <Tabs defaultValue="asada01" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-7 gap-4 bg-transparent">
              {asadaData.map((asada) => (
                <TabsTrigger
                  key={`asada${asada.number}`}
                  value={`asada${asada.number}`}
                  className={`relative px-4 py-2 rounded-md text-center transition-colors duration-300 ease-in-out text-lg ${
                    currentTab === `asada${asada.number}`
                      ? "bg-gradient-to-r from-green-500 to-blue-500 text-white"
                      : "bg-white text-gray-600 hover:bg-gray-100"
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
                  <AsadaInfo number={asada.number} />
                </TabsContent>
              ))}
            </div>
          </Tabs>
        </div>

        <div className="md:hidden">
          <Accordion type="single" collapsible>
            {asadaData.map((asada) => (
              <AccordionItem
                key={`asada${asada.number}`}
                value={`asada${asada.number}`}
              >
                <AccordionTrigger
                  className={`px-4 py-2 rounded-md text-center transition-colors duration-300 ease-in-out text-lg
                    bg-gradient-to-r from-green-500 to-blue-500 text-white
                    hover:from-green-600 hover:to-blue-600
                    border-2 border-white mb-2`}
                >
                  {`ASADA ${asada.number}`}
                </AccordionTrigger>
                <AccordionContent>
                  <AsadaInfo number={asada.number} />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </main>

      <footer className="bg-gradient-to-r from-green-600 to-blue-600 py-6 px-4 text-white">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg">
              &copy; 2024 FEDAPRO. Todos los derechos reservados.
            </p>
          </div>
          <div className="flex space-x-4">
            <Link
              href="#"
              className="hover:text-gray-200 transition-colors duration-300 text-lg"
            >
              Política de Privacidad
            </Link>
            <Link
              href="#"
              className="hover:text-gray-200 transition-colors duration-300 text-lg"
            >
              Términos de Servicio
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
