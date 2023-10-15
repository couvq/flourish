import typescript from "@rollup/plugin-typescript";

const config = [
  {
    input: "utils/index.ts",
    output: {
      dir: "lib",
      format: "es",
    },
    plugins: [
      typescript({
        tsconfig: "./tsconfig.json",
      }),
    ],
  },
];

export default config;
