import React, { useEffect } from "react";

// src/pages/LocationPage.jsx

/* NAVER MAP START */
export default function LocationPage() {
  const lat = 37.1638328;
  const lng = 126.9128482;
  const name = "청호인재개발원";

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://openapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=v9ud983xpo";
    script.async = true;
    script.onload = () => {
      // 1. 지도 생성 (Zoom 변경가능 )
      const map = new window.naver.maps.Map("map", {
        center: new window.naver.maps.LatLng(lat, lng),
        zoom: 18,
        mapTypeControl: true, // 지도 타입 선택 버튼
        zoomControl: true, // 줌 컨트롤 버튼
      });

      const marker = new window.naver.maps.Marker({
        position: new window.naver.maps.LatLng(lat, lng),
        map: map,
        title: name,
      });
      const infoWindow = new window.naver.maps.InfoWindow({
        content: `<div style="padding:5px;font-size:14px;">${name}</div>`,
      });
      infoWindow.open(map, marker);
    };
    document.head.appendChild(script);
  }, []);
  /* NAVER MAP EMD */

  //  앱 딥링크 → 실패 시 웹 URL fallback
  function openLink(appUrl, webUrl) {
    const isMobile = /Android|iPhone|iPad/i.test(navigator.userAgent);
    if (isMobile) {
      const timeout = setTimeout(() => {
        window.location.href = webUrl;
      }, 1000);
      window.location.href = appUrl;
      window.addEventListener("blur", () => {
        clearTimeout(timeout);
      });
    }
    //  else {
    //   // PC 환경에서는 바로 웹 URL로 이동
    //   window.location.href = webUrl;
    // }
  }

  return (
    <div style={{ margin: 10 }}>
      {/* TITLE */}
      <div className="base-title">
        <h2>오시는 길</h2>
      </div>
      {/* NAVER 위치 표현 */}
      <div
        id="map"
        style={{
          width: "100%",
          height: "30vh",
          borderRadius: "8px",
          border: "1px solid #ccc",
        }}
      ></div>
      <div
        style={{
          width: "100%",
          textAlign: "right",
        }}
      >
        {/* 하단 아이콘 */}
        <div
          style={{
            marginTop: "20px",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        ></div>
        {/* 네이버 지도 버튼 */}
        <button
          style={{
            backgroundColor: "#03C75A",
            color: "white",
            border: "none",
            borderRadius: "8px",
            padding: "12px 16px",
            fontSize: "14px",
            flex: 1,
            margin: "0 5px",
          }}
          onClick={() =>
            openLink(
              `nmap://place?lat=${lat}&lng=${lng}&name=${name}`,
              `https://map.naver.com/v5/search/${name}`
            )
          }
        >
          네이버 지도
        </button>
        {/* 카카오 지도 */}
        <button
          style={{
            backgroundColor: "#FFCD00",
            color: "#3C1E1E",
            border: "none",
            borderRadius: "8px",
            padding: "12px 16px",
            fontSize: "14px",
            flex: 1,
            margin: "0 5px",
          }}
          onClick={() =>
            openLink(
              `kakaomap://place?name=${name}&y=${lat}&x=${lng}`,
              `https://map.kakao.com/link/map/${name},${lat},${lng}`
            )
          }
        >
          카카오 지도
        </button>
        {/* Tmap 지도 */}
        <button
          style={{
            backgroundColor: "#E60012",
            color: "white",
            border: "none",
            borderRadius: "8px",
            padding: "12px 16px",
            fontSize: "14px",
            flex: 1,
            margin: "0 5px",
          }}
          onClick={() =>
            openLink(
              `tmap://route?goalx=${lng}&goaly=${lat}&goalname=${name}`,
              `https://apis.openapi.sk.com/tmap/app/routes?goalx=${lng}&goaly=${lat}`
            )
          }
        >
          Tmap
        </button>
      </div>
    </div>
  );
}
