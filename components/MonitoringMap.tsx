"use client";

import { useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const MonitoringMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Ensure this code runs only on the client
    if (typeof window !== "undefined" && mapRef.current) {
      // Initialize the Leaflet map
      const map = L.map(mapRef.current).setView([51.505, -0.09], 13);

      // Add OpenStreetMap tiles
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      // Add sample markers
      L.marker([51.5, -0.09])
        .addTo(map)
        .bindPopup("Network Node 1<br>Status: Good");
      L.marker([51.51, -0.1])
        .addTo(map)
        .bindPopup("Network Node 2<br>Status: Warning");
      L.marker([51.49, -0.08])
        .addTo(map)
        .bindPopup("Network Node 3<br>Status: Critical");

      // Clean up on unmount
      return () => {
        map.remove();
      };
    }
  }, []);

  return (
    <Card className="w-full h-[600px]">
      <CardHeader>
        <CardTitle>Real-Time Monitoring Map</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        {/* Map container */}
        <div ref={mapRef} className="w-full h-full" />
      </CardContent>
    </Card>
  );
};

export default MonitoringMap;
