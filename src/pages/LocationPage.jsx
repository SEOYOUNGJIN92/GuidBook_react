import React, { useEffect } from "react";

// src/pages/LocationPage.jsx
function LocationPage() {
  const lat = 37.5665;
  const lng = 126.978;
  const name = "서울시청";
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=v9ud983xpo";
    script.async = true;
    script.onload = () => {
      const map = new window.naver.maps.Map("map", {
        center: new window.naver.maps.LatLng(lat, lng),
        zoom: 15,
      });
      new window.naver.maps.Marker({
        position: new window.naver.maps.LatLng(lat, lng),
        map: map,
        title: name,
      });
    };
    document.head.appendChild(script);
  }, []);
  return (
    <div>
      {" "}
      <h2>오시는 길</h2>{" "}
      <div
        id="map"
        style={{ width: "100%", height: "400px", border: "1px solid #ccc" }}
      ></div>{" "}
    </div>
  );
}

export default LocationPage;
