"use client"

import Link from "next/link"
import Image from "next/image"
import { Users, Dumbbell, TrendingUp } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="border-b border-slate-200">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
              >
                <circle cx="6" cy="12" r="3" />
                <line x1="9" y1="12" x2="15" y2="12" strokeWidth="3" />
                <circle cx="18" cy="12" r="3" />
              </svg>
            </div>
            <span className="text-xl font-bold text-slate-900">Fit Access</span>
          </Link>

          {/* Navegación */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#caracteristicas" className="text-slate-600 hover:text-slate-900 transition-colors">
              Características
            </a>
            <a href="#planes" className="text-slate-600 hover:text-slate-900 transition-colors">
              Planes
            </a>
            <a href="#contacto" className="text-slate-600 hover:text-slate-900 transition-colors">
              Contacto
            </a>
          </div>

          {/* CTA */}
          <Link
            href="/socios"
            className="px-6 py-2 bg-slate-900 text-white rounded-full hover:bg-slate-800 transition-colors font-medium"
          >
            Ir a Socios
          </Link>
        </nav>
      </header>

      {/* Hero Section con imagen */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          {/* Texto */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 text-balance">
                Gestión de Membresías de Gimnasio
              </h1>
              <p className="text-xl text-slate-600 text-balance">
                La solución completa para administrar socios, membresías y control de acceso en tu gimnasio de forma
                simple y efectiva.
              </p>
            </div>

            <Link
              href="/socios"
              className="inline-block px-8 py-4 bg-slate-900 text-white rounded-full hover:bg-slate-800 transition-colors font-semibold text-lg"
            >
              Acceder al Sistema
            </Link>
          </div>

          {/* Imagen del gimnasio */}
          <div className="relative h-72 md:h-96 rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/gym-image.png" 
              alt="Vista del gimnasio con equipo de entrenamiento"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Características */}
      <section id="caracteristicas" className="bg-slate-100 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-16 text-center">Características Principales</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Tarjeta 1 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Users className="w-12 h-12 text-slate-900 mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Gestión de Socios</h3>
              <p className="text-slate-600">
                Administra todos tus socios en un solo lugar. Registra información completa, seguimiento de membresías y
                estado de pago.
              </p>
            </div>

            {/* Tarjeta 2 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Dumbbell className="w-12 h-12 text-slate-900 mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Planes Flexibles</h3>
              <p className="text-slate-600">
                Crea diferentes planes de membresía según tus necesidades. Acceso a equipos específicos, horarios
                flexibles y más.
              </p>
            </div>

            {/* Tarjeta 3 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <TrendingUp className="w-12 h-12 text-slate-900 mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Reportes y Análisis</h3>
              <p className="text-slate-600">
                Visualiza métricas importantes sobre membresías activas, renovaciones, ingresos y tendencias de
                crecimiento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Estadísticas */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-4xl font-bold text-slate-900">10+</p>
            <p className="text-slate-600 mt-2">Gimnasios activos</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-slate-900">200+</p>
            <p className="text-slate-600 mt-2">Socios gestionados</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-slate-900">99.9%</p>
            <p className="text-slate-600 mt-2">Disponibilidad</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-slate-900">24/7</p>
            <p className="text-slate-600 mt-2">Soporte técnico</p>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section id="contacto" className="bg-slate-900 text-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-4xl font-bold text-balance">¿Listo para transformar tu gimnasio?</h2>
          <p className="text-xl text-slate-300">
            Comienza a usar Fit Access hoy y mejora la administración de tus socios.
          </p>
          <Link
            href="/socios"
            className="inline-block px-8 py-4 bg-white text-slate-900 rounded-full hover:bg-slate-100 transition-colors font-semibold text-lg"
          >
            Acceder Ahora
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <circle cx="6" cy="12" r="3" />
                  <line x1="9" y1="12" x2="15" y2="12" strokeWidth="3" />
                  <circle cx="18" cy="12" r="3" />
                </svg>
              </div>
              <span className="font-semibold text-slate-900">Fit Access</span>
            </div>
            <p className="text-slate-600">© 2025 Fit Access. Todos los derechos reservados.</p>
            <div className="flex gap-6">
              <a href="#" className="text-slate-600 hover:text-slate-900">
                Privacidad
              </a>
              <a href="#" className="text-slate-600 hover:text-slate-900">
                Términos
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
