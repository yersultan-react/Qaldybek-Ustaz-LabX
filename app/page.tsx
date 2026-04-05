"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const T = {
  kaz: {
    brand: "Qaldybek Ustaz",
    brandSub: "LabX",
    subtitle: "Электромагниттік тербелістер · Виртуалды зертхана",
    panelTitle: "Параметрлер",
    mode: "Режим",
    modeFree: "Еркін тербеліс (LC/RLC)",
    modeForced: "Еріксіз тербеліс (ЭҚК)",
    L: "Индуктивтік L (Гн)",
    C: "Сыйымдылық C (Ф)",
    R: "Кедергі R (Ом)",
    q0: "Бастапқы заряд q₀ (Кл)",
    emf: "ЭҚК амплитудасы E₀ (В)",
    freq: "Сыртқы жиілік f (Гц)",
    timeRange: "Уақыт аралығы (с)",
    build: "Салу",
    stop: "Тоқтату",
    play: "Іске қосу",
    reset: "Қалпына",
    formula: "Формула",
    computed: "Есептелген шамалар",
    omega0: "Меншікті ω₀",
    f0: "Меншікті f₀",
    period: "Период T",
    damp: "Демпфирлеу β",
    resonance: "Резонансқа",
    res_near: "өте жақын",
    res_close: "жақын",
    res_far: "алыс",
    note: "Еркін тербелісте энергия конденсатор мен катушка арасында алмасады. Еріксіз тербелісте сыртқы жиілік меншіктіге жуықтаса резонанс пайда болады.",
    tabGraph: "График",
    tabAnim: "Анимация",
    tabTheory: "Теория",
    tabTasks: "Тапсырмалар",
    graphQ: "q(t) — Заряд",
    graphI: "I(t) — Ток",
    animTitle: "Энергия конверсиясы · Тербеліс анимациясы",
    capacitor: "Конденсатор",
    coil: "Катушка",
    electricEnergy: "Электр өрісінің энергиясы",
    magneticEnergy: "Магнит өрісінің энергиясы",
    totalEnergy: "Жалпы энергия",
    theoryTitle: "Теориялық түсінік",
    theory1a: "Еркін электромагниттік тербеліс",
    theory1b: "— тізбекте бастапқы энергия берілгеннен кейін сыртқы әсерсіз жүретін тербеліс.",
    theory2: "Идеал LC контурында:",
    theory3: "Заряд пен ток периодты түрде өзгереді, энергия электр және магнит өрістері арасында ауысады.",
    theory4a: "Еріксіз электромагниттік тербеліс",
    theory4b: "— тізбекке периодты сыртқы ЭҚК әсер еткенде туатын тербеліс.",
    theory5: "Сыртқы жиілік меншікті жиілікке жуықтағанда резонанс байқалады.",
    theory6: "Электр өрісінің энергиясы:",
    theory7: "Магнит өрісінің энергиясы:",
    theory8: "Толық энергия сақталады:",
    tasksTitle: "Зертханалық тапсырмалар",
    tasks: [
      "L және C мәндерін өзгертіп, меншікті жиіліктің қалай өзгеретінін бақыла.",
      "R кедергісін арттырып, еркін тербелістің бәсеңдеуін зертте.",
      "Еріксіз режимге өтіп, сыртқы жиілікті өзгертіп, резонанс аймағын тап.",
      "Резонанс кезінде ток амплитудасының неге өсетінін түсіндір.",
      "LC және RLC тізбектерінің айырмашылығын қорытындыла.",
    ],
  },
  rus: {
    brand: "Qaldybek Ustaz",
    brandSub: "LabX",
    subtitle: "Электромагнитные колебания · Виртуальная лаборатория",
    panelTitle: "Параметры",
    mode: "Режим",
    modeFree: "Свободные колебания (LC/RLC)",
    modeForced: "Вынужденные колебания (ЭДС)",
    L: "Индуктивность L (Гн)",
    C: "Ёмкость C (Ф)",
    R: "Сопротивление R (Ом)",
    q0: "Начальный заряд q₀ (Кл)",
    emf: "Амплитуда ЭДС E₀ (В)",
    freq: "Внешняя частота f (Гц)",
    timeRange: "Временной диапазон (с)",
    build: "Построить",
    stop: "Остановить",
    play: "Запустить",
    reset: "Сброс",
    formula: "Формула",
    computed: "Вычисленные величины",
    omega0: "Собств. ω₀",
    f0: "Собств. f₀",
    period: "Период T",
    damp: "Затухание β",
    resonance: "Резонанс",
    res_near: "очень близко",
    res_close: "близко",
    res_far: "далеко",
    note: "При свободных колебаниях энергия переходит между конденсатором и катушкой. При вынужденных — при совпадении частот возникает резонанс.",
    tabGraph: "График",
    tabAnim: "Анимация",
    tabTheory: "Теория",
    tabTasks: "Задания",
    graphQ: "q(t) — Заряд",
    graphI: "I(t) — Ток",
    animTitle: "Конверсия энергии · Анимация колебаний",
    capacitor: "Конденсатор",
    coil: "Катушка",
    electricEnergy: "Энергия электрического поля",
    magneticEnergy: "Энергия магнитного поля",
    totalEnergy: "Полная энергия",
    theoryTitle: "Теоретическое описание",
    theory1a: "Свободные электромагнитные колебания",
    theory1b: "— колебания в контуре после сообщения начальной энергии без внешнего воздействия.",
    theory2: "В идеальном LC-контуре:",
    theory3: "Заряд и ток изменяются периодически, энергия переходит между электрическим и магнитным полями.",
    theory4a: "Вынужденные электромагнитные колебания",
    theory4b: "— колебания под действием периодической внешней ЭДС.",
    theory5: "При совпадении внешней частоты с собственной наблюдается резонанс.",
    theory6: "Энергия электрического поля:",
    theory7: "Энергия магнитного поля:",
    theory8: "Полная энергия сохраняется:",
    tasksTitle: "Лабораторные задания",
    tasks: [
      "Изменяй L и C, наблюдай, как меняется собственная частота.",
      "Увеличивай R и изучай затухание свободных колебаний.",
      "Перейди в режим вынужденных колебаний, найди резонансную частоту.",
      "Объясни, почему амплитуда тока растёт при резонансе.",
      "Сравни LC и RLC контуры и сделай вывод.",
    ],
  },
};

