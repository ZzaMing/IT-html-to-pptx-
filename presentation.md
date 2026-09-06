---

marp: true
theme: gaia
paginate: true
size: 16:9
backgroundColor: #ffffff
color: #0f172a
style: |
  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');

  :root {
  --blue-primary: #1a56db;
  --blue-dark: #0f2b82;
  --blue-light: #ebf5ff;
  --cyan: #06b6d4;
  --sky: #38bdf8;
  --slate-900: #0f172a;
  --slate-700: #334155;
  --slate-500: #64748b;
  --slate-200: #e2e8f0;
  --slate-100: #f1f5f9;
  }

  section {
  font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, Roboto, sans-serif;
  padding: 36px 56px;
  font-size: 16px;
  line-height: 1.5;
  background-color: #ffffff;
  color: var(--slate-900);
  }

  /* PPT BIZCAM Style Header */
  .biz-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-top: 14px;
  margin-bottom: 28px;
  border-bottom: 2px solid var(--blue-primary);
  padding-bottom: 24px;
  }
  .biz-header-left {
  display: flex;
  align-items: baseline;
  gap: 12px;
  }
  .biz-header-tag {
  color: var(--blue-primary);
  font-size: 22px;
  font-weight: 800;
  letter-spacing: 0.08em;
  }
  .biz-header-title {
  color: var(--slate-900);
  font-size: 36px;
  font-weight: 900;
  margin: 0;
  letter-spacing: -0.02em;
  line-height: 1.2;
  }
  .biz-header-sub {
  display: none;
  }

  /* Full-width alert bar (PPT BIZCAM Ref 1) */
  .biz-alert-bar {
  background: #f8fafc;
  border: 1px solid var(--slate-200);
  padding: 12px 18px;
  display: flex;
  align-items: center;
  gap: 14px;
  font-size: 14px;
  margin-top: 24px;
  }
  .biz-alert-icon {
  width: 26px;
  height: 26px;
  background: var(--blue-primary);
  color: #ffffff;
  font-weight: 900;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  }

  /* Photo Frame */
  .biz-photo {
  border: 1px solid var(--slate-200);
  overflow: hidden;
  background: #f8fafc;
  }
  .biz-photo img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  }

  footer {
  font-size: 11px;
  color: #94a3b8;
  }

---

<!-- Slide 1: Cover (PPT BIZCAM Dynamic Arc Graphic on Clean White) -->
<div style="height: 100%; display: grid; grid-template-columns: 1.15fr 0.85fr; align-items: center; padding-top: 10px;">
<div>
<div style="display: flex; align-items: center; gap: 16px; margin-bottom: 24px;">
<div style="width: 14px; height: 14px; background: #1a56db;"></div>
<span style="color: #1a56db; font-size: 16px; font-weight: 800; letter-spacing: 0.1em;">2026 IT VOLUNTEER CORPS REPORT</span>
</div>

<h1 style="color: #0f172a; font-size: 42px; font-weight: 900; line-height: 1.3; margin: 0 0 16px 0; letter-spacing: -0.03em; word-break: keep-all;">
삼육대학교 IT 봉사대<br>
<span style="color: #1a56db;">베트남 다낭 교원대학교</span><br>
웹 프로그래밍 (HTML / CSS / JS)
</h1>

<!-- <p style="color: #475569; font-size: 17px; margin: 0 0 34px 0; font-weight: 500; line-height: 1.5; word-break: keep-all;">
집중 실습과 밀착 멘토링으로 완성한 IT 봉사 평가보고서
</p> -->

<div style="display: flex; flex-direction: column; gap: 8px; border-left: 3px solid #1a56db; padding-left: 16px;">
<div style="font-size: 16px; color: #334155;"><strong>파견 기간</strong> &nbsp;2026.07.12 ~ 07.27 (15일)</div>
<div style="font-size: 16px; color: #334155;"><strong>교육 기관</strong> &nbsp;베트남 다낭 교원대학교</div>
<div style="font-size: 16px; color: #334155;"><strong>발표팀</strong> &nbsp;IT 봉사대 웹 프로그래밍 팀: WWW</div>
</div>
</div>

<div style="display: flex; justify-content: center; align-items: center;">
<img src="images/web_elements.jpg" alt="HTML CSS JS" style="width: 420px; max-height: 420px; object-fit: contain;">
</div>
</div>

---

<!-- Slide 2: 01 팀 구성 및 시너지 (High Contrast & Presentation Mode) -->
<div class="biz-header">
<div class="biz-header-left">
<span class="biz-header-tag">01 TEAM SYNERGY</span>
<h2 class="biz-header-title">팀 구성</h2>
</div>
</div>

<div style="width: 1100px; margin: 45px auto 0 auto; display: grid; grid-template-columns: 420px 660px; gap: 40px; align-items: center;">

<!-- Left: Role & Synergy (Enlarged Fonts, Zero Added Content) -->
<div style="display: flex; flex-direction: column; justify-content: space-around; height: 440px;">

<!-- 1. IT 교육 담당 (컴퓨터공학부) -->
<div style="border-left: 7px solid #1a56db; padding-left: 22px;">
<div style="display: flex; align-items: center; gap: 12px; margin-bottom: 14px;">
<span style="font-size: 32px; font-weight: 900; color: #1a56db;">컴퓨터공학부</span>
<span style="background: #1a56db; color: #ffffff; font-size: 12.5px; font-weight: 800; padding: 4px 10px; white-space: nowrap;">IT 교육 담당</span>
</div>
<div style="font-size: 22px; color: #1e293b; line-height: 2.1; font-weight: 700; display: flex; flex-direction: column; gap: 8px;">
<div>• 김예원</div>
<div>• 박정우</div>
<div>• 조명현</div>
</div>
</div>

<!-- Synergy Connector -->
<div style="display: flex; align-items: center; gap: 12px; padding-left: 22px;">
<div style="width: 32px; height: 32px; border-radius: 50%; background: #1a56db; color: #ffffff; display: flex; align-items: center; justify-content: center; font-weight: 900; font-size: 18px; box-shadow: 0 3px 8px rgba(26, 86, 219, 0.25);">+</div>
<span style="font-size: 16px; font-weight: 900; color: #0f2b82; letter-spacing: 0.04em;">협업 시너지</span>
</div>

<!-- 2. 통역 & 라포 (항공관광외국어학부) -->
<div style="border-left: 7px solid #0f2b82; padding-left: 22px;">
<div style="display: flex; align-items: center; gap: 12px; margin-bottom: 14px;">
<span style="font-size: 32px; font-weight: 900; color: #0f2b82;">항공관광외국어학부</span>
<span style="background: #0f2b82; color: #ffffff; font-size: 12.5px; font-weight: 500; padding: 4px 10px; white-space: nowrap;">통역 &amp; 라포</span>
</div>
<div style="font-size: 22px; color: #1e293b; line-height: 2.1; font-weight: 700; display: flex; flex-direction: column; gap: 8px;">
<div>• 허서정</div>
</div>
</div>

</div>

<!-- Right: 4-Member Team Back Photo (Exact 3:2 Ratio: 660px x 440px, Zero Crop) -->
<div class="biz-photo" style="width: 660px; height: 440px; border-radius: 12px; border: 1px solid #cbd5e1; box-shadow: 0 8px 24px rgba(15, 23, 42, 0.10); overflow: hidden; background: #ffffff;">
<img src="images/team_photo.JPG" alt="봉사단 팀 사진" style="width: 100%; height: 100%; object-fit: cover; object-position: center; display: block;">
</div>

</div>

---

<!-- Slide 3: 02 활동 개요 (High Contrast & Presentation Mode) -->
<div class="biz-header">
<div class="biz-header-left">
<span class="biz-header-tag">02 OVERVIEW</span>
<h2 class="biz-header-title">프로젝트 활동 개요</h2>
</div>
</div>

<!-- 4 Key Impact Circles -->
<div style="display: flex; align-items: center; justify-content: center; margin-top: 50px; margin-bottom: 35px;">
<div style="width: 200px; height: 200px; border-radius: 50%; border: 6px solid #1a56db; background: #ffffff; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; box-sizing: border-box; padding: 12px; z-index: 2; position: relative;">
<div style="font-size: 40px; font-weight: 900; color: #1a56db; line-height: 1; margin-bottom: 8px;">15<span style="font-size: 22px;">일</span></div>
<div style="font-size: 15px; font-weight: 800; color: #1e293b;">07.12 ~ 07.27</div>
</div>

<svg width="70" height="120" viewBox="0 0 70 120" style="margin-left: -26px; margin-right: 0px; z-index: 1; overflow: visible; flex-shrink: 0;">
<polygon points="0,15 70,60 0,105" fill="#1a56db" />
</svg>

<div style="width: 200px; height: 200px; border-radius: 50%; border: 6px solid #1a56db; background: #ffffff; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; box-sizing: border-box; padding: 12px; z-index: 2; position: relative;">
<div style="font-size: 40px; font-weight: 900; color: #1a56db; line-height: 1; margin-bottom: 8px;">수강생</div>
<div style="font-size: 15px; font-weight: 800; color: #1e293b;">입문자 맞춤 강의</div>
</div>

<svg width="70" height="120" viewBox="0 0 70 120" style="margin-left: -26px; margin-right: 0px; z-index: 1; overflow: visible; flex-shrink: 0;">
<polygon points="0,15 70,60 0,105" fill="#1a56db" />
</svg>

<div style="width: 200px; height: 200px; border-radius: 50%; border: 6px solid #1a56db; background: #ffffff; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; box-sizing: border-box; padding: 12px; z-index: 2; position: relative;">
<div style="font-size: 40px; font-weight: 900; color: #1a56db; line-height: 1; margin-bottom: 8px;">50<span style="font-size: 22px;">시간</span></div>
<div style="font-size: 15px; font-weight: 800; color: #1e293b;">집중 실습 빌드업</div>
</div>

<svg width="70" height="120" viewBox="0 0 70 120" style="margin-left: -26px; margin-right: 0px; z-index: 1; overflow: visible; flex-shrink: 0;">
<polygon points="0,15 70,60 0,105" fill="#1a56db" />
</svg>

<div style="width: 200px; height: 200px; border-radius: 50%; border: 6px solid #1a56db; background: #ffffff; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; box-sizing: border-box; padding: 12px; z-index: 2; position: relative;">
<div style="font-size: 40px; font-weight: 900; color: #1a56db; line-height: 1; margin-bottom: 8px;">프로젝트</div>
<div style="font-size: 15px; font-weight: 800; color: #1e293b;">자기소개 페이지 구상</div>
</div>
</div>

<!-- 2 Core Strategy Cards -->
<div style="width: 900px; margin: 0 auto 28px auto; display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
<div style="background: #f8fafc; border-left: 6px solid #1a56db; padding: 18px 20px; box-shadow: 0 3px 10px rgba(15, 23, 42, 0.04);">
<div style="margin-bottom: 8px;">
<span style="font-size: 24px; font-weight: 700; color: #1a56db;">핵심 교육 목표</span>
</div>
<div style="font-size: 16px; color: #1e293b; line-height: 1.7; font-weight: 600;">
• 실습 중심의 웹 구조·스타일링 체득<br>
• 첫 웹사이트 개발 완주 성취
</div>
</div>

<div style="background: #f8fafc; border-left: 6px solid #0f2b82; padding: 18px 20px; box-shadow: 0 3px 10px rgba(15, 23, 42, 0.04);">
<div style="margin-bottom: 8px;">
<span style="font-size: 24px; font-weight: 700; color: #0f2b82;">특화 운영 전략</span>
</div>
<div style="font-size: 16px; color: #1e293b; line-height: 1.7; font-weight: 600;">
• 강사 1인 + 보조 멘토 2인 + 통역 1인의 밀착 지도<br>
• 영어·베트남어 이중언어 교안과 실시간 디버깅
</div>
</div>
</div>

<!-- Bottom High-Impact Bar -->
<div class="biz-alert-bar" style="width:860px; margin: 5px auto 5px auto; border: 0px; border-left: 6px solid #0c1b3d; font-size: 18px; font-weight: 600; color: #0c1b3d;">
<div><strong>성과 요약 :</strong> 50시간의 집중 실습과 밀착 멘토링으로 입문자 학생들이 자신만의 웹 포트폴리오를 성공적으로 완성</div>
</div>

---

<!-- Slide 4: 03 교육 대상 특성 및 도출 전략 (8-Node Hub & Spoke) -->
<div class="biz-header">
<div class="biz-header-left">
<span class="biz-header-tag">03 TARGET &amp; STRATEGY</span>
<h2 class="biz-header-title">교육 대상 특성 및 도출 전략</h2>
</div>

</div>

<div style="position: relative; width: 1180px; height: 520px; margin: 0 auto;">

<!-- SVG Connecting Branch Lines & Outer Segmented Ring (ZERO INDENTATION) -->
<svg width="1180" height="520" viewBox="0 0 1180 520" style="position: absolute; top: 0; left: 0; z-index: 1;">

<!-- Left Branch Lines (Center: 590, 260. Outer circle R=155) -->
<!-- Line 1: to Card 1 (Y=56) -->
<path d="M 480 150 L 420 56 L 340 56" fill="none" stroke="#93c5fd" stroke-width="2" />
<circle cx="340" cy="56" r="4" fill="#1a56db" />

<!-- Line 2: to Card 2 (Y=176) -->
<path d="M 436 210 L 390 176 L 340 176" fill="none" stroke="#93c5fd" stroke-width="2" />
<circle cx="340" cy="176" r="4" fill="#1a56db" />

<!-- Line 3: to Card 3 (Y=296) -->
<path d="M 436 310 L 390 296 L 340 296" fill="none" stroke="#93c5fd" stroke-width="2" />
<circle cx="340" cy="296" r="4" fill="#1a56db" />

<!-- Line 4: to Card 4 (Y=416) -->
<path d="M 480 370 L 420 416 L 340 416" fill="none" stroke="#93c5fd" stroke-width="2" />
<circle cx="340" cy="416" r="4" fill="#1a56db" />

<!-- Right Branch Lines (Center: 590, 260. Outer circle R=155) -->
<!-- Line 5: to Card 5 (Y=56) -->
<path d="M 700 150 L 760 56 L 840 56" fill="none" stroke="#93c5fd" stroke-width="2" />
<circle cx="840" cy="56" r="4" fill="#0f2b82" />

<!-- Line 6: to Card 6 (Y=176) -->
<path d="M 744 210 L 790 176 L 840 176" fill="none" stroke="#93c5fd" stroke-width="2" />
<circle cx="840" cy="176" r="4" fill="#0f2b82" />

<!-- Line 7: to Card 7 (Y=296) -->
<path d="M 744 310 L 790 296 L 840 296" fill="none" stroke="#93c5fd" stroke-width="2" />
<circle cx="840" cy="296" r="4" fill="#0f2b82" />

<!-- Line 8: to Card 8 (Y=416) -->
<path d="M 700 370 L 760 416 L 840 416" fill="none" stroke="#93c5fd" stroke-width="2" />
<circle cx="840" cy="416" r="4" fill="#0f2b82" />

<!-- Segmented Outer Ring (Center: 590, 260, R=156) -->
<circle cx="590" cy="260" r="156" fill="none" stroke="#1a56db" stroke-width="8" stroke-dasharray="40, 12" />
<circle cx="590" cy="260" r="147" fill="none" stroke="#e2e8f0" stroke-width="2" />

