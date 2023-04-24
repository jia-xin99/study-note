import{_ as l,V as e,W as i,$ as t}from"./framework-b9c3f338.js";const p={},c=t("<p>03 SQL优化</p><p>（1）插入数据</p><p>【1】使用insert</p><ul><li><p>场景：使用多条insert语句插入到同一数据库表。</p></li><li><p>优化方法1：批量插入</p><ul><li><code>insert 表名 values(xxx),(xxx),(xxx);</code></li></ul></li><li><p>优化方法2：使用事务</p><ul><li>先开启事务，然后一条条插入数据，最后提交。</li></ul></li><li><p>优化方法3：主键顺序插入</p><ul><li>按主键顺序插入，性能高于乱序插入</li></ul></li></ul><p>【2】大批量插入数据</p><ul><li>使用MySQL的load指令</li></ul>",6),o=[c];function s(_,n){return e(),i("div",null,o)}const r=l(p,[["render",s],["__file","3.html.vue"]]);export{r as default};
