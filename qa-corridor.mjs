// QA: Problem → Solution horizontal corridor on a large viewport.
export default async function run(page, ui) {
  await page.setViewportSize({ width: 1536, height: 864 });
  await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
  await page.waitForTimeout(1200);

  // 1. Corridor is active: track is flex, two panels 100vw each.
  const layout = await page.evaluate(() => {
    const stage = document.querySelector(".journey-stage");
    const track = document.querySelector(".journey-track");
    const panels = document.querySelectorAll(".journey-panel");
    const stageStyle = stage ? getComputedStyle(stage) : null;
    const trackStyle = track ? getComputedStyle(track) : null;
    return {
      hasJourney: !!stage,
      stageHeight: stageStyle?.height ?? null,
      trackDisplay: trackStyle?.display ?? null,
      panelCount: panels.length,
      panelsWidth: panels[0] ? panels[0].getBoundingClientRect().width : null,
      ids: [...panels].map((p) => p.id),
    };
  });

  // 2. Scroll the corridor into view, then scroll through it and watch x change.
  await page.evaluate(() => {
    document.querySelector("#problem")?.scrollIntoView();
  });
  await page.waitForTimeout(700);

  const pinStart = await page.evaluate(() => window.scrollY);
  const x0 = await page.evaluate(
    () => getComputedStyle(document.querySelector(".journey-track")).transform
  );
  await page.evaluate(() => window.scrollBy({ top: 700, behavior: "instant" }));
  await page.waitForTimeout(400);
  const mid = await page.evaluate(() => ({
    y: window.scrollY,
    x: getComputedStyle(document.querySelector(".journey-track")).transform,
    solutionVisible:
      document.querySelector("#solution")?.getBoundingClientRect().left === 0,
  }));

  await page.evaluate(() =>
    window.scrollTo({ top: document.body.scrollHeight, behavior: "instant" })
  );
  await page.waitForTimeout(300);
  const endState = await page.evaluate(() => {
    const sol = document.querySelector("#solution")?.getBoundingClientRect();
    const prob = document.querySelector("#problem")?.getBoundingClientRect();
    return { solLeft: sol?.left ?? null, probLeft: prob?.left ?? null };
  });

  const ok = layout.hasJourney && layout.trackDisplay === "flex";
  return { ok, layout, pinStart, x0, mid, endState };
}
