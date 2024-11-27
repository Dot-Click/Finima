import { Divider, Text } from "@mantine/core";
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
          src="https://s3-alpha-sig.figma.com/img/b5bb/1dd6/cf2dcb99654a76e152bcc48e9be1b877?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FCACS8QydFQhaZsLuOA~U26OesZZEGJl1shda9jM2EKLOxMymlyf87ecPlzE7IjDWo0MPDbqY2fBjiCo6wS-g4Gnyp0ygMgFk0fyhkCKYxBoBYpC2SyBtzPb~rDBax0dmvpt4D4vXBZO0xGp~~-lMt7VNfqtGZM74h3BoH6L7FjJn9KcQg~80Fn1G1~krhBi-hBoTs4N11JRyA-FDvWmM2yej0W8haJv4QXd2a8EJS2Ytfb5KXzKv~6aA01AyHqXBABx5JIf7f1NpdXeEJoxWaYqCzpkXceylwNXBhn01qvAQ-uKDkWh3xnKOhb731RiqkB0p5V3pJ4oFMBCe3OM2Q__"
          alt="sun"
          class="profile relative  z-10 left-[-12px] bottom-[2px] h-14 !w-14 aspect-square object-cover border-4 border-white bg-white rounded-full hover:border-blue-500"
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
        zoom={100}
        scrollWheelZoom={true}
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

        <Marker
          position={[51.505, -0.09]}
          icon={customIcon}
          title="William jack"
          riseOnHover={true}
        >
          <Popup>
            <div>
              <Text className=" font-outfit !font-bold border-b border-slate-300">
                William jack
              </Text>

              <Text className="font-outfit !font-semibold text-center !mt-[-10px] ">
                On Break
              </Text>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
