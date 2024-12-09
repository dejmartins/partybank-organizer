import React from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import Skeleton from "@mui/material/Skeleton";
import { IoLocationOutline } from "react-icons/io5";
import "./event-places-input.scss";

interface EventPlacesInputProps {
  value: string;
  handleGeoCode: (data: any) => void;
  handleSelect: (address: any) => void;
  name: string;
  placeholder: string;
  disbl?: boolean;
  autoComplete?: string;
}

const EventPlacesInput: React.FC<EventPlacesInputProps> = ({
  value,
  handleGeoCode,
  handleSelect,
  name,
  placeholder,
  disbl,
  autoComplete,
}) => {
  const handleGeoSelect = (address: string) => {
    geocodeByAddress(address)
      .then((results) => {
        const place = results[0];
        const formatted_address = place.formatted_address;

        // console.log("form-ad", place);
        // console.log("address", formatted_address);
        return getLatLng(place).then((latLng) => ({
          latLng,
          address_components: place.address_components,
        }));
      })
      .then((data) => {
        const { latLng, address_components } = data;

        // console.log("Event Details:", { latLng, address_components });

        const details = {
          street:
            address_components.find((c: any) => c.types.includes("route"))
              ?.long_name || "",
          streetNumber:
            address_components.find((c: any) =>
              c.types.includes("street_number")
            )?.long_name || "",
          city:
            address_components.find((c: any) => c.types.includes("locality"))
              ?.long_name || "",
          state:
            address_components.find((c: any) =>
              c.types.includes("administrative_area_level_1")
            )?.long_name || "",
          country:
            address_components.find((c: any) => c.types.includes("country"))
              ?.long_name || "",
          postalCode:
            address_components.find((c: any) => c.types.includes("postal_code"))
              ?.long_name || "",
          lat: latLng.lat,
          lng: latLng.lng,
        };

        handleGeoCode({ ...latLng, address, ...details });
        handleSelect({ ...latLng, address, ...details });
      })
      .catch((error) => console.error("Error fetching place details:", error));
  };

  return (
    <div className="relative">
      <div className="w-full  h-20 p-4 flex items-center border border-partybank-border rounded-lg cursor-pointer">
        <div className="flex items-center gap-x-2 w-full">
          <IoLocationOutline size={20} />
          <PlacesAutocomplete
            value={value}
            onChange={(ev) => handleSelect(ev)}
            onSelect={(val) => handleGeoSelect(val)}
          >
            {({
              getInputProps,
              suggestions,
              getSuggestionItemProps,
              loading,
            }) => (
              <div className="w-full">
                <input
                  name={name}
                  required
                  {...getInputProps({
                    placeholder: placeholder,
                    disabled: disbl,
                    autoComplete: "off",
                  })}
                  className="p-4 outline-none placeholder:text-partybank-text-black w-full"
                />
                <div className="autocomplete-dropdown-container">
                  {loading && <Skeleton animation="wave" />}
                  <div className="description-items">
                    {suggestions.map((suggestion, index) => (
                      <div
                        {...getSuggestionItemProps(suggestion)}
                        key={index}
                        className="items"
                      >
                        {suggestion.description}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </PlacesAutocomplete>
        </div>
      </div>
    </div>
  );
};

export default EventPlacesInput;
