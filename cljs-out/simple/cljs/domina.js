// Compiled by ClojureScript 0.0-2356
goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.dom.xml');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.dom.forms');
goog.require('goog.string');
goog.require('cljs.core');
goog.require('domina.support');
goog.require('goog.events');
goog.require('goog.string');
goog.require('domina.support');
goog.require('goog.style');
goog.require('goog.style');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('goog.events');
goog.require('goog.dom.xml');
goog.require('cljs.core');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_19946 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_19947 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_19948 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_19948,opt_wrapper_19946,table_section_wrapper_19947,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_19946,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_19947,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_19947,cell_wrapper_19948,table_section_wrapper_19947,table_section_wrapper_19947]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3627__auto__ = div.firstChild;if(cljs.core.truth_(and__3627__auto__))
{return div.firstChild.childNodes;
} else
{return and__3627__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));var seq__19953 = cljs.core.seq.call(null,tbody);var chunk__19954 = null;var count__19955 = (0);var i__19956 = (0);while(true){
if((i__19956 < count__19955))
{var child = cljs.core._nth.call(null,chunk__19954,i__19956);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__19957 = seq__19953;
var G__19958 = chunk__19954;
var G__19959 = count__19955;
var G__19960 = (i__19956 + (1));
seq__19953 = G__19957;
chunk__19954 = G__19958;
count__19955 = G__19959;
i__19956 = G__19960;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__19953);if(temp__4126__auto__)
{var seq__19953__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19953__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__19953__$1);{
var G__19961 = cljs.core.chunk_rest.call(null,seq__19953__$1);
var G__19962 = c__4408__auto__;
var G__19963 = cljs.core.count.call(null,c__4408__auto__);
var G__19964 = (0);
seq__19953 = G__19961;
chunk__19954 = G__19962;
count__19955 = G__19963;
i__19956 = G__19964;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__19953__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__19965 = cljs.core.next.call(null,seq__19953__$1);
var G__19966 = null;
var G__19967 = (0);
var G__19968 = (0);
seq__19953 = G__19965;
chunk__19954 = G__19966;
count__19955 = G__19967;
i__19956 = G__19968;
continue;
}
}
} else
{return null;
}
}
break;
}
});
domina.restore_leading_whitespace_BANG_ = (function restore_leading_whitespace_BANG_(div,html){return div.insertBefore(document.createTextNode(cljs.core.first.call(null,cljs.core.re_find.call(null,domina.re_leading_whitespace,html))),div.firstChild);
});
/**
* takes an string of html and returns a NodeList of dom fragments
*/
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))).toLowerCase();var vec__19970 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__19970,(0),null);var start_wrap = cljs.core.nth.call(null,vec__19970,(1),null);var end_wrap = cljs.core.nth.call(null,vec__19970,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__19971 = wrapper.lastChild;
var G__19972 = (level - (1));
wrapper = G__19971;
level = G__19972;
continue;
}
} else
{return wrapper;
}
break;
}
})();if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_))
{domina.remove_extraneous_tbody_BANG_.call(null,div,html__$1,tag_name,start_wrap);
} else
{}
if(cljs.core.truth_((function (){var and__3627__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3627__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3627__auto__;
}
})()))
{domina.restore_leading_whitespace_BANG_.call(null,div,html__$1);
} else
{}
return div.childNodes;
});
domina.string_to_dom = (function string_to_dom(s){if(cljs.core.truth_(cljs.core.re_find.call(null,domina.re_html,s)))
{return domina.html_to_dom.call(null,s);
} else
{return document.createTextNode(s);
}
});
domina.DomContent = (function (){var obj19974 = {};return obj19974;
})();
domina.nodes = (function nodes(content){if((function (){var and__3627__auto__ = content;if(and__3627__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3627__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4275__auto__ = (((content == null))?null:content);return (function (){var or__3639__auto__ = (domina.nodes[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (domina.nodes["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3627__auto__ = nodeseq;if(and__3627__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3627__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4275__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3639__auto__ = (domina.single_node[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (domina.single_node["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
/**
* @param {...*} var_args
*/
domina.log_debug = (function() { 
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3627__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3627__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3627__auto__;
}
})()))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log_debug = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log_debug__delegate.call(this,mesg);};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__19975){
var mesg = cljs.core.seq(arglist__19975);
return log_debug__delegate(mesg);
});
log_debug.cljs$core$IFn$_invoke$arity$variadic = log_debug__delegate;
return log_debug;
})()
;
/**
* @param {...*} var_args
*/
domina.log = (function() { 
var log__delegate = function (mesg){if(cljs.core.truth_(window.console))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log__delegate.call(this,mesg);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__19976){
var mesg = cljs.core.seq(arglist__19976);
return log__delegate(mesg);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
/**
* Returns content containing a single node by looking up the given ID
*/
domina.by_id = (function by_id(id){return goog.dom.getElement(cljs.core.name.call(null,id));
});
/**
* Returns content containing nodes which have the specified CSS class.
*/
domina.by_class = (function by_class(class_name){return domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name.call(null,class_name)));
});
/**
* Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
*/
domina.children = (function children(content){return cljs.core.doall.call(null,cljs.core.mapcat.call(null,goog.dom.getChildren,domina.nodes.call(null,content)));
});
/**
* Returns the deepest common ancestor of the argument contents (which are presumed to be single nodes), or nil if they are from different documents.
* @param {...*} var_args
*/
domina.common_ancestor = (function() { 
var common_ancestor__delegate = function (contents){return cljs.core.apply.call(null,goog.dom.findCommonAncestor,cljs.core.map.call(null,domina.single_node,contents));
};
var common_ancestor = function (var_args){
var contents = null;if (arguments.length > 0) {
  contents = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return common_ancestor__delegate.call(this,contents);};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__19977){
var contents = cljs.core.seq(arglist__19977);
return common_ancestor__delegate(contents);
});
common_ancestor.cljs$core$IFn$_invoke$arity$variadic = common_ancestor__delegate;
return common_ancestor;
})()
;
/**
* Returns true if the first argument is an ancestor of the second argument. Presumes both arguments are single-node contents.
*/
domina.ancestor_QMARK_ = (function ancestor_QMARK_(ancestor_content,descendant_content){return cljs.core._EQ_.call(null,domina.common_ancestor.call(null,ancestor_content,descendant_content),domina.single_node.call(null,ancestor_content));
});
/**
* Returns a deep clone of content.
*/
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__19978_SHARP_){return p1__19978_SHARP_.cloneNode(true);
}),domina.nodes.call(null,content));
});
/**
* Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.append_BANG_ = (function append_BANG_(parent_content,child_content){domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__19979_SHARP_,p2__19980_SHARP_){return goog.dom.insertChildAt(p1__19979_SHARP_,p2__19980_SHARP_,idx);
}),parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){domina.insert_BANG_.call(null,parent_content,child_content,(0));
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__19982_SHARP_,p2__19981_SHARP_){return goog.dom.insertSiblingBefore(p2__19981_SHARP_,p1__19982_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__19984_SHARP_,p2__19983_SHARP_){return goog.dom.insertSiblingAfter(p2__19983_SHARP_,p1__19984_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__19986_SHARP_,p2__19985_SHARP_){return goog.dom.replaceNode(p2__19985_SHARP_,p1__19986_SHARP_);
}),old_content,new_content);
return old_content;
});
/**
* Removes all the nodes in a content from the DOM and returns them.
*/
domina.detach_BANG_ = (function detach_BANG_(content){return cljs.core.doall.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the nodes in a content from the DOM. Returns nil.
*/
domina.destroy_BANG_ = (function destroy_BANG_(content){return cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the child nodes in a content from the DOM. Returns the original content.
*/
domina.destroy_children_BANG_ = (function destroy_children_BANG_(content){cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeChildren,domina.nodes.call(null,content)));
return content;
});
/**
* Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
*/
domina.style = (function style(content,name){var s = goog.style.getStyle(domina.single_node.call(null,content),cljs.core.name.call(null,name));if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s)))
{return null;
} else
{return s;
}
});
/**
* Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
*/
domina.attr = (function attr(content,name){return domina.single_node.call(null,content).getAttribute(cljs.core.name.call(null,name));
});
/**
* Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (content,name,value){var seq__19991_19995 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19992_19996 = null;var count__19993_19997 = (0);var i__19994_19998 = (0);while(true){
if((i__19994_19998 < count__19993_19997))
{var n_19999 = cljs.core._nth.call(null,chunk__19992_19996,i__19994_19998);goog.style.setStyle(n_19999,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__20000 = seq__19991_19995;
var G__20001 = chunk__19992_19996;
var G__20002 = count__19993_19997;
var G__20003 = (i__19994_19998 + (1));
seq__19991_19995 = G__20000;
chunk__19992_19996 = G__20001;
count__19993_19997 = G__20002;
i__19994_19998 = G__20003;
continue;
}
} else
{var temp__4126__auto___20004 = cljs.core.seq.call(null,seq__19991_19995);if(temp__4126__auto___20004)
{var seq__19991_20005__$1 = temp__4126__auto___20004;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19991_20005__$1))
{var c__4408__auto___20006 = cljs.core.chunk_first.call(null,seq__19991_20005__$1);{
var G__20007 = cljs.core.chunk_rest.call(null,seq__19991_20005__$1);
var G__20008 = c__4408__auto___20006;
var G__20009 = cljs.core.count.call(null,c__4408__auto___20006);
var G__20010 = (0);
seq__19991_19995 = G__20007;
chunk__19992_19996 = G__20008;
count__19993_19997 = G__20009;
i__19994_19998 = G__20010;
continue;
}
} else
{var n_20011 = cljs.core.first.call(null,seq__19991_20005__$1);goog.style.setStyle(n_20011,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__20012 = cljs.core.next.call(null,seq__19991_20005__$1);
var G__20013 = null;
var G__20014 = (0);
var G__20015 = (0);
seq__19991_19995 = G__20012;
chunk__19992_19996 = G__20013;
count__19993_19997 = G__20014;
i__19994_19998 = G__20015;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_style_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_style_BANG___delegate.call(this,content,name,value);};
set_style_BANG_.cljs$lang$maxFixedArity = 2;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__20016){
var content = cljs.core.first(arglist__20016);
arglist__20016 = cljs.core.next(arglist__20016);
var name = cljs.core.first(arglist__20016);
var value = cljs.core.rest(arglist__20016);
return set_style_BANG___delegate(content,name,value);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
/**
* Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_attr_BANG_ = (function() { 
var set_attr_BANG___delegate = function (content,name,value){var seq__20021_20025 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20022_20026 = null;var count__20023_20027 = (0);var i__20024_20028 = (0);while(true){
if((i__20024_20028 < count__20023_20027))
{var n_20029 = cljs.core._nth.call(null,chunk__20022_20026,i__20024_20028);n_20029.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__20030 = seq__20021_20025;
var G__20031 = chunk__20022_20026;
var G__20032 = count__20023_20027;
var G__20033 = (i__20024_20028 + (1));
seq__20021_20025 = G__20030;
chunk__20022_20026 = G__20031;
count__20023_20027 = G__20032;
i__20024_20028 = G__20033;
continue;
}
} else
{var temp__4126__auto___20034 = cljs.core.seq.call(null,seq__20021_20025);if(temp__4126__auto___20034)
{var seq__20021_20035__$1 = temp__4126__auto___20034;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20021_20035__$1))
{var c__4408__auto___20036 = cljs.core.chunk_first.call(null,seq__20021_20035__$1);{
var G__20037 = cljs.core.chunk_rest.call(null,seq__20021_20035__$1);
var G__20038 = c__4408__auto___20036;
var G__20039 = cljs.core.count.call(null,c__4408__auto___20036);
var G__20040 = (0);
seq__20021_20025 = G__20037;
chunk__20022_20026 = G__20038;
count__20023_20027 = G__20039;
i__20024_20028 = G__20040;
continue;
}
} else
{var n_20041 = cljs.core.first.call(null,seq__20021_20035__$1);n_20041.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__20042 = cljs.core.next.call(null,seq__20021_20035__$1);
var G__20043 = null;
var G__20044 = (0);
var G__20045 = (0);
seq__20021_20025 = G__20042;
chunk__20022_20026 = G__20043;
count__20023_20027 = G__20044;
i__20024_20028 = G__20045;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_attr_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_attr_BANG___delegate.call(this,content,name,value);};
set_attr_BANG_.cljs$lang$maxFixedArity = 2;
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__20046){
var content = cljs.core.first(arglist__20046);
arglist__20046 = cljs.core.next(arglist__20046);
var name = cljs.core.first(arglist__20046);
var value = cljs.core.rest(arglist__20046);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__20051_20055 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20052_20056 = null;var count__20053_20057 = (0);var i__20054_20058 = (0);while(true){
if((i__20054_20058 < count__20053_20057))
{var n_20059 = cljs.core._nth.call(null,chunk__20052_20056,i__20054_20058);n_20059.removeAttribute(cljs.core.name.call(null,name));
{
var G__20060 = seq__20051_20055;
var G__20061 = chunk__20052_20056;
var G__20062 = count__20053_20057;
var G__20063 = (i__20054_20058 + (1));
seq__20051_20055 = G__20060;
chunk__20052_20056 = G__20061;
count__20053_20057 = G__20062;
i__20054_20058 = G__20063;
continue;
}
} else
{var temp__4126__auto___20064 = cljs.core.seq.call(null,seq__20051_20055);if(temp__4126__auto___20064)
{var seq__20051_20065__$1 = temp__4126__auto___20064;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20051_20065__$1))
{var c__4408__auto___20066 = cljs.core.chunk_first.call(null,seq__20051_20065__$1);{
var G__20067 = cljs.core.chunk_rest.call(null,seq__20051_20065__$1);
var G__20068 = c__4408__auto___20066;
var G__20069 = cljs.core.count.call(null,c__4408__auto___20066);
var G__20070 = (0);
seq__20051_20055 = G__20067;
chunk__20052_20056 = G__20068;
count__20053_20057 = G__20069;
i__20054_20058 = G__20070;
continue;
}
} else
{var n_20071 = cljs.core.first.call(null,seq__20051_20065__$1);n_20071.removeAttribute(cljs.core.name.call(null,name));
{
var G__20072 = cljs.core.next.call(null,seq__20051_20065__$1);
var G__20073 = null;
var G__20074 = (0);
var G__20075 = (0);
seq__20051_20055 = G__20072;
chunk__20052_20056 = G__20073;
count__20053_20057 = G__20074;
i__20054_20058 = G__20075;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Parses a CSS style string and returns the properties as a map.
*/
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__20077 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__20077,(0),null);var v = cljs.core.nth.call(null,vec__20077,(1),null);if(cljs.core.truth_((function (){var and__3627__auto__ = k;if(cljs.core.truth_(and__3627__auto__))
{return v;
} else
{return and__3627__auto__;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k.toLowerCase()),v);
} else
{return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){var style = domina.attr.call(null,content,"style");if(typeof style === 'string')
{return domina.parse_style_attributes.call(null,style);
} else
{if((style == null))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{if(cljs.core.truth_(style.cssText))
{return domina.parse_style_attributes.call(null,style.cssText);
} else
{return cljs.core.PersistentArrayMap.EMPTY;

}
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,((function (node,attrs__$1){
return (function (p1__20078_SHARP_){var attr = attrs__$1.item(p1__20078_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
});})(node,attrs__$1))
,cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__20085_20091 = cljs.core.seq.call(null,styles);var chunk__20086_20092 = null;var count__20087_20093 = (0);var i__20088_20094 = (0);while(true){
if((i__20088_20094 < count__20087_20093))
{var vec__20089_20095 = cljs.core._nth.call(null,chunk__20086_20092,i__20088_20094);var name_20096 = cljs.core.nth.call(null,vec__20089_20095,(0),null);var value_20097 = cljs.core.nth.call(null,vec__20089_20095,(1),null);domina.set_style_BANG_.call(null,content,name_20096,value_20097);
{
var G__20098 = seq__20085_20091;
var G__20099 = chunk__20086_20092;
var G__20100 = count__20087_20093;
var G__20101 = (i__20088_20094 + (1));
seq__20085_20091 = G__20098;
chunk__20086_20092 = G__20099;
count__20087_20093 = G__20100;
i__20088_20094 = G__20101;
continue;
}
} else
{var temp__4126__auto___20102 = cljs.core.seq.call(null,seq__20085_20091);if(temp__4126__auto___20102)
{var seq__20085_20103__$1 = temp__4126__auto___20102;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20085_20103__$1))
{var c__4408__auto___20104 = cljs.core.chunk_first.call(null,seq__20085_20103__$1);{
var G__20105 = cljs.core.chunk_rest.call(null,seq__20085_20103__$1);
var G__20106 = c__4408__auto___20104;
var G__20107 = cljs.core.count.call(null,c__4408__auto___20104);
var G__20108 = (0);
seq__20085_20091 = G__20105;
chunk__20086_20092 = G__20106;
count__20087_20093 = G__20107;
i__20088_20094 = G__20108;
continue;
}
} else
{var vec__20090_20109 = cljs.core.first.call(null,seq__20085_20103__$1);var name_20110 = cljs.core.nth.call(null,vec__20090_20109,(0),null);var value_20111 = cljs.core.nth.call(null,vec__20090_20109,(1),null);domina.set_style_BANG_.call(null,content,name_20110,value_20111);
{
var G__20112 = cljs.core.next.call(null,seq__20085_20103__$1);
var G__20113 = null;
var G__20114 = (0);
var G__20115 = (0);
seq__20085_20091 = G__20112;
chunk__20086_20092 = G__20113;
count__20087_20093 = G__20114;
i__20088_20094 = G__20115;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Sets the specified attributes for each node in the content, given a map of names and values. Names may be a string or keyword. Values will be cast to a string, multiple values wil be concatenated.
*/
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__20122_20128 = cljs.core.seq.call(null,attrs);var chunk__20123_20129 = null;var count__20124_20130 = (0);var i__20125_20131 = (0);while(true){
if((i__20125_20131 < count__20124_20130))
{var vec__20126_20132 = cljs.core._nth.call(null,chunk__20123_20129,i__20125_20131);var name_20133 = cljs.core.nth.call(null,vec__20126_20132,(0),null);var value_20134 = cljs.core.nth.call(null,vec__20126_20132,(1),null);domina.set_attr_BANG_.call(null,content,name_20133,value_20134);
{
var G__20135 = seq__20122_20128;
var G__20136 = chunk__20123_20129;
var G__20137 = count__20124_20130;
var G__20138 = (i__20125_20131 + (1));
seq__20122_20128 = G__20135;
chunk__20123_20129 = G__20136;
count__20124_20130 = G__20137;
i__20125_20131 = G__20138;
continue;
}
} else
{var temp__4126__auto___20139 = cljs.core.seq.call(null,seq__20122_20128);if(temp__4126__auto___20139)
{var seq__20122_20140__$1 = temp__4126__auto___20139;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20122_20140__$1))
{var c__4408__auto___20141 = cljs.core.chunk_first.call(null,seq__20122_20140__$1);{
var G__20142 = cljs.core.chunk_rest.call(null,seq__20122_20140__$1);
var G__20143 = c__4408__auto___20141;
var G__20144 = cljs.core.count.call(null,c__4408__auto___20141);
var G__20145 = (0);
seq__20122_20128 = G__20142;
chunk__20123_20129 = G__20143;
count__20124_20130 = G__20144;
i__20125_20131 = G__20145;
continue;
}
} else
{var vec__20127_20146 = cljs.core.first.call(null,seq__20122_20140__$1);var name_20147 = cljs.core.nth.call(null,vec__20127_20146,(0),null);var value_20148 = cljs.core.nth.call(null,vec__20127_20146,(1),null);domina.set_attr_BANG_.call(null,content,name_20147,value_20148);
{
var G__20149 = cljs.core.next.call(null,seq__20122_20140__$1);
var G__20150 = null;
var G__20151 = (0);
var G__20152 = (0);
seq__20122_20128 = G__20149;
chunk__20123_20129 = G__20150;
count__20124_20130 = G__20151;
i__20125_20131 = G__20152;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns true if the node has the specified CSS class. Assumes content is a single node.
*/
domina.has_class_QMARK_ = (function has_class_QMARK_(content,class$){return goog.dom.classes.has(domina.single_node.call(null,content),class$);
});
/**
* Adds the specified CSS class to each node in the content.
*/
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__20157_20161 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20158_20162 = null;var count__20159_20163 = (0);var i__20160_20164 = (0);while(true){
if((i__20160_20164 < count__20159_20163))
{var node_20165 = cljs.core._nth.call(null,chunk__20158_20162,i__20160_20164);goog.dom.classes.add(node_20165,class$);
{
var G__20166 = seq__20157_20161;
var G__20167 = chunk__20158_20162;
var G__20168 = count__20159_20163;
var G__20169 = (i__20160_20164 + (1));
seq__20157_20161 = G__20166;
chunk__20158_20162 = G__20167;
count__20159_20163 = G__20168;
i__20160_20164 = G__20169;
continue;
}
} else
{var temp__4126__auto___20170 = cljs.core.seq.call(null,seq__20157_20161);if(temp__4126__auto___20170)
{var seq__20157_20171__$1 = temp__4126__auto___20170;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20157_20171__$1))
{var c__4408__auto___20172 = cljs.core.chunk_first.call(null,seq__20157_20171__$1);{
var G__20173 = cljs.core.chunk_rest.call(null,seq__20157_20171__$1);
var G__20174 = c__4408__auto___20172;
var G__20175 = cljs.core.count.call(null,c__4408__auto___20172);
var G__20176 = (0);
seq__20157_20161 = G__20173;
chunk__20158_20162 = G__20174;
count__20159_20163 = G__20175;
i__20160_20164 = G__20176;
continue;
}
} else
{var node_20177 = cljs.core.first.call(null,seq__20157_20171__$1);goog.dom.classes.add(node_20177,class$);
{
var G__20178 = cljs.core.next.call(null,seq__20157_20171__$1);
var G__20179 = null;
var G__20180 = (0);
var G__20181 = (0);
seq__20157_20161 = G__20178;
chunk__20158_20162 = G__20179;
count__20159_20163 = G__20180;
i__20160_20164 = G__20181;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Removes the specified CSS class from each node in the content.
*/
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__20186_20190 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20187_20191 = null;var count__20188_20192 = (0);var i__20189_20193 = (0);while(true){
if((i__20189_20193 < count__20188_20192))
{var node_20194 = cljs.core._nth.call(null,chunk__20187_20191,i__20189_20193);goog.dom.classes.remove(node_20194,class$);
{
var G__20195 = seq__20186_20190;
var G__20196 = chunk__20187_20191;
var G__20197 = count__20188_20192;
var G__20198 = (i__20189_20193 + (1));
seq__20186_20190 = G__20195;
chunk__20187_20191 = G__20196;
count__20188_20192 = G__20197;
i__20189_20193 = G__20198;
continue;
}
} else
{var temp__4126__auto___20199 = cljs.core.seq.call(null,seq__20186_20190);if(temp__4126__auto___20199)
{var seq__20186_20200__$1 = temp__4126__auto___20199;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20186_20200__$1))
{var c__4408__auto___20201 = cljs.core.chunk_first.call(null,seq__20186_20200__$1);{
var G__20202 = cljs.core.chunk_rest.call(null,seq__20186_20200__$1);
var G__20203 = c__4408__auto___20201;
var G__20204 = cljs.core.count.call(null,c__4408__auto___20201);
var G__20205 = (0);
seq__20186_20190 = G__20202;
chunk__20187_20191 = G__20203;
count__20188_20192 = G__20204;
i__20189_20193 = G__20205;
continue;
}
} else
{var node_20206 = cljs.core.first.call(null,seq__20186_20200__$1);goog.dom.classes.remove(node_20206,class$);
{
var G__20207 = cljs.core.next.call(null,seq__20186_20200__$1);
var G__20208 = null;
var G__20209 = (0);
var G__20210 = (0);
seq__20186_20190 = G__20207;
chunk__20187_20191 = G__20208;
count__20188_20192 = G__20209;
i__20189_20193 = G__20210;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Toggles the specified CSS class from each node in the content.
*/
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__20215_20219 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20216_20220 = null;var count__20217_20221 = (0);var i__20218_20222 = (0);while(true){
if((i__20218_20222 < count__20217_20221))
{var node_20223 = cljs.core._nth.call(null,chunk__20216_20220,i__20218_20222);goog.dom.classes.toggle(node_20223,class$);
{
var G__20224 = seq__20215_20219;
var G__20225 = chunk__20216_20220;
var G__20226 = count__20217_20221;
var G__20227 = (i__20218_20222 + (1));
seq__20215_20219 = G__20224;
chunk__20216_20220 = G__20225;
count__20217_20221 = G__20226;
i__20218_20222 = G__20227;
continue;
}
} else
{var temp__4126__auto___20228 = cljs.core.seq.call(null,seq__20215_20219);if(temp__4126__auto___20228)
{var seq__20215_20229__$1 = temp__4126__auto___20228;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20215_20229__$1))
{var c__4408__auto___20230 = cljs.core.chunk_first.call(null,seq__20215_20229__$1);{
var G__20231 = cljs.core.chunk_rest.call(null,seq__20215_20229__$1);
var G__20232 = c__4408__auto___20230;
var G__20233 = cljs.core.count.call(null,c__4408__auto___20230);
var G__20234 = (0);
seq__20215_20219 = G__20231;
chunk__20216_20220 = G__20232;
count__20217_20221 = G__20233;
i__20218_20222 = G__20234;
continue;
}
} else
{var node_20235 = cljs.core.first.call(null,seq__20215_20229__$1);goog.dom.classes.toggle(node_20235,class$);
{
var G__20236 = cljs.core.next.call(null,seq__20215_20229__$1);
var G__20237 = null;
var G__20238 = (0);
var G__20239 = (0);
seq__20215_20219 = G__20236;
chunk__20216_20220 = G__20237;
count__20217_20221 = G__20238;
i__20218_20222 = G__20239;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns a seq of all the CSS classes currently applied to a node. Assumes content is a single node.
*/
domina.classes = (function classes(content){return cljs.core.seq.call(null,goog.dom.classes.get(domina.single_node.call(null,content)));
});
/**
* Sets the class attribute of the content nodes to classes, which can
* be either a class attribute string or a seq of classname strings.
*/
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_20248__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__20244_20249 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20245_20250 = null;var count__20246_20251 = (0);var i__20247_20252 = (0);while(true){
if((i__20247_20252 < count__20246_20251))
{var node_20253 = cljs.core._nth.call(null,chunk__20245_20250,i__20247_20252);goog.dom.classes.set(node_20253,classes_20248__$1);
{
var G__20254 = seq__20244_20249;
var G__20255 = chunk__20245_20250;
var G__20256 = count__20246_20251;
var G__20257 = (i__20247_20252 + (1));
seq__20244_20249 = G__20254;
chunk__20245_20250 = G__20255;
count__20246_20251 = G__20256;
i__20247_20252 = G__20257;
continue;
}
} else
{var temp__4126__auto___20258 = cljs.core.seq.call(null,seq__20244_20249);if(temp__4126__auto___20258)
{var seq__20244_20259__$1 = temp__4126__auto___20258;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20244_20259__$1))
{var c__4408__auto___20260 = cljs.core.chunk_first.call(null,seq__20244_20259__$1);{
var G__20261 = cljs.core.chunk_rest.call(null,seq__20244_20259__$1);
var G__20262 = c__4408__auto___20260;
var G__20263 = cljs.core.count.call(null,c__4408__auto___20260);
var G__20264 = (0);
seq__20244_20249 = G__20261;
chunk__20245_20250 = G__20262;
count__20246_20251 = G__20263;
i__20247_20252 = G__20264;
continue;
}
} else
{var node_20265 = cljs.core.first.call(null,seq__20244_20259__$1);goog.dom.classes.set(node_20265,classes_20248__$1);
{
var G__20266 = cljs.core.next.call(null,seq__20244_20259__$1);
var G__20267 = null;
var G__20268 = (0);
var G__20269 = (0);
seq__20244_20249 = G__20266;
chunk__20245_20250 = G__20267;
count__20246_20251 = G__20268;
i__20247_20252 = G__20269;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the text of a node. Assumes content is a single node. For consistency across browsers, will always trim whitespace of the beginning and end of the returned text.
*/
domina.text = (function text(content){return goog.string.trim(goog.dom.getTextContent(domina.single_node.call(null,content)));
});
/**
* Sets the text value of all the nodes in the given content.
*/
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__20274_20278 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20275_20279 = null;var count__20276_20280 = (0);var i__20277_20281 = (0);while(true){
if((i__20277_20281 < count__20276_20280))
{var node_20282 = cljs.core._nth.call(null,chunk__20275_20279,i__20277_20281);goog.dom.setTextContent(node_20282,value);
{
var G__20283 = seq__20274_20278;
var G__20284 = chunk__20275_20279;
var G__20285 = count__20276_20280;
var G__20286 = (i__20277_20281 + (1));
seq__20274_20278 = G__20283;
chunk__20275_20279 = G__20284;
count__20276_20280 = G__20285;
i__20277_20281 = G__20286;
continue;
}
} else
{var temp__4126__auto___20287 = cljs.core.seq.call(null,seq__20274_20278);if(temp__4126__auto___20287)
{var seq__20274_20288__$1 = temp__4126__auto___20287;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20274_20288__$1))
{var c__4408__auto___20289 = cljs.core.chunk_first.call(null,seq__20274_20288__$1);{
var G__20290 = cljs.core.chunk_rest.call(null,seq__20274_20288__$1);
var G__20291 = c__4408__auto___20289;
var G__20292 = cljs.core.count.call(null,c__4408__auto___20289);
var G__20293 = (0);
seq__20274_20278 = G__20290;
chunk__20275_20279 = G__20291;
count__20276_20280 = G__20292;
i__20277_20281 = G__20293;
continue;
}
} else
{var node_20294 = cljs.core.first.call(null,seq__20274_20288__$1);goog.dom.setTextContent(node_20294,value);
{
var G__20295 = cljs.core.next.call(null,seq__20274_20288__$1);
var G__20296 = null;
var G__20297 = (0);
var G__20298 = (0);
seq__20274_20278 = G__20295;
chunk__20275_20279 = G__20296;
count__20276_20280 = G__20297;
i__20277_20281 = G__20298;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the value of a node (presumably a form field). Assumes content is a single node.
*/
domina.value = (function value(content){return goog.dom.forms.getValue(domina.single_node.call(null,content));
});
/**
* Sets the value of all the nodes (presumably form fields) in the given content.
*/
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__20303_20307 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20304_20308 = null;var count__20305_20309 = (0);var i__20306_20310 = (0);while(true){
if((i__20306_20310 < count__20305_20309))
{var node_20311 = cljs.core._nth.call(null,chunk__20304_20308,i__20306_20310);goog.dom.forms.setValue(node_20311,value);
{
var G__20312 = seq__20303_20307;
var G__20313 = chunk__20304_20308;
var G__20314 = count__20305_20309;
var G__20315 = (i__20306_20310 + (1));
seq__20303_20307 = G__20312;
chunk__20304_20308 = G__20313;
count__20305_20309 = G__20314;
i__20306_20310 = G__20315;
continue;
}
} else
{var temp__4126__auto___20316 = cljs.core.seq.call(null,seq__20303_20307);if(temp__4126__auto___20316)
{var seq__20303_20317__$1 = temp__4126__auto___20316;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20303_20317__$1))
{var c__4408__auto___20318 = cljs.core.chunk_first.call(null,seq__20303_20317__$1);{
var G__20319 = cljs.core.chunk_rest.call(null,seq__20303_20317__$1);
var G__20320 = c__4408__auto___20318;
var G__20321 = cljs.core.count.call(null,c__4408__auto___20318);
var G__20322 = (0);
seq__20303_20307 = G__20319;
chunk__20304_20308 = G__20320;
count__20305_20309 = G__20321;
i__20306_20310 = G__20322;
continue;
}
} else
{var node_20323 = cljs.core.first.call(null,seq__20303_20317__$1);goog.dom.forms.setValue(node_20323,value);
{
var G__20324 = cljs.core.next.call(null,seq__20303_20317__$1);
var G__20325 = null;
var G__20326 = (0);
var G__20327 = (0);
seq__20303_20307 = G__20324;
chunk__20304_20308 = G__20325;
count__20305_20309 = G__20326;
i__20306_20310 = G__20327;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the innerHTML of a node. Assumes content is a single node.
*/
domina.html = (function html(content){return domina.single_node.call(null,content).innerHTML;
});
domina.replace_children_BANG_ = (function replace_children_BANG_(content,inner_content){return domina.append_BANG_.call(null,domina.destroy_children_BANG_.call(null,content),inner_content);
});
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))).toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3627__auto__ = allows_inner_html_QMARK_;if(and__3627__auto__)
{var and__3627__auto____$1 = (function (){var or__3639__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3627__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3627__auto____$1;
}
} else
{return and__3627__auto__;
}
})()))
{var value_20338 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__20334_20339 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20335_20340 = null;var count__20336_20341 = (0);var i__20337_20342 = (0);while(true){
if((i__20337_20342 < count__20336_20341))
{var node_20343 = cljs.core._nth.call(null,chunk__20335_20340,i__20337_20342);node_20343.innerHTML = value_20338;
{
var G__20344 = seq__20334_20339;
var G__20345 = chunk__20335_20340;
var G__20346 = count__20336_20341;
var G__20347 = (i__20337_20342 + (1));
seq__20334_20339 = G__20344;
chunk__20335_20340 = G__20345;
count__20336_20341 = G__20346;
i__20337_20342 = G__20347;
continue;
}
} else
{var temp__4126__auto___20348 = cljs.core.seq.call(null,seq__20334_20339);if(temp__4126__auto___20348)
{var seq__20334_20349__$1 = temp__4126__auto___20348;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20334_20349__$1))
{var c__4408__auto___20350 = cljs.core.chunk_first.call(null,seq__20334_20349__$1);{
var G__20351 = cljs.core.chunk_rest.call(null,seq__20334_20349__$1);
var G__20352 = c__4408__auto___20350;
var G__20353 = cljs.core.count.call(null,c__4408__auto___20350);
var G__20354 = (0);
seq__20334_20339 = G__20351;
chunk__20335_20340 = G__20352;
count__20336_20341 = G__20353;
i__20337_20342 = G__20354;
continue;
}
} else
{var node_20355 = cljs.core.first.call(null,seq__20334_20349__$1);node_20355.innerHTML = value_20338;
{
var G__20356 = cljs.core.next.call(null,seq__20334_20349__$1);
var G__20357 = null;
var G__20358 = (0);
var G__20359 = (0);
seq__20334_20339 = G__20356;
chunk__20335_20340 = G__20357;
count__20336_20341 = G__20358;
i__20337_20342 = G__20359;
continue;
}
}
} else
{}
}
break;
}
}catch (e20333){if((e20333 instanceof Error))
{var e_20360 = e20333;domina.replace_children_BANG_.call(null,content,value_20338);
} else
{throw e20333;

}
}} else
{domina.replace_children_BANG_.call(null,content,html_string);
}
return content;
});
/**
* Sets the innerHTML value for all the nodes in the given content.
*/
domina.set_html_BANG_ = (function set_html_BANG_(content,inner_content){if(typeof inner_content === 'string')
{return domina.set_inner_html_BANG_.call(null,content,inner_content);
} else
{return domina.replace_children_BANG_.call(null,content,inner_content);
}
});
/**
* Returns data associated with a node for a given key. Assumes
* content is a single node. If the bubble parameter is set to true,
* will search parent nodes if the key is not found.
*/
domina.get_data = (function() {
var get_data = null;
var get_data__2 = (function (node,key){return get_data.call(null,node,key,false);
});
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3627__auto__ = bubble;if(cljs.core.truth_(and__3627__auto__))
{return (value == null);
} else
{return and__3627__auto__;
}
})()))
{var temp__4126__auto__ = domina.single_node.call(null,node).parentNode;if(cljs.core.truth_(temp__4126__auto__))
{var parent = temp__4126__auto__;return get_data.call(null,parent,key,true);
} else
{return null;
}
} else
{return value;
}
});
get_data = function(node,key,bubble){
switch(arguments.length){
case 2:
return get_data__2.call(this,node,key);
case 3:
return get_data__3.call(this,node,key,bubble);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_data.cljs$core$IFn$_invoke$arity$2 = get_data__2;
get_data.cljs$core$IFn$_invoke$arity$3 = get_data__3;
return get_data;
})()
;
/**
* Sets a data on the node for a given key. Assumes content is a
* single node. Data should be ClojureScript values and data structures
* only; using other objects as data may result in memory leaks on some
* browsers.
*/
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3639__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();return domina.single_node.call(null,node).__domina_data = cljs.core.assoc.call(null,m,key,value);
});
/**
* Takes a two-arg function, a reference DomContent and new
* DomContent. Applies the function for each reference / content
* combination. Uses clones of the new content for each additional
* parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__20367_20371 = cljs.core.seq.call(null,children);var chunk__20368_20372 = null;var count__20369_20373 = (0);var i__20370_20374 = (0);while(true){
if((i__20370_20374 < count__20369_20373))
{var child_20375 = cljs.core._nth.call(null,chunk__20368_20372,i__20370_20374);frag.appendChild(child_20375);
{
var G__20376 = seq__20367_20371;
var G__20377 = chunk__20368_20372;
var G__20378 = count__20369_20373;
var G__20379 = (i__20370_20374 + (1));
seq__20367_20371 = G__20376;
chunk__20368_20372 = G__20377;
count__20369_20373 = G__20378;
i__20370_20374 = G__20379;
continue;
}
} else
{var temp__4126__auto___20380 = cljs.core.seq.call(null,seq__20367_20371);if(temp__4126__auto___20380)
{var seq__20367_20381__$1 = temp__4126__auto___20380;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20367_20381__$1))
{var c__4408__auto___20382 = cljs.core.chunk_first.call(null,seq__20367_20381__$1);{
var G__20383 = cljs.core.chunk_rest.call(null,seq__20367_20381__$1);
var G__20384 = c__4408__auto___20382;
var G__20385 = cljs.core.count.call(null,c__4408__auto___20382);
var G__20386 = (0);
seq__20367_20371 = G__20383;
chunk__20368_20372 = G__20384;
count__20369_20373 = G__20385;
i__20370_20374 = G__20386;
continue;
}
} else
{var child_20387 = cljs.core.first.call(null,seq__20367_20381__$1);frag.appendChild(child_20387);
{
var G__20388 = cljs.core.next.call(null,seq__20367_20381__$1);
var G__20389 = null;
var G__20390 = (0);
var G__20391 = (0);
seq__20367_20371 = G__20388;
chunk__20368_20372 = G__20389;
count__20369_20373 = G__20390;
i__20370_20374 = G__20391;
continue;
}
}
} else
{}
}
break;
}
return frag;
})();var other_children = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents) - (1)),((function (parents,children,first_child){
return (function (){return first_child.cloneNode(true);
});})(parents,children,first_child))
));if(cljs.core.seq.call(null,parents))
{f.call(null,cljs.core.first.call(null,parents),first_child);
return cljs.core.doall.call(null,cljs.core.map.call(null,((function (parents,children,first_child,other_children){
return (function (p1__20361_SHARP_,p2__20362_SHARP_){return f.call(null,p1__20361_SHARP_,p2__20362_SHARP_);
});})(parents,children,first_child,other_children))
,cljs.core.rest.call(null,parents),other_children));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){return lazy_nl_via_item.call(null,nl,(0));
});
var lazy_nl_via_item__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,nl.item(n),lazy_nl_via_item.call(null,nl,(n + (1))));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_item = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_item__1.call(this,nl);
case 2:
return lazy_nl_via_item__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_item__1;
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_item__2;
return lazy_nl_via_item;
})()
;
domina.lazy_nl_via_array_ref = (function() {
var lazy_nl_via_array_ref = null;
var lazy_nl_via_array_ref__1 = (function (nl){return lazy_nl_via_array_ref.call(null,nl,(0));
});
var lazy_nl_via_array_ref__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,(nl[n]),lazy_nl_via_array_ref.call(null,nl,(n + (1))));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_array_ref = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_array_ref__1.call(this,nl);
case 2:
return lazy_nl_via_array_ref__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_array_ref__1;
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_array_ref__2;
return lazy_nl_via_array_ref;
})()
;
/**
* A lazy seq view of a js/NodeList, or other array-like javascript things
*/
domina.lazy_nodelist = (function lazy_nodelist(nl){if(cljs.core.truth_(nl.item))
{return domina.lazy_nl_via_item.call(null,nl);
} else
{return domina.lazy_nl_via_array_ref.call(null,nl);
}
});
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3627__auto__ = obj;if(cljs.core.truth_(and__3627__auto__))
{var and__3627__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3627__auto____$1)
{return obj.length;
} else
{return and__3627__auto____$1;
}
} else
{return and__3627__auto__;
}
});
/**
* Some versions of IE have things that are like arrays in that they
* respond to .length, but are not arrays nor NodeSets. This returns a
* real sequence view of such objects. If passed an object that is not
* a logical sequence at all, returns a single-item seq containing the
* object.
*/
domina.normalize_seq = (function normalize_seq(list_thing){if((list_thing == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__20393 = list_thing;if(G__20393)
{var bit__4302__auto__ = (G__20393.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4302__auto__) || (G__20393.cljs$core$ISeqable$))
{return true;
} else
{if((!G__20393.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__20393);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__20393);
}
})())
{return cljs.core.seq.call(null,list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing)))
{return domina.lazy_nodelist.call(null,list_thing);
} else
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));

}
}
}
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){if((content == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__20394 = content;if(G__20394)
{var bit__4302__auto__ = (G__20394.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4302__auto__) || (G__20394.cljs$core$ISeqable$))
{return true;
} else
{if((!G__20394.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__20394);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__20394);
}
})())
{return cljs.core.seq.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return domina.lazy_nodelist.call(null,content);
} else
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));

}
}
}
}));
(domina.single_node["_"] = (function (content){if((content == null))
{return null;
} else
{if((function (){var G__20395 = content;if(G__20395)
{var bit__4302__auto__ = (G__20395.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4302__auto__) || (G__20395.cljs$core$ISeqable$))
{return true;
} else
{if((!G__20395.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__20395);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__20395);
}
})())
{return cljs.core.first.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return content.item((0));
} else
{return content;

}
}
}
}));
(domina.DomContent["string"] = true);
(domina.nodes["string"] = (function (s){return cljs.core.doall.call(null,domina.nodes.call(null,domina.string_to_dom.call(null,s)));
}));
(domina.single_node["string"] = (function (s){return domina.single_node.call(null,domina.string_to_dom.call(null,s));
}));
if(cljs.core.truth_((typeof NodeList != 'undefined')))
{NodeList.prototype.cljs$core$ISeqable$ = true;
NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.call(null,nodelist__$1);
});
NodeList.prototype.cljs$core$IIndexed$ = true;
NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist__$1,n);
}
});
NodeList.prototype.cljs$core$ICounted$ = true;
NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined')))
{StaticNodeList.prototype.cljs$core$ISeqable$ = true;
StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.call(null,nodelist__$1);
});
StaticNodeList.prototype.cljs$core$IIndexed$ = true;
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist__$1,n);
}
});
StaticNodeList.prototype.cljs$core$ICounted$ = true;
StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined')))
{HTMLCollection.prototype.cljs$core$ISeqable$ = true;
HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var coll__$1 = this;return domina.lazy_nodelist.call(null,coll__$1);
});
HTMLCollection.prototype.cljs$core$IIndexed$ = true;
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){var coll__$1 = this;return coll__$1.item(n);
});
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){var coll__$1 = this;if((coll__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,coll__$1,n);
}
});
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var coll__$1 = this;return coll__$1.length;
});
} else
{}
