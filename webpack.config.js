const path = require("path");
const exec = require("child_process").exec;

module.exports = {
    mode: "production",
    entry: {
        index: "./src/js/index.js"
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        {
            apply: (compiler) => {
                compiler.hooks.afterEmit.tap("AfterEmitPlugin", (compilation) => {
                    exec("(echo '<script>'; cat ./dist/index.bundle.js; echo '</script>') > ./dist/index.bundle.html", (err, stdout, stderr) => {
                        if (stdout) { process.stdout.write(stdout); }
                        if (stderr) { process.stderr.write(stderr); }
                    });
                });
            }
        }
    ],
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                  "style-loader",
                  "css-loader",
                  "sass-loader",
                ],
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            }
        ]
    }
}