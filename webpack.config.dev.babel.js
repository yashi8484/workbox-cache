import merge from 'webpack-merge';
import baseConfig from './webpack.config.base.babel';

export default merge(baseConfig, {
  devServer: {
    contentBase: './dist',
    hot: true,
    inline: true,
  },
});