type Lang = "kaz" | "rus";
type Mode = "free" | "forced";
type TabId = "graph" | "animation" | "theory" | "tasks";

interface SimValues {
  mode: Mode; L: number; C: number; R: number; q0: number;
  emf: number; freq: number; timeRange: number;
  omega0: number; f0: number; T0: number; beta: number; omegaDrive: number;
}

function computeQI(v: SimValues, t: number) {
  if (v.mode === "free") {
    if (v.R === 0) {
      const q = v.q0 * Math.cos(v.omega0 * t);
      const i = -v.q0 * v.omega0 * Math.sin(v.omega0 * t);
      return { q, i };
    }
    const wd = Math.sqrt(Math.max(v.omega0 ** 2 - v.beta ** 2, 0));
    const d = Math.exp(-v.beta * t);
    const q = v.q0 * d * Math.cos(wd * t);
    const i = -v.q0 * d * (v.beta * Math.cos(wd * t) + wd * Math.sin(wd * t));
    return { q, i };
  }
  const den = Math.sqrt((1 / v.C - v.L * v.omegaDrive ** 2) ** 2 + (v.R * v.omegaDrive) ** 2);
  const qA = v.emf / Math.max(den, 1e-9);
  const ph = Math.atan2(v.R * v.omegaDrive, 1 / v.C - v.L * v.omegaDrive ** 2);
  const q = qA * Math.sin(v.omegaDrive * t - ph);
  const i = qA * v.omegaDrive * Math.cos(v.omegaDrive * t - ph);
  return { q, i };
}

function fmt(x: number) { return isFinite(x) ? x.toFixed(3) : "—"; }
function fmtE(x: number) { return isFinite(x) ? x.toExponential(2) : "—"; }

