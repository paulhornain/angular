import{d as n}from"./app.a494a74d.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";var a="/angular-security-training/assets/xssi-jax-rs.b8fd6076.png";const e={},t=n(`<h1 id="_8-3-xssi-protection-in-angular" tabindex="-1"><a class="header-anchor" href="#_8-3-xssi-protection-in-angular" aria-hidden="true">#</a> 8.3 XSSI protection in Angular</h1><p>Angular automatically strips the <code>)]}&#39;,\\n</code> prefix if any Configure your server to prefix: <code>)]}&#39;,\\n</code> before all your JSON responses.</p><p>A normal response of <code>[&#39;one&#39;, &#39;two&#39;]</code> will be returned as :</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">}</span>&#39;<span class="token punctuation">,</span>
<span class="token punctuation">[</span><span class="token string">&#39;one&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;two&#39;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><img src="`+a+'" alt="xssi-jax-rs"></p>',5);function r(o,p){return t}var l=s(e,[["render",r]]);export{l as default};
