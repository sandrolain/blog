module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|ico|css)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
            }
          }
        ]
      },
      {
        test: /\.(html)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
            },
          }
        ]
      },
      // {
      //   test: /\.css$/i,
      //   use: ['style-loader', 'css-loader'],
      // },
    ]
  }
};
