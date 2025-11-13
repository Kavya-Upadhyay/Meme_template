export default function MemeCard({ meme }) {
  return (
    <div className="bg-white border border-gray-300 shadow rounded-lg p-4 hover:scale-105 duration-200">
      
      <div className="w-full h-60 flex items-center justify-center">
        <img 
          src={meme.url} 
          alt={meme.name} 
          className="max-h-full max-w-full object-contain rounded-md"
        />
      </div>

      <p className="mt-3 text-center font-semibold text-lg">{meme.name}</p>
    </div>
  );
}
