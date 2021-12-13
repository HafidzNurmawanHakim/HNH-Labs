import Axios from "axios";
import React, { useState } from "react";
import { Title, Button, Label, Textarea, Gap } from "../../components";
import Spec from "../../components/molecule/spek";
import "./createDevicePost.css";

const CreateDevicePost = (e) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState([""]);
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [typeBrand, setTypeBrand] = useState("");
  const [status, setStatus] = useState("");
  const [time, setTime] = useState("");
  const [price, setPrice] = useState("");
  const [technology, setTechnology] = useState("");
  const [wifi, setWifi] = useState("");
  const [sim, setSim] = useState("");
  const [dimension, setDimension] = useState("");
  const [weight, setWeight] = useState("");
  const [material, setMaterial] = useState("");
  const [displayType, setDisplayType] = useState("");
  const [size, setSize] = useState("");
  const [resolution, setResolution] = useState("");
  const [protection, setProtection] = useState("");
  const [os, setOs] = useState("");
  const [chipset, setChipset] = useState("");
  const [cpu, setCpu] = useState("");
  const [gpu, setGpu] = useState("");
  const [eksternal, setEksternal] = useState("");
  const [internal, setInternal] = useState("");
  const [cameraType, setCameraType] = useState("");
  const [feature, setFeature] = useState("");
  const [video, setVideo] = useState("");
  const [soundType, setSoundType] = useState("");
  const [speaker, setSpeaker] = useState("");
  const [input, setInput] = useState("");
  const [bluetooth, setBluetooth] = useState("");
  const [gps, setGps] = useState("");
  const [nfc, setNfc] = useState("");
  const [sensor, setSensor] = useState("");
  const [batteryType, setBatteryType] = useState("");

  const onSubmit = () => {
    const data = new FormData();

    [...image].forEach((file) => {
      console.log("file>", file);
      data.append("image", file);
    });

    data.append("title", title);
    data.append("body", body);
    data.append("category", category);
    data.append("brand", brand);
    data.append("type_brand", typeBrand);
    data.append("status", status);
    data.append("time", time);
    data.append("price", price);
    data.append("technology", technology);
    data.append("wifi", wifi);
    data.append("sim", sim);
    data.append("dimension", dimension);
    data.append("weight", weight);
    data.append("material", material);
    data.append("display_type", displayType);
    data.append("size", size);
    data.append("resolution", resolution);
    data.append("protection", protection);
    data.append("os", os);
    data.append("chipset", chipset);
    data.append("cpu", cpu);
    data.append("gpu", gpu);
    data.append("eksternal", eksternal);
    data.append("internal", internal);
    data.append("camera_type", cameraType);
    data.append("feature", feature);
    data.append("sound_type", soundType);
    data.append("speaker", speaker);
    data.append("input", input);
    data.append("bluetooth", bluetooth);
    data.append("gps", gps);
    data.append("nfc", nfc);
    data.append("sensor", sensor);
    data.append("battery_type", batteryType);

    console.log("form data>>>", data);
    Axios.post("http://localhost:4000/create-device-post", data, {
      headers: {
        "content-type": "multipart/form-data",
      },
    })
      .then((result) => {
        console.log("Post Success!", result);
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  };

  return (
    <div id="create-post">
      <div className="create-post-title">
        <Title title="Create Device Post" />
      </div>
      <Gap height={30} />
      <div className="input-area">
        <div className="left-side">
          <div className="row">
            <Title title="Content" className="spec-title" />
            <Spec label="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <div className="spec-wrapper">
              <div className="label-wrapper">
                <Label label="Body" />
              </div>

              <Textarea value={body} onChange={(e) => setBody(e.target.value)} />
            </div>
            <Spec label="Image" type="file" multiple="multiple" onChange={(e) => setImage(e.target.files)} />
          </div>
          <div className="row">
            <Title title="Category" />
            <Spec label="Category" value={category} onChange={(e) => setCategory(e.target.value)} />
            <Spec label="Brand" value={brand} onChange={(e) => setBrand(e.target.value)} />
            <Spec label="Type Brand" value={typeBrand} onChange={(e) => setTypeBrand(e.target.value)} />
          </div>

          <div className="row">
            <Title title="Realese" />
            <Spec label="Status" value={status} onChange={(e) => setStatus(e.target.value)} />
            <Spec label="Time" value={time} onChange={(e) => setTime(e.target.value)} />
            <Spec label="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
          </div>

          <div className="row">
            <Title title="Network" />
            <Spec label="Technology" value={technology} onChange={(e) => setTechnology(e.target.value)} />
            <Spec label="WiFi" value={wifi} onChange={(e) => setWifi(e.target.value)} />
            <Spec label="SIM" value={sim} onChange={(e) => setSim(e.target.value)} />
          </div>

          <div className="row">
            <Title title="Body" />
            <Spec label="Dimension" value={dimension} onChange={(e) => setDimension(e.target.value)} />
            <Spec label="Weight" value={weight} onChange={(e) => setWeight(e.target.value)} />
            <Spec label="Material" value={material} onChange={(e) => setMaterial(e.target.value)} />
          </div>

          <div className="row">
            <Title title="Display" />
            <Spec label="Display Type" value={displayType} onChange={(e) => setDisplayType(e.target.value)} />
            <Spec label="Size" value={size} onChange={(e) => setSize(e.target.value)} />
            <Spec label="Resolution" value={resolution} onChange={(e) => setResolution(e.target.value)} />
            <Spec label="Protection" value={protection} onChange={(e) => setProtection(e.target.value)} />
          </div>
        </div>

        <div className="right-side">
          <div className="row">
            <Title title="Platform" />
            <Spec label="OS" value={os} onChange={(e) => setOs(e.target.value)} />
            <Spec label="Chipset" value={chipset} onChange={(e) => setChipset(e.target.value)} />
            <Spec label="CPU" value={cpu} onChange={(e) => setCpu(e.target.value)} />
            <Spec label="GPU" value={gpu} onChange={(e) => setGpu(e.target.value)} />
          </div>
          <div className="row">
            <Title title="Memory" />
            <Spec label="Eksternal" value={eksternal} onChange={(e) => setEksternal(e.target.value)} />
            <Spec label="Internal" value={internal} onChange={(e) => setInternal(e.target.value)} />
          </div>

          <div className="row">
            <Title title="Camera" />
            <Spec label="Camera Type" value={cameraType} onChange={(e) => setCameraType(e.target.value)} />
            <Spec label="Feature" value={feature} onChange={(e) => setFeature(e.target.value)} />
            <Spec label="Video" value={video} onChange={(e) => setVideo(e.target.value)} />
          </div>

          <div className="row">
            <Title title="Sound" />
            <Spec label="Sound Type" value={soundType} onChange={(e) => setSoundType(e.target.value)} />
            <Spec label="Speaker" value={speaker} onChange={(e) => setSpeaker(e.target.value)} />
            <Spec label="Input" value={input} onChange={(e) => setInput(e.target.value)} />
          </div>
          <div className="row">
            <Title title="Comms" />
            <Spec label="Bluetooth" value={bluetooth} onChange={(e) => setBluetooth(e.target.value)} />
            <Spec label="GPS" value={gps} onChange={(e) => setGps(e.target.value)} />
            <Spec label="NFC" value={nfc} onChange={(e) => setNfc(e.target.value)} />
          </div>

          <div className="row">
            <Title title="Feature" />
            <Spec label="Sensor" value={sensor} onChange={(e) => setSensor(e.target.value)} />
          </div>

          <div className="row">
            <Title title="Battery" />
            <Spec label="Type" value={batteryType} onChange={(e) => setBatteryType(e.target.value)} />
          </div>
        </div>
      </div>
      <div className="create-btn-wrapper">
        <Button title="Create" onClick={onSubmit} />
      </div>
    </div>
  );
};

export default CreateDevicePost;
