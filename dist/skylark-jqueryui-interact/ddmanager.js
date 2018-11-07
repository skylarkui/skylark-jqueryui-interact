/**
 * skylark-jqueryui-interact - A version of jqueryui interact that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylarkui/skylark-jqueryui-interact/
 * @license MIT
 */
define(["skylark-utils-dom/langx"],function(e){var t={current:null,droppables:{"default":[]},prepareOffsets:function(e,o){var i,s,r=t.droppables[e.options.scope]||[],n=o?o.type:null,p=(e.currentItem||e.element).find(":data(ui-droppable)").addBack();e:for(i=0;i<r.length;i++)if(!(r[i].options.disabled||e&&!r[i].accept.call(r[i].element[0],e.currentItem||e.element))){for(s=0;s<p.length;s++)if(p[s]===r[i].element[0]){r[i].proportions().height=0;continue e}r[i].visible="none"!==r[i].element.css("display"),r[i].visible&&("mousedown"===n&&r[i]._activate.call(r[i],o),r[i].offset=r[i].element.offset(),r[i].proportions({width:r[i].element[0].offsetWidth,height:r[i].element[0].offsetHeight}))}},drop:function(o,i){var s=!1;return e.each((t.droppables[o.options.scope]||[]).slice(),function(){this.options&&(!this.options.disabled&&this.visible&&t.intersect(o,this,this.options.tolerance,i)&&(s=this._drop.call(this,i)||s),!this.options.disabled&&this.visible&&this.accept.call(this.element[0],o.currentItem||o.element)&&(this.isout=!0,this.isover=!1,this._deactivate.call(this,i)))}),s},dragStart:function(e,o){e.element.parentsUntil("body").on("scroll.droppable",function(){e.options.refreshPositions||t.prepareOffsets(e,o)})},drag:function(o,i){o.options.refreshPositions&&t.prepareOffsets(o,i),e.each(t.droppables[o.options.scope]||[],function(){if(!this.options.disabled&&!this.greedyChild&&this.visible){var e,s,r,n=t.intersect(o,this,this.options.tolerance,i),p=!n&&this.isover?"isout":n&&!this.isover?"isover":null;p&&(this.options.greedy&&(s=this.options.scope,r=this.element.parents(":data(ui-droppable)").filter(function(){return $(this).droppable("instance").options.scope===s}),r.length&&(e=$(r[0]).droppable("instance"),e.greedyChild="isover"===p)),e&&"isover"===p&&(e.isover=!1,e.isout=!0,e._out.call(e,i)),this[p]=!0,this["isout"===p?"isover":"isout"]=!1,this["isover"===p?"_over":"_out"].call(this,i),e&&"isout"===p&&(e.isout=!1,e.isover=!0,e._over.call(e,i)))}})},dragStop:function(e,o){e.element.parentsUntil("body").off("scroll.droppable"),e.options.refreshPositions||t.prepareOffsets(e,o)}};return t.intersect=function(){function e(e,t,o){return e>=t&&e<t+o}return function(t,o,i,s){if(!o.offset)return!1;var r=(t.positionAbs||t.position.absolute).left+t.margins.left,n=(t.positionAbs||t.position.absolute).top+t.margins.top,p=r+t.helperProportions.width,l=n+t.helperProportions.height,a=o.offset.left,h=o.offset.top,c=a+o.proportions().width,f=h+o.proportions().height;switch(i){case"fit":return a<=r&&p<=c&&h<=n&&l<=f;case"intersect":return a<r+t.helperProportions.width/2&&p-t.helperProportions.width/2<c&&h<n+t.helperProportions.height/2&&l-t.helperProportions.height/2<f;case"pointer":return e(s.pageY,h,o.proportions().height)&&e(s.pageX,a,o.proportions().width);case"touch":return(n>=h&&n<=f||l>=h&&l<=f||n<h&&l>f)&&(r>=a&&r<=c||p>=a&&p<=c||r<a&&p>c);default:return!1}}}(),t});
//# sourceMappingURL=sourcemaps/ddmanager.js.map
