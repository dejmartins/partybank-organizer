import CircularProgress from "@mui/material/CircularProgress";
type PropT = {
  isLoading?: boolean;
  color: string;
  size?: number;
};
const Spinner = ({ color = "#fff", size, isLoading }: PropT) => {
  return (
    <CircularProgress
      size={30}
      sx={{
        color: { color },
      }}
    />
  );
};

export default Spinner;
