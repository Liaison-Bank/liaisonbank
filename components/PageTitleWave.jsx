'use client';

export default function PageTitleWave() {
  return (
    <div className="page-title-wave">
      <svg
        viewBox="0 0 1440 390"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="w-full h-full"
      >
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="5%" className="stop-color2" />
            <stop offset="95%" className="stop-color1" />
          </linearGradient>
        </defs>

        {/* Layer 1 */}
        <path
          className="path-0"
          fill="url(#waveGradient)"
          fillOpacity="0.25"
          transform="rotate(-180 720 200)"
          d="M 0,400 L 0,60 C 22.25,70.45 44.5,80.9 72,89 C 99.49,97.09 132.23,102.84 159,130 C 185.76,157.15 206.53,205.73 230,225 C 253.46,244.26 279.6,234.21 309,256 C 338.39,277.78 371.04,331.41 401,358 C 430.95,384.58 458.2,384.14 485,407 C 511.79,429.85 538.12,476.01 564,512 C 589.87,547.98 615.28,573.78 642,601 C 668.71,628.21 696.72,656.85 723,678 C 749.27,699.14 773.81,712.8 796,734 C 818.18,755.19 838,783.92 866,817 C 893.99,850.07 930.17,887.48 962,909 C 993.82,930.51 1021.3,936.13 1042,957 C 1062.69,977.86 1076.6,1013.97 1107,1040 C 1137.39,1066.02 1184.27,1081.97 1213,1109 C 1241.72,1136.02 1252.31,1174.12 1278,1196 C 1303.68,1217.87 1344.48,1223.53 1374,1244 C 1403.51,1264.46 1421.75,1299.73 1440,1335 L 1440,400 L 0,400 Z"
        />

        {/* You can add path-1, path-2, path-3 here exactly the same way */}
      </svg>

      <style jsx>{`
        .page-title-wave {
          width: 100%;
          height: 100%;
          overflow: hidden;
          line-height: 0;
        }

        .path-0 {
          animation: waveAnim0 4s linear infinite;
        }

        @keyframes waveAnim0 {
          0% {
            d: path(
              "M 0,400 L 0,60 C 22.25,70.45 44.5,80.9 72,89 C 99.49,97.09 132.23,102.84 159,130 ..."
            );
          }
          50% {
            d: path(
              "M 0,400 L 0,60 C 27.9,61.97 55.8,63.94 82,77 ..."
            );
          }
          100% {
            d: path(
              "M 0,400 L 0,60 C 22.25,70.45 44.5,80.9 72,89 ..."
            );
          }
        }
      `}</style>
    </div>
  );
}
