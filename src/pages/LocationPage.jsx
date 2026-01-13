// src/pages/LocationPage.jsx
export default function LocationPage() {
  var lat = 37.1638328;
  var lng = 126.9128482;
  // var name = "청호인재개발원";

  // 앱 딥링크 → 실패 시 웹 URL로 fallback
  function openLink(appUrl, webUrl) {
    var timeout = setTimeout(function () {
      window.location.href = webUrl; // 앱 실행 실패 시 웹으로 이동
    }, 1000);

    window.location.href = appUrl;

    // 앱이 정상 실행되면 timeout 취소됨
    window.addEventListener("blur", function () {
      clearTimeout(timeout);
    });
  }

  return (
    <div>
      {" "}
      <h2>오시는 길</h2>
      {/*********** 네이버 지도 iframe - API로 변경 수정필요 */}
      <iframe
        title="네이버 지도"
        src={`https://map.naver.com/v5/search/${name}`}
        style={{ width: "100%", height: "500px", border: "none" }}
      ></iframe>
      <ul>
        {" "}
        <li>
          {" "}
          {/* PC 웹 브라우저에서는 바로 웹 URL로 이동 */}{" "}
          <a
            href={`https://map.naver.com/v5/search/${name}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            네이버 지도 (웹){" "}
          </a>{" "}
          {/* <button
            onClick={function () {
              openLink(
                "nmap://place?lat=" + lat + "&lng=" + lng + "&name=" + name,
                "https://map.naver.com/v5/search/" + name
              );
            }}
          >
            {" "}
            네이버 지도 (앱){" "}
          </button>{" "} */}
          <img
            src={`${process.env.PUBLIC_URL}/icons/NaverMap.webp`}
            // alt="네이버 지도"
            style={{ width: "60px", cursor: "pointer" }}
            onClick={function () {
              openLink(
                "nmap://place?lat=" + lat + "&lng=" + lng + "&name=" + name,
                "https://map.naver.com/v5/search/" + name
              );
            }}
          />
        </li>{" "}
        <li>
          {" "}
          <a
            href={`https://map.kakao.com/link/map/${name},${lat},${lng}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            카카오 지도 (웹){" "}
          </a>{" "}
          <button
            onClick={function () {
              openLink(
                "kakaomap://place?name=" + name + "&y=" + lat + "&x=" + lng,
                "https://map.kakao.com/link/map/" + name + "," + lat + "," + lng
              );
            }}
          >
            {" "}
            카카오 지도 (앱){" "}
          </button>{" "}
        </li>{" "}
        <li>
          {" "}
          <a
            href={`https://apis.openapi.sk.com/tmap/app/routes?goalx=${lng}&goaly=${lat}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Tmap (웹){" "}
          </a>{" "}
          <button
            onClick={function () {
              openLink(
                "tmap://route?goalx=" +
                  lng +
                  "&goaly=" +
                  lat +
                  "&goalname=" +
                  name,
                "https://apis.openapi.sk.com/tmap/app/routes?goalx=" +
                  lng +
                  "&goaly=" +
                  lat
              );
            }}
          >
            {" "}
            Tmap (앱){" "}
          </button>{" "}
        </li>{" "}
      </ul>{" "}
    </div>
  );
}
