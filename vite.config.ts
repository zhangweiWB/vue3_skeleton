import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'


// https://vitejs.dev/config/
export default env=>{
  console.log(env)
  return defineConfig({
    plugins: [vue()],
    server: {
      open: true,
      port:4001,
    },
    build: {
      terserOptions: {
        compress: {
          keep_infinity: true,
          // 删除console
          drop_console: true,
        },
      },
      // 禁用该功能可能会提高大型项目的构建性能
      brotliSize: false,
      rollupOptions: {
        // output: {
        //   // 拆分单独模块
        //   manualChunks: {
        //     'element-plus': ['element-plus'],
        //     mockjs: ['mockjs'],
        //   },
        // },
        input: {
          main: path.resolve(__dirname, 'src/packages/mono1/index.html'),
          mono2: path.resolve(__dirname, 'src/packages/mono2/index.html'),
        },
      },
    },
  })
}

