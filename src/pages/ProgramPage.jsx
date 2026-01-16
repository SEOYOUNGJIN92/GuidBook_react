// src/pages/ProgramPage.jsx
export default function ProgramPage() {
  return (
    <div className="p-4">
      <div className="base-title">
        <h2>프로그램 시간표</h2>{" "}
      </div>
      <img
        src={`${process.env.PUBLIC_URL}/img/timetale.webp`}
        alt="수련회 시간표"
        className="w-full max-w-md mx-auto border rounded shadow responsive-img"
      />
    </div>
  );
}
