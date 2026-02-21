function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-green-100 via-green-200 to-green-100">
      <div className="text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
          Welcome to Our Store
        </h1>
        <p className="text-lg md:text-xl text-gray-700">
          Browse our amazing product collection.
        </p>
      </div>
    </div>
  );
}

export default Home;