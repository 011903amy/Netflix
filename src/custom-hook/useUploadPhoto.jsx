import { setError, setMessage } from "@/store/StoreAction";
import { StoreContext } from "@/store/StoreContext";
import React from "react";

const useUploadPhoto = (url) => {
  const [photo, setPhoto] = React.useState(null);
  const { dispatch } = React.useContext(StoreContext);
  const uploadPhoto = async () => {
    // if (photo) {
    //   const fd = new FormData();
    //   fd.append("photo", photo);
    //   const data = await fetchFormData(devApiUrl + url, fd);
    // }
  };
  const handleChangePhoto = (e) => {
    console.log(e.target.files[0]);
    if (!e.target.files[0]) {
      setPhoto("");
      dispatch(setError(false));
      dispatch(setMessage(""));
      return;
    }

    const img = e.target.files[0];
    if (img.size > 50000) {
      dispatch(setError(true));
      dispatch(
        setMessage(
          "Photo is too big. It should be less than 5Kb and 80x80px size for better result."
        )
      );
    } else {
      setPhoto(img);
      dispatch(setError(false));
    }
  };

  return { uploadPhoto, handleChangePhoto, photo };
};

export default useUploadPhoto;