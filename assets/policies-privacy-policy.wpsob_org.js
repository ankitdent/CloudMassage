!function(){"use strict";var e=function(){return window.sgd=window.sgd||{},window.sgd},t=function(e){"loading"!==document.readyState?e():document.addEventListener?document.addEventListener("DOMContentLoaded",e):document.attachEvent("onreadystatechange",(function(){"loading"!==document.readyState&&e()}))},n=function(){var e=!1;try{var t=JSON.parse("${user.sgdEmergencyBrake}"),n=t.expireIn,o=t.updatedAt,i=t.disabledTests,a=Number.isInteger(n)?36e5*n:36e5,r=o&&new Date-new Date(t.updatedAt)<a,c=i&&i.includes("aoex-th-privacy-policy");e=r&&c}catch(t){return e}return e},o=function(){!function e(t,n){document.querySelectorAll(t).length<t.length?setTimeout(e.bind(null,t,n),50):n()}([".otnotice-content"],(function(){document.querySelectorAll(".otnotice-content p, .otnotice-content span, .otnotice-content li, .otnotice a").forEach((function(e){e.style=""}))}))};!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===n&&o.firstChild?o.insertBefore(i,o.firstChild):o.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}(".shopify-policy__container{max-width:87ch}"),function(o){var i=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r="aoex-th-privacy-policy",c=function(){var t=e();n()?t[r]="".concat(r,"-disabled"):(!t[r]||t[r]&&!i)&&(t[r]=o,t[r]())};a?t(c):c()}((function(){if(-1!==window.location.pathname.indexOf("/policies/privacy-policy")){var e=document.querySelector(".shopify-policy__container");e.innerHTML="",e.innerHTML='\n                <h1 class="main-heading"> Ranger Ready Privacy Policy </h1>\n                <br />\n                <span class="first-heading">Ranger Ready is a consumer product brand owned by Thrasio. Thrasio acquires and grows many consumer brands found on the Amazon marketplace and other online retail outlets. This Privacy Policy explains Thrasio\'s privacy practices for your personal information related to your use of the Ranger Ready website only. This Privacy Policy for the Ranger Ready website does not apply to other websites owned or operated by Thrasio, for example, Thrasio\'s corporate site, marketing websites, co-branded websites, or websites for other Thrasio brands. These other websites have privacy notices which may describe different or additional uses of personal information collected about users. </span> <br><br> \x3c!-- OneTrust Privacy Notice start --\x3e \x3c!-- Container in which the privacy notice will be rendered --\x3e\n                <div id="otnotice-4d40ed25-cf28-41f2-bac1-31a51b7e7e0c" class="otnotice"></div>\n                <script src="https://privacyportal-cdn.onetrust.com/privacy-notice-scripts/otnotice-1.0.min.js" type="text/javascript" charset="UTF-8" id="otprivacy-notice-script">// <![CDATA[\n          settings="eyJjYWxsYmFja1VybCI6Imh0dHBzOi8vdGhyYXNpby1wcml2YWN5Lm15Lm9uZXRydXN0LmNvbS9yZXF1ZXN0L3YxL3ByaXZhY3lOb3RpY2VzL3N0YXRzL3ZpZXdzIn0="\n    \n    // ]]><\/script>\n                ',t="https://privacyportal-cdn.onetrust.com/privacy-notice-scripts/otnotice-1.0.min.js",n=function(){OneTrust.NoticeApi.Initialized.then((function(){OneTrust.NoticeApi.LoadNotices(["https://privacyportal-cdn.onetrust.com/31671afb-8866-4ea6-b9eb-90276fcdf684/privacy-notices/4d40ed25-cf28-41f2-bac1-31a51b7e7e0c.json"])}))},i=document.createElement("script"),a=document.getElementsByTagName("script")[0],i.async=1,i.onload=i.onreadystatechange=function(e,t){(t||!i.readyState||/loaded|complete/.test(i.readyState))&&(i.onload=i.onreadystatechange=null,i=void 0,!t&&n&&setTimeout(n,0))},i.src=t,a.parentNode.insertBefore(i,a),o()}var t,n,i,a}))}();