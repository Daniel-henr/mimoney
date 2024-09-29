const CircularProgress = () => {
    return (
      <div className="relative flex items-center justify-center w-44 h-44">
        {/* Círculo externo com o progresso */}
        <div className="w-full h-full rounded-full bg-gray-200">
          <div
            className="absolute top-0 left-0 w-full h-full rounded-full"
            style={{
              background: `conic-gradient(#28C28B 15%, #E5E7EB 15%)`, // 15% preenchido com verde
            }}
          />
        </div>
        <div className="absolute w-32 h-32 bg-white rounded-full"></div>
        {/* Texto no centro */}
        <span className="absolute text-2xl font-bold text-gray-900">15%</span>
      </div>
    );
  };
  
  export default CircularProgress;
  