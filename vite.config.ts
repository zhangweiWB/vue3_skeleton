import type {UserConfig, ConfigEnv} from 'vite';
import {loadEnv} from 'vite'
import {resolve} from 'path'
import {createVitePlugins} from './build/vite/plugin/index'
const pathResolve=(dir:string)=>resolve(process.cwd(),'.',dir)
export default ({command, mode}: ConfigEnv): UserConfig => {
    const root=process.cwd()
    const env=loadEnv(mode,root)
    const {
        VITE_APP_BUILD_PROJECT='default'
    }=env
    return {
        resolve:{
            alias:[
                {
                    find:/\/@\//,
                    replacement: pathResolve('src') + '/',
                },
                {
                    find:/\/@current_project\//,
                    replacement:pathResolve(`src/projects/${VITE_APP_BUILD_PROJECT}`)+'/'
                }
            ]
        },
        plugins: createVitePlugins(env),
        server: {
            open: true,
            port: 4001,
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
        },
        css:{
            preprocessorOptions:{
                less:{
                    javascriptEnabled:true
                }
            }
        }
    }

}

