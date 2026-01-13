// src/pages/ProgramPage.jsx
export default function ProgramPage() {
  return (
    <div className="p-4">
      {/* <h1 className="text-xl font-bold mb-4">프로그램 안내</h1>
      <p className="mb-4">아래는 수련회 시간표입니다.</p> */}
      <img
        src={`${process.env.PUBLIC_URL}/img/timetale.webp`}
        alt="수련회 시간표"
        className="w-full max-w-md mx-auto border rounded shadow responsive-img"
      />
    </div>
  );
}
