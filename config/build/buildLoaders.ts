import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import webpack from 'webpack'
import { BuildOptions } from './types/config'

export function buildLoaders({isDev}: BuildOptions): webpack.RuleSetRule[] {

    // этот тс-лоадер уже может обрабатывать jsx, либо на чистом js нужно подключать транспилятор babel
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    const cssLoader = {
        test: /\.((c|sa|sc)ss)$/i,
        use: [
            // creates 'styles' nodes from js strings
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader, 
            // translates css into commonjs
            {
                loader: 'css-loader', 
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean( resPath.includes('.module.') ),
                        localIdentName: isDev 
                            ? '[path][name]__[local]--[hash:base64:5]' 
                            : '[hash:base64:8]',
                    },

                }
            },
            // compiles sass to css
            "sass-loader"
        ],
    }

    return [
        typescriptLoader,
        cssLoader
    ]
    
}