if(!self.define){let e,n={};const s=(s,a)=>(s=new URL(s+".js",a).href,n[s]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=n,document.head.appendChild(e)}else e=s,importScripts(s),n()})).then((()=>{let e=n[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(a,r)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(n[i])return;let t={};const c=e=>s(e,i),o={module:{uri:i},exports:t,require:c};n[i]=Promise.all(a.map((e=>o[e]||c(e)))).then((e=>(r(...e),t)))}}define(["./workbox-50de5c5d"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/next-seminar-app-router/_next/app-build-manifest.json",revision:"fc359117e603802583914c6c82758abc"},{url:"/next-seminar-app-router/_next/static/GFR_H29nJfh2SnhV9fluq/_buildManifest.js",revision:"39c04c408085e9912adc25c833c9fca1"},{url:"/next-seminar-app-router/_next/static/GFR_H29nJfh2SnhV9fluq/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/next-seminar-app-router/_next/static/chunks/472-d0c8e40aad60191f.js",revision:"GFR_H29nJfh2SnhV9fluq"},{url:"/next-seminar-app-router/_next/static/chunks/app/_not-found-21300f601eee6904.js",revision:"GFR_H29nJfh2SnhV9fluq"},{url:"/next-seminar-app-router/_next/static/chunks/app/layout-f3e4857f79916efb.js",revision:"GFR_H29nJfh2SnhV9fluq"},{url:"/next-seminar-app-router/_next/static/chunks/app/page-16ff2ab1176605dd.js",revision:"GFR_H29nJfh2SnhV9fluq"},{url:"/next-seminar-app-router/_next/static/chunks/fd9d1056-7b52db27cfdaff1f.js",revision:"GFR_H29nJfh2SnhV9fluq"},{url:"/next-seminar-app-router/_next/static/chunks/framework-8883d1e9be70c3da.js",revision:"GFR_H29nJfh2SnhV9fluq"},{url:"/next-seminar-app-router/_next/static/chunks/main-7283f51dc8ee2181.js",revision:"GFR_H29nJfh2SnhV9fluq"},{url:"/next-seminar-app-router/_next/static/chunks/main-app-231075fc971dad04.js",revision:"GFR_H29nJfh2SnhV9fluq"},{url:"/next-seminar-app-router/_next/static/chunks/pages/_app-ee276fea40a4b191.js",revision:"GFR_H29nJfh2SnhV9fluq"},{url:"/next-seminar-app-router/_next/static/chunks/pages/_error-deeb844d2074b9d8.js",revision:"GFR_H29nJfh2SnhV9fluq"},{url:"/next-seminar-app-router/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/next-seminar-app-router/_next/static/chunks/webpack-8fd77ad9557b6fdc.js",revision:"GFR_H29nJfh2SnhV9fluq"},{url:"/next-seminar-app-router/_next/static/css/0cc7fe1543919124.css",revision:"0cc7fe1543919124"},{url:"/next-seminar-app-router/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/next-seminar-app-router/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/next-seminar-app-router/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/next-seminar-app-router/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/next-seminar-app-router/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/next-seminar-app-router/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/next-seminar-app-router/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/next-seminar-app-router/icons/pwa/android-chrome-192x192.png",revision:"36c7db74667870963f886939506d12f3"},{url:"/next-seminar-app-router/icons/pwa/android-chrome-512x512.png",revision:"e8fb56e7037217cb49e26ce0b2720e9e"},{url:"/next-seminar-app-router/icons/pwa/apple-touch-icon.png",revision:"b442304a3e0d17404530b73eceb826ee"},{url:"/next-seminar-app-router/icons/pwa/browserconfig.xml",revision:"a493ba0aa0b8ec8068d786d7248bb92c"},{url:"/next-seminar-app-router/icons/pwa/favicon-16x16.png",revision:"acbee86472ab9cfc548a277bf1142bc8"},{url:"/next-seminar-app-router/icons/pwa/favicon-32x32.png",revision:"a89486868e4aaa657c5c84b827a9efa1"},{url:"/next-seminar-app-router/icons/pwa/favicon.ico",revision:"e39a57e221edc90e5e6d06eec8579e75"},{url:"/next-seminar-app-router/icons/pwa/mstile-150x150.png",revision:"1fa0009ed8ea0d5d9556394f71d28d46"},{url:"/next-seminar-app-router/icons/pwa/safari-pinned-tab.svg",revision:"6ef7e9844cbfd6ba89a51ca6f5c8ad67"},{url:"/next-seminar-app-router/icons/splashscreens/ipad_splash.png",revision:"e4f747a3bb4396aeb73c9791191cb5dd"},{url:"/next-seminar-app-router/icons/splashscreens/ipadpro1_splash.png",revision:"f17bbb3430c10b4ce4e9939c705a4d35"},{url:"/next-seminar-app-router/icons/splashscreens/ipadpro2_splash.png",revision:"b2f2f37d5d5166857e3c2fd33db92052"},{url:"/next-seminar-app-router/icons/splashscreens/ipadpro3_splash.png",revision:"ac9e287b145055beac820fa30143a8e2"},{url:"/next-seminar-app-router/icons/splashscreens/iphone5_splash.png",revision:"3115e4a5aab490ad5754a0b90283ea8a"},{url:"/next-seminar-app-router/icons/splashscreens/iphone6_splash.png",revision:"83fba95d3ab447840b31a8440da796cf"},{url:"/next-seminar-app-router/icons/splashscreens/iphoneplus_splash.png",revision:"bd4033c5db48fe32dfec40905ced6d99"},{url:"/next-seminar-app-router/icons/splashscreens/iphonex_splash.png",revision:"f681621aba0d0fae7cfe25370fab3411"},{url:"/next-seminar-app-router/icons/splashscreens/iphonexr_splash.png",revision:"c1c1ff32b0710a0c201b40404a5d9795"},{url:"/next-seminar-app-router/icons/splashscreens/iphonexsmax_splash.png",revision:"f25a2aeae9513b1f027501b2a74cd0d7"},{url:"/next-seminar-app-router/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/next-seminar-app-router/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/next-seminar-app-router",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:n,event:s,state:a})=>n&&"opaqueredirect"===n.type?new Response(n.body,{status:200,statusText:"OK",headers:n.headers}):n}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const n=e.pathname;return!n.startsWith("/api/auth/")&&!!n.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
