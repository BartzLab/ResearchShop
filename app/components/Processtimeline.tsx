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
  const PILL_MIN_HEIGHT = 200;
  const STEP_HEIGHT = 220;
  const ARC_RADIUS = STEP_HEIGHT / 2;
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
      <div className="w-full bg-cream px-4 py-12 sm:px-8 sm:py-20 md:py-24">
        <h2
          className="text-maroon-dark mb-10 sm:mb-16 max-w-4xl mx-auto text-center text-2xl sm:text-4xl md:text-5xl lg:text-[5.33rem]"
          style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
        >
          Our process at a glance
        </h2>

        {/* Mobile layout — vertical numbered list (hidden on lg+) */}
        <div className="flex flex-col gap-4 lg:hidden max-w-xl mx-auto">
          {processSteps.map((step) => (
            <div key={step.number} className="flex gap-4 items-start">
              <div
                className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
                style={{ backgroundColor: step.color }}
              >
                <span className="text-white font-bold text-lg">{step.number}</span>
              </div>
              <div className="bg-white rounded-2xl px-5 py-4 flex-1">
                <p className="font-bold text-lg mb-1 text-[#ab1f42]">{step.title}</p>
                <p className="text-gray-700 text-sm leading-relaxed" style={{ fontFamily: "var(--font-dm-sans)" }}>
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop layout — swirl (hidden below lg) */}
        <div className="hidden lg:flex max-w-4xl mx-auto justify-center">
          <div className="flex" style={{ gap: PILL_GAP }}>
            <div
              className="relative shrink-0"
              style={{ width: TOTAL_SVG_WIDTH, height: svgHeight }}
            >
              <svg
                viewBox={`0 0 ${TOTAL_SVG_WIDTH} ${svgHeight}`}
                className="absolute inset-0 w-full h-full"
                aria-hidden="true"
              >
                <defs>
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
                    <span className="text-white font-bold text-7xl mb-6">
                      {step.number}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="relative px-8 py-4" style={{ width: 440, height: svgHeight }}>
              {processSteps.map((step, i) => {
                const centerY = 8 + ARC_RADIUS * 2 * i + ARC_RADIUS;
                return (
                  <div
                    key={step.number}
                    className="absolute left-0 right-0 bg-white rounded-2xl px-10 flex flex-col justify-center"
                    style={{
                      top: centerY,
                      transform: "translateY(-50%)",
                      minHeight: PILL_MIN_HEIGHT,
                    }}
                  >
                    <p className="font-bold text-2xl mb-2 text-[#ab1f42]">{step.title}</p>
                    <p className="text-gray-700 text-base leading-relaxed" style={{ fontFamily: "var(--font-dm-sans)" }}>
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