</svg>

<!-- Enlarged Center Core Hub (HTML Circle: 280px x 280px) -->
<div style="position: absolute; top: 120px; left: 450px; width: 280px; height: 280px; border-radius: 50%; background: #ffffff; border: 3px solid #1a56db; box-shadow: 0 8px 28px rgba(26, 86, 219, 0.16); display: flex; flex-direction: column; align-items: center; justify-content: center; z-index: 5; padding: 16px 20px; box-sizing: border-box; text-align: center;">

<!-- Main Title -->
<div style="font-size: 32px; font-weight: 800; color: #162444; line-height: 1.25; margin-bottom: 6px;">
도출 핵심 전략
</div>

<!-- 3 Core Strategy Action Cards -->
<div style="display: flex; flex-direction: column; gap: 6px; width: 100%; max-width: 232px;">
<div style="solid #e2e8f0; #0f2b82; padding: 5px 8px; display: flex; align-items: center; justify-content: center;">
<span style="font-size: 24px; font-weight: 900; color: #1a56db;">밀착 코칭</span>

</div>

<div style="solid #e2e8f0; #0f2b82; padding: 5px 8px; display: flex; align-items: center; justify-content: center;">
<span style="font-size: 24px; font-weight: 900; color: #0f2b82;">이중언어 교안</span>

</div>

<div style="solid #e2e8f0; #0f2b82; padding: 5px 8px; display: flex; align-items: center; justify-content: center;">
<span style="font-size: 24px; font-weight: 900; color: #0284c7;">유연한 진도</span>
</div>
</div>

</div>

<!-- 4 Left Cards: 학습자 특성 (HTML) -->
<!-- Card 1 (Top-Left): 💻 코딩 첫걸음 -->
<div style="position: absolute; top: 15px; left: 0; width: 340px; height: 82px; z-index: 2; background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 41px; padding: 12px 18px 12px 14px; box-shadow: 0 4px 14px rgba(15, 23, 42, 0.06); display: flex; align-items: center; gap: 14px; box-sizing: border-box;">
<div style="width: 46px; height: 46px; border-radius: 50%; background: #eff6ff; border: 1.5px solid #bfdbfe; display: flex; align-items: center; justify-content: center; font-size: 20px; flex-shrink: 0;">💻</div>
<div style="display: flex; flex-direction: column; gap: 3px;">
<div style="display: flex; align-items: center; padding-left: 30px; gap: 6px;">
<span style="font-size: 18px; font-weight: 900; color: #1a56db;">01. 코딩 첫걸음</span>
<span style="font-size: 10px; font-weight: 800; color: #1a56db; background: #dbeafe; padding: 1px 6px; border-radius: 4px;">입문</span>
</div>
</div>
</div>

<!-- Card 2: ⚠️ 영문 에러 장벽 -->
<div style="position: absolute; top: 135px; left: 0; width: 340px; height: 82px; z-index: 2; background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 41px; padding: 12px 18px 12px 14px; box-shadow: 0 4px 14px rgba(15, 23, 42, 0.06); display: flex; align-items: center; gap: 14px; box-sizing: border-box;">
<div style="width: 46px; height: 46px; border-radius: 50%; background: #eff6ff; border: 1.5px solid #bfdbfe; display: flex; align-items: center; justify-content: center; font-size: 20px; flex-shrink: 0;">⚠️</div>
<div style="display: flex; flex-direction: column; gap: 3px;">
<div style="display: flex; align-items: center; padding-left: 30px; gap: 6px;">
<span style="font-size: 18px; font-weight: 900; color: #1a56db;">02. 영문 에러 장벽</span>
<span style="font-size: 10px; font-weight: 800; color: #1a56db; background: #dbeafe; padding: 1px 6px; border-radius: 4px;">심리</span>
</div>
</div>
</div>

<!-- Card 3: 🗣️ 언어 소통 한계 -->
<div style="position: absolute; top: 255px; left: 0; width: 340px; height: 82px; z-index: 2; background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 41px; padding: 12px 18px 12px 14px; box-shadow: 0 4px 14px rgba(15, 23, 42, 0.06); display: flex; align-items: center; gap: 14px; box-sizing: border-box;">
<div style="width: 46px; height: 46px; border-radius: 50%; background: #eff6ff; border: 1.5px solid #bfdbfe; display: flex; align-items: center; justify-content: center; font-size: 20px; flex-shrink: 0;">🗣️</div>
<div style="display: flex; flex-direction: column; gap: 3px;">
<div style="display: flex; align-items: center; padding-left: 30px; gap: 6px;">
<span style="font-size: 18px; font-weight: 900; color: #1a56db;">03. 언어 소통 한계</span>
<span style="font-size: 10px; font-weight: 800; color: #1a56db; background: #dbeafe; padding: 1px 6px; border-radius: 4px;">장벽</span>
</div>
</div>
</div>

<!-- Card 4 (Bottom-Left): 🔥 높은 학습 열의 -->
<div style="position: absolute; top: 375px; left: 0; width: 340px; height: 82px; z-index: 2; background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 41px; padding: 12px 18px 12px 14px; box-shadow: 0 4px 14px rgba(15, 23, 42, 0.06); display: flex; align-items: center; gap: 14px; box-sizing: border-box;">
<div style="width: 46px; height: 46px; border-radius: 50%; background: #eff6ff; border: 1.5px solid #bfdbfe; display: flex; align-items: center; justify-content: center; font-size: 20px; flex-shrink: 0;">🔥</div>
<div style="display: flex; flex-direction: column; gap: 3px;">
<div style="display: flex; align-items: center; padding-left: 30px; gap: 6px;">
<span style="font-size: 18px; font-weight: 900; color: #1a56db;">04. 높은 학습 열의</span>
<span style="font-size: 10px; font-weight: 800; color: #1a56db; background: #dbeafe; padding: 1px 6px; border-radius: 4px;">동기</span>
</div>
</div>
</div>

<!-- 4 Right Cards: 현장 환경 및 운영 과제 (HTML) -->
<!-- Card 5 (Top-Right): ⏳ 10일 집중 일정 -->
<div style="position: absolute; top: 15px; right: 0; width: 340px; height: 82px; z-index: 2; background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 41px; padding: 12px 14px 12px 18px; box-shadow: 0 4px 14px rgba(15, 23, 42, 0.06); display: flex; align-items: center; justify-content: space-between; gap: 14px; box-sizing: border-box; text-align: right;">
<div style="display: flex; flex-direction: column; gap: 3px; width: 100%;">
<div style="display: flex; align-items: center; justify-content: center; gap: 6px;">
<span style="font-size: 10px; font-weight: 800; color: #0f2b82; background: #e0e7ff; padding: 1px 6px; border-radius: 4px;">시한</span>
<span style="font-size: 18px; font-weight: 900; color: #0f2b82;">05. 10일 집중 일정</span>
</div>
</div>
<div style="width: 46px; height: 46px; border-radius: 50%; background: #eef2ff; border: 1.5px solid #c7d2fe; display: flex; align-items: center; justify-content: center; font-size: 20px; flex-shrink: 0;">⏳</div>
</div>

<!-- Card 6: 🖥️ 실습실 PC 환경 -->
<div style="position: absolute; top: 135px; right: 0; width: 340px; height: 82px; z-index: 2; background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 41px; padding: 12px 14px 12px 18px; box-shadow: 0 4px 14px rgba(15, 23, 42, 0.06); display: flex; align-items: center; justify-content: space-between; gap: 14px; box-sizing: border-box; text-align: right;">
<div style="display: flex; flex-direction: column; gap: 3px; width: 100%;">
<div style="display: flex; align-items: center; justify-content: center; gap: 6px;">
<span style="font-size: 10px; font-weight: 800; color: #0f2b82; background: #e0e7ff; padding: 1px 6px; border-radius: 4px;">인프라</span>
<span style="font-size: 18px; font-weight: 900; color: #0f2b82;">06. 실습실 PC 환경</span>
</div>
</div>
<div style="width: 46px; height: 46px; border-radius: 50%; background: #eef2ff; border: 1.5px solid #c7d2fe; display: flex; align-items: center; justify-content: center; font-size: 20px; flex-shrink: 0;">🖥️</div>
</div>

