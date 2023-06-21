import { defineConfig } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import { qwikCity } from "@builder.io/qwik-city/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { qwikReact } from "@builder.io/qwik-react/vite";
import svgLoader from 'vite-svg-loader';
import vitePluginImp from 'vite-plugin-imp'

export default defineConfig(() => {
  return {
    // esbuildOptions: {
    //   loader: {
    //     '.js': 'jsx', // 将 .js 文件视为 JSX 文件处理
    //   },
    // },
    css: {
      preprocessorOptions: {
        less: {
          // 支持内联 JavaScript
          javascriptEnabled: true,
        }
      }
    },
    plugins: [
      qwikCity(),
      qwikVite(),
      tsconfigPaths(),
      qwikReact(),
      svgLoader(),
      vitePluginImp({
        libList: [
          {
            libName: "antd",
            style: (name) => `antd/lib/${name}/style/index.less`,
          },
        ],
      })
    ],
    preview: {
      headers: {
        "Cache-Control": "public, max-age=600",
      },
    },
    optimizeDeps: {
      include: ['antd'],
    },
  };
});
