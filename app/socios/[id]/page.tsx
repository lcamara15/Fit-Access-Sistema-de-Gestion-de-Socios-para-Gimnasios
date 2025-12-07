"use client"

import Link from "next/link"
import { useParams } from "next/navigation"

interface Socio {
  id: string
  nombre: string
  telefono: string
  estado: "Activo" | "Inactivo" | "Suspendido"
}

const SOCIOS: Socio[] = [
  {
    id: "1",
    nombre: "Diego Josué Morales",
    telefono: "+502 4725 2134",
    estado: "Activo",
  },
  {
    id: "2",
    nombre: "Claudia Alejandra Vega",
    telefono: "+502 5678 3031",
    estado: "Activo",
  },
  {
    id: "3",
    nombre: "Roberto Estuardo Flores",
    telefono: "+502 5474 9876",
    estado: "Inactivo",
  },
]

function getEstadoBadgeClasses(estado: Socio["estado"]) {
  switch (estado) {
    case "Activo":
      return "inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700"
    case "Inactivo":
      return "inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700"
    case "Suspendido":
      return "inline-flex items-center rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-red-700"
    default:
      return ""
  }
}

function getIniciales(nombre: string) {
  const partes = nombre.trim().split(" ")
  const iniciales = partes.slice(0, 2).map((p) => p[0]?.toUpperCase() ?? "")
  return iniciales.join("")
}

/** Header que lleva al inicio */
function HeaderFitAccess() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8 flex items-center justify-between">
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

        <div />
      </div>
    </header>
  )
}

export default function SocioDetallePage() {
  const params = useParams<{ id: string }>()
  const socioId = Array.isArray(params.id) ? params.id[0] : params.id
  const socio = SOCIOS.find((s) => s.id === socioId)

  // Si no existe
  if (!socio) {
    return (
      <div className="min-h-screen bg-slate-50">
        <HeaderFitAccess />

        <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
          <Link
            href="/socios"
            className="inline-flex items-center text-sm font-medium text-slate-600 hover:text-slate-900"
          >
            ← Volver a socios
          </Link>

          <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 text-slate-800 shadow-sm">
            <p className="text-lg font-semibold">Socio no encontrado</p>
            <p className="mt-2 text-sm text-slate-600">
              El socio que intentas ver no existe en la lista actual.
            </p>
          </div>
        </main>
      </div>
    )
  }

  // Vista normal
  return (
    <div className="min-h-screen bg-slate-50">
      <HeaderFitAccess />

      <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Volver */}
        <Link
          href="/socios"
          className="inline-flex items-center text-sm font-medium text-slate-600 hover:text-slate-900"
        >
          ← Volver a socios
        </Link>

        <div className="mt-8 space-y-8">
          {/* CARD PRINCIPAL */}
          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm space-y-8">
            {/* Título + estado */}
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="text-2xl font-semibold text-slate-900">
                  Detalle del socio
                </h1>
                <p className="mt-2 text-sm text-slate-600 max-w-xl">
                  Resumen compacto de la información principal de este socio en el gimnasio.
                </p>
              </div>
              <div className="flex flex-col items-start gap-2 text-sm">
                <span className="text-xs font-medium uppercase tracking-wide text-slate-500">
                  Estado de membresía
                </span>
                <span className={getEstadoBadgeClasses(socio.estado)}>{socio.estado}</span>
              </div>
            </div>

            {/* Grid con datos del socio */}
            <div className="grid gap-8 md:grid-cols-[2fr,1.4fr]">
              {/* Columna izquierda: datos personales */}
              <div className="flex gap-4">
                <div className="mt-1 flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 text-base font-semibold text-white">
                  {getIniciales(socio.nombre)}
                </div>
                <div className="space-y-5">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                      Nombre completo
                    </p>
                    <p className="mt-1 text-lg font-semibold text-slate-900">
                      {socio.nombre}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                      Teléfono
                    </p>
                    <p className="mt-1 text-sm font-medium text-slate-800">
                      {socio.telefono}
                    </p>
                  </div>
                </div>
              </div>

              {/* Columna derecha: ficha corta */}
              <div className="rounded-2xl bg-slate-50 px-4 py-4 space-y-2">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Resumen rápido
                </p>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Aquí puedes ver de un vistazo el estado actual del socio, junto con su
                  información de contacto. Más adelante esta sección podría incluir la
                  próxima visita, el plan de entrenamiento activo o alertas importantes.
                </p>
              </div>
            </div>
          </section>

          {/* TARJETAS SECUNDARIAS */}
          <section className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm space-y-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Próximos pasos
              </p>
              <p className="text-sm text-slate-700 leading-relaxed">
                En una versión futura se podrían registrar aquí las próximas citas a evaluaciones corporales, mediciones,
                renovaciones de membresía, seguimiento de pagos y recordatorios clave
                para este socio.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm space-y-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Notas
              </p>
              <p className="text-sm text-slate-700 leading-relaxed">
                También podría mostrarse un pequeño resumen del historial de rutinas
                asignadas, progreso general y comentarios importantes del instructor para
                dar más contexto al momento de atenderlo.
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
