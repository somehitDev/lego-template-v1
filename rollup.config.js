import commonjs from "@rollup/plugin-commonjs";
import nodeResolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";

export default {
    input: "build/bricks/index.js",
    output: {
        file: "dist/bricks/index.js",
        format: "cjs"
    },
    plugins: [
        commonjs({
            include: [
                "node_modules/**"
            ],
            ignoreGlobal: false,
            sourceMap: false
        }),
        nodeResolve({
            jsnext: true,
            main: false
        }),
        terser()
    ]
};
