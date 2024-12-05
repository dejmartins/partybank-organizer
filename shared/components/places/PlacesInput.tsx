import PlacesAutocomplete from "react-places-autocomplete";
import "./places.input.scss";
import Skeleton from "@mui/material/Skeleton";
import { useState } from "react";

const PlacesInput: React.FC<any> = ({
  value,
  handleAdressSearch,
  handleSelect,
  name,
  placeholder,
  disbl,
  autoComplete,
}) => {
  const [valuex, setvaluex] = useState("");
  return (
    <div className="relative">
      <PlacesAutocomplete
        value={valuex}
        onChange={(ev) => {
          console.log("heeer==>", ev);
          setvaluex(ev);
        }}
        onSelect={(val) => setvaluex(val)}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              name={name}
              {...getInputProps({
                placeholder: placeholder,
                disabled: disbl,
                autoComplete: autoComplete,
              })}
              className="p-4 outline-none"
            />
            <div className="autocomplete-dropdown-container">
              {loading && <Skeleton animation="wave" />}
              <div className="description-items">
                {suggestions.map((suggestion, index) => (
                  <div {...getSuggestionItemProps(suggestion)} key={index}>
                    <div className="items">{suggestion.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    </div>
  );
};

export default PlacesInput;