export default function ElectroLab() {
  const [lang, setLang] = useState<Lang>("kaz");
  const tr = T[lang];

  // draft state (what user edits in panel)
  const [draftMode, setDraftMode] = useState<Mode>("free");
  const [draftL, setDraftL] = useState(0.2);
  const [draftC, setDraftC] = useState(0.0001);
  const [draftR, setDraftR] = useState(10);
  const [draftQ0, setDraftQ0] = useState(0.002);
  const [draftEmf, setDraftEmf] = useState(10);
  const [draftFreq, setDraftFreq] = useState(30);
  const [draftTimeRange, setDraftTimeRange] = useState(1.2);

  // committed/built state (what simulation uses)
  const [simMode, setSimMode] = useState<Mode>("free");
  const [simL, setSimL] = useState(0.2);
  const [simC, setSimC] = useState(0.0001);
  const [simR, setSimR] = useState(10);
  const [simQ0, setSimQ0] = useState(0.002);
  const [simEmf, setSimEmf] = useState(10);
  const [simFreq, setSimFreq] = useState(30);
  const [simTimeRange, setSimTimeRange] = useState(1.2);

  const [tab, setTab] = useState<TabId>("graph");
  const [animRun, setAnimRun] = useState(false);
  const [builtOnce, setBuiltOnce] = useState(false);
  const [info, setInfo] = useState({
    omega0: 0, f0: 0, T0: 0, beta: 0, resonance: "—", equation: "",
    we: 0, wm: 0, wtotal: 0,
  });

  const chargeRef = useRef<HTMLCanvasElement>(null);
  const currentRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<HTMLCanvasElement>(null);
  const animStartRef = useRef<number | null>(null);
  const rafRef = useRef<number>(0);
  const animRunRef = useRef(animRun);
  animRunRef.current = animRun;

  const buildSimValues = useCallback((
    mode: Mode, L: number, C: number, R: number, q0: number,
    emf: number, freq: number, timeRange: number
  ): SimValues => {
    const omega0 = 1 / Math.sqrt(L * C);
    const f0 = omega0 / (2 * Math.PI);
    return { mode, L, C, R, q0, emf, freq, timeRange, omega0, f0, T0: 1 / f0, beta: R / (2 * L), omegaDrive: 2 * Math.PI * freq };
  }, []);

  function drawAxes(ctx: CanvasRenderingContext2D, w: number, h: number, label: string, color: string) {
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = "#0b0f14";
    ctx.fillRect(0, 0, w, h);
    const mg = 50, cy = h / 2;

    // grid lines
    ctx.strokeStyle = "rgba(255,255,255,0.04)";
    ctx.lineWidth = 1;
    for (let i = 0; i <= 10; i++) {
      const x = mg + (i * (w - mg - 24)) / 10;
      ctx.beginPath(); ctx.moveTo(x, 16); ctx.lineTo(x, h - 16); ctx.stroke();
    }
    for (let i = 0; i <= 6; i++) {
      const y = 16 + (i * (h - 32)) / 6;
      ctx.beginPath(); ctx.moveTo(mg, y); ctx.lineTo(w - 24, y); ctx.stroke();
    }

    // axes
    ctx.strokeStyle = "rgba(255,255,255,0.18)";
    ctx.lineWidth = 1.5;
    ctx.beginPath(); ctx.moveTo(mg, cy); ctx.lineTo(w - 24, cy); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(mg, 16); ctx.lineTo(mg, h - 16); ctx.stroke();

    // axis labels
    ctx.fillStyle = color;
    ctx.font = "bold 13px 'JetBrains Mono', monospace";
    ctx.fillText(label, 14, 24);
    ctx.fillStyle = "rgba(255,255,255,0.3)";
    ctx.font = "12px 'Syne', sans-serif";
    ctx.fillText("t →", w - 32, cy - 8);
  }

  const drawGraphs = useCallback((v: SimValues) => {
    const cc = chargeRef.current, ic = currentRef.current;
    if (!cc || !ic) return;
    const cctx = cc.getContext("2d")!, ictx = ic.getContext("2d")!;
    const w = cc.width, h = cc.height, mg = 50, cy = h / 2, gw = w - 74;

    drawAxes(cctx, w, h, "q", "#00e5a0");
    drawAxes(ictx, w, h, "I", "#f59e0b");

    let maxQ = Math.max(Math.abs(v.q0), 0.0001);
    let maxI = 1e-6;
    const pts: { q: number; i: number }[] = [];

    for (let px = 0; px <= gw; px++) {
      const t = (px / gw) * v.timeRange;
      const { q, i } = computeQI(v, t);
      if (isFinite(q)) maxQ = Math.max(maxQ, Math.abs(q));
      if (isFinite(i)) maxI = Math.max(maxI, Math.abs(i));
      pts.push({ q, i });
    }

    const qS = (h / 2 - 28) / maxQ;
    const iS = (h / 2 - 28) / maxI;

    // charge graph
    cctx.save();
    cctx.shadowColor = "#00e5a0";
    cctx.shadowBlur = 10;
    cctx.strokeStyle = "#00e5a0";
    cctx.lineWidth = 2.5;
    cctx.lineCap = "round";
    cctx.lineJoin = "round";
    cctx.beginPath();
    pts.forEach(({ q }, px) => {
      const x = mg + px, y = cy - q * qS;
      px === 0 ? cctx.moveTo(x, y) : cctx.lineTo(x, y);
    });
    cctx.stroke();
    cctx.restore();

    // current graph
    ictx.save();
    ictx.shadowColor = "#f59e0b";
    ictx.shadowBlur = 10;
    ictx.strokeStyle = "#f59e0b";
    ictx.lineWidth = 2.5;
    ictx.lineCap = "round";
    ictx.lineJoin = "round";
    ictx.beginPath();
    pts.forEach(({ i }, px) => {
      const x = mg + px, y = cy - i * iS;
      px === 0 ? ictx.moveTo(x, y) : ictx.lineTo(x, y);
    });
    ictx.stroke();
    ictx.restore();
  }, []);

  // ── ANIMATION: full energy conversion visualization ──────────────────────
  const drawAnim = useCallback((ts: number, v: SimValues) => {
    if (!animStartRef.current) animStartRef.current = ts;
    const t = (ts - animStartRef.current) / 1000;
    const ac = animRef.current;
    if (!ac) return;
    const ctx = ac.getContext("2d")!;
    const W = ac.width, H = ac.height;

    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = "#0b0f14";
    ctx.fillRect(0, 0, W, H);

    // subtle grid
    ctx.strokeStyle = "rgba(255,255,255,0.025)";
    ctx.lineWidth = 1;
    for (let x = 0; x < W; x += 40) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke(); }
    for (let y = 0; y < H; y += 40) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }

    const { q, i } = computeQI(v, t);
    const qMax = Math.abs(v.q0) > 1e-9 ? Math.abs(v.q0) : 0.002;
    const iMax = Math.max(qMax * v.omega0, 1e-9);
    const qN = Math.min(Math.abs(q) / qMax, 1);
    const iN = Math.min(Math.abs(i) / iMax, 1);

    const we = (q * q) / (2 * Math.max(v.C, 1e-12));
    const wm = 0.5 * v.L * i * i;
    const wTotal = we + wm;
    const wMax = Math.max(wTotal, 1e-15);

    // ─── LAYOUT ───────────────────────────────────────────────────────────
    // Three zones: Capacitor (left), Circuit schematic (middle), Coil (right)
    // Below: energy bars with live values

    const zone = { cap: { x: 0, w: W * 0.3 }, mid: { x: W * 0.3, w: W * 0.4 }, coil: { x: W * 0.7, w: W * 0.3 } };
    const circY = H * 0.38;

    // ─── SECTION LABELS ──────────────────────────────────────────────────
    const sectionLabel = (label: string, x: number, y: number, color: string) => {
      ctx.font = "700 10px 'Syne', sans-serif";
      ctx.fillStyle = color;
      ctx.letterSpacing = "2px";
      ctx.fillText(label.toUpperCase(), x, y);
      ctx.letterSpacing = "0px";
    };

    // ─── CAPACITOR ───────────────────────────────────────────────────────
    const capCX = zone.cap.x + zone.cap.w / 2;
    const capCY = circY;
    const plateH = 64, plateGap = 22, plateW = 5;

    // glow behind capacitor (electric field energy)
    const glowR = 55 + qN * 35;
    const cg = ctx.createRadialGradient(capCX, capCY, 2, capCX, capCY, glowR);
    cg.addColorStop(0, `rgba(0,229,160,${0.08 + 0.22 * qN})`);
    cg.addColorStop(0.5, `rgba(0,229,160,${0.03 + 0.1 * qN})`);
    cg.addColorStop(1, "transparent");
    ctx.fillStyle = cg;
    ctx.fillRect(capCX - glowR, capCY - glowR, glowR * 2, glowR * 2);

    // electric field lines between plates
    if (qN > 0.05) {
      const numLines = 5;
      for (let k = 0; k < numLines; k++) {
        const ly = capCY - plateH / 2 + 10 + k * ((plateH - 20) / (numLines - 1));
        const alpha = (0.12 + 0.5 * qN) * (1 - Math.abs(k - (numLines - 1) / 2) / ((numLines - 1) / 2) * 0.3);
        ctx.strokeStyle = `rgba(0,229,160,${alpha})`;
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 3]);
        ctx.beginPath();
        const dir = q >= 0 ? 1 : -1;
        ctx.moveTo(capCX - plateGap / 2 + 1, ly);
        ctx.lineTo(capCX + dir * (plateGap / 2 - 1), ly);
        ctx.stroke();
        // arrowhead
        const ax = capCX + dir * (plateGap / 2 - 4);
        ctx.beginPath();
        ctx.moveTo(ax, ly - 3);
        ctx.lineTo(ax + dir * 5, ly);
        ctx.lineTo(ax, ly + 3);
        ctx.stroke();
      }
      ctx.setLineDash([]);
    }

    // plates
    const plateBrightness = 0.4 + 0.6 * qN;
    ctx.strokeStyle = `rgba(0,229,160,${plateBrightness})`;
    ctx.lineWidth = plateW;
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(capCX - plateGap / 2, capCY - plateH / 2);
    ctx.lineTo(capCX - plateGap / 2, capCY + plateH / 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(capCX + plateGap / 2, capCY - plateH / 2);
    ctx.lineTo(capCX + plateGap / 2, capCY + plateH / 2);
    ctx.stroke();

    // charge labels on plates
    ctx.font = "600 12px 'JetBrains Mono', monospace";
    ctx.fillStyle = `rgba(0,229,160,${0.4 + 0.6 * qN})`;
    const plusSign = q >= 0 ? "+" : "−";
    const minusSign = q >= 0 ? "−" : "+";
    ctx.fillText(plusSign, capCX - plateGap / 2 - 18, capCY + 5);
    ctx.fillText(minusSign, capCX + plateGap / 2 + 8, capCY + 5);

    sectionLabel(tr.capacitor, capCX - 45, circY + 58, "rgba(0,229,160,0.5)");

    // q value
    ctx.font = "600 11px 'JetBrains Mono', monospace";
    ctx.fillStyle = `rgba(0,229,160,${0.5 + 0.5 * qN})`;
    ctx.fillText(`q = ${fmt(q)} Кл`, capCX - 42, circY + 74);

    // ─── COIL (right) ────────────────────────────────────────────────────
    const coilCX = zone.coil.x + zone.coil.w / 2;
    const coilCY = circY;
    const numLoops = 6;
    const loopR = 14;
    const loopSpan = numLoops * loopR * 2;

    // magnetic glow
    const mg2 = 50 + iN * 40;
    const ig = ctx.createRadialGradient(coilCX, coilCY, 2, coilCX, coilCY, mg2);
    ig.addColorStop(0, `rgba(245,158,11,${0.08 + 0.22 * iN})`);
    ig.addColorStop(0.5, `rgba(245,158,11,${0.03 + 0.1 * iN})`);
    ig.addColorStop(1, "transparent");
    ctx.fillStyle = ig;
    ctx.fillRect(coilCX - mg2, coilCY - mg2, mg2 * 2, mg2 * 2);

    // magnetic field circles inside coil
    if (iN > 0.05) {
      const fieldDir = i >= 0 ? 1 : -1;
      for (let k = 0; k < 4; k++) {
        const fr = 8 + k * 8;
        const falpha = (0.1 + 0.35 * iN) * (1 - k * 0.18);
        ctx.strokeStyle = `rgba(245,158,11,${falpha})`;
        ctx.lineWidth = 1;
        ctx.setLineDash([3, 3]);
        ctx.beginPath();
        ctx.arc(coilCX, coilCY, fr, 0, Math.PI * 2);
        ctx.stroke();
        // direction dot/cross
        if (k === 0) {
          ctx.fillStyle = `rgba(245,158,11,${0.5 + 0.5 * iN})`;
          ctx.setLineDash([]);
          if (fieldDir > 0) {
            ctx.beginPath();
            ctx.arc(coilCX, coilCY, 3, 0, Math.PI * 2);
            ctx.fill();
          } else {
            ctx.font = "bold 10px monospace";
            ctx.fillText("×", coilCX - 4, coilCY + 4);
          }
        }
      }
      ctx.setLineDash([]);
    }

    // coil windings
    ctx.strokeStyle = `rgba(245,158,11,${0.45 + 0.55 * iN})`;
    ctx.lineWidth = 3;
    ctx.lineCap = "round";
    const coilStartX = coilCX - loopSpan / 2;
    ctx.beginPath();
    ctx.moveTo(coilCX - zone.coil.w / 2 + 12, coilCY);
    ctx.lineTo(coilStartX, coilCY);
    ctx.stroke();
    for (let k = 0; k < numLoops; k++) {
      ctx.beginPath();
      ctx.arc(coilStartX + loopR + k * loopR * 2, coilCY, loopR, Math.PI, 0, false);
      ctx.stroke();
    }
    ctx.beginPath();
    ctx.moveTo(coilStartX + loopSpan, coilCY);
    ctx.lineTo(coilCX + zone.coil.w / 2 - 12, coilCY);
    ctx.stroke();

    sectionLabel(tr.coil, coilCX - 38, circY + 58, "rgba(245,158,11,0.5)");

    // i value
    ctx.font = "600 11px 'JetBrains Mono', monospace";
    ctx.fillStyle = `rgba(245,158,11,${0.5 + 0.5 * iN})`;
    ctx.fillText(`I = ${fmt(i)} А`, coilCX - 38, circY + 74);

    // ─── CIRCUIT WIRE ────────────────────────────────────────────────────
    const wireY1 = circY - 52; // top wire
    const wireY2 = circY + 52; // bottom wire (if needed)
    const leftWireX = capCX + plateGap / 2 + 4;
    const rightWireX = coilCX - zone.coil.w / 2 + 12;
    const topWireLeftX = capCX - plateGap / 2 - 4;
    const topWireRightX = coilCX + zone.coil.w / 2 - 12;

    // current flow arrows along wire
    const flowAlpha = 0.2 + 0.6 * iN;
    ctx.strokeStyle = `rgba(255,255,255,${flowAlpha * 0.4})`;
    ctx.lineWidth = 1.5;
    ctx.setLineDash([]);

    // bottom wire: capacitor right plate → coil left
    ctx.beginPath();
    ctx.moveTo(leftWireX, circY);
    ctx.lineTo(rightWireX, coilCY);
    ctx.stroke();

    // top wire: coil right → capacitor left
    ctx.beginPath();
    ctx.moveTo(topWireRightX, coilCY);
    ctx.lineTo(topWireRightX, wireY1);
    ctx.lineTo(topWireLeftX, wireY1);
    ctx.lineTo(topWireLeftX, circY);
    ctx.stroke();

    // flowing current dots
    if (iN > 0.05) {
      const numDots = 5;
      const flowProgress = (t * Math.abs(i) * 80) % 1;
      for (let k = 0; k < numDots; k++) {
        const p = (flowProgress + k / numDots) % 1;
        // trace along bottom wire
        const bx = leftWireX + p * (rightWireX - leftWireX);
        const by = circY;
        ctx.fillStyle = `rgba(255,255,255,${0.3 + 0.5 * iN})`;
        ctx.beginPath();
        ctx.arc(bx, by, 2.5, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // ─── ENERGY CONVERSION BARS ──────────────────────────────────────────
    const barZoneY = H * 0.68;
    const barH = H * 0.22;
    const barW = W * 0.32;

    // We bar (electric)
    const weRatio = wMax > 0 ? we / wMax : 0;
    const weH = weRatio * barH;
    const weX = W * 0.08;
    const weY = barZoneY + barH;

    // background track
    ctx.fillStyle = "rgba(0,229,160,0.07)";
    ctx.beginPath();
    roundRect(ctx, weX, barZoneY, barW, barH, 6);
    ctx.fill();

    // fill
    if (weH > 2) {
      const weBg = ctx.createLinearGradient(weX, weY - weH, weX, weY);
      weBg.addColorStop(0, "rgba(0,229,160,0.9)");
      weBg.addColorStop(1, "rgba(0,229,160,0.25)");
      ctx.fillStyle = weBg;
      ctx.beginPath();
      roundRect(ctx, weX, weY - weH, barW, weH, 6);
      ctx.fill();
    }

    // Wm bar (magnetic)
    const wmRatio = wMax > 0 ? wm / wMax : 0;
    const wmH = wmRatio * barH;
    const wmX = W * 0.6;

    ctx.fillStyle = "rgba(245,158,11,0.07)";
    ctx.beginPath();
    roundRect(ctx, wmX, barZoneY, barW, barH, 6);
    ctx.fill();

    if (wmH > 2) {
      const wmBg = ctx.createLinearGradient(wmX, barZoneY + barH - wmH, wmX, barZoneY + barH);
      wmBg.addColorStop(0, "rgba(245,158,11,0.9)");
      wmBg.addColorStop(1, "rgba(245,158,11,0.25)");
      ctx.fillStyle = wmBg;
      ctx.beginPath();
      roundRect(ctx, wmX, barZoneY + barH - wmH, barW, wmH, 6);
      ctx.fill();
    }

    // energy conversion arrow between bars
    const arrowMidX = W / 2;
    const arrowMidY = barZoneY + barH / 2;
    ctx.strokeStyle = "rgba(255,255,255,0.2)";
    ctx.lineWidth = 1.5;
    ctx.setLineDash([5, 4]);
    ctx.beginPath();
    ctx.moveTo(weX + barW + 8, arrowMidY);
    ctx.lineTo(wmX - 8, arrowMidY);
    ctx.stroke();
    ctx.setLineDash([]);
    // arrowhead direction based on energy flow
    const flowDir = we > wm ? 1 : -1;
    ctx.fillStyle = "rgba(255,255,255,0.35)";
    ctx.beginPath();
    const ax2 = flowDir > 0 ? wmX - 8 : weX + barW + 8;
    ctx.moveTo(ax2, arrowMidY - 5);
    ctx.lineTo(ax2 + flowDir * 9, arrowMidY);
    ctx.lineTo(ax2, arrowMidY + 5);
    ctx.fill();

    // labels
    const labelY = barZoneY - 10;
    ctx.font = "700 10px 'Syne', sans-serif";

    ctx.fillStyle = "rgba(0,229,160,0.7)";
    ctx.fillText("Wₑ  " + tr.electricEnergy.toUpperCase().slice(0, 16), weX, labelY);

    ctx.fillStyle = "rgba(245,158,11,0.7)";
    ctx.fillText("Wₘ  " + tr.magneticEnergy.toUpperCase().slice(0, 16), wmX, labelY);

    // numeric values below bars
    const numY = barZoneY + barH + 18;
    ctx.font = "600 11px 'JetBrains Mono', monospace";
    ctx.fillStyle = "rgba(0,229,160,0.8)";
    ctx.fillText(`Wₑ = ${fmtE(we)} Дж`, weX, numY);
    ctx.fillStyle = "rgba(245,158,11,0.8)";
    ctx.fillText(`Wₘ = ${fmtE(wm)} Дж`, wmX, numY);
    ctx.fillStyle = "rgba(255,255,255,0.4)";
    ctx.font = "600 11px 'JetBrains Mono', monospace";
    ctx.fillText(`W = ${fmtE(wTotal)} Дж`, arrowMidX - 48, numY);

    // total energy label
    ctx.font = "700 10px 'Syne', sans-serif";
    ctx.fillStyle = "rgba(255,255,255,0.3)";
    ctx.fillText(tr.totalEnergy.toUpperCase(), arrowMidX - 48, labelY);

    if (animRunRef.current) {
      rafRef.current = requestAnimationFrame((ts2) => drawAnim(ts2, v));
    }
  }, [tr]);

  function roundRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + w - r, y);
    ctx.quadraticCurveTo(x + w, y, x + w, y + r);
    ctx.lineTo(x + w, y + h - r);
    ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    ctx.lineTo(x + r, y + h);
    ctx.quadraticCurveTo(x, y + h, x, y + h - r);
    ctx.lineTo(x, y + r);
    ctx.quadraticCurveTo(x, y, x + r, y);
  }

  const computeInfo = useCallback((v: SimValues, lang: Lang) => {
    const tLocal = T[lang];
    const diff = Math.abs(v.freq - v.f0);
    const res = diff < 1 ? tLocal.res_near : diff < 5 ? tLocal.res_close : tLocal.res_far;
    const eq = v.mode === "free"
      ? (v.R === 0 ? "q(t) = q₀·cos(ω₀t)" : "q(t) = q₀·e⁻ᵝᵗ·cos(ωt)")
      : "I(t) — вынужд. / еріксіз";
    const { q, i } = computeQI(v, 0);
    const we = (q * q) / (2 * Math.max(v.C, 1e-12));
    const wm = 0.5 * v.L * i * i;
    return { omega0: v.omega0, f0: v.f0, T0: v.T0, beta: v.beta, resonance: res, equation: eq, we, wm, wtotal: we + wm };
  }, []);

  // BUILD button handler — commit draft to sim and redraw
  const handleBuild = useCallback(() => {
    const v = buildSimValues(draftMode, draftL, draftC, draftR, draftQ0, draftEmf, draftFreq, draftTimeRange);
    setSimMode(draftMode); setSimL(draftL); setSimC(draftC); setSimR(draftR);
    setSimQ0(draftQ0); setSimEmf(draftEmf); setSimFreq(draftFreq); setSimTimeRange(draftTimeRange);
    setInfo(computeInfo(v, lang));
    setBuiltOnce(true);
    drawGraphs(v);
    // restart animation
    cancelAnimationFrame(rafRef.current);
    animStartRef.current = null;
    if (animRunRef.current) {
      rafRef.current = requestAnimationFrame((ts) => drawAnim(ts, v));
    } else {
      // draw single frame
      drawAnim(performance.now(), v);
    }
  }, [draftMode, draftL, draftC, draftR, draftQ0, draftEmf, draftFreq, draftTimeRange, lang, buildSimValues, computeInfo, drawGraphs, drawAnim]);

  // Play/Stop toggle
  const handleToggleAnim = useCallback(() => {
    if (!builtOnce) return;
    const v = buildSimValues(simMode, simL, simC, simR, simQ0, simEmf, simFreq, simTimeRange);
    if (animRun) {
      // stop
      cancelAnimationFrame(rafRef.current);
      setAnimRun(false);
    } else {
      // play
      setAnimRun(true);
      animStartRef.current = null;
      rafRef.current = requestAnimationFrame((ts) => drawAnim(ts, v));
    }
  }, [animRun, builtOnce, simMode, simL, simC, simR, simQ0, simEmf, simFreq, simTimeRange, buildSimValues, drawAnim]);

  // Reset
  const handleReset = useCallback(() => {
    cancelAnimationFrame(rafRef.current);
    setAnimRun(false);
    setBuiltOnce(false);
    setDraftMode("free"); setDraftL(0.2); setDraftC(0.0001); setDraftR(10);
    setDraftQ0(0.002); setDraftEmf(10); setDraftFreq(30); setDraftTimeRange(1.2);
    setSimMode("free"); setSimL(0.2); setSimC(0.0001); setSimR(10);
    setSimQ0(0.002); setSimEmf(10); setSimFreq(30); setSimTimeRange(1.2);
    setInfo({ omega0: 0, f0: 0, T0: 0, beta: 0, resonance: "—", equation: "", we: 0, wm: 0, wtotal: 0 });
    // clear canvases
    [chargeRef, currentRef, animRef].forEach(ref => {
      const canvas = ref.current;
      if (canvas) {
        const ctx = canvas.getContext("2d")!;
        ctx.fillStyle = "#0b0f14";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "rgba(255,255,255,0.12)";
        ctx.font = "14px 'Syne', sans-serif";
        ctx.fillText("← Параметрлерді енгізіп «Салу» батырмасын басыңыз", 20, canvas.height / 2);
      }
    });
  }, []);

  // Lang change — re-compute info with new language, no redraw
  useEffect(() => {
    if (!builtOnce) return;
    const v = buildSimValues(simMode, simL, simC, simR, simQ0, simEmf, simFreq, simTimeRange);
    setInfo(computeInfo(v, lang));
  }, [lang]);

  // initial canvas clear
  useEffect(() => {
    [chargeRef, currentRef, animRef].forEach(ref => {
      const canvas = ref.current;
      if (canvas) {
        const ctx = canvas.getContext("2d")!;
        ctx.fillStyle = "#0b0f14";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
    });
  }, []);

  // cleanup on unmount
  useEffect(() => () => cancelAnimationFrame(rafRef.current), []);

  const fields = [
    { label: tr.L, val: draftL, set: setDraftL, step: 0.01, min: 0.001 },
    { label: tr.C, val: draftC, set: setDraftC, step: 0.00001, min: 0.000001 },
    { label: tr.R, val: draftR, set: setDraftR, step: 1, min: 0 },
    { label: tr.q0, val: draftQ0, set: setDraftQ0, step: 0.0001, min: 0.0001 },
    ...(draftMode === "forced" ? [
      { label: tr.emf, val: draftEmf, set: setDraftEmf, step: 0.5, min: 0.1 },
      { label: tr.freq, val: draftFreq, set: setDraftFreq, step: 1, min: 0.1 },
    ] : []),
    { label: tr.timeRange, val: draftTimeRange, set: setDraftTimeRange, step: 0.1, min: 0.1 },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=JetBrains+Mono:wght@400;600&display=swap');
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
        :root{
          --bg:#0b0f14;
          --s1:#111820;
          --s2:#182030;
          --s3:#1e2a3a;
          --border:rgba(255,255,255,0.075);
          --green:#00e5a0;
          --amber:#f59e0b;
          --blue:#60a5fa;
          --text:#e6edf3;
          --muted:rgba(230,237,243,0.38);
          --r:16px;
        }
        html,body{background:var(--bg);color:var(--text);font-family:'Syne',sans-serif;min-height:100vh;overflow-x:hidden;}

        /* ambient blobs */
        .blob{position:fixed;border-radius:50%;filter:blur(160px);pointer-events:none;z-index:0;opacity:.07;}
        .b1{width:800px;height:800px;background:var(--green);top:-350px;left:-250px;animation:d1 22s ease-in-out infinite;}
        .b2{width:700px;height:700px;background:var(--amber);bottom:-250px;right:-200px;animation:d2 28s ease-in-out infinite;}
        .b3{width:400px;height:400px;background:var(--blue);top:40%;left:40%;animation:d3 18s ease-in-out infinite;}
        @keyframes d1{0%,100%{transform:translate(0,0)}50%{transform:translate(100px,80px)}}
        @keyframes d2{0%,100%{transform:translate(0,0)}50%{transform:translate(-80px,-100px)}}
        @keyframes d3{0%,100%{transform:translate(0,0)}50%{transform:translate(60px,-60px)}}

        .root{position:relative;z-index:1;display:flex;flex-direction:column;min-height:100vh;}

        /* ── HEADER ── */
        .hdr{
          height:64px;padding:0 28px;
          display:flex;align-items:center;justify-content:space-between;
          background:rgba(11,15,20,.9);border-bottom:1px solid var(--border);
          backdrop-filter:blur(24px);position:sticky;top:0;z-index:100;
        }
        .brand{display:flex;align-items:center;gap:12px;}
        .bname{font-size:18px;font-weight:800;letter-spacing:-.5px;background:linear-gradient(135deg,#fff 0%,rgba(255,255,255,.6) 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;}
        .bsub{font-size:12px;font-weight:700;color:var(--green);border:1px solid rgba(0,229,160,.3);padding:3px 10px;border-radius:6px;letter-spacing:.6px;}
        .hright{display:flex;align-items:center;gap:16px;}
        .hsub{font-size:12px;color:var(--muted);}
        .ltog{display:flex;background:var(--s1);border:1px solid var(--border);border-radius:8px;overflow:hidden;}
        .lbtn{padding:7px 16px;font-size:11px;font-weight:700;font-family:'Syne',sans-serif;border:none;cursor:pointer;transition:all .15s;letter-spacing:.8px;background:transparent;color:var(--muted);}
        .lbtn.on{background:var(--green);color:#0b0f14;}

        /* ── BODY LAYOUT ── */
        .body{display:grid;grid-template-columns:300px 1fr;gap:16px;padding:16px;flex:1;align-items:start;}
        @media(max-width:980px){.body{grid-template-columns:1fr;}}

        /* ── PANEL ── */
        .panel{
          background:var(--s1);border:1px solid var(--border);border-radius:var(--r);
          padding:20px;display:flex;flex-direction:column;gap:10px;
          position:sticky;top:80px;
        }
        .ptitle{font-size:9px;font-weight:700;letter-spacing:2.5px;color:var(--muted);text-transform:uppercase;padding-bottom:10px;border-bottom:1px solid var(--border);}
        .field label{display:block;font-size:9px;font-weight:700;letter-spacing:1.5px;color:var(--muted);text-transform:uppercase;margin-bottom:4px;}
        .field input,.field select{
          width:100%;padding:9px 12px;
          background:var(--s2);border:1px solid var(--border);
          border-radius:9px;color:var(--text);
          font-family:'JetBrains Mono',monospace;font-size:13px;
          outline:none;transition:border-color .18s,box-shadow .18s;appearance:none;
        }
        .field input:focus,.field select:focus{border-color:rgba(0,229,160,.45);box-shadow:0 0 0 3px rgba(0,229,160,.06);}
        .field select option{background:#111820;}

        .brow{display:flex;gap:8px;flex-wrap:wrap;margin-top:4px;}
        .btn{
          flex:1;min-width:70px;padding:9px 12px;border:none;border-radius:9px;
          cursor:pointer;font-family:'Syne',sans-serif;font-size:11px;font-weight:700;
          letter-spacing:.6px;transition:all .18s;white-space:nowrap;
        }
        .btn-primary{background:var(--green);color:#0b0f14;}
        .btn-primary:hover{filter:brightness(1.12);transform:translateY(-1px);}
        .btn-secondary{background:var(--s2);color:var(--text);border:1px solid var(--border);}
        .btn-secondary:hover{background:var(--s3);transform:translateY(-1px);}
        .btn-accent{background:rgba(245,158,11,.15);color:var(--amber);border:1px solid rgba(245,158,11,.25);}
        .btn-accent:hover{background:rgba(245,158,11,.22);}
        .btn:disabled{opacity:.35;cursor:not-allowed;transform:none !important;}

        .icard{background:var(--s2);border:1px solid var(--border);border-radius:12px;padding:14px;margin-top:2px;}
        .ictitle{font-size:9px;font-weight:700;letter-spacing:2px;color:var(--green);text-transform:uppercase;margin-bottom:10px;}
        .eqpill{font-family:'JetBrains Mono',monospace;font-size:12px;font-weight:600;color:#ffd369;background:rgba(255,211,105,.08);border:1px solid rgba(255,211,105,.2);border-radius:7px;padding:8px 12px;word-break:break-all;}
        .srow{display:flex;justify-content:space-between;align-items:center;padding:5px 0;border-bottom:1px solid var(--border);font-size:12px;}
        .srow:last-child{border-bottom:none;}
        .slbl{color:var(--muted);}
        .sval{font-family:'JetBrains Mono',monospace;font-weight:600;color:var(--text);}
        .pnote{font-size:11px;color:var(--muted);line-height:1.7;padding-top:10px;border-top:1px solid var(--border);}

        .pending-badge{
          font-size:9px;font-weight:700;letter-spacing:1px;
          background:rgba(245,158,11,.12);color:var(--amber);
          border:1px solid rgba(245,158,11,.25);border-radius:5px;
          padding:3px 8px;display:inline-block;margin-top:4px;
        }

        /* ── WORKSPACE ── */
        .ws{background:var(--s1);border:1px solid var(--border);border-radius:var(--r);padding:20px;display:flex;flex-direction:column;gap:16px;}

        .tabs{display:flex;gap:6px;flex-wrap:wrap;}
        .tbtn{padding:8px 18px;border-radius:8px;border:1px solid var(--border);background:transparent;color:var(--muted);font-family:'Syne',sans-serif;font-size:11px;font-weight:700;letter-spacing:.6px;cursor:pointer;transition:all .15s;}
        .tbtn:hover{border-color:rgba(0,229,160,.3);color:var(--text);}
        .tbtn.on{background:var(--green);color:#0b0f14;border-color:var(--green);}

        .tp{display:none;}
        .tp.on{display:flex;flex-direction:column;gap:14px;}

        .grow{display:grid;grid-template-columns:1fr 1fr;gap:14px;}
        @media(max-width:680px){.grow{grid-template-columns:1fr;}}

        .glbl{font-size:9px;font-weight:700;letter-spacing:2px;color:var(--muted);text-transform:uppercase;margin-bottom:8px;display:flex;align-items:center;gap:8px;}
        .glbl span{display:inline-block;width:28px;height:3px;border-radius:2px;}

        canvas.gc{width:100%;border-radius:12px;display:block;border:1px solid var(--border);}

        /* ── THEORY ── */
        .thcard{background:var(--s2);border:1px solid var(--border);border-radius:12px;padding:22px;display:flex;flex-direction:column;gap:12px;}
        .thcard h3{font-size:9px;font-weight:700;letter-spacing:2px;color:var(--green);text-transform:uppercase;}
        .thcard p{font-size:14px;line-height:1.75;color:rgba(230,237,243,.68);}
        .thcard strong{color:var(--text);}
        .eqb{font-family:'JetBrains Mono',monospace;font-size:14px;font-weight:600;color:#ffd369;background:rgba(255,211,105,.07);border-left:3px solid #ffd369;border-radius:0 8px 8px 0;padding:10px 14px;margin:2px 0;}
        .eq-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;}
        @media(max-width:600px){.eq-grid{grid-template-columns:1fr;}}

        /* ── TASKS ── */
        .tkcard{background:var(--s2);border:1px solid var(--border);border-radius:12px;padding:22px;}
        .tkcard h3{font-size:9px;font-weight:700;letter-spacing:2px;color:var(--green);text-transform:uppercase;margin-bottom:16px;}
        .tkitem{display:flex;gap:14px;align-items:flex-start;padding:13px 0;border-bottom:1px solid var(--border);font-size:14px;line-height:1.68;color:rgba(230,237,243,.68);}
        .tkitem:last-child{border-bottom:none;}
        .tknum{font-family:'JetBrains Mono',monospace;font-size:10px;font-weight:700;color:var(--green);background:rgba(0,229,160,.1);border:1px solid rgba(0,229,160,.22);border-radius:5px;padding:2px 8px;flex-shrink:0;margin-top:3px;}
      `}</style>

      <div className="blob b1" />
      <div className="blob b2" />
      <div className="blob b3" />

      <div className="root">
        {/* ── HEADER ── */}
        <header className="hdr">
          <div className="brand">
            <span className="bname">Qaldybek Ustaz</span>
            <span className="bsub">LabX</span>
          </div>
          <div className="hright">
            <span className="hsub">{tr.subtitle}</span>
            <div className="ltog">
              <button className={`lbtn${lang === "kaz" ? " on" : ""}`} onClick={() => setLang("kaz")}>ҚАЗ</button>
              <button className={`lbtn${lang === "rus" ? " on" : ""}`} onClick={() => setLang("rus")}>РУС</button>
            </div>
          </div>
        </header>

        <div className="body">
          {/* ── LEFT PANEL ── */}
          <aside className="panel">
            <p className="ptitle">{tr.panelTitle}</p>

            <div className="field">
              <label>{tr.mode}</label>
              <select value={draftMode} onChange={e => setDraftMode(e.target.value as Mode)}>
                <option value="free">{tr.modeFree}</option>
                <option value="forced">{tr.modeForced}</option>
              </select>
            </div>

            {fields.map(({ label, val, set, step, min }) => (
              <div className="field" key={label}>
                <label>{label}</label>
                <input
                  type="number"
                  value={val}
                  step={step}
                  min={min}
                  onChange={e => {
                    const n = parseFloat(e.target.value);
                    if (!isNaN(n)) set(n);
                  }}
                />
              </div>
            ))}

            <div className="brow">
              <button className="btn btn-primary" onClick={handleBuild}>{tr.build}</button>
              <button
                className={`btn ${animRun ? "btn-accent" : "btn-secondary"}`}
                onClick={handleToggleAnim}
                disabled={!builtOnce}
              >
                {animRun ? tr.stop : tr.play}
              </button>
              <button className="btn btn-secondary" onClick={handleReset}>{tr.reset}</button>
            </div>

            {!builtOnce && (
              <span className="pending-badge">
                {lang === "kaz" ? "↑ «Салу» батырмасын басыңыз" : "↑ Нажмите «Построить»"}
              </span>
            )}

            <div className="icard">
              <p className="ictitle">{tr.formula}</p>
              <div className="eqpill">{info.equation || "—"}</div>
            </div>

            <div className="icard">
              <p className="ictitle">{tr.computed}</p>
              {[
                [tr.omega0, builtOnce ? fmt(info.omega0) + " рад/с" : "—"],
                [tr.f0, builtOnce ? fmt(info.f0) + " Гц" : "—"],
                [tr.period, builtOnce ? fmt(info.T0) + " с" : "—"],
                [tr.damp, builtOnce ? fmt(info.beta) : "—"],
                [tr.resonance, builtOnce ? info.resonance : "—"],
              ].map(([k, v2]) => (
                <div className="srow" key={k}>
                  <span className="slbl">{k}</span>
                  <span className="sval">{v2}</span>
                </div>
              ))}
            </div>

            <p className="pnote">{tr.note}</p>
          </aside>

          {/* ── WORKSPACE ── */}
          <main className="ws">
            <div className="tabs">
              {(["graph", "animation", "theory", "tasks"] as TabId[]).map(t2 => (
                <button
                  key={t2}
                  className={`tbtn${tab === t2 ? " on" : ""}`}
                  onClick={() => setTab(t2)}
                >
                  {t2 === "graph" && tr.tabGraph}
                  {t2 === "animation" && tr.tabAnim}
                  {t2 === "theory" && tr.tabTheory}
                  {t2 === "tasks" && tr.tabTasks}
                </button>
              ))}
            </div>

            {/* ── GRAPH TAB ── */}
            <div className={`tp${tab === "graph" ? " on" : ""}`}>
              <div className="grow">
                <div>
                  <div className="glbl">
                    <span style={{ background: "#00e5a0" }} />
                    {tr.graphQ}
                  </div>
                  <canvas ref={chargeRef} className="gc" width={800} height={280} />
                </div>
                <div>
                  <div className="glbl">
                    <span style={{ background: "#f59e0b" }} />
                    {tr.graphI}
                  </div>
                  <canvas ref={currentRef} className="gc" width={800} height={280} />
                </div>
              </div>
            </div>

            {/* ── ANIMATION TAB ── */}
            <div className={`tp${tab === "animation" ? " on" : ""}`}>
              <div>
                <div className="glbl">{tr.animTitle}</div>
                <canvas ref={animRef} className="gc" width={960} height={320} />
              </div>
            </div>

            {/* ── THEORY TAB ── */}
            <div className={`tp${tab === "theory" ? " on" : ""}`}>
              <div className="thcard">
                <h3>{tr.theoryTitle}</h3>
                <p><strong>{tr.theory1a}</strong> {tr.theory1b}</p>
                <p>{tr.theory2}</p>
                <div className="eq-grid">
                  <div className="eqb">ω₀ = 1 / √(LC)</div>
                  <div className="eqb">T = 2π√(LC)</div>
                </div>
                <p>{tr.theory3}</p>

                <p><strong>{tr.theory6}</strong></p>
                <div className="eqb">Wₑ = q² / (2C)</div>
                <p><strong>{tr.theory7}</strong></p>
                <div className="eqb">Wₘ = LI² / 2</div>
                <p><strong>{tr.theory8}</strong></p>
                <div className="eqb">W = Wₑ + Wₘ = q₀² / (2C) = const</div>

                <p><strong>{tr.theory4a}</strong> {tr.theory4b}</p>
                <p>{tr.theory5}</p>
                <div className="eqb">E(t) = E₀ · sin(ωt)</div>
              </div>
            </div>

            {/* ── TASKS TAB ── */}
            <div className={`tp${tab === "tasks" ? " on" : ""}`}>
              <div className="tkcard">
                <h3>{tr.tasksTitle}</h3>
                {tr.tasks.map((task, i2) => (
                  <div className="tkitem" key={i2}>
                    <span className="tknum">0{i2 + 1}</span>
                    <span>{task}</span>
                  </div>
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}