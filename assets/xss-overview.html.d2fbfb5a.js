import{r,o,c as a,a as e,e as n,F as i,d as c,b as t}from"./app.a494a74d.js";import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";var d="/angular-security-training/assets/xss-wf.53a4e76c.png";const h={},u=c('<h1 id="_3-1-xss-overview" tabindex="-1"><a class="header-anchor" href="#_3-1-xss-overview" aria-hidden="true">#</a> 3.1 XSS Overview</h1><h2 id="xss-in-a-nutshell" tabindex="-1"><a class="header-anchor" href="#xss-in-a-nutshell" aria-hidden="true">#</a> XSS in a nutshell</h2><p>Cross-Site Scripting (XSS) is a vulnerability that occurs when <strong>untrusted data from the user</strong> is processed by the web application <strong>without validation</strong> and is reflected back to the browser <strong>without encoding or escaping</strong>, resulting in <strong>code execution</strong> at the browser engine.</p><p><img src="'+d+'" alt="xss-wf"></p><h2 id="why-xss-is-dangerous" tabindex="-1"><a class="header-anchor" href="#why-xss-is-dangerous" aria-hidden="true">#</a> Why XSS is dangerous ?</h2><p>The impact of XSS is moderate for reflected and DOM XSS, and severe for stored XSS, with remote code execution on the victim\u2019s browser, such as stealing credentials, sessions, MFA bypass, DOM node replacement or defacement (such as trojan login panels), key logging or delivering malware to the victim.</p><h2 id="what-causes-xss" tabindex="-1"><a class="header-anchor" href="#what-causes-xss" aria-hidden="true">#</a> What causes XSS ?</h2><p>This attack happens mostly because the web application or API <strong>uses inputs from any users within the output</strong> it generates <strong>without proper validation or encoding</strong>.</p><h2 id="how-xss-attacks-happen" tabindex="-1"><a class="header-anchor" href="#how-xss-attacks-happen" aria-hidden="true">#</a> How XSS attacks happen ?</h2>',9),_=e("thead",null,[e("tr",null,[e("th",null,"XSS type"),e("th",null,"Description"),e("th",null,"Payload type"),e("th",null,"Payload Examples"),e("th",null,"Real cases")])],-1),p=e("td",null,"Reflected",-1),g=e("td",null,"Reflected in web server as an error message, search result or any input sent to the server as part of the request.",-1),m=e("td",null,"From request parameter.",-1),b=e("td",null,[e("img",{src:"https://user-images.githubusercontent.com/1529433/174054218-bef943dc-1f60-4621-ba5f-4d4b10504111.png",alt:"image"})],-1),f={href:"https://www.techspot.com/news/78304-epic-games-weaknesses-check-point-hack-fortnite-accounts.html",target:"_blank",rel:"noopener noreferrer"},w=t("epic games"),x=e("td",null,"Stored",-1),v=e("td",null,"Injected script is permanently stored in target servers.",-1),y=e("td",null,"Stored server-side.",-1),S=e("td",null,[e("img",{src:"https://user-images.githubusercontent.com/1529433/174054511-5e9a54ef-5b8c-4b53-907a-644ecd3a147b.png",alt:"image"})],-1),k={href:"https://www.vice.com/en/article/wnjwb4/the-myspace-worm-that-changed-the-internet-forever",target:"_blank",rel:"noopener noreferrer"},M=t("myspace worm"),X=e("td",null,"DOM based",-1),O=e("td",null,"Modifying the DOM environment in the victim browser.",-1),D=e("td",null,"Introduced by DOM modification.",-1),F=e("td",null,[e("img",{src:"https://user-images.githubusercontent.com/1529433/174054599-3d7619d8-571c-4ada-9a05-9a7d3f3b5898.png",alt:"image"})],-1),I={href:"https://www.acunetix.com/blog/articles/chronicles-dom-based-xss/",target:"_blank",rel:"noopener noreferrer"},j=t("Microsoft, Apple, Google,..."),B=e("td",null,"Mutation",-1),E=e("td",null,"Looks like safe (or just a syntax error) in itself but become active after mutation process",-1),N=e("td",null,"Mutated by browser.",-1),T=e("td",null,[e("img",{src:"https://user-images.githubusercontent.com/1529433/174054791-2beee000-a47f-431f-bcac-fba3a6018e43.png",alt:"image"})],-1),V={href:"https://www.acunetix.com/blog/web-security-zone/mutation-xss-in-google-search/",target:"_blank",rel:"noopener noreferrer"},A=t("Google search bar"),C=e("td",null,"Blind Cross-Site scripting",-1),L=e("td",null,"Script is saved on server side and reflected back in the backend application.",-1),P=e("td",null,null,-1),R=e("td",null,null,-1),q={href:"https://samcurry.net/cracking-my-windshield-and-earning-10000-on-the-tesla-bug-bounty-program/",target:"_blank",rel:"noopener noreferrer"},G=t("Tesla"),W=e("h2",{id:"further-resources",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#further-resources","aria-hidden":"true"},"#"),t(" Further resources")],-1),z={href:"https://owasp.org/www-community/attacks/xss/",target:"_blank",rel:"noopener noreferrer"},H=t("owasp.org/www-community/attacks/xss/");function J(K,Q){const s=r("ExternalLinkIcon");return o(),a(i,null,[u,e("table",null,[_,e("tbody",null,[e("tr",null,[p,g,m,b,e("td",null,[e("a",f,[w,n(s)])])]),e("tr",null,[x,v,y,S,e("td",null,[e("a",k,[M,n(s)])])]),e("tr",null,[X,O,D,F,e("td",null,[e("a",I,[j,n(s)])])]),e("tr",null,[B,E,N,T,e("td",null,[e("a",V,[A,n(s)])])]),e("tr",null,[C,L,P,R,e("td",null,[e("a",q,[G,n(s)])])])])]),W,e("p",null,[e("a",z,[H,n(s)])])],64)}var Z=l(h,[["render",J]]);export{Z as default};
