// // src/pages/FaqPage.jsx
// import { useState } from "react";

// export default function RetreatGrouping() {
//   const [activeTab, setActiveTab] = useState("group");

//   return (
//     <div className="p-4">
//       <div className="base-title mb-4">
//         <h2 className="text-xl font-bold">조 & 방배정</h2>
//       </div>
//       <p className="mb-6 text-gray-700">
//         공지된 방 배정 및 조 편성은 아래에서 확인해 주세요
//       </p>

//       {/* 탭 버튼 영역 */}
//       <div className="flex justify-center gap-4 mb-6">
//         <button
//           onClick={() => setActiveTab("group")}
//           className={`flex-1 py-3 px-6 rounded-full text-lg font-semibold transition-all duration-200
//       ${
//         activeTab === "group"
//           ? "bg-blue-500 text-white shadow-md scale-105"
//           : "bg-gray-200 text-gray-700 hover:bg-blue-100"
//       }`}
//         >
//           ✨ 조 배정
//         </button>

//         <button
//           onClick={() => setActiveTab("room")}
//           className={`flex-1 py-3 px-6 rounded-full text-lg font-semibold transition-all duration-200
//       ${
//         activeTab === "room"
//           ? "bg-green-500 text-white shadow-md scale-105"
//           : "bg-gray-200 text-gray-700 hover:bg-green-100"
//       }`}
//         >
//           🏠 방 배정
//         </button>
//       </div>

//       {/* 탭 내용 */}
//       <div className="text-center">
//         {activeTab === "group" && (
//           <img
//             src={`${process.env.PUBLIC_URL}/img/timetale.webp`}
//             alt="조 배정"
//             className="tab-image w-full max-w-md mx-auto border rounded shadow"
//           />
//         )}
//         {activeTab === "room" && (
//           <img
//             src={`${process.env.PUBLIC_URL}/img/26년 수련회 포스터.webp`}
//             alt="방 배정"
//             className="tab-image w-full max-w-md mx-auto border rounded shadow"
//           />
//         )}
//       </div>
//     </div>
//   );
// }

// src/pages/FaqPage.jsx
import { useState } from "react";
import "../csses/RetreatGrouping.css"; // CSS 파일 불러오기

export default function RetreatGrouping() {
  const [activeTab, setActiveTab] = useState("group");

  return (
    <div className="faq-container">
      <div className="base-title">
        <h2>조 & 방배정</h2>
      </div>
      <p className="description">
        공지된 방 배정 및 조 편성은 아래에서 확인해 주세요
      </p>

      {/* 탭 버튼 영역 */}
      <div className="tab-buttons">
        <button
          onClick={() => setActiveTab("group")}
          className={`tab-btn ${activeTab === "group" ? "active group" : ""}`}
        >
          ✨ 조 배정
        </button>
        <button
          onClick={() => setActiveTab("room")}
          className={`tab-btn ${activeTab === "room" ? "active room" : ""}`}
        >
          🏠 방 배정
        </button>
      </div>

      {/* 탭 내용 */}
      <div className="tab-content">
        {activeTab === "group" && (
          <img src="/img/timetale.webp" alt="조 배정" className="tab-image" />
        )}
        {activeTab === "room" && (
          <img
            src="/img/26년 수련회 포스터.webp"
            alt="방 배정"
            className="tab-image"
          />
        )}
      </div>
    </div>
  );
}