<!-- Card 7: 📊 개인별 진도 편차 -->
<div style="position: absolute; top: 255px; right: 0; width: 340px; height: 82px; z-index: 2; background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 41px; padding: 12px 14px 12px 18px; box-shadow: 0 4px 14px rgba(15, 23, 42, 0.06); display: flex; align-items: center; justify-content: space-between; gap: 14px; box-sizing: border-box; text-align: right;">
<div style="display: flex; flex-direction: column; gap: 3px; width: 100%;">
<div style="display: flex; align-items: center; justify-content: center; gap: 6px;">
<span style="font-size: 10px; font-weight: 800; color: #0f2b82; background: #e0e7ff; padding: 1px 6px; border-radius: 4px;">편차</span>
<span style="font-size: 18px; font-weight: 900; color: #0f2b82;">07. 개인별 진도 편차</span>
</div>
</div>
<div style="width: 46px; height: 46px; border-radius: 50%; background: #eef2ff; border: 1.5px solid #c7d2fe; display: flex; align-items: center; justify-content: center; font-size: 20px; flex-shrink: 0;">📊</div>
</div>

<!-- Card 8 (Bottom-Right): 🤝 학습 몰입 & 라포 -->
<div style="position: absolute; top: 375px; right: 0; width: 340px; height: 82px; z-index: 2; background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 41px; padding: 12px 14px 12px 18px; box-shadow: 0 4px 14px rgba(15, 23, 42, 0.06); display: flex; align-items: center; justify-content: space-between; gap: 14px; box-sizing: border-box; text-align: right;">
<div style="display: flex; flex-direction: column; gap: 3px; width: 100%;">
<div style="display: flex; align-items: center; justify-content: center; gap: 6px;">
<span style="font-size: 10px; font-weight: 800; color: #0f2b82; background: #e0e7ff; padding: 1px 6px; border-radius: 4px;">라포</span>
<span style="font-size: 18px; font-weight: 900; color: #0f2b82;">08. 학습 몰입 &amp; 라포</span>
</div>
</div>
<div style="width: 46px; height: 46px; border-radius: 50%; background: #eef2ff; border: 1.5px solid #c7d2fe; display: flex; align-items: center; justify-content: center; font-size: 20px; flex-shrink: 0;">🤝</div>
</div>

</div>

---

<!-- Slide 5: 04 10일간의 커리큘럼 로드맵 (5-Step Interlocking Process Flow) -->
<div class="biz-header">
<div class="biz-header-left">
<span class="biz-header-tag">04 ROADMAP</span>
<h2 class="biz-header-title">10일간의 커리큘럼 로드맵</h2>
</div>

</div>

<div style="width: 100%; margin: 40px auto 0;">

<!-- SVG Timeline Nodes & 200px Enlarged Interlocking Chevrons -->
<svg width="1172" height="300" viewBox="0 0 1172 300" style="display: block;">
<defs>
<filter id="nodeShadow" x="-20%" y="-20%" width="140%" height="140%">
<feDropShadow dx="0" dy="3" stdDeviation="4" flood-opacity="0.12" />
</filter>
<filter id="chevronShadow" x="-5%" y="-5%" width="110%" height="120%">
<feDropShadow dx="0" dy="4" stdDeviation="6" flood-opacity="0.10" />
</filter>
</defs>

<!-- Horizontal Dotted Connecting Line (Y=38) -->
<line x1="110" y1="38" x2="1062" y2="38" stroke="#cbd5e1" stroke-width="2" stroke-dasharray="6,6" />

<!-- Intermediate Connection Dots -->
<circle cx="229" cy="38" r="5" fill="#16c7fc" />
<circle cx="467" cy="38" r="5" fill="#199cfa" />
<circle cx="705" cy="38" r="5" fill="#0c64fc" />
<circle cx="943" cy="38" r="5" fill="#0f2b82" />

<!-- Node 01: HTML (Center: 110, 38) - 25% Arc -->
<g transform="translate(110, 38)" filter="url(#nodeShadow)">
<circle r="28" fill="#ffffff" stroke="#e2e8f0" stroke-width="2" />
<circle r="28" fill="none" stroke="#16c7fc" stroke-width="4" stroke-linecap="round" stroke-dasharray="45 176" transform="rotate(-90)" />
<polyline points="-9,-5 -15,0 -9,5" fill="none" stroke="#16c7fc" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
<polyline points="9,-5 15,0 9,5" fill="none" stroke="#16c7fc" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
<line x1="-3" y1="7" x2="3" y2="-7" stroke="#16c7fc" stroke-width="2.5" stroke-linecap="round" />
</g>

<!-- Node 02: CSS (Center: 348, 38) - 50% Arc -->
<g transform="translate(348, 38)" filter="url(#nodeShadow)">
<circle r="28" fill="#ffffff" stroke="#e2e8f0" stroke-width="2" />
<circle r="28" fill="none" stroke="#199cfa" stroke-width="4" stroke-linecap="round" stroke-dasharray="88 176" transform="rotate(-90)" />
<rect x="-11" y="-9" width="22" height="18" rx="2.5" fill="none" stroke="#199cfa" stroke-width="2.2" />
<line x1="-11" y1="-3" x2="11" y2="-3" stroke="#199cfa" stroke-width="1.8" />
<rect x="-7.5" y="0.5" width="6" height="5.5" rx="1" fill="#199cfa" />
<rect x="1.5" y="0.5" width="6" height="5.5" rx="1" fill="#199cfa" />
</g>

<!-- Node 03: Reinforcement & Cultural Exchange (Center: 586, 38) - 70% Arc -->
<g transform="translate(586, 38)" filter="url(#nodeShadow)">
<circle r="28" fill="#ffffff" stroke="#e2e8f0" stroke-width="2" />
<circle r="28" fill="none" stroke="#0c64fc" stroke-width="4" stroke-linecap="round" stroke-dasharray="123 176" transform="rotate(-90)" />
<path d="M -9,-2 A 8.5 8.5 0 1 1 -2,7.5" fill="none" stroke="#0c64fc" stroke-width="2.5" stroke-linecap="round" />
<polyline points="-10,-6 -9,-1 -4,-2" fill="none" stroke="#0c64fc" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M -2,-1 L 1,2 L 6,-3" fill="none" stroke="#0c64fc" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
</g>

<!-- Node 04: JS (Center: 824, 38) - 88% Arc -->
<g transform="translate(824, 38)" filter="url(#nodeShadow)">
<circle r="28" fill="#ffffff" stroke="#e2e8f0" stroke-width="2" />
<circle r="28" fill="none" stroke="#0f2b82" stroke-width="4" stroke-linecap="round" stroke-dasharray="150 176" transform="rotate(-90)" />
<polygon points="1,-11 -7,1 0,1 -1,11 7,-1 0,-1" fill="#0f2b82" stroke="#0f2b82" stroke-width="1.2" stroke-linejoin="round" />
</g>

