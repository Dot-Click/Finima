import { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine";
import moment from "moment";

const ActivityMap = ({ locations }) => {
  const customIcon = new L.DivIcon({
    className: "custom-sun-icon h-20", // Custom class for styling
    html: `
     <div className="">
        <img
          src="https://img.freepik.com/free-photo/man-painting-walls-yellow_53876-146573.jpg"
          alt="sun"
          class="profile relative  z-[999999] left-[-12px] bottom-[-10px] h-14 !w-14 aspect-square object-cover border-4 border-white bg-white rounded-full hover:border-blue-500"
        />
         <div className="  h-8 w-8 bg-blue-500  rotate-45"></div>
      </div>`,
    iconSize: [20, 20], // Total size of the icon (including arrow)
    iconAnchor: [15, 60], // Position of the anchor point
    popupAnchor: [0, -60], // Position of the popup
  });
  const [waypoints, SetWaypoints] = useState();
  const mapRef = useRef(null);

  useEffect(() => {
    const resArray = locations?.map((item) => L.latLng(item?.coordinates));
    SetWaypoints(resArray);
  }, []);

  useEffect(() => {
    if (mapRef.current) {
      const map = mapRef.current;
      if (locations?.length > 0) {
        L.Routing.control({
          waypoints,

          routeWhileDragging: false,
        })?.addTo(map);

        {
          locations?.map((item) => {
            fetch(
              `https://nominatim.openstreetmap.org/reverse?lat=${item?.coordinates[0]}&lon=${item?.coordinates[1]}&format=json`
            )
              .then((response) => response.json())
              .then((data) => {
                let marker = L.marker(item?.coordinates, {
                  icon: customIcon,
                  draggable: false,
                }).addTo(map);
                marker.bindPopup(
                  ` <div><p class="text-zinc-800 text-lg text-center bg-periwinkle-200 rounded-tl-xl rounded-tr-xl font-outfit !py-2 !px-6 !m-0 !font-semibold border-b border-slate-300 capitalize">${
                    item?.type
                  }</p><p class="text-slate-500 font-outfit !py-2 !px-6  !m-0  !text-center  ">${
                    item?.type === "start"
                      ? moment(item?.checkin).format("LT")
                      : item?.type === "break"
                      ? moment(item?.breakStart).format("LT")
                      : moment(item?.checkout).format("LT")
                  }</p><p class="text-slate-500 font-outfit !pb-2 !px-6  !m-0  text-center  ">${
                    data?.display_name
                  }</p></div>`
                );
              })
              .catch((error) => {
                console.error("Error in reverse geocoding:", error);
              });
          });
        }

        // let startMarkup = L.marker(currentLocation?.startPoint, {
        //   icon: customIcon,
        //   draggable: false,
        // }).addTo(map);

        // let endMarkup = L.marker(currentLocation?.endPoint, {
        //   icon: customIcon,
        //   draggable: false,
        // }).addTo(map);

        // endMarkup
        //   .bindPopup(
        //     `<div><p  class="!text-zinc-800 !text-lg !text-center bg-periwinkle-200 rounded-tl-xl rounded-tr-xl font-outfit !py-2 !px-6 !m-0 !font-semibold border-b border-slate-300">On Break</p><p class="text-slate-500 font-outfit !py-2 !px-6  !m-0  !text-center  ">02:00 PM</p><p class="text-slate-500 font-outfit !pb-2 !px-6  !m-0  text-center  ">ABC Street Location</p></div>`
        //   )
        //   .openPopup();

        // startMarkup
        //   .bindPopup(
        //     ' <div><p class="text-zinc-800 text-lg text-center bg-periwinkle-200 rounded-tl-xl rounded-tr-xl font-outfit !py-2 !px-6 !m-0 !font-semibold border-b border-slate-300">On Break</p><p class="text-slate-500 font-outfit !py-2 !px-6  !m-0  !text-center  ">02:00 PM</p><p class="text-slate-500 font-outfit !pb-2 !px-6  !m-0  text-center  ">ABC Street Location</p></div>'
        //   )
        //   .openPopup();
      }
    }
  }, [mapRef, locations?.length, waypoints]);

  return (
    <div id="map" style={{ height: "100%" }}>
      <MapContainer
        center={locations[0]?.coordinates}
        zoom={100}
        scrollWheelZoom={true}
        loadingControl={true}
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
