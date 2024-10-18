export default function EventPreview({
  selectedImage,
  backgroundPosition,
  eventName,
  eventDescription,
}: {
  selectedImage: string;
  backgroundPosition: { x: number; y: number };
  eventName: string;
  eventDescription: string;
}) {
  return (
    <div className="border p-10 flex-grow flex flex-col hidden md:block md:basis-[40%] lg:basis-[30%]">
      <h3 className="font-[700] text-[20px] mb-1">Preview</h3>
      <div className="border flex flex-col p-4 h-[300px] w-full rounded-[10px]">
        <div
          className="h-[200px] border bg-cover bg-center rounded-[10px] overflow-hidden"
          style={{
            backgroundImage: `url("${selectedImage}")`,
            backgroundPosition: `${backgroundPosition.x}% ${backgroundPosition.y}%`,
          }}
        ></div>
        <div className="flex items-center justify-between pt-3 relative">
          <div className="mr-12">
            <h4 className="text-xl font-bold line-clamp-1">{eventName}</h4>
            <p className="text-[15px] line-clamp-2">{eventDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