<!-- Node 05: Showcase (Center: 1062, 38) - 100% Arc -->
<g transform="translate(1062, 38)" filter="url(#nodeShadow)">
<circle r="28" fill="#ffffff" stroke="#e2e8f0" stroke-width="2" />
<circle r="28" fill="none" stroke="#091b4f" stroke-width="4" stroke-linecap="round" stroke-dasharray="172 176" transform="rotate(-90)" />
<path d="M -6,-9 L 6,-9 L 6,-3 C 6,2 3,5 0,5 C -3,5 -6,2 -6,-3 Z" fill="none" stroke="#091b4f" stroke-width="2.2" />
<path d="M -6,-6 L -9,-6 C -10,-6 -11,-5 -11,-3.5 C -11,-1.5 -9.5,0 -6,0" fill="none" stroke="#091b4f" stroke-width="1.6" />
<path d="M 6,-6 L 9,-6 C 10,-6 11,-5 11,-3.5 C 11,-1.5 9.5,0 6,0" fill="none" stroke="#091b4f" stroke-width="1.6" />
<line x1="0" y1="5" x2="0" y2="9" stroke="#091b4f" stroke-width="2.2" />
<line x1="-5" y1="9" x2="5" y2="9" stroke="#091b4f" stroke-width="2.2" stroke-linecap="round" />
</g>

<!-- 5 Enlarged Interlocking Chevrons (Height: 200px, Y: 92 to 292) -->
<!-- Chevron 1: Step 01 (0 to 238) -->
<g filter="url(#chevronShadow)">
<path d="M 6 92 L 210 92 L 238 192 L 210 292 L 6 292 Q 0 292 0 286 L 0 98 Q 0 92 6 92 Z" fill="#16c7fc" />
<text x="110" y="160" font-size="20.5" font-weight="700" fill="rgba(255,255,255,0.92)" text-anchor="middle" letter-spacing="0.04em">Step 01 (Day 1~2)</text>
<text x="110" y="210" font-size="30" font-weight="700" fill="#ffffff" text-anchor="middle" letter-spacing="-0.02em">
<tspan x="110" dy="0">HTML5</tspan>
<tspan x="110" dy="36">기초·구조</tspan>
</text>
</g>

<!-- Chevron 2: Step 02 (214 to 476) -->
<g filter="url(#chevronShadow)">
<path d="M 214 92 L 448 92 L 476 192 L 448 292 L 214 292 L 242 192 Z" fill="#199cfa" />
<text x="348" y="160" font-size="20.5" font-weight="700" fill="rgba(255,255,255,0.92)" text-anchor="middle" letter-spacing="0.04em">Step 02 (Day 3~4)</text>
<text x="348" y="210" font-size="30" font-weight="700" fill="#ffffff" text-anchor="middle" letter-spacing="-0.02em">
<tspan x="348" dy="0">CSS3</tspan>
<tspan x="348" dy="36">스타일·배치</tspan>
</text>
</g>

<!-- Chevron 3: Step 03 (452 to 714) -->
<g filter="url(#chevronShadow)">
<path d="M 452 92 L 686 92 L 714 192 L 686 292 L 452 292 L 480 192 Z" fill="#0c64fc" />
<text x="586" y="160" font-size="20.5" font-weight="700" fill="rgba(255,255,255,0.92)" text-anchor="middle" letter-spacing="0.04em">Step 03 (Day 5)</text>
<text x="586" y="210" font-size="30" font-weight="700" fill="#ffffff" text-anchor="middle" letter-spacing="-0.02em">
<tspan x="586" dy="0">기본기보강</tspan>
<tspan x="586" dy="36">&amp; 문화교류</tspan>
</text>
</g>

<!-- Chevron 4: Step 04 (690 to 952) -->
<g filter="url(#chevronShadow)">
<path d="M 690 92 L 924 92 L 952 192 L 924 292 L 690 292 L 718 192 Z" fill="#0f2b82" />
<text x="822" y="160" font-size="20.5" font-weight="700" fill="rgba(255,255,255,0.92)" text-anchor="middle" letter-spacing="0.04em">Step 04 (Day 6~8)</text>
<text x="822" y="210" font-size="30" font-weight="700" fill="#ffffff" text-anchor="middle" letter-spacing="-0.02em">
<tspan x="822" dy="0">JS</tspan>
<tspan x="822" dy="36">동적 제어</tspan>
</text>
</g>

<!-- Chevron 5: Step 05 (928 to 1172) -->
<g filter="url(#chevronShadow)">
<path d="M 928 92 L 1144 92 L 1172 192 L 1144 292 L 928 292 L 956 192 Z" fill="#091b4f" />
<text x="1053" y="160" font-size="20" font-weight="700" fill="rgba(255,255,255,0.92)" text-anchor="middle" letter-spacing="0.04em">Step 05 (Day 9~10)</text>
<text x="1053" y="210" font-size="30" font-weight="700" fill="#ffffff" text-anchor="middle" letter-spacing="-0.02em">
<tspan x="1046" dy="0">웹 완성</tspan>
<tspan x="1046" dy="36">&amp; 수료</tspan>
</text>
</g>
</svg>

<!-- Bottom Strategy Summary Bar -->
<div class="biz-alert-bar" style="margin-top: 30px; border-left: 4px solid #1a56db; padding: 15px 22px;">
  <div style="font-size: 18px; font-weight: 700; color: #0f172a; line-height: 1.5;">
    <strong>점진적 빌드업 전략 :</strong> '골격(HTML) ➔ 스타일(CSS) ➔ 보강·문화교류 ➔ 동적 제어(JS) ➔ 완성작 발표'의 실습 설계를 적용
  </div>
</div>

</div>

---

<!-- Slide 6: 05 핵심 교수법: 1:2 초밀착 멘토링 (Open Linear Layout) -->
<div class="biz-header">
<div class="biz-header-left">
<span class="biz-header-tag">05 METHODOLOGY</span>
<h2 class="biz-header-title">밀착 실습 멘토링</h2>
</div>

</div>

<div style="display: grid; grid-template-columns: 1fr 1.1fr; gap: 36px; align-items: center; margin-top: 15px;">

<!-- Left: 1~3 Items with Expanded Spacing (gap: 52px) -->
<div style="display: flex; flex-direction: column; gap: 52px;">

<!-- Item 1: 1+2번 결합 (밀착 빠른 케어) -->
<div style="display: flex; gap: 20px; align-items: flex-start;">
<div style="width: 44px; height: 44px; border-radius: 50%; background: #1a56db; color: #ffffff; display: flex; align-items: center; justify-content: center; font-weight: 900; font-size: 18px; flex-shrink: 0; box-shadow: 0 3px 8px rgba(26, 86, 219, 0.25);">1</div>
<div>
<div style="font-size: 28px; font-weight: 700; color: #1a56db; margin-bottom: 6px;">밀착 전담 및 빠른 오류 해결</div>
</div>
</div>

<!-- Item 2: 신규 2번 (실습 위주의 수업 진행) -->
<div style="display: flex; gap: 20px; align-items: flex-start;">
<div style="width: 44px; height: 44px; border-radius: 50%; background: #0f2b82; color: #ffffff; display: flex; align-items: center; justify-content: center; font-weight: 900; font-size: 18px; flex-shrink: 0; box-shadow: 0 3px 8px rgba(15, 43, 130, 0.25);">2</div>
<div>
<div style="font-size: 28px; font-weight: 700; color: #0f2b82; margin-bottom: 6px;">직접 만들며 습득하는 핸즈온 실습</div>

</div>
</div>

<!-- Item 3: 기존 3번 유지 -->
<div style="display: flex; gap: 20px; align-items: flex-start;">
<div style="width: 44px; height: 44px; border-radius: 50%; background: #0284c7; color: #ffffff; display: flex; align-items: center; justify-content: center; font-weight: 900; font-size: 18px; flex-shrink: 0; box-shadow: 0 3px 8px rgba(2, 132, 199, 0.25);">3</div>
<div>
<div style="font-size: 28px; font-weight: 700; color: #0284c7; margin-bottom: 6px;">언어 장벽 없는 실시간 통역 루프</div>
</div>
</div>

</div>

