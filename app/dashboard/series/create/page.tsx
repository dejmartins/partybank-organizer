"use client";
import { useEffect, useState } from "react";
import { BackButton } from "@/app/ui/series/buttons";
import { CreateSeries } from "@/app/ui/series/buttons";
import Preview from "@/app/ui/series/preview";
import SeriesDetails from "@/app/ui/series/series-details";
import CoverImageUpload from "@/app/ui/series/cover-image";
import Loader from "@/app/ui/loaders/loader";
import { createSeries } from "@/services/series-services/series-service";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { uploadToCloudinary } from "@/shared/utils/helper";
import useAuth from "@/shared/hooks/useAuth";

export default function Page() {
  const { USER } = useAuth();
  const [isLoaderModalOpen, setIsLoaderModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("/defaultImage.png");
  const [selectedFile, setselectedFile] = useState<any>({});
  const [backgroundPosition, setBackgroundPosition] = useState({
    x: 50,
    y: 50,
  });
  const [seriesName, setSeriesName] = useState("Series Name");
  const [seriesDescription, setSeriesDescription] = useState("Add Description");
  const [isFormValid, setisFormValid] = useState(false);

  const router = useRouter();

  const handleCreateSeries = async () => {
    setIsLoaderModalOpen(true);
    const url = await uploadToCloudinary(selectedFile, "event_image");
    if (url) {
      const payload = {
        description: seriesDescription,
        image_url: url,
        name: seriesName,
        organizer_id: USER.id,
        series_logo: url,
      };

      createSeries(payload).subscribe({
        next: (res) => {
          if (res) {
            console.log(res);
            toast.success(res.data.message);
            router.push("/dashboard/series");
          } else {
            toast.info(res.error);
          }
        },
        error: (msg) => {
          toast.error(msg.message);
          setIsLoaderModalOpen(false);
        },
        complete: () => {
          setIsLoaderModalOpen(false);
        },
      });
    }
  };

  const handleValidation = () => {
    const isValid =
      seriesName.length > 2 &&
      seriesDescription.length > 5 &&
      selectedImage.length > 5;
    setisFormValid(isValid);
  };

  useEffect(() => {
    handleValidation();
  }, [seriesName, seriesDescription, selectedImage]);

  return (
    <>
      <div className="flex flex-col min-h-[calc(100vh-170px)] border-[var(--pb-c-soft-grey)]">
        <div className="sticky top-0 z-10 w-full">
          <div className="inline-block md:hidden bg-[var(--pb-c-soft-grey)] w-full px-6 py-3">
            <h3 className="font-[700] text-[25px]">Series</h3>
          </div>

          <div className="flex items-center py-3 px-6 justify-between border-0 border-b-[3px] border-[var(--pb-c-soft-grey)]">
            <div className="flex items-center gap-7">
              <BackButton href="/dashboard/series" />
              <p className="text-[23px] md:text-[30px] md:font-[700]">
                Create Series
              </p>
            </div>
            <div
              className="hidden md:block"
              onClick={() => {
                if (isFormValid) {
                  handleCreateSeries();
                }
              }}
            >
              <CreateSeries
                className={`w-[210px] h-[40px] ${
                  isFormValid == false &&
                  "cursor-none bg-[#fdbeca] text-white border-none"
                }`}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-grow overflow-hidden">
          <Preview
            selectedImage={selectedImage}
            backgroundPosition={backgroundPosition}
            seriesName={seriesName}
            seriesDescription={seriesDescription}
          />

          <div className="border-0 md:border-l border-[var(--pb-c-soft-grey)] flex-grow overflow-y-auto p-6 max-h-[calc(100vh-170px)] md:basis-[60%] lg:basis-[70%]">
            <CoverImageUpload
              selectedImage={selectedImage}
              backgroundPosition={backgroundPosition}
              onImageChange={setSelectedImage}
              onPositionChange={setBackgroundPosition}
              setselectedFile={setselectedFile}
            />

            <SeriesDetails
              seriesName={seriesName}
              seriesDescription={seriesDescription}
              onSeriesNameChange={(e) => setSeriesName(e.target.value)}
              onSeriesDescriptionChange={(e) =>
                setSeriesDescription(e.target.value)
              }
            />

            <CreateSeries className="w-full h-[40px] my-10 block md:hidden" />
          </div>
        </div>
      </div>

      <Loader isOpen={isLoaderModalOpen} message="Creating your series" />
    </>
  );
}
