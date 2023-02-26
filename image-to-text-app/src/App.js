
import "./App.css";
import { useEffect, useRef, useState } from "react";
import Tesseract from "tesseract.js";
import React from "react";
import { Cropper } from "react-advanced-cropper";
import "react-advanced-cropper/dist/style.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Lottie from "lottie-react";
import loadingAnim from "./assets/loading.json";

function App() {
  const CropperRef = useRef();
  const [image, setImage] = useState("");
  const [check, setCheck] = useState(true);
  const [croppedImage, setCroppedImage] = useState();
  const [checkCrop, setCheckCrop] = useState(true);

  const [ocr, setOcr] = useState("");

  const handleCapture = async () => {
    const stream = await navigator.mediaDevices.getDisplayMedia({
      video: { cursor: "always" },
    });

    const [track] = stream.getVideoTracks();
    const image = new ImageCapture(track);

    const bitmap = await image.grabFrame();
    track.stop();

    const canvas = document.getElementById("screenshot");
    console.log(canvas);
    canvas.width = bitmap.width;
    canvas.height = bitmap.height;

    const context = canvas.getContext("2d");

    context.drawImage(bitmap, 0, 0, bitmap.width, bitmap.height);

    const img = canvas.toDataURL();
    const res = await fetch(img);
    const buff = await res.arrayBuffer();

    setImage(img);
    setCheck(false);
  };

  useEffect(() => {
    handleCapture();
  }, []);
  const handleCrop = async () => {
    await setCroppedImage(CropperRef.current.getCanvas()?.toDataURL());
    const img = await CropperRef.current.getCanvas()?.toDataURL();
    await setCheckCrop(false);

    await Tesseract.recognize(img, "eng", {
      logger: (m) => console.log(m),
    }).then(({ data: { text } }) => {
      setOcr(text);
    });
  };

  const copyAlert = () => {
    alert("Copied");
  };
  return (
    <div className="App">
      {check && <h1 className="title">Image To Text</h1>}
      {check && <canvas id="screenshot"></canvas>}

      {checkCrop && (
        <div className="cropShape">
          {!check && (
            <input
              className="cropBtn"
              type="button"
              defaultValue="CROP"
              onClick={handleCrop}
            />
          )}
          <Cropper ref={CropperRef} src={image} className={"cropper"} />
        </div>
      )}

      {croppedImage && (
        <div>
          {ocr ? (
            <div>
              <h1 className="title">Your Text is Ready !!!</h1>
              <CopyToClipboard
                text={ocr}
                onCopy={() => setOcr(ocr, { copied: true })}
              >
                <input
                  type="button"
                  className="copyBtn"
                  value="Copy Text"
                  onClick={copyAlert}
                />
              </CopyToClipboard>
              <div className="croppedDiv">
                <img alt="croppedImage" className="img" src={croppedImage} />
                <textarea className="tArea" defaultValue={ocr} />
              </div>
            </div>
          ) : (
            <Lottie animationData={loadingAnim} loop={true} />
          )}
        </div>
      )}
      {check && <h1 className="choose">Choose The Tab to Take Screenshot</h1>}
    </div>
  );
}

export default App;
