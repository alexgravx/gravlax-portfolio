export default function Home() {

    const firstName = "Alexandre"
    const lastName = "Gravereaux"
    const title = "Software Engineer"

    return (
      <div className="grid min-h-[70vh] grid-cols-1 md:grid-cols-2 items-center">
        <div className="col-start-1 md:row-start-1">
          <h1 className="mb-8 text-[clamp(3rem,14vmin,20rem)] font-extrabold leading-none tracking-tighter" aria-label={firstName + " " + lastName}>
            <span className="block text-gray-300">{firstName}</span>
            <span className="-mt-[.2em] block text-gray-500">{lastName}</span>
          </h1>
          <span className="bg-gradient-to-tr from-green-500 via-blue-400 to-green-300 bg-clip-text text-2xl font-bold uppercase tracking[.2em] text-transparent opacity-100 md:text-4xl">{title}</span>
        </div>
      </div>
    );
  }