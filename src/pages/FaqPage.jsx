// src/pages/FaqPage.jsx
export default function FaqPage() {
  return (
    <div className="p-4">
      {" "}
      <h1 className="text-xl font-bold mb-4">FAQ / 문의</h1>{" "}
      <h2 className="font-semibold">자주 묻는 질문</h2>{" "}
      <ul className="list-disc pl-5 mb-4">
        {" "}
        <li>숙소는 어떻게 배정되나요?</li> <li>식사는 제공되나요?</li>{" "}
      </ul>{" "}
      <h2 className="font-semibold">문의</h2>{" "}
      <p>담당자: 홍길동 (010-1234-5678)</p>{" "}
    </div>
  );
}
