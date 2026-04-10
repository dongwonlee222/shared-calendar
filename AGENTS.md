# Shared Calendar Notes

이 폴더는 공용 업무 캘린더 작업 전용 루트다.

## 목적

- 브라우저에서 보는 공유형 일정판을 관리한다.
- 현재 구현은 단일 파일 앱([index.html](/Users/dongwon.lee/workhub/company/shared/calendar/index.html)) + 초기 데이터 파일([calendar-data.js](/Users/dongwon.lee/workhub/company/shared/calendar/calendar-data.js)) 구조다.
- 기능 추가보다 현재는 `안정성`, `스크롤 튐 방지`, `빠른 수정`을 우선한다.

## 작업 원칙

- 지금 단계에서는 파일 분리보다 한 파일 내 안정화를 우선한다.
- `index.html`은 CSS, HTML, JS가 같이 있다. 큰 리팩터링은 사용자가 명시적으로 요청할 때만 한다.
- 상호작용 변경 시 `주간 뷰 스크롤 유지`, `월/주 전환`, `백로그 드래그`, `이벤트 수정/삭제` 흐름을 함께 본다.
- 가능한 한 `render()` 전체 호출보다 부분 DOM 갱신을 우선한다.

## 데이터 원칙

- 초기 프로젝트/이벤트 데이터는 [calendar-data.js](/Users/dongwon.lee/workhub/company/shared/calendar/calendar-data.js)에 있다.
- 사용자가 브라우저에서 추가한 일정과 백로그는 `localStorage`를 사용한다.
- 따라서 초기 데이터와 사용자 데이터는 구분해서 생각한다.

## 먼저 읽을 문서

- 상세 스펙: [CALENDAR_SPEC.md](/Users/dongwon.lee/workhub/company/shared/calendar/CALENDAR_SPEC.md)

## 자주 하는 작업

- 일정/백로그 동작 수정: [index.html](/Users/dongwon.lee/workhub/company/shared/calendar/index.html)
- 초기 일정 데이터 수정: [calendar-data.js](/Users/dongwon.lee/workhub/company/shared/calendar/calendar-data.js)
- 탭/파비콘/브랜딩 수정: [favicon.svg](/Users/dongwon.lee/workhub/company/shared/calendar/favicon.svg), [index.html](/Users/dongwon.lee/workhub/company/shared/calendar/index.html)

