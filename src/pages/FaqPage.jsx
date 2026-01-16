// src/pages/FaqPage.jsx
export default function FaqPage() {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">📋 청년 2부 수련회 최종 공지</h1>

      <h2 className="font-semibold mb-2">공지사항</h2>

      <p className="mb-4">
        안녕하세요, 청년 2부 여러분. 함께 쉼과 회복을 누릴 수련회가 곧
        다가옵니다. 원활한 진행을 위해 몇 가지 추가 안내사항을 전달드립니다.
      </p>

      <ul className="list-disc pl-5 space-y-4 mb-6 ">
        <li>
          🏠 <strong>방 배정 및 아침 식사 안내</strong>
          <br />
          이번 수련회 아침 식사는 각 방에서 룸메이트들과 함께 자유롭고 편안하게
          진행할 예정입니다. 방별로 준비된 식사 시간을 통해 더욱 깊은 교제의
          시간을 누리시길 바랍니다.
        </li>
        <li>
          🙏 <strong>예배 및 모임 준비</strong>
          <br />
          "예배 10분 전, 기도로 마음을 준비합니다." 우리 모두의 깊은 영적 회복을
          위해, 예배 시작 10분 전에는 자리에 앉아 기도로 준비해 주시면
          감사하겠습니다.
        </li>
        <li>
          📞 <strong>긴급연락처</strong>
          <br />
          010-0123-4569 (이시황 목사님)
        </li>
      </ul>
    </div>
  );
}
