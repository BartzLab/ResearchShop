const processSteps = [
    {
      number: "01",
      title: "Connect.",
      description:
        "Our team meets with members of a local organization to understand their concerns and research questions.",
      color: "#660f1a",
    },
    {
      number: "02",
      title: "Co-design.",
      description:
        "Our team works with the local organization to design a study that addresses their research questions.",
      color: "#873842",
    },
    {
      number: "03",
      title: "Conduct.",
      description:
        "Our team conducts the research. Community member involvement at this stage can vary depending on their needs and interests.",
      color: "#a8616b",
    },
    {
      number: "04",
      title: "Communicate.",
      description:
        "With the local organization, we develop outputs to communicate the findings across different audiences (e.g., community members, stakeholders, academic audiences, etc.)",
      color: "#c98a93",
    },
  ];
  
  // Geometry constants.
  const CIRCLE_DIAMETER = 160;
  // PILL_MIN_HEIGHT must be >= the tallest pill's natural content height,
  // and STEP_HEIGHT must be >= PILL_MIN_HEIGHT, or pills will visually
  // overlap each other regardless of what the swirl geometry says.
  const PILL_MIN_HEIGHT = 200;
  const STEP_HEIGHT = 220;
  const ARC_RADIUS = STEP_HEIGHT / 2;
  // SWIRL_LEFT_PADDING guarantees real breathing room between the arc's
  // leftmost point and the SVG's left edge, instead of CENTER_X sitting
  // exactly ARC_RADIUS away from x=0 (zero margin, which clips under any
  // stroke width or rounding). This is the actual bug from last time:
  // SWIRL_WIDTH was hardcoded at 220 without being rechecked after
  // ARC_RADIUS grew from 96 to 110, leaving no margin at all.
  const SWIRL_LEFT_PADDING = 24;
  const CENTER_X = ARC_RADIUS + SWIRL_LEFT_PADDING;
  const CONNECTOR_LENGTH = 110;
  const CIRCLE_RIGHT_EDGE = CENTER_X + CIRCLE_DIAMETER / 2;
  const TOTAL_SVG_WIDTH = CIRCLE_RIGHT_EDGE + CONNECTOR_LENGTH + 12;
  const PILL_GAP = 32;
  const RING_RADIUS = 5;
  const TRIM_ANGLE = RING_RADIUS / ARC_RADIUS;
  
  function buildArcSegment(yStart: number, yEnd: number, sweep: 0 | 1) {
    const cy = (yStart + yEnd) / 2;
    const r = ARC_RADIUS;
    const trim = TRIM_ANGLE;
    const startAngle = -Math.PI / 2 + trim * (sweep === 0 ? 1 : -1);
    const endAngle = Math.PI / 2 - trim * (sweep === 0 ? 1 : -1);
    const dir = sweep === 0 ? -1 : 1;
    const x1 = CENTER_X + dir * r * Math.cos(startAngle);
    const y1 = cy + r * Math.sin(startAngle);
    const x2 = CENTER_X + dir * r * Math.cos(endAngle);
    const y2 = cy + r * Math.sin(endAngle);
    return `M ${x1} ${y1} A ${r} ${r} 0 0 ${sweep} ${x2} ${y2}`;
  }
  
  export default function ProcessTimeline() {
    const svgHeight = 8 + ARC_RADIUS * 2 * processSteps.length + 8;
  
    const arcSegments = processSteps.map((_, i) => {
      const yStart = 8 + ARC_RADIUS * 2 * i;
      const yEnd = 8 + ARC_RADIUS * 2 * (i + 1);
      const sweep: 0 | 1 = i % 2 === 0 ? 0 : 1;
      return buildArcSegment(yStart, yEnd, sweep);
    });
  
    return (
      <div className="w-full bg-cream px-8 py-24">
        <h2
          className="text-maroon-dark mb-16 max-w-4xl mx-auto text-center"
          style={{
            fontFamily: "'Georgia', 'Times New Roman', serif",
            fontSize: "5.33rem",
          }}
        >
          Our process at a glance
        </h2>
  
        <div className="max-w-4xl mx-auto flex justify-center">
          <div className="flex" style={{ gap: PILL_GAP }}>
            <div
              className="relative flex-shrink-0"
              style={{ width: TOTAL_SVG_WIDTH, height: svgHeight }}
            >
              <svg
                viewBox={`0 0 ${TOTAL_SVG_WIDTH} ${svgHeight}`}
                className="absolute inset-0 w-full h-full"
                aria-hidden="true"
              >
                <defs>
                  {/* gradientUnits="userSpaceOnUse" + explicit y1/y2 in real
                      pixel coordinates spanning the WHOLE swirl height. This
                      is the fix for the fade resetting per segment: without
                      this, each <path> defaults to its own local 0%-100%
                      bounding box, so every segment restarted the fade
                      independently instead of continuing one smooth fade
                      across all four steps. */}
                  <linearGradient
                    id="swirlGradient"
                    gradientUnits="userSpaceOnUse"
                    x1={CENTER_X}
                    y1={0}
                    x2={CENTER_X}
                    y2={svgHeight}
                  >
                    {processSteps.map((step, i) => (
                      <stop
                        key={step.number}
                        offset={`${(i / (processSteps.length - 1)) * 100}%`}
                        stopColor={step.color}
                      />
                    ))}
                  </linearGradient>
  
                </defs>
  
                {arcSegments.map((d, i) => (
                  <path
                    key={`arc-${i}`}
                    d={d}
                    fill="none"
                    stroke="url(#swirlGradient)"
                    strokeWidth="4"
                  />
                ))}
  
                <circle
                  cx={CENTER_X}
                  cy="8"
                  r={RING_RADIUS}
                  fill="#f5f5ea"
                  stroke={processSteps[0].color}
                  strokeWidth="3.5"
                />
                {processSteps.map((step, i) => (
                  <circle
                    key={`swirl-dot-${step.number}`}
                    cx={CENTER_X}
                    cy={8 + ARC_RADIUS * 2 * (i + 1)}
                    r={RING_RADIUS}
                    fill="#f5f5ea"
                    stroke={step.color}
                    strokeWidth="3.5"
                  />
                ))}
  
                {/* Connector lines, ending in a plain solid dot (not an
                    arrowhead) — a straight line from the circle's edge to
                    a small filled circle next to the text pill. */}
                {processSteps.map((step, i) => {
                  const centerY = 8 + ARC_RADIUS * 2 * i + ARC_RADIUS;
                  const lineEndX = CIRCLE_RIGHT_EDGE + CONNECTOR_LENGTH;
                  return (
                    <g key={`connector-${step.number}`}>
                      <line
                        x1={CIRCLE_RIGHT_EDGE}
                        y1={centerY}
                        x2={lineEndX}
                        y2={centerY}
                        stroke={step.color}
                        strokeWidth="2.5"
                      />
                      <circle cx={lineEndX} cy={centerY} r="5" fill={step.color} />
                    </g>
                  );
                })}
              </svg>
  
              {processSteps.map((step, i) => {
                const centerY = 8 + ARC_RADIUS * 2 * i + ARC_RADIUS;
                return (
                  <div
                    key={step.number}
                    className="absolute rounded-full flex items-center justify-center"
                    style={{
                      width: CIRCLE_DIAMETER,
                      height: CIRCLE_DIAMETER,
                      left: CENTER_X - CIRCLE_DIAMETER / 2,
                      top: centerY - CIRCLE_DIAMETER / 2,
                      backgroundColor: step.color,
                    }}
                  >
                    <span className="text-white font-bold text-4xl">
                      {step.number}
                    </span>
                  </div>
                );
              })}
            </div>
  
            {/* Pills now have an explicit min-height matching PILL_MIN_HEIGHT,
                so every pill occupies the same vertical space regardless of
                how much text it holds — fixing the uneven spacing where
                longer-content pills crept into neighboring steps' space. */}
            <div className="relative" style={{ width: 480, height: svgHeight }}>
              {processSteps.map((step, i) => {
                const centerY = 8 + ARC_RADIUS * 2 * i + ARC_RADIUS;
                return (
                  <div
                    key={step.number}
                    className="absolute left-0 right-0 bg-white rounded-3xl px-10 py-8 flex flex-col justify-center"
                    style={{
                      top: centerY,
                      transform: "translateY(-50%)",
                      minHeight: PILL_MIN_HEIGHT,
                    }}
                  >
                    <p className="font-bold text-xl mb-2 text-maroon-dark">{step.title}</p>
                    <p className="text-maroon-dark text-base leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }