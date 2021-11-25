import { useRouter } from "next/router";
import Image from "next/image";

export default function Crisol() {
  const router = useRouter();
  return (
    <>
      <header className="flex flex-row items-center justify-between px-4 py-6 bg-gray-100">
        <Image src="/images/crisol.png" width={630 / 4} height={320 / 4} />
        <div className="flex flex-row items-center">
          <h1 className="text-2xl font-bold text-gray-700">Ventas</h1>
        </div>
        <div>
          <button
            className="px-4 py-2 mr-8 font-bold text-white bg-blue-600 rounded-md hover:bg-blue-700"
            onClick={() => {
              router.push("/app/crisol/crear");
            }}
          >
            Crear producto
          </button>
          <button
            className="px-4 py-2 font-bold text-white bg-red-600 rounded-md hover:bg-red-700"
            onClick={() => {
              window.localStorage.removeItem("user");
              router.push("/login");
            }}
          >
            Cerrar sesión
          </button>
        </div>
      </header>
    </>
  );
}
