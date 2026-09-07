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
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  image-rendering: -webkit-optimize-contrast;
  }

  @media print {
    section {
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }
    img, svg {
      image-rendering: high-quality !important;
    }
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