<!-- Right: Large Photo Frame (460px) -->
<div class="biz-photo" style="height: 460px; border: 1px solid #cbd5e1; box-shadow: 0 4px 14px rgba(15, 23, 42, 0.06);">
<img src="images/class_photo.jpg" alt="강의 실습 사진">
</div>

</div>

---

<!-- Slide 7: 06 현지 눈높이 맞춤형 교재 -->
<div class="biz-header">
<div class="biz-header-left">
<span class="biz-header-tag">06 COURSEWARE</span>
<h2 class="biz-header-title">현지 눈높이 맞춤형 교재</h2>
</div>

</div>

<!-- Top 3 Feature Cards with Left Accent Bar (Width: 1040px) -->
<div style="width: 1040px; margin: 40px auto 0 auto; display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; word-break: keep-all;">

<!-- Card 1 -->
<div style="background: #ffffff; border: 1px solid #e2e8f0; border-left: 5px solid #1a56db; border-radius: 6px; padding: 12px 16px; box-shadow: 0 2px 8px rgba(15, 23, 42, 0.04); display: flex; flex-direction: column;">
<div style="font-size: 26px; font-weight: 900; color: #1a56db; margin-bottom: 6px;">1. 이중언어 병기</div>
<div style="font-size: 18px; color: #1e293b; line-height: 1.6; font-weight: 500;">
<strong>• 영어 · 베트남어 1:1 교안</strong><br>
</div>
</div>

<!-- Card 2 -->
<div style="background: #ffffff; border: 1px solid #e2e8f0; border-left: 5px solid #0f2b82; border-radius: 6px; padding: 12px 16px; box-shadow: 0 2px 8px rgba(15, 23, 42, 0.04); display: flex; flex-direction: column;">
<div style="font-size: 26px; font-weight: 900; color: #0f2b82; margin-bottom: 6px;">2. 일상 비유 메타포</div>
<div style="font-size: 18px; color: #1e293b; line-height: 1.6; font-weight: 500;">
<strong>• 실생활 비유 설명</strong>
</div>
</div>

<!-- Card 3 -->
<div style="background: #ffffff; border: 1px solid #e2e8f0; border-left: 5px solid #0284c7; border-radius: 6px; padding: 12px 16px; box-shadow: 0 2px 8px rgba(15, 23, 42, 0.04); display: flex; flex-direction: column;">
<div style="font-size: 26px; font-weight: 900; color: #0284c7; margin-bottom: 6px;">3. 생각하는 개발 훈련</div>
<div style="font-size: 18px; color: #1e293b; line-height: 1.6; font-weight: 500;">
<strong>• 단계별 퀴즈로 이해도 즉시 점검</strong>
</div>
</div>

</div>

<!-- 5-Card Stepped Overlap Gallery (Exact 16:9 Ratio 464px x 261px, Zero Crop & Staircase Offset) -->
<div style="position: relative; height: 312px; width: 1120px; margin: 28px auto 0 auto;">

<!-- Card 1: Day 1 HTML Basics -->
<div style="position: absolute; left: 0px; top: 0px; width: 464px; height: 261px; border-radius: 8px; overflow: hidden; border: 1px solid #cbd5e1; box-shadow: -4px 6px 16px rgba(15, 23, 42, 0.10); z-index: 1; background: #ffffff;">
<img src="images/textbook_1.png" style="width: 100%; height: 100%; object-fit: fill; display: block;">
</div>

<!-- Card 2: Day 2 HTML Form & Preview -->
<div style="position: absolute; left: 164px; top: 12px; width: 464px; height: 261px; border-radius: 8px; overflow: hidden; border: 1px solid #cbd5e1; box-shadow: -5px 7px 18px rgba(15, 23, 42, 0.12); z-index: 2; background: #ffffff;">
<img src="images/textbook_2.png" style="width: 100%; height: 100%; object-fit: fill; display: block;">
</div>

<!-- Card 3: Day 3 CSS Box Model -->
<div style="position: absolute; left: 328px; top: 24px; width: 464px; height: 261px; border-radius: 8px; overflow: hidden; border: 1px solid #cbd5e1; box-shadow: -5px 8px 20px rgba(15, 23, 42, 0.14); z-index: 3; background: #ffffff;">
<img src="images/textbook_3.png" style="width: 100%; height: 100%; object-fit: fill; display: block;">
</div>

<!-- Card 4: Day 4 CSS Flexbox -->
<div style="position: absolute; left: 492px; top: 36px; width: 464px; height: 261px; border-radius: 8px; overflow: hidden; border: 1px solid #cbd5e1; box-shadow: -6px 9px 22px rgba(15, 23, 42, 0.16); z-index: 4; background: #ffffff;">
<img src="images/textbook_4.png" style="width: 100%; height: 100%; object-fit: fill; display: block;">
</div>

<!-- Card 5: Day 7 JS DOM Object Tree (Fully Exposed) -->
<div style="position: absolute; left: 656px; top: 48px; width: 464px; height: 261px; border-radius: 8px; overflow: hidden; border: 1px solid #cbd5e1; box-shadow: -6px 10px 24px rgba(15, 23, 42, 0.18); z-index: 5; background: #ffffff;">
<img src="images/textbook_5.png" style="width: 100%; height: 100%; object-fit: fill; display: block;">
</div>

</div>

---

<!-- Slide 8: 07 최종 결과물 쇼케이스 (Open Layout + Live Mockup) -->
<div class="biz-header">
<div class="biz-header-left">
<span class="biz-header-tag">07 SHOWCASE</span>
<h2 class="biz-header-title">최종 결과물: 나만의 자기소개 웹사이트</h2>
</div>

</div>

<!-- Vertically Centered Grid (Lowered with margin-top: 85px to balance top and bottom space) -->
<div style="display: grid; grid-template-columns: 1fr 1.15fr; gap: 42px; align-items: center; margin-top: 85px;">

<!-- Left Column: 1~3 Items + Quote Box -->
<div style="display: flex; flex-direction: column; gap: 24px;">

<!-- Item 1 -->
<div style="display: flex; align-items: flex-start; gap: 16px; border-bottom: 1px solid #e2e8f0; padding-bottom: 16px;">
<div style="width: 42px; height: 42px; border-radius: 50%; background: #1a56db; color: #ffffff; display: flex; align-items: center; justify-content: center; font-weight: 900; font-size: 17px; flex-shrink: 0; box-shadow: 0 3px 8px rgba(26, 86, 219, 0.25);">01</div>
<div>
<div style="font-size: 26px; font-weight: 900; color: #0f172a; margin-bottom: 4px;">Semantic HTML 구조화</div>
</div>
</div>

<!-- Item 2 -->
<div style="display: flex; align-items: flex-start; gap: 16px; border-bottom: 1px solid #e2e8f0; padding-bottom: 16px;">
<div style="width: 42px; height: 42px; border-radius: 50%; background: #0f2b82; color: #ffffff; display: flex; align-items: center; justify-content: center; font-weight: 900; font-size: 17px; flex-shrink: 0; box-shadow: 0 3px 8px rgba(15, 43, 130, 0.25);">02</div>
<div>
<div style="font-size: 26px; font-weight: 900; color: #0f172a; margin-bottom: 4px;">Custom CSS & Flexbox 레이아웃</div>

</div>
</div>

<!-- Item 3 -->
<div style="display: flex; align-items: flex-start; gap: 16px; border-bottom: 1px solid #e2e8f0; padding-bottom: 16px;">
<div style="width: 42px; height: 42px; border-radius: 50%; background: #0284c7; color: #ffffff; display: flex; align-items: center; justify-content: center; font-weight: 900; font-size: 17px; flex-shrink: 0; box-shadow: 0 3px 8px rgba(2, 132, 199, 0.25);">03</div>
<div>
<div style="font-size: 26px; font-weight: 900; color: #0f172a; margin-bottom: 4px;">JavaScript 동적 인터랙션</div>
</div>
</div>

