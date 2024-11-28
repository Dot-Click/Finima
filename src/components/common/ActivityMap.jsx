import React, { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";

import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine";

const CustomPopover = () => {
  return (
    <div>
      <p className="!text-zinc-800 !text-lg text-center bg-periwinkle-200 rounded-tl-xl rounded-tr-xl font-outfit !py-2 !px-6 !m-0 !font-semibold border-b border-slate-300">
        On Break
      </p>
      <p className="text-slate-500 font-outfit !py-2 !px-6  !m-0  text-center  ">
        02:00 PM
      </p>
      <p className="text-slate-500 font-outfit !pb-2 !px-6  !m-0  text-center  ">
        ABC Street Location
      </p>
    </div>
  );
};

const ActivityMap = () => {
  const customIcon = new L.DivIcon({
    className: "custom-sun-icon h-20", // Custom class for styling
    html: `
     <div className="">
        <img
          src="https://s3-alpha-sig.figma.com/img/b5bb/1dd6/cf2dcb99654a76e152bcc48e9be1b877?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FCACS8QydFQhaZsLuOA~U26OesZZEGJl1shda9jM2EKLOxMymlyf87ecPlzE7IjDWo0MPDbqY2fBjiCo6wS-g4Gnyp0ygMgFk0fyhkCKYxBoBYpC2SyBtzPb~rDBax0dmvpt4D4vXBZO0xGp~~-lMt7VNfqtGZM74h3BoH6L7FjJn9KcQg~80Fn1G1~krhBi-hBoTs4N11JRyA-FDvWmM2yej0W8haJv4QXd2a8EJS2Ytfb5KXzKv~6aA01AyHqXBABx5JIf7f1NpdXeEJoxWaYqCzpkXceylwNXBhn01qvAQ-uKDkWh3xnKOhb731RiqkB0p5V3pJ4oFMBCe3OM2Q__"
          alt="sun"
          class="profile relative  z-[999999] left-[-12px] bottom-[-10px] h-14 !w-14 aspect-square object-cover border-4 border-white bg-white rounded-full hover:border-blue-500"
        />
         <div className="  h-8 w-8 bg-blue-500  rotate-45"></div>
      </div>`,
    iconSize: [20, 20], // Total size of the icon (including arrow)
    iconAnchor: [15, 60], // Position of the anchor point
    popupAnchor: [0, -60], // Position of the popup
  });

  const [currentLocation, setCurrentLocation] = useState({
    startPoint: [],
    endPoint: [],
  });
  const mapRef = useRef(null);

  useEffect(() => {
    setCurrentLocation({
      startPoint: [51.521291540784794, -0.14259696006774905],
      endPoint: [51.52196202695113, -0.1424306631088257],
    });
  }, []);
  useEffect(() => {
    if (mapRef.current) {
      const map = mapRef.current;
      if (currentLocation?.startPoint && currentLocation?.endPoint) {
        let routeControl = L.Routing.control({
          waypoints: [
            L.latLng(
              currentLocation?.startPoint[0],
              currentLocation?.startPoint[1]
            ),
            L.latLng(
              currentLocation?.endPoint[0],
              currentLocation?.endPoint[1]
            ),
          ],

          routeWhileDragging: false,
        })?.addTo(map);

        let startMarkup = L.marker(currentLocation?.startPoint, {
          icon: customIcon,
          draggable: false,
        }).addTo(map);

        let endMarkup = L.marker(currentLocation?.endPoint, {
          icon: customIcon,
          draggable: false,
        }).addTo(map);

        endMarkup
          .bindPopup(
            `<div><p  class="!text-zinc-800 !text-lg !text-center bg-periwinkle-200 rounded-tl-xl rounded-tr-xl font-outfit !py-2 !px-6 !m-0 !font-semibold border-b border-slate-300">On Break</p><p class="text-slate-500 font-outfit !py-2 !px-6  !m-0  !text-center  ">02:00 PM</p><p class="text-slate-500 font-outfit !pb-2 !px-6  !m-0  text-center  ">ABC Street Location</p></div>`
          )
          .openPopup();

        startMarkup
          .bindPopup(
            ' <div><p class="text-zinc-800 text-lg text-center bg-periwinkle-200 rounded-tl-xl rounded-tr-xl font-outfit !py-2 !px-6 !m-0 !font-semibold border-b border-slate-300">On Break</p><p class="text-slate-500 font-outfit !py-2 !px-6  !m-0  !text-center  ">02:00 PM</p><p class="text-slate-500 font-outfit !pb-2 !px-6  !m-0  text-center  ">ABC Street Location</p></div>'
          )
          .openPopup();
      }
    }
  }, [mapRef, currentLocation]);

  return (
    <div id="map" style={{ height: "100%" }}>
      <MapContainer
        center={[51.5218185, -0.1424571]}
        zoom={100}
        scrollWheelZoom={true}
        ref={mapRef}
        style={{
          height: "58vh",
          borderRadius: "10px",
          border: "1px solid #fefefe",
        }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* <Polyline pathOptions={limeOptions} positions={polylineCoordinates} /> */}

        {/* <Marker
          position={[51.5216758, -0.1428353]}
          draggable={true}
          icon={customIcon}
          title="William jack"
          riseOnHover={true}
        >
          <Popup>
            <div>
              <Text className=" font-outfit !font-bold !px-4 border-b border-slate-300">
                William jack
              </Text>

              <Text className="font-outfit font-semibold  !px-4">On Break</Text>
            </div>
          </Popup>
        </Marker>
        <Marker
          position={[51.5218185, -0.1424571]}
          icon={customIcon}
          draggable={true}
          title="William jack"
          riseOnHover={true}
        >
          <Popup>
            <div>
              <Text className=" font-outfit !font-bold !px-4 border-b border-slate-300">
                William jack
              </Text>

              <Text className="font-outfit font-semibold  !px-4">On Break</Text>
            </div>
          </Popup>
        </Marker> */}
      </MapContainer>
    </div>
  );
};

export default ActivityMap;
