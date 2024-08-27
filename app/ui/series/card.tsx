export default function Card(
    { imageUrl, name, description }: { imageUrl: string | null, name: string, description: string }) {
  
    const backgroundImageUrl = imageUrl || '/defaultImage.png';

    return (
      <div className="border p-4 h-[320px] rounded-[10px]">
        <div className="h-[200px] border bg-cover bg-center rounded-[10px] overflow-hidden"
                style={{
                    backgroundImage: `url("${backgroundImageUrl}")`,
                }}
            >
        </div>
        <h4 className="mt-4 text-xl font-bold line-clamp-1">{name}</h4>
        <p className="text-[15px] line-clamp-2">{description}</p>
      </div>
    );
  }
  