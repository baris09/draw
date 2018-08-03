// const createStyledComponentsTransformer = require('typescript-plugin-styled-components').default

// const styledComponentsTransformer = createStyledComponentsTransformer()

const { createLodashTransformer } = require('typescript-plugin-lodash')

const tsOptions = env => env === 'dev' ? {
  // getCustomTransformers: () => ({ before: [styledComponentsTransformer] }),
  useCache: true,
} : {
  getCustomTransformers: () => ({ before: [createLodashTransformer()] }),
  ignoreDiagnostics: [2304],
}

// TODO: 2304: Cannot find name 'Component'

module.exports = env => [
  {
    test: /worker\.[jt]s/,
    loader: 'worker-loader',
  },
  {
    test: /\.tsx?$/,
    use: {
      loader: 'awesome-typescript-loader',
      options: tsOptions(env),
    },
    exclude: /node_modules/,
  },
  {
    test: /\.css$/,
    use: [
      'style-loader',
      'css-loader',
    ],
  },
  {
    test: /\.(png|jpg|jpeg|gif|svg)$/,
    use: {
      loader: 'file-loader',
      options: {
        name: '[name].[hash].[ext]',
        outputPath: 'images',
      },
    },
  },
].filter(item => item)
