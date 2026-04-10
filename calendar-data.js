window.CALENDAR_DATA = {
  projects: {
    "environment-corp": {
      name: "환경공단",
      color: "#0f766e",
      tasks: [
        "제조사별 테스트 일정 종합 유지",
        "클린일렉스 가능 날짜 2일 정리",
        "펌웨어 다운로드 시험 확인",
        "임시 펌웨어 적용 가능 여부 확인"
      ]
    },
    "modu-charge": {
      name: "모두의충전",
      color: "#2563eb",
      tasks: []
    },
    "golden-goose": {
      name: "황금거위",
      color: "#b45309",
      tasks: []
    },
    "flirting": {
      name: "플러팅",
      color: "#db2777",
      tasks: []
    }
  },
  dateTasks: [
    {
      project: "environment-corp",
      date: "2026-04-22",
      tasks: [
        "4/22 현장 참석 준비",
        "현장 QA 결과 메모 정리"
      ]
    }
  ],
  events: [
    {
      id: "ec-evsis-rnd",
      project: "environment-corp",
      tag: "manufacturer_schedule",
      owner: "이브이시스",
      title: "R&D 테스트",
      start: "2026-04-09",
      end: "2026-04-09",
      status: "확정"
    },
    {
      id: "ec-cha-dev",
      project: "environment-corp",
      tag: "project_milestone",
      owner: "채비",
      title: "시간대별 단가 기능 개발",
      start: "2026-04-12",
      end: "2026-04-12",
      status: "예정"
    },
    {
      id: "ec-clean-qa-internal",
      project: "environment-corp",
      tag: "manufacturer_schedule",
      owner: "클린일렉스",
      title: "사내 QA",
      start: "2026-04-13",
      end: "2026-04-17",
      status: "확정"
    },
    {
      id: "ec-cha-field-fix",
      project: "environment-corp",
      tag: "project_milestone",
      owner: "채비",
      title: "현장 테스트 및 수정",
      start: "2026-04-15",
      end: "2026-04-15",
      status: "예정"
    },
    {
      id: "ec-cha-deploy",
      project: "environment-corp",
      tag: "project_milestone",
      owner: "채비",
      title: "통합누리집 UI 배포",
      start: "2026-04-15",
      end: "2026-04-16",
      status: "예정"
    },
    {
      id: "ec-clean-qa-field",
      project: "environment-corp",
      tag: "tentative",
      owner: "클린일렉스",
      title: "현장 QA",
      start: "2026-04-20",
      end: "2026-04-24",
      status: "조율 필요",
      myDates: ["2026-04-22"],
      note: "4/22 참석 예정. 현장 QA 가능 날짜 2일 제안 필요.",
      tasks: [
        "현장 QA 가능 날짜 2일 제안 정리",
        "펌웨어 다운로드 시험 생략 가능 여부 확인",
        "임시 펌웨어 적용 가능 여부 확인"
      ]
    },
    {
      id: "ec-cha-tc-review",
      project: "environment-corp",
      tag: "review",
      owner: "채비",
      title: "TC 검토",
      start: "2026-04-20",
      end: "2026-04-24",
      status: "예정"
    },
    {
      id: "ec-sk-signet",
      project: "environment-corp",
      tag: "tentative",
      owner: "SK시그넷",
      title: "테스트 시작일 확정 예정",
      start: "2026-04-21",
      end: "2026-04-21",
      status: "미확정"
    },
    {
      id: "ec-cha-site",
      project: "environment-corp",
      tag: "manufacturer_schedule",
      owner: "채비",
      title: "현장 검증",
      start: "2026-04-27",
      end: "2026-04-30",
      status: "예정"
    }
  ]
};
