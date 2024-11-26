import { Text } from "@mantine/core";
import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
// import { MapContainer } from "react-leaflet/MapContainer";
// import { TileLayer } from "react-leaflet/TileLayer";
// import { useMap } from "react-leaflet/hooks";
const Map = () => {
  const customIcon = new L.DivIcon({
    className: "custom-sun-icon h-20", // Custom class for styling
    html: `
     <div className="">
        <img
          src="https://image.freepik.com/free-vector/sun-icon-sunshine-symbol-solar-energy-sun-rays-sign_1150-13048.jpg"
          alt="sun"
          class="profile relative  z-10 left-[-12px] bottom-[2px] h-14 aspect-square object-contain border-4 border-blue-500 bg-white rounded-full"
        />
        // <div className="  h-8 w-8 bg-blue-500  rotate-45"></div>
      </div>`,
    iconSize: [20, 20], // Total size of the icon (including arrow)
    iconAnchor: [15, 60], // Position of the anchor point
    popupAnchor: [0, -60], // Position of the popup
  });
  return (
    <div id="map" style={{ height: "100%" }}>
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={false}
        style={{
          height: "70vh",
          borderRadius: "10px",
          border: "1px solid #fefefe",
        }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={[51.505, -0.09]} icon={customIcon}>
          <Popup>
            <div>
              <Text className="bg-periwinkle-100 font-outfit">
                William jack
              </Text>
              <Text className="font-outfit text-semibold">On Break</Text>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
