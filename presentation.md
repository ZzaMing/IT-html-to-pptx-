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
    margin-bottom: 24px;
    border-bottom: 2px solid var(--blue-primary);
    padding-bottom: 10px;
  }
  .biz-header-left {
    display: flex;
    align-items: baseline;
    gap: 12px;
  }
  .biz-header-tag {
    color: var(--blue-primary);
    font-size: 13px;
    font-weight: 800;
    letter-spacing: 0.08em;
  }
  .biz-header-title {
    color: var(--slate-900);
    font-size: 25px;
    font-weight: 900;
    margin: 0;
    letter-spacing: -0.02em;
  }
  .biz-header-sub {
    font-size: 13px;
    color: var(--slate-500);
    font-weight: 500;
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
<div style="display: flex; align-items: center; gap: 8px; margin-bottom: 24px;">
<div style="width: 14px; height: 14px; background: #1a56db;"></div>
<span style="color: #1a56db; font-size: 13px; font-weight: 800; letter-spacing: 0.1em;">2026 IT VOLUNTEER CORPS REPORT</span>
</div>

<h1 style="color: #0f172a; font-size: 38px; font-weight: 900; line-height: 1.3; margin: 0 0 16px 0; letter-spacing: -0.03em; word-break: keep-all;">
삼육대학교 IT 봉사대<br>
<span style="color: #1a56db;">베트남 다낭 교원대학교</span><br>
웹 프로그래밍 (HTML / CSS / JS)
</h1>

<!-- <p style="color: #475569; font-size: 17px; margin: 0 0 34px 0; font-weight: 500; line-height: 1.5; word-break: keep-all;">
집중 실습과 밀착 멘토링으로 완성한 IT 봉사 평가보고서
</p> -->

<div style="display: flex; flex-direction: column; gap: 8px; border-left: 3px solid #1a56db; padding-left: 16px;">
<div style="font-size: 13.5px; color: #334155;"><strong>파견 기간</strong> &nbsp;2026.07.12 ~ 07.27 (15일)</div>
<div style="font-size: 13.5px; color: #334155;"><strong>교육 기관</strong> &nbsp;베트남 다낭 교원대학교</div>
<div style="font-size: 13.5px; color: #334155;"><strong>발표팀</strong> &nbsp;IT 봉사대 웹 프로그래밍 팀</div>
</div>
</div>

<div style="display: flex; justify-content: center; align-items: center;">
<img src="images/web_elements.jpg" alt="HTML CSS JS" style="width: 420px; max-height: 420px; object-fit: contain;">
</div>
</div>

---

<!-- Slide 2: 01 활동 개요 (PPT BIZCAM Overlapping Badges & Cards) -->
<div class="biz-header">
<div class="biz-header-left">
<span class="biz-header-tag">01 OVERVIEW</span>
<h2 class="biz-header-title">활동 개요</h2>
</div>
<span class="biz-header-sub">베트남 다낭 교원대학교 파견 10일 집중 교육</span>
</div>

<div style="display: flex; align-items: center; justify-content: center; margin-top: 15px; margin-bottom: 40px;">
<div style="width: 170px; height: 170px; border-radius: 50%; border: 4px solid #1a56db; background: #ffffff; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; box-sizing: border-box; padding: 12px; z-index: 2; position: relative;">
<div style="font-size: 30px; font-weight: 900; color: #1a56db; line-height: 1; margin-bottom: 8px;">15<span style="font-size: 18px;">일</span></div>
<div style="font-size: 14px; font-weight: 800; color: #475569;">07.12 ~ 07.27</div>
</div>

<svg width="70" height="120" viewBox="0 0 70 120" style="margin-left: -26px; margin-right: 0px; z-index: 1; overflow: visible; flex-shrink: 0;">
<polygon points="0,15 70,60 0,105" fill="#1a56db" />
</svg>

<div style="width: 170px; height: 170px; border-radius: 50%; border: 4px solid #1a56db; background: #ffffff; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; box-sizing: border-box; padding: 12px; z-index: 2; position: relative;">
<div style="font-size: 26px; font-weight: 900; color: #1a56db; line-height: 1; margin-bottom: 8px;">수강생</div>
<div style="font-size: 14px; font-weight: 800; color: #475569;">입문자 맞춤형 강의</div>
</div>

<svg width="70" height="120" viewBox="0 0 70 120" style="margin-left: -26px; margin-right: 0px; z-index: 1; overflow: visible; flex-shrink: 0;">
<polygon points="0,15 70,60 0,105" fill="#1a56db" />
</svg>

<div style="width: 170px; height: 170px; border-radius: 50%; border: 4px solid #1a56db; background: #ffffff; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; box-sizing: border-box; padding: 12px; z-index: 2; position: relative;">
<div style="font-size: 28px; font-weight: 900; color: #1a56db; line-height: 1; margin-bottom: 8px;">50<span style="font-size: 16px;">시간</span></div>
<div style="font-size: 14px; font-weight: 800; color: #475569;">단계별 빌드업</div>
</div>

<svg width="70" height="120" viewBox="0 0 70 120" style="margin-left: -26px; margin-right: 0px; z-index: 1; overflow: visible; flex-shrink: 0;">
<polygon points="0,15 70,60 0,105" fill="#1a56db" />
</svg>

<div style="width: 170px; height: 170px; border-radius: 50%; border: 4px solid #1a56db; background: #ffffff; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; box-sizing: border-box; padding: 12px; z-index: 2; position: relative;">
<div style="font-size: 26px; font-weight: 900; color: #1a56db; line-height: 1; margin-bottom: 8px;">프로젝트</div>
<div style="font-size: 14px; font-weight: 800; color: #475569;">자기소개 페이지 구상</div>
</div>
</div>

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 28px; margin-bottom: 34px;">
<div style="background: #f8fafc; border-left: 5px solid #1a56db; padding: 20px 24px;">
<div style="margin-bottom: 8px;">
<span style="font-size: 16px; font-weight: 900; color: #1a56db;">핵심 교육 목표</span>
</div>
<div style="font-size: 15px; font-weight: 800; color: #0f172a; margin-bottom: 8px;">자기주도적 디지털 표현 역량 강화</div>
<div style="font-size: 13px; color: #475569; line-height: 1.7;">
• 단순 문법 암기가 아닌, 웹 구조와 스타일을 유기적으로 조합하는 실습 지도<br>
• 학생 개개인의 스토리와 비전을 담은 <strong>첫 웹 사이트 주도적 완성</strong><br>
• 개발에 대한 효능감 및 향후 진로 자신감 고취
</div>
</div>

<div style="background: #f8fafc; border-left: 5px solid #0f2b82; padding: 20px 24px;">
<div style="margin-bottom: 8px;">
<span style="font-size: 16px; font-weight: 900; color: #0f2b82;">특화 운영 전략</span>
</div>
<div style="font-size: 15px; font-weight: 800; color: #0f172a; margin-bottom: 8px;">밀착 멘토링 &amp; 현장 맞춤 지원</div>
<div style="font-size: 13px; color: #475569; line-height: 1.7;">
• <strong>실시간 디버깅:</strong> 메인 발표자 1인 + 보조 멘토 2인의 빠른 피드백 및 에러 해결<br>
• <strong>언어 장벽 극복:</strong> 영어·베트남어 자체 교안 및 통역 가동<br>
• <strong>유연한 진도 조절:</strong> 학생의 이해 속도에 맞춘 5일차 기본기 보강 강의 진행
</div>
</div>
</div>

<div class="biz-alert-bar" style="margin-top: 0; padding: 14px 20px;">
<div class="biz-alert-icon">!</div>
<div style="font-size: 13.5px; line-height: 1.5; color: #334155;">
<strong>핵심 성과 요약 :</strong> 50시간의 집중 실습과 밀착 멘토링을 통해, 코딩 경험이 없던 입문자 학생들이 자신만의 웹 포트폴리오 개발을 성공적으로 완주했습니다.
</div>
</div>

---

<!-- Slide 3: 02 팀 구성 및 시너지 (Open Layout, High Contrast) -->
<div class="biz-header">
<div class="biz-header-left">
<span class="biz-header-tag">02 TEAM SYNERGY</span>
<h2 class="biz-header-title">팀 구성 및 시너지</h2>
</div>
<span class="biz-header-sub">컴퓨터공학 IT 교육 3인 + 외국어 통역·라포 1인의 유기적 결합</span>
</div>

<div style="display: grid; grid-template-columns: 1fr 1.05fr; gap: 32px; align-items: center; margin-top: 15px;">
<div style="display: flex; flex-direction: column; gap: 16px;">
<div style="border-left: 5px solid #1a56db; padding-left: 20px;">
<div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
<span style="font-size: 19px; font-weight: 900; color: #1a56db;">컴퓨터공학부 (김예원 / 박정우 / 조명현)</span>
<span style="background: #1a56db; color: #ffffff; font-size: 11px; font-weight: 800; padding: 2px 8px; white-space: nowrap;">IT 교육 담당</span>
</div>
<div style="font-size: 14px; color: #475569; line-height: 1.7;">
• 10일 완성 웹 커리큘럼(HTML·CSS·JS) 기획 및 메인 강의<br>
• 메인 강사 1인 + 보조 멘토 2인의 케어 수업<br>
• 학생별 에러 발생 시 즉각적인 1:1 디버깅 지원
</div>
</div>

<div style="display: flex; align-items: center; gap: 12px; padding-left: 20px; margin: 2px 0;">
<div style="width: 30px; height: 30px; border-radius: 50%; background: #1a56db; color: #ffffff; display: flex; align-items: center; justify-content: center; font-weight: 900; font-size: 16px; box-shadow: 0 2px 6px rgba(26, 86, 219, 0.25);">+</div>
<span style="font-size: 13px; font-weight: 800; color: #64748b; letter-spacing: 0.05em;">협업 시너지</span>
</div>

<div style="border-left: 5px solid #0f2b82; padding-left: 20px;">
<div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
<span style="font-size: 19px; font-weight: 900; color: #0f2b82;">항공관광외국어학부 (허서정)</span>
<span style="background: #0f2b82; color: #ffffff; font-size: 11px; font-weight: 800; padding: 2px 8px; white-space: nowrap;">통역 &amp; 라포</span>
</div>
<div style="font-size: 14px; color: #475569; line-height: 1.7;">
• 복잡한 프로그래밍 개념을 알기 쉬운 영어로 실시간 통역<br>
• 아이스 브레이킹 및 분위기 메이킹<br>
• 수업 전후 학생 정서 케어 및 친밀한 라포 형성 주도
</div>
</div>
</div>

<div class="biz-photo" style="height: 460px; border-radius: 8px; border: 1px solid #cbd5e1; box-shadow: 0 4px 14px rgba(15, 23, 42, 0.06);">
<img src="images/team_photo.svg" alt="봉사단 팀 사진">
</div>
</div>

---

<!-- Slide 4: 03 교육 대상 특성 및 도출 전략 (8-Node Hub & Spoke) -->
<div class="biz-header">
<div class="biz-header-left">
<span class="biz-header-tag">03 TARGET &amp; STRATEGY</span>
<h2 class="biz-header-title">교육 대상 특성 및 도출 전략</h2>
</div>
<span class="biz-header-sub">학습자 특성 및 현장 과제 8대 요소 분석을 통한 다학제 융합 솔루션</span>
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
<div style="font-size: 18px; font-weight: 900; color: #0f172a; line-height: 1.25; margin-bottom: 6px;">
<span style="font-size: 17px;">🎯</span> 도출 핵심 전략
</div>

<!-- 3 Core Strategy Action Cards -->
<div style="display: flex; flex-direction: column; gap: 6px; width: 100%; max-width: 232px;">
<div style="solid #e2e8f0; #0f2b82; padding: 5px 10px; display: flex; align-items: center; justify-content: space-between;">
<span style="font-size: 11px; font-weight: 900; color: #1a56db;">밀착 코칭</span>
<span style="font-size: 9.5px; font-weight: 700; color: #334155;">실시간 1:1 디버깅 지원</span>
</div>

<div style="solid #e2e8f0; #0f2b82; padding: 5px 10px; display: flex; align-items: center; justify-content: space-between;">
<span style="font-size: 11px; font-weight: 900; color: #0f2b82;">아중언어 교안</span>
<span style="font-size: 9.5px; font-weight: 700; color: #334155;">영어 · 베트남어 교안</span>
</div>

<div style="solid #e2e8f0; #0f2b82; padding: 5px 10px; display: flex; align-items: center; justify-content: space-between;">
<span style="font-size: 11px; font-weight: 900; color: #0284c7;">유연한 진도</span>
<span style="font-size: 9.5px; font-weight: 700; color: #334155;">Day 5 맞춤 복습 보강</span>
</div>
</div>

</div>

<!-- 4 Left Cards: 학습자 특성 (HTML) -->
<!-- Card 1 (Top-Left): 💻 코딩 첫걸음 -->
<div style="position: absolute; top: 15px; left: 0; width: 340px; height: 82px; z-index: 2; background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 41px; padding: 12px 18px 12px 14px; box-shadow: 0 4px 14px rgba(15, 23, 42, 0.06); display: flex; align-items: center; gap: 14px; box-sizing: border-box;">
<div style="width: 46px; height: 46px; border-radius: 50%; background: #eff6ff; border: 1.5px solid #bfdbfe; display: flex; align-items: center; justify-content: center; font-size: 20px; flex-shrink: 0;">💻</div>
<div style="display: flex; flex-direction: column; gap: 3px;">
<div style="display: flex; align-items: center; gap: 6px;">
<span style="font-size: 14px; font-weight: 900; color: #1a56db;">01. 코딩 첫걸음</span>
<span style="font-size: 10px; font-weight: 800; color: #1a56db; background: #dbeafe; padding: 1px 6px; border-radius: 4px;">입문</span>
</div>
<span style="font-size: 11.5px; color: #64748b; line-height: 1.4;">대학교 1학년 입문자 대상<br>프로그래밍 기초 및 개발 경험 전무</span>
</div>
</div>

<!-- Card 2: ⚠️ 영문 에러 장벽 -->
<div style="position: absolute; top: 135px; left: 0; width: 340px; height: 82px; z-index: 2; background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 41px; padding: 12px 18px 12px 14px; box-shadow: 0 4px 14px rgba(15, 23, 42, 0.06); display: flex; align-items: center; gap: 14px; box-sizing: border-box;">
<div style="width: 46px; height: 46px; border-radius: 50%; background: #eff6ff; border: 1.5px solid #bfdbfe; display: flex; align-items: center; justify-content: center; font-size: 20px; flex-shrink: 0;">⚠️</div>
<div style="display: flex; flex-direction: column; gap: 3px;">
<div style="display: flex; align-items: center; gap: 6px;">
<span style="font-size: 14px; font-weight: 900; color: #1a56db;">02. 영문 에러 장벽</span>
<span style="font-size: 10px; font-weight: 800; color: #1a56db; background: #dbeafe; padding: 1px 6px; border-radius: 4px;">심리</span>
</div>
<span style="font-size: 11.5px; color: #64748b; line-height: 1.4;">콘솔 붉은 에러 메시지와<br>낯선 영문 코드에 대한 심리적 두려움</span>
</div>
</div>

<!-- Card 3: 🗣️ 언어 소통 한계 -->
<div style="position: absolute; top: 255px; left: 0; width: 340px; height: 82px; z-index: 2; background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 41px; padding: 12px 18px 12px 14px; box-shadow: 0 4px 14px rgba(15, 23, 42, 0.06); display: flex; align-items: center; gap: 14px; box-sizing: border-box;">
<div style="width: 46px; height: 46px; border-radius: 50%; background: #eff6ff; border: 1.5px solid #bfdbfe; display: flex; align-items: center; justify-content: center; font-size: 20px; flex-shrink: 0;">🗣️</div>
<div style="display: flex; flex-direction: column; gap: 3px;">
<div style="display: flex; align-items: center; gap: 6px;">
<span style="font-size: 14px; font-weight: 900; color: #1a56db;">03. 언어 소통 한계</span>
<span style="font-size: 10px; font-weight: 800; color: #1a56db; background: #dbeafe; padding: 1px 6px; border-radius: 4px;">장벽</span>
</div>
<span style="font-size: 11.5px; color: #64748b; line-height: 1.4;">한국어-베트남어 간 소통 한계<br>전문 IT 용어의 직관적 설명 필요성</span>
</div>
</div>

<!-- Card 4 (Bottom-Left): 🔥 높은 학습 열의 -->
<div style="position: absolute; top: 375px; left: 0; width: 340px; height: 82px; z-index: 2; background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 41px; padding: 12px 18px 12px 14px; box-shadow: 0 4px 14px rgba(15, 23, 42, 0.06); display: flex; align-items: center; gap: 14px; box-sizing: border-box;">
<div style="width: 46px; height: 46px; border-radius: 50%; background: #eff6ff; border: 1.5px solid #bfdbfe; display: flex; align-items: center; justify-content: center; font-size: 20px; flex-shrink: 0;">🔥</div>
<div style="display: flex; flex-direction: column; gap: 3px;">
<div style="display: flex; align-items: center; gap: 6px;">
<span style="font-size: 14px; font-weight: 900; color: #1a56db;">04. 높은 학습 열의</span>
<span style="font-size: 10px; font-weight: 800; color: #1a56db; background: #dbeafe; padding: 1px 6px; border-radius: 4px;">동기</span>
</div>
<span style="font-size: 11.5px; color: #64748b; line-height: 1.4;">새로운 IT 기술에 대한 뜨거운 호기심과<br>프로젝트를 완성하려는 강력한 의지</span>
</div>
</div>

<!-- 4 Right Cards: 현장 환경 및 운영 과제 (HTML) -->
<!-- Card 5 (Top-Right): ⏳ 10일 집중 일정 -->
<div style="position: absolute; top: 15px; right: 0; width: 340px; height: 82px; z-index: 2; background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 41px; padding: 12px 14px 12px 18px; box-shadow: 0 4px 14px rgba(15, 23, 42, 0.06); display: flex; align-items: center; justify-content: space-between; gap: 14px; box-sizing: border-box; text-align: right;">
<div style="display: flex; flex-direction: column; gap: 3px; width: 100%;">
<div style="display: flex; align-items: center; justify-content: flex-end; gap: 6px;">
<span style="font-size: 10px; font-weight: 800; color: #0f2b82; background: #e0e7ff; padding: 1px 6px; border-radius: 4px;">시한</span>
<span style="font-size: 14px; font-weight: 900; color: #0f2b82;">05. 10일 집중 일정</span>
</div>
<span style="font-size: 11.5px; color: #64748b; line-height: 1.4;">총 10일 50시간의 한정된 시간 내<br>완성작 도출이라는 일정 압박</span>
</div>
<div style="width: 46px; height: 46px; border-radius: 50%; background: #eef2ff; border: 1.5px solid #c7d2fe; display: flex; align-items: center; justify-content: center; font-size: 20px; flex-shrink: 0;">⏳</div>
</div>

<!-- Card 6: 🖥️ 실습실 PC 환경 -->
<div style="position: absolute; top: 135px; right: 0; width: 340px; height: 82px; z-index: 2; background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 41px; padding: 12px 14px 12px 18px; box-shadow: 0 4px 14px rgba(15, 23, 42, 0.06); display: flex; align-items: center; justify-content: space-between; gap: 14px; box-sizing: border-box; text-align: right;">
<div style="display: flex; flex-direction: column; gap: 3px; width: 100%;">
<div style="display: flex; align-items: center; justify-content: flex-end; gap: 6px;">
<span style="font-size: 10px; font-weight: 800; color: #0f2b82; background: #e0e7ff; padding: 1px 6px; border-radius: 4px;">인프라</span>
<span style="font-size: 14px; font-weight: 900; color: #0f2b82;">06. 실습실 PC 환경</span>
</div>
<span style="font-size: 11.5px; color: #64748b; line-height: 1.4;">현지 실습실 네트워크 연결<br>에디터 및 개발환경 세팅</span>
</div>
<div style="width: 46px; height: 46px; border-radius: 50%; background: #eef2ff; border: 1.5px solid #c7d2fe; display: flex; align-items: center; justify-content: center; font-size: 20px; flex-shrink: 0;">🖥️</div>
</div>

<!-- Card 7: 📊 개인별 진도 편차 -->
<div style="position: absolute; top: 255px; right: 0; width: 340px; height: 82px; z-index: 2; background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 41px; padding: 12px 14px 12px 18px; box-shadow: 0 4px 14px rgba(15, 23, 42, 0.06); display: flex; align-items: center; justify-content: space-between; gap: 14px; box-sizing: border-box; text-align: right;">
<div style="display: flex; flex-direction: column; gap: 3px; width: 100%;">
<div style="display: flex; align-items: center; justify-content: flex-end; gap: 6px;">
<span style="font-size: 10px; font-weight: 800; color: #0f2b82; background: #e0e7ff; padding: 1px 6px; border-radius: 4px;">편차</span>
<span style="font-size: 14px; font-weight: 900; color: #0f2b82;">07. 개인별 진도 편차</span>
</div>
<span style="font-size: 11.5px; color: #64748b; line-height: 1.4;">학생 간 습득 속도 및 타자 차이<br>낙오자 방지를 위한 속도 조절</span>
</div>
<div style="width: 46px; height: 46px; border-radius: 50%; background: #eef2ff; border: 1.5px solid #c7d2fe; display: flex; align-items: center; justify-content: center; font-size: 20px; flex-shrink: 0;">📊</div>
</div>

<!-- Card 8 (Bottom-Right): 🤝 학습 몰입 & 라포 -->
<div style="position: absolute; top: 375px; right: 0; width: 340px; height: 82px; z-index: 2; background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 41px; padding: 12px 14px 12px 18px; box-shadow: 0 4px 14px rgba(15, 23, 42, 0.06); display: flex; align-items: center; justify-content: space-between; gap: 14px; box-sizing: border-box; text-align: right;">
<div style="display: flex; flex-direction: column; gap: 3px; width: 100%;">
<div style="display: flex; align-items: center; justify-content: flex-end; gap: 6px;">
<span style="font-size: 10px; font-weight: 800; color: #0f2b82; background: #e0e7ff; padding: 1px 6px; border-radius: 4px;">라포</span>
<span style="font-size: 14px; font-weight: 900; color: #0f2b82;">08. 학습 몰입 &amp; 라포</span>
</div>
<span style="font-size: 11.5px; color: #64748b; line-height: 1.4;">장시간 실습에 따른 피로도 관리와<br>수업 전후 정서 케어 및 신뢰 형성</span>
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
<span class="biz-header-sub">Step By Step</span>
</div>

<div style="width: 100%; margin: 26px auto 0;">

<!-- SVG Timeline Nodes & Interlocking Chevrons (ZERO INDENTATION) -->
<svg width="1172" height="135" viewBox="0 0 1172 135" style="display: block;">
<defs>
<filter id="nodeShadow" x="-20%" y="-20%" width="140%" height="140%">
<feDropShadow dx="0" dy="3" stdDeviation="4" flood-opacity="0.12" />
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
<path d="M -9,-2 A 8.5 8.5 0 1 1 -2,7.5" fill="none" stroke="#0c64fc" stroke-width="2" stroke-linecap="round" />
<polyline points="-10,-6 -9,-1 -4,-2" fill="none" stroke="#0c64fc" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
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

<!-- 5 Interlocking Chevron Arrows (Height: 38, Y: 85 to 123) -->
<!-- Chevron 1: Step 01 (0 to 223) -->
<path d="M 4 85 L 217 85 L 233 104 L 217 123 L 4 123 Q 0 123 0 119 L 0 89 Q 0 85 4 85 Z" fill="#16c7fc" />
<text x="108" y="108.5" font-size="12.5" font-weight="900" fill="#ffffff" text-anchor="middle">Step 01 (Day 1~2)</text>

<!-- Chevron 2: Step 02 (220 to 461) -->
<path d="M 220 85 L 455 85 L 471 104 L 455 123 L 220 123 L 236 104 Z" fill="#199cfa" />
<text x="348" y="108.5" font-size="12.5" font-weight="900" fill="#ffffff" text-anchor="middle">Step 02 (Day 3~4)</text>

<!-- Chevron 3: Step 03 (458 to 699) -->
<path d="M 458 85 L 693 85 L 709 104 L 693 123 L 458 123 L 474 104 Z" fill="#0c64fc" />
<text x="586" y="108.5" font-size="12.5" font-weight="900" fill="#ffffff" text-anchor="middle">Step 03 (Day 5)</text>

<!-- Chevron 4: Step 04 (696 to 937) -->
<path d="M 696 85 L 931 85 L 947 104 L 931 123 L 696 123 L 712 104 Z" fill="#0f2b82" />
<text x="824" y="108.5" font-size="12.5" font-weight="900" fill="#ffffff" text-anchor="middle">Step 04 (Day 6~8)</text>

<!-- Chevron 5: Step 05 (934 to 1172) -->
<path d="M 934 85 L 1156 85 L 1172 104 L 1156 123 L 934 123 L 950 104 Z" fill="#091b4f" />
<text x="1062" y="108.5" font-size="12.5" font-weight="900" fill="#ffffff" text-anchor="middle">Step 05 (Day 9~10)</text>
</svg>

<!-- 5 Column Content Cards (HTML Grid with Balanced High-Density Content) -->
<div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 14px; margin-top: 24px;">

<!-- Column 1: HTML 기초 & 구조화 -->
<div style="background: #ffffff; border: 1.5px solid #e2e8f0; border-top: 4px solid #16c7fc; border-radius: 8px; padding: 18px 13px; box-shadow: 0 4px 12px rgba(15, 23, 42, 0.05); display: flex; flex-direction: column; gap: 10px;">
<div>
<div style="font-size: 14.5px; font-weight: 900; color: #0f172a;">HTML 기초 &amp; 구조화</div>
</div>
<div style="font-size: 11.5px; color: #475569; line-height: 1.6; display: flex; flex-direction: column; gap: 5px;">
<div>• VS Code 환경 &amp; 웹 원리 이해</div>
<div>• 시맨틱 태그(header·nav·footer)</div>
<div>• 이미지·비디오 및 하이퍼링크</div>
<div>• 폼(Form)·입력(Input) 컴포넌트</div>
<div>• 웹 표준 문서 계층 구조화 실습</div>
</div>
</div>

<!-- Column 2: CSS 스타일 & 레이아웃 -->
<div style="background: #ffffff; border: 1.5px solid #e2e8f0; border-top: 4px solid #199cfa; border-radius: 8px; padding: 18px 13px; box-shadow: 0 4px 12px rgba(15, 23, 42, 0.05); display: flex; flex-direction: column; gap: 10px;">
<div>
<div style="font-size: 14.5px; font-weight: 900; color: #0f172a;">CSS 스타일 &amp; 레이아웃</div>
</div>
<div style="font-size: 11.5px; color: #475569; line-height: 1.6; display: flex; flex-direction: column; gap: 5px;">
<div>• 선택자 문법 &amp; 스타일 상속 원리</div>
<div>• 박스 모델(여백·테두리·콘텐츠)</div>
<div>• Flexbox 기반 1차원 레이아웃</div>
<div>• 컬러·폰트 시스템 디자인 가이드</div>
<div>• 버튼·카드 핵심 UI 컴포넌트 구현</div>
</div>
</div>

<!-- Column 3: 기본기 보강 & 문화교류 -->
<div style="background: #ffffff; border: 1.5px solid #e2e8f0; border-top: 4px solid #0c64fc; border-radius: 8px; padding: 18px 13px; box-shadow: 0 4px 12px rgba(15, 23, 42, 0.05); display: flex; flex-direction: column; gap: 10px;">
<div>
<div style="font-size: 14.5px; font-weight: 900; color: #0f172a;">기본기 보강 &amp; 문화교류</div>
</div>
<div style="font-size: 11.5px; color: #475569; line-height: 1.6; display: flex; flex-direction: column; gap: 5px;">
<div>• 1주차 수업 피드백 및 이해도 점검</div>
<div>• HTML·CSS 핵심 개념 집중 복습</div>
<div>• 박스와 flexbox 오류 1:1 케어</div>
<div>• 한국 전통놀이(윷놀이·딱지치기)</div>
<div>• 학생-봉사단 친밀감 및 라포 형성</div>
</div>
</div>

<!-- Column 4: JavaScript 동적 인터랙션 -->
<div style="background: #ffffff; border: 1.5px solid #e2e8f0; border-top: 4px solid #0f2b82; border-radius: 8px; padding: 18px 13px; box-shadow: 0 4px 12px rgba(15, 23, 42, 0.05); display: flex; flex-direction: column; gap: 10px;">
<div>
<div style="font-size: 14.5px; font-weight: 900; color: #0f172a;">JS 동적 인터랙션</div>
</div>
<div style="font-size: 11.5px; color: #475569; line-height: 1.6; display: flex; flex-direction: column; gap: 5px;">
<div>• 변수·자료형·함수·조건문 문법</div>
<div>• DOM 조작(요소 탐색·속성 제어)</div>
<div>• 클릭·입력 등 이벤트 리스너 제어</div>
<div>• 모달창·토글 등 인터랙티브 UI 구현</div>
<div>• 개발자 도구(Console) 에러 분석</div>
</div>
</div>

<!-- Column 5: Project ② & 최종 쇼케이스 -->
<div style="background: #ffffff; border: 1.5px solid #e2e8f0; border-top: 4px solid #091b4f; border-radius: 8px; padding: 18px 13px; box-shadow: 0 4px 12px rgba(15, 23, 42, 0.05); display: flex; flex-direction: column; gap: 10px;">
<div>
<div style="font-size: 14.5px; font-weight: 900; color: #0f172a;">Project  &amp; 쇼케이스</div>
</div>
<div style="font-size: 11.5px; color: #475569; line-height: 1.6; display: flex; flex-direction: column; gap: 5px;">
<div>• HTML·CSS·JS 3대 기술 통합</div>
<div>• 자기소개 프로젝트 구현</div>
<div>• 학생 개별 완성작 발표</div>
<div>• 최종 수료식 및 수료증 수여</div>
<div>• 문화 교류(몸으로말해요)</div>
</div>
</div>

</div>

<!-- Bottom Strategy Summary Bar -->
<div class="biz-alert-bar" style="margin-top: 24px;">
<div style="display: flex; flex-direction: column; gap: 3px;">
<div style="font-size: 13px; font-weight: 800; color: black;">단계별 점진적 빌드업(Build-up) 완주 전략</div>
<div style="font-size: 12px; color: #475569; line-height: 1.5;">
단순 문법 암기식 주입을 지양하고 <strong>'기초 골격(HTML) ➔ 스타일링(CSS) ➔ 맞춤 보강 &amp; 문화교류 ➔ 동적 제어(JS) ➔ 자기소개 웹 &amp; 최종 수료'</strong>의 실습 설계를 적용했습니다.<br>
특히 Day 5의 진도 보강과 문화교류로 다진 라포를 바탕으로, 입문자 전원이 자신만의 웹사이트를 완성하고 수료했습니다.
</div>
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
<span class="biz-header-sub">실시간 피드백 루프</span>
</div>

<div style="display: grid; grid-template-columns: 1fr 1.1fr; gap: 36px; align-items: center; margin-top: 15px;">

<!-- Left: 1~3 Items with Expanded Spacing (gap: 52px) -->
<div style="display: flex; flex-direction: column; gap: 52px;">

<!-- Item 1: 1+2번 결합 (밀착 빠른 케어) -->
<div style="display: flex; gap: 20px; align-items: flex-start;">
<div style="width: 44px; height: 44px; border-radius: 50%; background: #1a56db; color: #ffffff; display: flex; align-items: center; justify-content: center; font-weight: 900; font-size: 18px; flex-shrink: 0; box-shadow: 0 3px 8px rgba(26, 86, 219, 0.25);">1</div>
<div>
<div style="font-size: 18.5px; font-weight: 900; color: #1a56db; margin-bottom: 6px;">밀착 전담 및 빠른 오류 해결</div>
<div style="font-size: 14.5px; color: #475569; line-height: 1.65;">
보조 멘토 2인이 <strong>학생 2~3명당 1명씩 밀착 마크</strong>하여,<br>
코드 오류 발생 시 <strong>즉각 디버깅</strong>으로 진도 이탈 방지
</div>
</div>
</div>

<!-- Item 2: 신규 2번 (실습 위주의 수업 진행) -->
<div style="display: flex; gap: 20px; align-items: flex-start;">
<div style="width: 44px; height: 44px; border-radius: 50%; background: #0f2b82; color: #ffffff; display: flex; align-items: center; justify-content: center; font-weight: 900; font-size: 18px; flex-shrink: 0; box-shadow: 0 3px 8px rgba(15, 43, 130, 0.25);">2</div>
<div>
<div style="font-size: 18.5px; font-weight: 900; color: #0f2b82; margin-bottom: 6px;">직접 만들며 습득하는 핸즈온 실습</div>
<div style="font-size: 14.5px; color: #475569; line-height: 1.65;">
지루한 주입식 이론을 최소화하고, 문법 학습과 동시에 <strong>직접 코딩하며</strong><br>
브라우저에 구현되는 결과를 실시간으로 확인하는 참여형 수업 진행
</div>
</div>
</div>

<!-- Item 3: 기존 3번 유지 -->
<div style="display: flex; gap: 20px; align-items: flex-start;">
<div style="width: 44px; height: 44px; border-radius: 50%; background: #0284c7; color: #ffffff; display: flex; align-items: center; justify-content: center; font-weight: 900; font-size: 18px; flex-shrink: 0; box-shadow: 0 3px 8px rgba(2, 132, 199, 0.25);">3</div>
<div>
<div style="font-size: 18.5px; font-weight: 900; color: #0284c7; margin-bottom: 6px;">언어 장벽 없는 실시간 통역 루프</div>
<div style="font-size: 14.5px; color: #475569; line-height: 1.65;">
베트남어 질문 ➔ 영어 ➔ 한국어 번역 ➔ 기술 솔루션 도출의<br>
<strong>실시간 소통 루프</strong>를 통해 심리적 안정감과 학습 몰입도 제공
</div>
</div>
</div>

</div>

<!-- Right: Large Photo Frame (460px) -->
<div class="biz-photo" style="height: 460px; border-radius: 8px; border: 1px solid #cbd5e1; box-shadow: 0 4px 14px rgba(15, 23, 42, 0.06);">
<img src="images/class_photo.svg" alt="강의 실습 사진">
</div>

</div>

---

<!-- Slide 7: 06 현지 맞춤형 혁신 교안 (185p) -->
<div class="biz-header">
<div class="biz-header-left">
<span class="biz-header-tag">06 COURSEWARE</span>
<h2 class="biz-header-title">맞춤형 혁신 (185p)</h2>
</div>
<span class="biz-header-sub">이중언어 병기와 직관적 일상 메타포를 담은 자체 제작 강의안</span>
</div>

<!-- Top 3 Feature Cards with Left Accent Bar (Width: 1040px) -->
<div style="width: 1040px; margin: 12px auto 0 auto; display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; word-break: keep-all;">

<!-- Card 1 -->
<div style="background: #ffffff; border: 1px solid #e2e8f0; border-left: 5px solid #1a56db; border-radius: 6px; padding: 12px 16px; box-shadow: 0 2px 8px rgba(15, 23, 42, 0.04); display: flex; flex-direction: column;">
<div style="font-size: 14.5px; font-weight: 900; color: #1a56db; margin-bottom: 6px;">1. 이중언어 병기 (Bilingual)</div>
<div style="font-size: 13px; color: #475569; line-height: 1.55;">
<strong>영어 · 베트남어 1:1 교안</strong><br>
베트남어 설명을 수록하여 언어 장벽을 덜어냄<br>
<span style="color: #1a56db; font-weight: 700; display: inline-block; margin-top: 4px;">➔ Xây dựng trang web đầu tiên</span>
</div>
</div>

<!-- Card 2 -->
<div style="background: #ffffff; border: 1px solid #e2e8f0; border-left: 5px solid #0f2b82; border-radius: 6px; padding: 12px 16px; box-shadow: 0 2px 8px rgba(15, 23, 42, 0.04); display: flex; flex-direction: column;">
<div style="font-size: 14.5px; font-weight: 900; color: #0f2b82; margin-bottom: 6px;">2. 일상 비유 메타포</div>
<div style="font-size: 13px; color: #475569; line-height: 1.55;">
<strong>눈높이에 맞춘 비유 설명</strong><br>
• HTML/CSS: 집 건축 골조 & 인테리어<br>
• JS: 전기 배선 & 도어락 제어<br>
• 변수/배열: 이름표 상자와 계란판
</div>
</div>

<!-- Card 3 -->
<div style="background: #ffffff; border: 1px solid #e2e8f0; border-left: 5px solid #0284c7; border-radius: 6px; padding: 12px 16px; box-shadow: 0 2px 8px rgba(15, 23, 42, 0.04); display: flex; flex-direction: column;">
<div style="font-size: 14.5px; font-weight: 900; color: #0284c7; margin-bottom: 6px;">3. 실전 개발자 훈련</div>
<div style="font-size: 13px; color: #475569; line-height: 1.55;">
<strong>스스로 해결하는 힘 배양</strong><br>
• 디지털 자습 교재(PDF 185p) 전원 제공<br>
• F12 콘솔 에러 추적 & console.log()<br>
• 단계별 퀴즈로 이해도 즉시 점검
</div>
</div>

</div>

<!-- 5-Card Stepped Overlap Gallery (Expanded 450px x 300px, Aspect Ratio 3:2) -->
<div style="position: relative; height: 304px; width: 1090px; margin: 36px auto 0 auto;">

<div style="position: absolute; left: 0px; top: 0px; width: 450px; height: 300px; border-radius: 8px; overflow: hidden; border: 1px solid #cbd5e1; box-shadow: -6px 8px 20px rgba(15, 23, 42, 0.13); z-index: 1; background: #ffffff;">
<img src="images/textbook_1.png" style="width: 100%; height: 100%; object-fit: cover; display: block;">
</div>

<div style="position: absolute; left: 160px; top: 0px; width: 450px; height: 300px; border-radius: 8px; overflow: hidden; border: 1px solid #cbd5e1; box-shadow: -6px 8px 20px rgba(15, 23, 42, 0.15); z-index: 2; background: #ffffff;">
<img src="images/textbook_2.png" style="width: 100%; height: 100%; object-fit: cover; display: block;">
</div>

<div style="position: absolute; left: 320px; top: 0px; width: 450px; height: 300px; border-radius: 8px; overflow: hidden; border: 1px solid #cbd5e1; box-shadow: -6px 8px 20px rgba(15, 23, 42, 0.17); z-index: 3; background: #ffffff;">
<img src="images/textbook_3.png" style="width: 100%; height: 100%; object-fit: cover; display: block;">
</div>

<div style="position: absolute; left: 480px; top: 0px; width: 450px; height: 300px; border-radius: 8px; overflow: hidden; border: 1px solid #cbd5e1; box-shadow: -6px 8px 20px rgba(15, 23, 42, 0.19); z-index: 4; background: #ffffff;">
<img src="images/textbook_4.png" style="width: 100%; height: 100%; object-fit: cover; display: block;">
</div>

<div style="position: absolute; left: 640px; top: 0px; width: 450px; height: 300px; border-radius: 8px; overflow: hidden; border: 1px solid #cbd5e1; box-shadow: -6px 8px 22px rgba(15, 23, 42, 0.22); z-index: 5; background: #ffffff;">
<img src="images/textbook_5.png" style="width: 100%; height: 100%; object-fit: cover; display: block;">
</div>

</div>

---

<!-- Slide 8: 07 최종 결과물 쇼케이스 (Open Layout + Live Mockup) -->
<div class="biz-header">
<div class="biz-header-left">
<span class="biz-header-tag">07 SHOWCASE</span>
<h2 class="biz-header-title">최종 결과물: 나만의 자기소개 웹사이트</h2>
</div>
<span class="biz-header-sub">기획부터 스타일링, 인터랙션까지 직접 구현</span>
</div>

<!-- Vertically Centered Grid (Lowered with margin-top: 85px to balance top and bottom space) -->
<div style="display: grid; grid-template-columns: 1fr 1.15fr; gap: 42px; align-items: center; margin-top: 85px;">

<!-- Left Column: 1~3 Items + Quote Box -->
<div style="display: flex; flex-direction: column; gap: 24px;">

<!-- Item 1 -->
<div style="display: flex; align-items: flex-start; gap: 16px; border-bottom: 1px solid #e2e8f0; padding-bottom: 16px;">
<div style="width: 42px; height: 42px; border-radius: 50%; background: #1a56db; color: #ffffff; display: flex; align-items: center; justify-content: center; font-weight: 900; font-size: 17px; flex-shrink: 0; box-shadow: 0 3px 8px rgba(26, 86, 219, 0.25);">01</div>
<div>
<div style="font-size: 17.5px; font-weight: 900; color: #0f172a; margin-bottom: 4px;">Semantic HTML 구조화</div>
<div style="font-size: 13.5px; color: #64748b; line-height: 1.5;">header, section, footer 등 바른 태그로 웹 문서 골조 완성</div>
</div>
</div>

<!-- Item 2 -->
<div style="display: flex; align-items: flex-start; gap: 16px; border-bottom: 1px solid #e2e8f0; padding-bottom: 16px;">
<div style="width: 42px; height: 42px; border-radius: 50%; background: #0f2b82; color: #ffffff; display: flex; align-items: center; justify-content: center; font-weight: 900; font-size: 17px; flex-shrink: 0; box-shadow: 0 3px 8px rgba(15, 43, 130, 0.25);">02</div>
<div>
<div style="font-size: 17.5px; font-weight: 900; color: #0f172a; margin-bottom: 4px;">Custom CSS & Flexbox 레이아웃</div>
<div style="font-size: 13.5px; color: #64748b; line-height: 1.5;">자신만의 개성 있는 테마 컬러와 반응형 정렬로 카드 디자인 구현</div>
</div>
</div>

<!-- Item 3 -->
<div style="display: flex; align-items: flex-start; gap: 16px; border-bottom: 1px solid #e2e8f0; padding-bottom: 16px;">
<div style="width: 42px; height: 42px; border-radius: 50%; background: #0284c7; color: #ffffff; display: flex; align-items: center; justify-content: center; font-weight: 900; font-size: 17px; flex-shrink: 0; box-shadow: 0 3px 8px rgba(2, 132, 199, 0.25);">03</div>
<div>
<div style="font-size: 17.5px; font-weight: 900; color: #0f172a; margin-bottom: 4px;">JavaScript 동적 인터랙션</div>
<div style="font-size: 13.5px; color: #64748b; line-height: 1.5;">버튼 클릭 이벤트, 토글, 링크이동 등 동적 기능 제어</div>
</div>
</div>

<!-- Quote Box -->
<div style="background: #f8fafc; border: 1px solid #e2e8f0; border-left: 5px solid #1a56db; padding: 15px 20px; margin-top: 6px; box-shadow: 0 2px 8px rgba(15, 23, 42, 0.04);">
<div style="font-weight: 900; color: #1a56db; font-size: 15px; margin-bottom: 5px;">"단순 복사 코딩이 아닌 진짜 내 웹사이트"</div>
<div style="font-size: 13px; color: #475569; line-height: 1.6; word-break: keep-all;">
학생 전원이 각자의 개성을 담은 사이트를 제작하고 공유하여 개발자로서의 첫 발자국을 내딛었습니다.
</div>
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
<span class="biz-header-sub">레크리에이션으로 꽃피운 특별한 우정</span>
</div>

<!-- 6-Polaroid Photo-wall Grid (2 Rows x 3 Columns) -->
<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 26px 28px; width: 1100px; margin: 16px auto 0 auto;">

<!-- Polaroid 1: 윷놀이 -->
<div style="position: relative; background: #ffffff; padding: 10px 10px 14px 10px; border-radius: 6px; border: 1px solid #cbd5e1; box-shadow: 0 8px 20px rgba(15, 23, 42, 0.11); transform: rotate(-2deg); transition: transform 0.2s;">
<div style="position: absolute; top: -9px; left: 50%; transform: translateX(-50%); width: 68px; height: 18px; background: rgba(254, 240, 138, 0.7); border: 1px dashed rgba(202, 138, 4, 0.4); border-radius: 2px;"></div>
<div style="height: 160px; overflow: hidden; border-radius: 4px; border: 1px solid #e2e8f0; background: #fff7ed;">
<img src="images/culture_1.png" style="width: 100%; height: 100%; object-fit: cover; display: block;">
</div>
<div style="font-size: 13.5px; font-weight: 900; color: #0f172a; text-align: center; margin-top: 8px;">🎲 K-전통놀이 윷놀이 한판!</div>
<div style="font-size: 11.5px; color: #64748b; text-align: center; margin-top: 2px;">도개걸윷모 말판 팀 대항전</div>
</div>

<!-- Polaroid 2: 딱지치기 -->
<div style="position: relative; background: #ffffff; padding: 10px 10px 14px 10px; border-radius: 6px; border: 1px solid #cbd5e1; box-shadow: 0 8px 20px rgba(15, 23, 42, 0.11); transform: rotate(1.8deg); transition: transform 0.2s;">
<div style="position: absolute; top: -9px; left: 50%; transform: translateX(-50%); width: 68px; height: 18px; background: rgba(191, 219, 254, 0.7); border: 1px dashed rgba(37, 99, 235, 0.4); border-radius: 2px;"></div>
<div style="height: 160px; overflow: hidden; border-radius: 4px; border: 1px solid #e2e8f0; background: #f0f9ff;">
<img src="images/culture_2.png" style="width: 100%; height: 100%; object-fit: cover; display: block;">
</div>
<div style="font-size: 13.5px; font-weight: 900; color: #0f172a; text-align: center; margin-top: 8px;">💥 넘어가라 딱지야! 딱지 배틀</div>
<div style="font-size: 11.5px; color: #64748b; text-align: center; margin-top: 2px;">파워풀한 타격감과 환호의 순간</div>
</div>

<!-- Polaroid 3: 몸으로 말해요 -->
<div style="position: relative; background: #ffffff; padding: 10px 10px 14px 10px; border-radius: 6px; border: 1px solid #cbd5e1; box-shadow: 0 8px 20px rgba(15, 23, 42, 0.11); transform: rotate(-1.5deg); transition: transform 0.2s;">
<div style="position: absolute; top: -9px; left: 50%; transform: translateX(-50%); width: 68px; height: 18px; background: rgba(233, 213, 255, 0.7); border: 1px dashed rgba(147, 51, 234, 0.4); border-radius: 2px;"></div>
<div style="height: 160px; overflow: hidden; border-radius: 4px; border: 1px solid #e2e8f0; background: #faf5ff;">
<img src="images/culture_3.png" style="width: 100%; height: 100%; object-fit: cover; display: block;">
</div>
<div style="font-size: 13.5px; font-weight: 900; color: #0f172a; text-align: center; margin-top: 8px;">🤸 온몸으로 소통하는 '몸으로 말해요'</div>
<div style="font-size: 11.5px; color: #64748b; text-align: center; margin-top: 2px;">언어를 초월한 바디랭귀지 퀴즈</div>
</div>

<!-- Polaroid 4: K-스낵 파티 -->
<div style="position: relative; background: #ffffff; padding: 10px 10px 14px 10px; border-radius: 6px; border: 1px solid #cbd5e1; box-shadow: 0 8px 20px rgba(15, 23, 42, 0.11); transform: rotate(1.5deg); transition: transform 0.2s;">
<div style="position: absolute; top: -9px; left: 50%; transform: translateX(-50%); width: 68px; height: 18px; background: rgba(254, 240, 138, 0.7); border: 1px dashed rgba(202, 138, 4, 0.4); border-radius: 2px;"></div>
<div style="height: 160px; overflow: hidden; border-radius: 4px; border: 1px solid #e2e8f0; background: #fefce8;">
<img src="images/culture_4.png" style="width: 100%; height: 100%; object-fit: cover; display: block;">
</div>
<div style="font-size: 13.5px; font-weight: 900; color: #0f172a; text-align: center; margin-top: 8px;">🍪 내용 추천좀 ~~~ ㅠㅠ</div>
<div style="font-size: 11.5px; color: #64748b; text-align: center; margin-top: 2px;">내용 추천좀 ~~</div>
</div>

<!-- Polaroid 5: 롤링페이퍼 & 선물 -->
<div style="position: relative; background: #ffffff; padding: 10px 10px 14px 10px; border-radius: 6px; border: 1px solid #cbd5e1; box-shadow: 0 8px 20px rgba(15, 23, 42, 0.11); transform: rotate(-2deg); transition: transform 0.2s;">
<div style="position: absolute; top: -9px; left: 50%; transform: translateX(-50%); width: 68px; height: 18px; background: rgba(254, 205, 211, 0.7); border: 1px dashed rgba(225, 29, 72, 0.4); border-radius: 2px;"></div>
<div style="height: 160px; overflow: hidden; border-radius: 4px; border: 1px solid #e2e8f0; background: #fff1f2;">
<img src="images/culture_5.png" style="width: 100%; height: 100%; object-fit: cover; display: block;">
</div>
<div style="font-size: 13.5px; font-weight: 900; color: #0f172a; text-align: center; margin-top: 8px;">💌 내용 추천좀 ~~</div>
<div style="font-size: 11.5px; color: #64748b; text-align: center; margin-top: 2px;">내용 추천해 주십쇼</div>
</div>

<!-- Polaroid 6: 단체 사진 -->
<div style="position: relative; background: #ffffff; padding: 10px 10px 14px 10px; border-radius: 6px; border: 1px solid #cbd5e1; box-shadow: 0 8px 20px rgba(15, 23, 42, 0.11); transform: rotate(2deg); transition: transform 0.2s;">
<div style="position: absolute; top: -9px; left: 50%; transform: translateX(-50%); width: 68px; height: 18px; background: rgba(187, 247, 208, 0.7); border: 1px dashed rgba(22, 163, 74, 0.4); border-radius: 2px;"></div>
<div style="height: 160px; overflow: hidden; border-radius: 4px; border: 1px solid #e2e8f0; background: #f0fdf4;">
<img src="images/culture_6.png" style="width: 100%; height: 100%; object-fit: cover; display: block;">
</div>
<div style="font-size: 13.5px; font-weight: 900; color: #0f172a; text-align: center; margin-top: 8px;">📸 삼육대 X 교원대</div>
<div style="font-size: 11.5px; color: #64748b; text-align: center; margin-top: 2px;">함께한 2주의 빛나는 수료식</div>
</div>

</div>

---

<!-- Slide 10: 09 어려움 극복 스토리 (3D Isometric Arrow Staircase) -->
<div class="biz-header">
<div class="biz-header-left">
<span class="biz-header-tag">09 CHALLENGE & SOLUTION</span>
<h2 class="biz-header-title">어려움 극복 스토리: 4단계 완주 여정</h2>
</div>
<span class="biz-header-sub">현장의 돌발 변수를 민첩한 튜닝과 밀착 케어로 돌파하며 이뤄낸 성장</span>
</div>

<!--
  [안내] 아래 각 STEP의 텍스트(제목, 설명, 성과)를 직접 자유롭게 수정하실 수 있습니다.
-->
<div style="position: relative; width: 1168px; height: 530px; margin-top: 10px; font-family: 'Pretendard', sans-serif;">

  <!-- 3D 계단 배경 일러스트 -->
  <img src="images/staircase_original.png" alt="3D 계단" style="position: absolute; left: 365px; top: 5px; width: 793px; height: 521px; object-fit: contain; pointer-events: none; z-index: 1;">

  <!-- ============================================== -->
  <!-- STEP 04 (최종 완주) -->
  <!-- ============================================== -->
  <div style="position: absolute; left: 495px; top: 25px; width: 375px; border-top: 2.5px solid #091e42; padding-top: 8px; z-index: 2; border-left: 2.5px solid #091e42; padding-left: 10px;">
    <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
      <span style="background: #091e42; color: #ffffff; font-size: 11px; font-weight: 900; padding: 2px 7px; letter-spacing: 0.5px; line-height: 1.2;">STEP 04</span>
      <span style="color: #091e42; font-size: 15px; font-weight: 850; letter-spacing: -0.02em;">최종 완주 </span>
    </div>
    <div style="font-size: 12px; color: #475569; line-height: 1.4; margin-bottom: 2px; white-space: nowrap;">
      • 끝까지 포기하지 않고 도전한 수료생들의 프로젝트 발표
    </div>
    <div style="font-size: 12px; color: #0284c7; font-weight: 750; line-height: 1.4; white-space: nowrap;">
      ➔ 개발자로서의 첫 발자국과 성취감 획득
    </div>
  </div>

  <!-- ============================================== -->
  <!-- STEP 03 (밀착 케어) -->
  <!-- ============================================== -->
  <div style="position: absolute; left: 390px; top: 145px; width: 375px; border-top: 2.5px solid #0f2b82; padding-top: 8px; z-index: 2; border-left: 2.5px solid #0f2b82; padding-left: 10px;">
    <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
      <span style="background: #0f2b82; color: #ffffff; font-size: 11px; font-weight: 900; padding: 2px 7px; letter-spacing: 0.5px; line-height: 1.2;">STEP 03</span>
      <span style="color: #0f2b82; font-size: 15px; font-weight: 850; letter-spacing: -0.02em;">실습 격차 밀착 케어</span>
    </div>
    <div style="font-size: 12px; color: #475569; line-height: 1.4; margin-bottom: 2px; white-space: nowrap;">
      • 보조 멘토 2인 전담 마크로 빠른 에러 해결
    </div>
    <div style="font-size: 12px; color: #0f2b82; font-weight: 750; line-height: 1.4; white-space: nowrap;">
      ➔ 낙오 위기 학생 1:1 맞춤형 디버깅으로 완주 페이스 지탱
    </div>
  </div>

  <!-- ============================================== -->
  <!-- STEP 02 (부담 완화) -->
  <!-- ============================================== -->
  <div style="position: absolute; left: 270px; top: 265px; width: 375px; border-top: 2.5px solid #1a56db; padding-top: 8px; z-index: 2; border-left: 2.5px solid #1a56db; padding-left: 10px;">
    <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
      <span style="background: #1a56db; color: #ffffff; font-size: 11px; font-weight: 900; padding: 2px 7px; letter-spacing: 0.5px; line-height: 1.2;">STEP 02</span>
      <span style="color: #1a56db; font-size: 15px; font-weight: 850; letter-spacing: -0.02em;">학습 부담 완화</span>
    </div>
    <div style="font-size: 12px; color: #475569; line-height: 1.4; margin-bottom: 2px; white-space: nowrap;">
      • Day 5 중간과제 유연화 (기초 문법 복습으로 전환)
    </div>
    <div style="font-size: 12px; color: #1a56db; font-weight: 750; line-height: 1.4; white-space: nowrap;">
      ➔ 윷놀이·딱지치기 문화교류를 통한 학습 피로도 리프레시
    </div>
  </div>

  <!-- ============================================== -->
  <!-- STEP 01 (언어 극복) -->
  <!-- ============================================== -->
  <div style="position: absolute; left: 145px; top: 377px; width: 375px; border-top: 2.5px solid #0284c7; padding-top: 8px; z-index: 2; border-left: 2.5px solid #0284c7; padding-left: 10px;">
    <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
      <span style="background: #0284c7; color: #ffffff; font-size: 11px; font-weight: 900; padding: 2px 7px; letter-spacing: 0.5px; line-height: 1.2;">STEP 01</span>
      <span style="color: #0284c7; font-size: 15px; font-weight: 850; letter-spacing: -0.02em;">언어 장벽 극복</span>
    </div>
    <div style="font-size: 12px; color: #475569; line-height: 1.4; margin-bottom: 2px; white-space: nowrap;">
      • 어학 단원 상주 실시간 3자 통역 루프 가동
    </div>
    <div style="font-size: 12px; color: #0284c7; font-weight: 750; line-height: 1.4; white-space: nowrap;">
      ➔ 185p 영어·베트남어 이중언어 교안 현지화
    </div>
  </div>

</div>

---

<!-- Slide 11: 10 팀원들의 성장과 완주 소회 (Center Photo + Left/Right Quotes) -->
<div class="biz-header">
<div class="biz-header-left">
<span class="biz-header-tag">10 LESSONS &amp; GROWTH</span>
<h2 class="biz-header-title">단원별 성장 스토리</h2>
</div>
<span class="biz-header-sub">지식을 나누며 함께 도약</span>
</div>

<!-- 3-Column Layout: Left (2 Members) | Center (Large Photo) | Right (2 Members) -->
<div style="display: grid; grid-template-columns: 1fr 1.35fr 1fr; gap: 24px; align-items: center; margin-top: 15px;">

<!-- Left Column: 김예원 & 박정우 -->
<div style="display: flex; flex-direction: column; gap: 20px;">

<!-- 1. 김예원 단원 (컴퓨터공학부) -->
<div style="background: #ffffff; border: 1px solid #e2e8f0; border-left: 5px solid #1a56db; padding: 18px 20px; box-shadow: 0 2px 8px rgba(15, 23, 42, 0.04);">
<div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
<span style="font-weight: 900; color: #1a56db; font-size: 15.5px;">김예원 단원</span>
<span style="background: #ebf5ff; color: #1a56db; font-size: 11px; font-weight: 800; padding: 2px 8px; ">컴퓨터공학부</span>
</div>
<div style="font-size: 13px; color: #334155; line-height: 1.6; word-break: keep-all;">
"현장에서 쏟아지는 돌발 에러들을 해결하며 <strong>실무 디버깅 역량</strong>이 늘었고, 끝까지 포기하지 않는 끈기를 얻었습니다."
</div>
</div>

<!-- 2. 박정우 단원 (컴퓨터공학부) -->
<div style="background: #ffffff; border: 1px solid #e2e8f0; border-left: 5px solid #0f2b82; padding: 18px 20px; box-shadow: 0 2px 8px rgba(15, 23, 42, 0.04);">
<div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
<span style="font-weight: 900; color: #0f2b82; font-size: 15.5px;">박정우 단원</span>
<span style="background: #e8ecf8; color: #0f2b82; font-size: 11px; font-weight: 800; padding: 2px 8px; ">컴퓨터공학부</span>
</div>
<div style="font-size: 13px; color: #334155; line-height: 1.6; word-break: keep-all;">
"입문자의 눈높이에 맞춰 지식을 전달하며 기술의 본질을 더 깊이 체득했고, 팀을 이끌며 함께 완주해낸 <strong>프로젝트 리더십</strong>을 배웠습니다."
</div>
</div>

</div>

<!-- Center Column: Large Group Photo Frame -->
<div style="display: flex; flex-direction: column; align-items: center;">
<div class="biz-photo" style="width: 100%; height: 460px; border-radius: 10px; border: 1px solid #cbd5e1; box-shadow: 0 6px 20px rgba(15, 23, 42, 0.08); overflow: hidden; background: #ffffff;">
<img src="images/group_photo.svg" alt="수료식 단체 사진" style="width: 100%; height: 100%; object-fit: cover; display: block;">
</div>
</div>

<!-- Right Column: 조명현 & 허서정 -->
<div style="display: flex; flex-direction: column; gap: 20px;">

<!-- 3. 조명현 단원 (컴퓨터공학부) -->
<div style="background: #ffffff; border: 1px solid #e2e8f0; border-left: 5px solid #0284c7; padding: 18px 20px; box-shadow: 0 2px 8px rgba(15, 23, 42, 0.04);">
<div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
<span style="font-weight: 900; color: #0284c7; font-size: 15.5px;">조명현 단원</span>
<span style="background: #e0f2fe; color: #0284c7; font-size: 11px; font-weight: 800; padding: 2px 8px; ">컴퓨터공학부</span>
</div>
<div style="font-size: 13px; color: #334155; line-height: 1.6; word-break: keep-all;">
"처음엔 코딩을 두려워하던 학생들이 첫 웹을 완성해가는 모습을 보며, <strong>타인의 성장을 돕는 일이 곧 나의 큰 도약</strong>임을 체감했습니다."
</div>
</div>

<!-- 4. 허서정 단원 (항공관광외국어학부) -->
<div style="background: #ffffff; border: 1px solid #e2e8f0; border-left: 5px solid #0d9488; padding: 18px 20px; box-shadow: 0 2px 8px rgba(15, 23, 42, 0.04);">
<div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
<span style="font-weight: 900; color: #0d9488; font-size: 15.5px;">허서정 단원</span>
<span style="background: #ccfbf1; color: #0f766e; font-size: 11px; font-weight: 800; padding: 2px 8px; ">항공관광외국어학부</span>
</div>
<div style="font-size: 13px; color: #334155; line-height: 1.6; word-break: keep-all;">
"기술과 사람 사이를 잇는 통역과 라포 형성을 주도하며 <strong>문화적 소통과 프로젝트 매니징의 가치</strong>를 배우고 국경을 넘은 성취감을 얻었습니다."
</div>
</div>

</div>

</div>

---

<!-- Slide 12: 11 클로징 (PPT BIZCAM Bold Minimalist Closing) -->
<!-- _backgroundColor: #1a56db -->
<!-- _color: #ffffff -->

<div style="height: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; padding: 20px;">

<h1 style="color: #ffffff; font-size: 52px; font-weight: 900; margin: 0 0 16px 0; letter-spacing: -0.02em;">
경청해 주셔서 감사합니다
</h1>

<p style="color: #bfdbfe; font-size: 21px; max-width: 820px; margin: 0 0 40px 0; font-weight: 500; line-height: 1.6; word-break: keep-all;">
배움과 나눔의 소중한 기회를 열어주시고 성장을 이끌어주신<br>
<strong style="color: #ffffff; font-weight: 850;">월드프렌즈코리아 IT봉사단</strong>에 진심으로 감사드립니다.
</p>

<div style="background: #ffffff; color: #1a56db; padding: 12px 30px; font-size: 16px; font-weight: 800; display: inline-flex; align-items: center; gap: 10px;">
<span style="background: #1a56db; color: #ffffff; padding: 2px 8px; font-size: 12px;">Q & A</span>
발표 내용에 대한 질문을 편하게 말씀해 주세요.
</div>
</div>
