import{_ as e,V as t,W as p,X as n,Y as o,Z as c,$ as s,C as l}from"./framework-b9c3f338.js";const i={},u=s(`<h1 id="_03-数组中重复的数字" tabindex="-1"><a class="header-anchor" href="#_03-数组中重复的数字" aria-hidden="true">#</a> 03 数组中重复的数字</h1><p>找出数组中重复的数字。</p><p>在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。请找出数组中任意一个重复的数字。</p><p>示例 1：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> 输入：
 [2, 3, 1, 0, 2, 5, 3]
 输出：2 或 3 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),r={href:"https://leetcode.cn/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof/%5D",target:"_blank",rel:"noopener noreferrer"},d=s(`<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Offer1_03</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">findRepeatNumber</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 其他方法：Set，排序</span>

        <span class="token comment">// 可修改数组：保证空间复杂度：O(1)</span>
        <span class="token comment">// 分析:长度为n，数字0~n-1。若无重复：则可全部修改数字到对应下标</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>nums <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> nums<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 2.将i换到nums[i]的位置上</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">!=</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// 换之前判断m=nums[i]换到的位置上是否有原值，有则重复</span>
                <span class="token keyword">int</span> m <span class="token operator">=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>m <span class="token operator">==</span> nums<span class="token punctuation">[</span>m<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">return</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span>m<span class="token punctuation">]</span><span class="token punctuation">;</span>
                nums<span class="token punctuation">[</span>m<span class="token punctuation">]</span> <span class="token operator">=</span> m<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 方法2：不可修改数组：保证空间复杂度：O(1)</span>
    <span class="token comment">// 把数分成2部分：0~m,m+1~n，然后统计在两区间的数的数量，然后数量大于对应区间的长度，则为有重复值，否则继续二分遍历统计（类比二分查找）</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function k(m,v){const a=l("ExternalLinkIcon");return t(),p("div",null,[u,n("p",null,[n("a",r,[o("力扣：数组中重复的数字"),c(a)])]),d])}const _=e(i,[["render",k],["__file","1.html.vue"]]);export{_ as default};