<!-- Quote Box -->
<div style="background: #f8fafc; border: 1px solid #e2e8f0; border-left: 5px solid #1a56db; padding: 15px 20px; margin-top: 6px; box-shadow: 0 2px 8px rgba(15, 23, 42, 0.04);">
<div style="font-weight: 900; color: #1a56db; font-size: 16px; margin-bottom: 5px;">"단순 복사 코딩이 아닌 진짜 내 웹사이트"</div>
</div>

</div>

<!-- Right Column: Uncropped Browser Mockup Frame -->
<div style="border-radius: 10px; overflow: hidden; border: 1px solid #cbd5e1; box-shadow: 0 6px 20px rgba(15, 23, 42, 0.09); background: #ffffff;">
<img src="images/project_sample.svg" alt="학생 프로젝트 포트폴리오 화면" style="width: 100%; height: auto; display: block;">
</div>

</div>

---

<!-- Slide 9: 08 문화교류 활동 (Polaroid Photowall Collage) -->
<div class="biz-header">
<div class="biz-header-left">
<span class="biz-header-tag">08 CULTURAL EXCHANGE</span>
<h2 class="biz-header-title">문화로 하나 된 순간</h2>
</div>

</div>

<!-- 4-Polaroid Photo-wall Grid (2 Rows x 2 Columns) -->
<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px 36px; width: 1040px; margin: 16px auto 0 auto;">

<!-- Polaroid 1: 윷놀이 -->
<div style="position: relative; background: #ffffff; padding: 12px 14px 14px 14px; border-radius: 6px; border: 1px solid #cbd5e1; box-shadow: 0 6px 16px rgba(15, 23, 42, 0.08); transform: rotate(-1.5deg);">
<div style="position: absolute; top: -10px; left: 50%; transform: translateX(-50%); width: 76px; height: 20px; background: rgba(254, 240, 138, 0.75); border: 1px dashed rgba(202, 138, 4, 0.4); border-radius: 2px;"></div>
<div style="height: 175px; overflow: hidden; border-radius: 4px; border: 1px solid #e2e8f0; background: #fff7ed;">
<img src="images/culture_1.jpg" style="width: 100%; height: 100%; object-fit: cover; display: block;">
</div>
<div style="font-size: 24px; font-weight: 700; color: #81ff61; text-align: center; margin-top: 8px;">✨ 함께하는 즐거움, 문화 페스티벌</div>
</div>

<!-- Polaroid 2: 딱지치기 -->
<div style="position: relative; background: #ffffff; padding: 12px 14px 14px 14px; border-radius: 6px; border: 1px solid #cbd5e1; box-shadow: 0 6px 16px rgba(15, 23, 42, 0.08); transform: rotate(1.5deg);">
<div style="position: absolute; top: -10px; left: 50%; transform: translateX(-50%); width: 76px; height: 20px; background: rgba(191, 219, 254, 0.75); border: 1px dashed rgba(37, 99, 235, 0.4); border-radius: 2px;"></div>
<div style="height: 175px; overflow: hidden; border-radius: 4px; border: 1px solid #e2e8f0; background: #f0f9ff;">
<img src="images/culture_2.jpg" style="width: 100%; height: 100%; object-fit: cover; display: block;">
</div>
<div style="font-size: 24px; font-weight: 700; color: #91b2ff; text-align: center; margin-top: 8px;">🎲 K-전통놀이 윷놀이 한판!</div>
</div>

<!-- Polaroid 3: 몸으로 말해요 -->
<div style="position: relative; background: #ffffff; padding: 12px 14px 14px 14px; border-radius: 6px; border: 1px solid #cbd5e1; box-shadow: 0 6px 16px rgba(15, 23, 42, 0.08); transform: rotate(1.2deg);">
<div style="position: absolute; top: -10px; left: 50%; transform: translateX(-50%); width: 76px; height: 20px; background: rgba(233, 213, 255, 0.75); border: 1px dashed rgba(147, 51, 234, 0.4); border-radius: 2px;"></div>
<div style="height: 175px; overflow: hidden; border-radius: 4px; border: 1px solid #e2e8f0; background: #faf5ff;">
<img src="images/culture_3.JPG" style="width: 100%; height: 100%; object-fit: cover; display: block;">
</div>
<div style="font-size: 24px; font-weight: 700; color: #df9cf3; text-align: center; margin-top: 8px;">💡 상상력을 이어라! '이어그리기 대작전'</div>
</div>

<!-- Polaroid 4: 문화교류와 우정 -->
<div style="position: relative; background: #ffffff; padding: 12px 14px 14px 14px; border-radius: 6px; border: 1px solid #cbd5e1; box-shadow: 0 6px 16px rgba(15, 23, 42, 0.08); transform: rotate(-1.2deg);">
<div style="position: absolute; top: -10px; left: 50%; transform: translateX(-50%); width: 76px; height: 20px; background: rgba(254, 205, 211, 0.75); border: 1px dashed rgba(225, 29, 72, 0.4); border-radius: 2px;"></div>
<div style="height: 175px; overflow: hidden; border-radius: 4px; border: 1px solid #e2e8f0; background: #fff1f2;">
<img src="images/culture_4.jpg" style="width: 100%; height: 100%; object-fit: cover; display: block;">
</div>
<div style="font-size: 24px; font-weight: 700; color: #ff9797; text-align: center; margin-top: 16px;">📸 2주간의 소중한 추억</div>
</div>

---

<!-- Slide 10: 09 어려움 극복 스토리 (3D Isometric Arrow Staircase) -->
<div class="biz-header">
<div class="biz-header-left">
<span class="biz-header-tag">09 CHALLENGE & SOLUTION</span>
<h2 class="biz-header-title">어려움 극복 스토리: 4단계 완주 여정</h2>
</div>

</div>

<!--
  [안내] 아래 각 STEP의 텍스트(제목, 설명, 성과)를 직접 자유롭게 수정하실 수 있습니다.
-->
<div style="position: relative; width: 1168px; height: 530px; margin-top: 10px; font-family: 'Pretendard', sans-serif;">

  <!-- 3D 계단 배경 일러스트 -->
  <img src="images/staircase_original.png" alt="3D 계단" style="position: absolute; left: 320px; top: 5px; width: 793px; height: 521px; object-fit: contain; pointer-events: none; z-index: 1;">

  <!-- ============================================== -->
  <!-- STEP 04 (최종 완주) -->
  <!-- ============================================== -->
  <div style="position: absolute; left: 445px; top: 25px; width: 375px; border-top: 2.5px solid #091e42; padding-top: 8px; z-index: 2; border-left: 2.5px solid #091e42; padding-left: 10px;">
    <div style="display: flex; align-items: center; gap: 14px; margin-bottom: 4px;">
      <span style="background: #091e42; color: #ffffff; font-size: 24px; font-weight: 900; padding: 2px 7px; letter-spacing: 0.5px; line-height: 1.2;">STEP 04</span>
      <span style="color: #091e42; font-size: 30px; font-weight: 700; letter-spacing: -0.02em;">최종 완주</span>
    </div>
  </div>

  <!-- ============================================== -->
  <!-- STEP 03 (밀착 케어) -->
  <!-- ============================================== -->
  <div style="position: absolute; left: 340px; top: 145px; width: 375px; border-top: 2.5px solid #0f2b82; padding-top: 8px; z-index: 2; border-left: 2.5px solid #0f2b82; padding-left: 10px;">
    <div style="display: flex; align-items: center; gap: 14px; margin-bottom: 4px;">
      <span style="background: #0f2b82; color: #ffffff; font-size: 24px; font-weight: 900; padding: 2px 7px; letter-spacing: 0.5px; line-height: 1.2;">STEP 03</span>
      <span style="color: #0f2b82; font-size: 30px; font-weight: 700; letter-spacing: -0.02em;">실습 격차 밀착 케어</span>
    </div>
  </div>

  <!-- ============================================== -->
  <!-- STEP 02 (부담 완화) -->
  <!-- ============================================== -->
  <div style="position: absolute; left: 220px; top: 265px; width: 375px; border-top: 2.5px solid #1a56db; padding-top: 8px; z-index: 2; border-left: 2.5px solid #1a56db; padding-left: 10px;">
    <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 4px;">
      <span style="background: #1a56db; color: #ffffff; font-size: 24px; font-weight: 900; padding: 2px 7px; letter-spacing: 0.5px; line-height: 1.2;">STEP 02</span>
      <span style="color: #1a56db; font-size: 30px; font-weight: 700; letter-spacing: -0.02em;">학습 부담 완화</span>
    </div>
  </div>

  <!-- ============================================== -->
  <!-- STEP 01 (언어 장벽) -->
  <!-- ============================================== -->
  <div style="position: absolute; left: 100px; top: 385px; width: 375px; border-top: 2.5px solid #0284c7; padding-top: 8px; z-index: 2; border-left: 2.5px solid #0284c7; padding-left: 10px;">
    <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 4px;">
      <span style="background: #0284c7; color: #ffffff; font-size: 24px; font-weight: 900; padding: 2px 7px; letter-spacing: 0.5px; line-height: 1.2;">STEP 01</span>
      <span style="color: #0284c7; font-size: 30px; font-weight: 700; letter-spacing: -0.02em;">언어 장벽 극복</span>
    </div>
  </div>

