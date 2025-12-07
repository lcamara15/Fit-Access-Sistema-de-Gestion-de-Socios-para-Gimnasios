"use client"

import Link from "next/link"

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

export default function SociosPage() {
  const getEstadoColor = (estado: string) => {
    switch (estado) {
      case "Activo":
        return "text-emerald-700 bg-emerald-50 px-2 py-1 rounded-full text-xs font-medium"
      case "Inactivo":
        return "text-slate-600 bg-slate-100 px-2 py-1 rounded-full text-xs font-medium"
      case "Suspendido":
        return "text-red-600 bg-red-50 px-2 py-1 rounded-full text-xs font-medium"
      default:
        return ""
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* HEADER con logo clickeable */}
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

      {/* MAIN */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Título + botón */}
        <div className="mb-8 flex items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Socios del gimnasio</h1>
            <p className="mt-2 text-sm text-slate-600">
              Gestiona y visualiza todos los socios de tu gimnasio
            </p>
          </div>
          <Link href="/socios/nuevo">
            <button className="inline-flex items-center rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-slate-900 transition-colors">
              Nuevo socio
            </button>
          </Link>
        </div>

        {/* Tabla de socios */}
        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
          <table className="min-w-full text-sm">
            <thead className="bg-white">
              <tr className="border-b border-slate-200">
                <th className="px-6 py-3 text-left text-sm font-bold uppercase tracking-wide text-slate-700">
                  Nombre completo
                </th>
                <th className="px-6 py-3 text-left text-sm font-bold uppercase tracking-wide text-slate-700">
                  Teléfono
                </th>
                <th className="px-6 py-3 text-left text-sm font-bold uppercase tracking-wide text-slate-700">
                  Estado de membresía
                </th>
                <th className="px-6 py-3 text-left text-sm font-bold uppercase tracking-wide text-slate-700">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody>
              {SOCIOS.map((socio) => (
                <tr
                  key={socio.id}
                  className="border-b border-slate-200 last:border-0 bg-white hover:bg-slate-50 transition-colors"
                >
                  <td className="px-6 py-3 text-sm font-medium text-slate-900">
                    {socio.nombre}
                  </td>
                  <td className="px-6 py-3 text-sm text-slate-600">{socio.telefono}</td>
                  <td className="px-6 py-3 text-sm">
                    <span className={getEstadoColor(socio.estado)}>{socio.estado}</span>
                  </td>
                  <td className="px-6 py-3 text-sm">
                    <Link
                      href={`/socios/${socio.id}`}
                      className="inline-flex items-center gap-1 text-sm font-medium text-slate-900 hover:text-slate-700"
                    >
                      Ver detalle
                      <span className="text-lg">→</span>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
              Total de socios
            </p>
            <p className="mt-2 text-3xl font-semibold text-slate-900">{SOCIOS.length}</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
              Socios activos
            </p>
            <p className="mt-2 text-3xl font-semibold text-emerald-600">
              {SOCIOS.filter((s) => s.estado === "Activo").length}
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
              Socios inactivos
            </p>
            <p className="mt-2 text-3xl font-semibold text-slate-700">
              {SOCIOS.filter((s) => s.estado !== "Activo").length}
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
