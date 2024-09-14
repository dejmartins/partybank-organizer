import useDrag from '@/app/lib/actions';

interface CoverImageUploadProps {
  selectedImage: string;
  backgroundPosition: { x: number; y: number };
  onImageChange: (image: string) => void;
  onPositionChange: (position: { x: number; y: number }) => void;
}

export default function CoverImageUpload({
    selectedImage,
    backgroundPosition,
    onImageChange,
    onPositionChange,
  }: CoverImageUploadProps ) {

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      onImageChange(imageUrl);
    }
  };

  const handleDrag = useDrag((x, y) => {
    onPositionChange({ x, y });
  });

  return (
    <div>
        <h2 className='font-[700] text-[20px] mb-1'>Add Cover</h2>

        <p className='mb-2'>
            Upload a high-quality image to represent your collection at the top of the page and in ad campaigns.
        </p>

        <div
            className="relative border border-dashed border-[var(--pb-c-soft-grey)] rounded-lg h-[180px] md:h-[250px] flex items-center justify-center bg-cover bg-center cursor-grab"
            style={{
            backgroundImage: `url("${selectedImage}")`,
            backgroundPosition: `${backgroundPosition.x}% ${backgroundPosition.y}%`
            }}
            onMouseDown={handleDrag}
        >
            <input
            type="file"
            accept="image/*"
            className="absolute inset-0 opacity-0 cursor-pointer"
            onChange={handleImageChange}
            />
            <button className="bg-[#F8F9F9] border-2 border-[#E2DEDE] text-black px-6 py-2 rounded-[20px]">
            Add a series image
            </button>
        </div>
    </div>
  );
};