</div>

---

<!-- Slide 11: 10 팀원들의 성장과 완주 소회 (Top 4 Quotes + Bottom Wide Photo) -->
<div class="biz-header">
<div class="biz-header-left">
<span class="biz-header-tag">10 LESSONS &amp; GROWTH</span>
<h2 class="biz-header-title">단원별 성장 스토리</h2>
</div>

</div>

<!-- Top Row: 4 Members Reflection Cards in 1 Row -->
<div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; width: 1120px; margin: 8px auto 0 auto;">

<!-- 1. 김예원 단원 (컴퓨터공학부) -->
<div style="background: #ffffff; border: 1px solid #e2e8f0; border-top: 4px solid #1a56db; padding: 12px 14px; box-shadow: 0 2px 8px rgba(15, 23, 42, 0.04); display: flex; flex-direction: column; justify-content: space-between;">
<div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 6px;">
<span style="font-weight: 900; color: #1a56db; font-size: 16px;">김예원 단원</span>
<span style="background: #ebf5ff; color: #1a56db; font-size: 10.5px; font-weight: 800; padding: 2px 6px; border-radius: 3px;">컴퓨터공학부</span>
</div>
<div style="font-size: 12px; color: #334155; line-height: 1.55; word-break: keep-all; padding-bottom: 12px;  font-weight: 500;">
"현장에서 쏟아지는 돌발 에러들을 해결하며 <strong>디버깅 역량</strong>이 늘었고, 끝까지 포기하지 않는 끈기를 얻었습니다."
</div>
</div>

<!-- 2. 박정우 단원 (컴퓨터공학부) -->
<div style="background: #ffffff; border: 1px solid #e2e8f0; border-top: 4px solid #0f2b82; padding: 12px 14px; box-shadow: 0 2px 8px rgba(15, 23, 42, 0.04); display: flex; flex-direction: column; justify-content: space-between;">
<div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 6px;">
<span style="font-weight: 900; color: #0f2b82; font-size: 16px;">박정우 단원</span>
<span style="background: #e8ecf8; color: #0f2b82; font-size: 10.5px; font-weight: 800; padding: 2px 6px; border-radius: 3px;">컴퓨터공학부</span>
</div>
<div style="font-size: 12px; color: #334155; line-height: 1.55; word-break: keep-all; padding-bottom: 12px;  font-weight: 500;">
"입문자의 눈높이에 맞춰 지식을 전달하며 기술의 본질을 더 깊이 체득했고, 팀을 완주로 이끈 <strong>프로젝트 리더십</strong>을 배웠습니다."
</div>
</div>

<!-- 3. 조명현 단원 (컴퓨터공학부) -->
<div style="background: #ffffff; border: 1px solid #e2e8f0; border-top: 4px solid #0284c7; padding: 12px 14px; box-shadow: 0 2px 8px rgba(15, 23, 42, 0.04); display: flex; flex-direction: column; justify-content: space-between;">
<div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 6px;">
<span style="font-weight: 900; color: #0284c7; font-size: 16px;">조명현 단원</span>
<span style="background: #e0f2fe; color: #0284c7; font-size: 10.5px; font-weight: 800; padding: 2px 6px; border-radius: 3px;">컴퓨터공학부</span>
</div>
<div style="font-size: 12px; color: #0f172a; line-height: 1.55; word-break: keep-all; font-weight: 500; padding-bottom: 12px;">
"처음엔 코딩을 두려워하던 학생들이 첫 웹을 완성하는 모습을 보며, <strong>타인의 성장을 돕는 일이 곧 나의 큰 도약</strong>임을 체감했습니다."
</div>
</div>

<!-- 4. 허서정 단원 (항공관광외국어학부) -->
<div style="background: #ffffff; border: 1px solid #e2e8f0; border-top: 4px solid #0d9488; padding: 12px 14px; box-shadow: 0 2px 8px rgba(15, 23, 42, 0.04); display: flex; flex-direction: column; justify-content: space-between;">
<div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 6px;">
<span style="font-weight: 900; color: #0d9488; font-size: 16px;">허서정 단원</span>
<span style="background: #ccfbf1; color: #0f766e; font-size: 10.5px; font-weight: 800; padding: 2px 6px; border-radius: 3px;">외국어학부</span>
</div>
<div style="font-size: 12px; color: #0f172a; line-height: 1.55; word-break: keep-all; font-weight: 500;">
"기술과 사람 사이를 잇는 통역과 라포 형성을 주도하며 <strong>문화적 소통과 프로젝트 매니징의 가치</strong>를 배우고 큰 성취감을 얻었습니다."
</div>
</div>

</div>

<!-- Bottom Row: Wide Panoramic Group Photo Frame -->
<div class="biz-photo" style="width: 1120px; height: 415px; margin: 12px auto 0 auto; border: 1px solid #cbd5e1; box-shadow: 0 6px 20px rgba(15, 23, 42, 0.08); overflow: hidden; background: #ffffff;">
<img src="images/group_photo.JPG" alt="수료식 단체 사진" style="width: 100%; height: 100%; object-fit: cover; object-position: center 50%; display: block;">
</div>

---

<!-- Slide 12: 11 클로징 (PPT BIZCAM Bold Minimalist Closing) -->
<!-- _backgroundColor: #1a56db -->
<!-- _color: #ffffff -->

<div style="height: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; padding: 20px;">

<h1 style="color: #ffffff; font-size: 60px; font-weight: 700; margin: 0 0 16px 0; letter-spacing: -0.02em;">
경청해 주셔서 감사합니다
</h1>

<p style="color: #bfdbfe; font-size: 30px; max-width: 820px; margin: 0 0 40px 0; font-weight: 500; line-height: 1.6; word-break: keep-all;">
배움과 나눔의 소중한 기회를 열어주시고 성장을 이끌어주신<br>
<strong style="color: #ffffff; font-weight: 850;">월드프렌즈코리아 IT봉사단</strong>에 진심으로 감사드립니다.
</p>

<div style="background: #ffffff; color: #1a56db; padding: 12px 30px; font-size: 18px; font-weight: 600; display: inline-flex; align-items: center; gap: 10px;">
<span style="background: #1a56db; color: #ffffff; padding: 2px 8px; font-size: 15px;">Q & A</span>
발표 내용에 대한 질문을 편하게 말씀해 주세요.
</div>
</div>
