import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";

const config = [
  {
    input: "utils/index.ts",
    output: {
      file: 'lib/index.js',
      format: "es",
    },
    plugins: [
      typescript({
        tsconfig: "./tsconfig.json",
      }),
    ],
  },
  {
    input: "lib/utils/index.d.ts",
    output: { file: "lib/index.d.ts", format: "es" },
    plugins: [dts()],
  },
];

export default config;
