import { Link, Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <>
      <main className="flex flex-row mt-7">
        <nav className="hidden sm:flex flex-col ml-5 w-[370px] min-h-[calc(100vh-3.0rem)] bg-white bg-opacity-10 p-5 rounded-3xl">
          <Link to='/' className="font-bold text-lg lg:text-3xl bg-gradient-to-br from-white via-white/50 bg-clip-text text-transparent">
            Countries<span className="text-indigo-500">.</span>
          </Link>

          <div className="border-gray-700 border my-3" />
        </nav>

        <section className="mx-3 sm:mx-20 flex flex-col overflow-scroll w-full h-[calc(100vh-50px)]  bg-white bg-opacity-10 p-5 rounded-3xl">
        <div className="flex flex-row h-full">
          <div className="flex flex-col flex-auto h-full p-1">
            <Outlet />
          </div>
        </div>
      </section>
      </main>
    </>
  );
}
