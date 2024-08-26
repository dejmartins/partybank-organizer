export default function Card(
    { imageUrl, name, description }: {imageUrl: string, name: string, description: string }) {
    return (
        <div>
            <img src={imageUrl} alt={name} className="w-full h-auto rounded-md" />
            <h4 className="mt-4 text-xl font-bold">{name}</h4>
            <p className="mt-2 text-md">{description}</p>
        </div>
    )
}