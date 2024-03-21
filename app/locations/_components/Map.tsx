"use client";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { MapProps } from "./LocationContainer";

interface Props {
	center: [number, number];
}


const Map = ({ center }: Props) => {
    return (
        <MapContainer
            center={center}
            zoom={12}
            className="h-full min-h-[320px] lg:min-w-[350px]"
        >
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={center}></Marker>
        </MapContainer>
    );
};

export default Map;
