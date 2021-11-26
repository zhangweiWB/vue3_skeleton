import type {Plugin} from 'vite'
import vue from '@vitejs/plugin-vue'

export function createVitePlugins(viteEnv){
    const vitePlugins:(Plugin|Plugin[])[]=[
        vue()
    ]

    return vitePlugins
}