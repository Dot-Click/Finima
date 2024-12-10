import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const Map = () => {
  const customIcon = new L.DivIcon({
    className: "custom-sun-icon h-20", // Custom class for styling
    html: `
     <div className="">
        <img
          src="https://img.freepik.com/free-photo/man-painting-walls-yellow_53876-146573.jpg"
          alt="sun"
          class="profile relative  z-10 left-[-12px] bottom-[2px] h-14 !w-14 aspect-square object-cover border-4 border-white bg-white rounded-full hover:border-blue-500"
        />
         <div className="  h-8 w-8 bg-blue-500  rotate-45"></div>
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
              <p className=" bg-periwinkle-200 rounded-tl-xl rounded-tr-xl font-outfit !py-2 !px-6 !m-0 !font-semibold border-b border-slate-300">
                William jack
              </p>

              <p className="font-outfit !py-2 !px-6  !m-0 !font-semibold text-center  ">
                On Break
              </p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
