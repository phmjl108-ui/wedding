/**
 * Luxury Gold Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: true,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "박혜민",
    nameEn: "Groom",
    father: "박광영",
    mother: "김영란",
    fatherDeceased: false,
    motherDeceased: true
  },

  bride: {
    name: "신부",
    nameEn: "Bride",
    father: "황인찬",
    mother: "이봉임",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2026-11-28",
    time: "12:00",
    venue: "명성교회",
    hall: "샬롬아트홀 B1",
    address: "서울 강동구 구천면로 452",
    tel: "02-440-9000",

    mapLinks: {
      kakao: "https://place.map.kakao.com/25922421",
      naver: "https://naver.me/x3jCJL5Q"
    }
  },

  // ── 인사말 ──
  greeting: {
    title: "소중한 분들을 초대합니다",
    content: "나의 사랑 나의 어여쁜자야\n일어나서 함께 가자\n아가 2:13\n\n하나님의 인도하심으로 만난\n저희 두사람이 이제 모든것을\n함께 나누고 사랑하는 가정을 이루려합니다.\n저희의 새로운 시작을\n축복해 주시면 감사하겠습니다."
  },

  // ── 우리의 이야기 ──
  story: {
    title: "우리의 이야기",
    content: "서로 다른 길을 걷던 두 사람이\n하나의 길을 함께 걷게 되었습니다.\n\n여러분을 소중한 자리에 초대합니다."
  },

  // ── 오시는 길 ──
  // (mapLinks는 wedding 객체 내에 포함)

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "박혜민", name: "박혜민", bank: "우리은행", number: "1002-052-761004" },
      { role: "박광영", name: "박광영", bank: "하나은행", number: "000-000-000000" },
    ],
    bride: [
      { role: "황기하", name: "황기하", bank: "하나은행", number: "000-000-000000" },
      { role: "황인찬", name: "황인찬", bank: "하나은행", number: "000-000-000000" },
      { role: "이봉임", name: "황인찬", bank: "하나은행", number: "000-000-000000" },
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "신랑 ♥ 신부 결혼합니다",
    description: "2026년 11월 28일,12시 소중한 분들을 초대합니다."
  }
};
