if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const o=e=>a(e,c),r={module:{uri:c},exports:t,require:o};s[c]=Promise.all(n.map((e=>r[e]||o(e)))).then((e=>(i(...e),t)))}}define(["./workbox-50de5c5d"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"3179228317ae7108af1892b2c30399f6"},{url:"/_next/static/WO_sSkBs7o0IYMavmRQfb/_buildManifest.js",revision:"39c04c408085e9912adc25c833c9fca1"},{url:"/_next/static/WO_sSkBs7o0IYMavmRQfb/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/472-ad4aeffc89fa9cf3.js",revision:"WO_sSkBs7o0IYMavmRQfb"},{url:"/_next/static/chunks/app/_not-found-21300f601eee6904.js",revision:"WO_sSkBs7o0IYMavmRQfb"},{url:"/_next/static/chunks/app/layout-259f95722d09d652.js",revision:"WO_sSkBs7o0IYMavmRQfb"},{url:"/_next/static/chunks/app/page-16ff2ab1176605dd.js",revision:"WO_sSkBs7o0IYMavmRQfb"},{url:"/_next/static/chunks/fd9d1056-7b52db27cfdaff1f.js",revision:"WO_sSkBs7o0IYMavmRQfb"},{url:"/_next/static/chunks/framework-8883d1e9be70c3da.js",revision:"WO_sSkBs7o0IYMavmRQfb"},{url:"/_next/static/chunks/main-app-231075fc971dad04.js",revision:"WO_sSkBs7o0IYMavmRQfb"},{url:"/_next/static/chunks/main-c3cc1f9ca1565604.js",revision:"WO_sSkBs7o0IYMavmRQfb"},{url:"/_next/static/chunks/pages/_app-ee276fea40a4b191.js",revision:"WO_sSkBs7o0IYMavmRQfb"},{url:"/_next/static/chunks/pages/_error-deeb844d2074b9d8.js",revision:"WO_sSkBs7o0IYMavmRQfb"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-ddef16fcfdbfa5e7.js",revision:"WO_sSkBs7o0IYMavmRQfb"},{url:"/_next/static/css/8f586a5f9ed2f338.css",revision:"8f586a5f9ed2f338"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/icons/pwa/android-chrome-192x192.png",revision:"36c7db74667870963f886939506d12f3"},{url:"/icons/pwa/android-chrome-512x512.png",revision:"e8fb56e7037217cb49e26ce0b2720e9e"},{url:"/icons/pwa/apple-touch-icon.png",revision:"b442304a3e0d17404530b73eceb826ee"},{url:"/icons/pwa/browserconfig.xml",revision:"a493ba0aa0b8ec8068d786d7248bb92c"},{url:"/icons/pwa/favicon-16x16.png",revision:"acbee86472ab9cfc548a277bf1142bc8"},{url:"/icons/pwa/favicon-32x32.png",revision:"a89486868e4aaa657c5c84b827a9efa1"},{url:"/icons/pwa/favicon.ico",revision:"e39a57e221edc90e5e6d06eec8579e75"},{url:"/icons/pwa/mstile-150x150.png",revision:"1fa0009ed8ea0d5d9556394f71d28d46"},{url:"/icons/pwa/safari-pinned-tab.svg",revision:"6ef7e9844cbfd6ba89a51ca6f5c8ad67"},{url:"/icons/splashscreens/ipad_splash.png",revision:"e4f747a3bb4396aeb73c9791191cb5dd"},{url:"/icons/splashscreens/ipadpro1_splash.png",revision:"f17bbb3430c10b4ce4e9939c705a4d35"},{url:"/icons/splashscreens/ipadpro2_splash.png",revision:"b2f2f37d5d5166857e3c2fd33db92052"},{url:"/icons/splashscreens/ipadpro3_splash.png",revision:"ac9e287b145055beac820fa30143a8e2"},{url:"/icons/splashscreens/iphone5_splash.png",revision:"3115e4a5aab490ad5754a0b90283ea8a"},{url:"/icons/splashscreens/iphone6_splash.png",revision:"83fba95d3ab447840b31a8440da796cf"},{url:"/icons/splashscreens/iphoneplus_splash.png",revision:"bd4033c5db48fe32dfec40905ced6d99"},{url:"/icons/splashscreens/iphonex_splash.png",revision:"f681621aba0d0fae7cfe25370fab3411"},{url:"/icons/splashscreens/iphonexr_splash.png",revision:"c1c1ff32b0710a0c201b40404a5d9795"},{url:"/icons/splashscreens/iphonexsmax_splash.png",revision:"f25a2aeae9513b1f027501b2a74cd0d7"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
