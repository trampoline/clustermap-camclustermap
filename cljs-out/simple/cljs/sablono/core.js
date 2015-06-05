// Compiled by ClojureScript 0.0-2356
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clojure.string');
goog.require('sablono.util');
goog.require('cljsjs.react');
goog.require('goog.dom');
goog.require('goog.dom');
goog.require('sablono.interpreter');
goog.require('sablono.interpreter');
goog.require('sablono.util');
goog.require('clojure.walk');
goog.require('clojure.string');
/**
* Add an optional attribute argument to a function that returns a element vector.
*/
sablono.core.wrap_attrs = (function wrap_attrs(func){return (function() { 
var G__22456__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__22455 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__22455,(0),null);var body = cljs.core.nthnext.call(null,vec__22455,(1));if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__22456 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__22456__delegate.call(this,args);};
G__22456.cljs$lang$maxFixedArity = 0;
G__22456.cljs$lang$applyTo = (function (arglist__22457){
var args = cljs.core.seq(arglist__22457);
return G__22456__delegate(args);
});
G__22456.cljs$core$IFn$_invoke$arity$variadic = G__22456__delegate;
return G__22456;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4377__auto__ = (function iter__22462(s__22463){return (new cljs.core.LazySeq(null,(function (){var s__22463__$1 = s__22463;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__22463__$1);if(temp__4126__auto__)
{var s__22463__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__22463__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__22463__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__22465 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__22464 = (0);while(true){
if((i__22464 < size__4376__auto__))
{var args = cljs.core._nth.call(null,c__4375__auto__,i__22464);cljs.core.chunk_append.call(null,b__22465,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));
{
var G__22466 = (i__22464 + (1));
i__22464 = G__22466;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22465),iter__22462.call(null,cljs.core.chunk_rest.call(null,s__22463__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22465),null);
}
} else
{var args = cljs.core.first.call(null,s__22463__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__22462.call(null,cljs.core.rest.call(null,s__22463__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4377__auto__.call(null,arglists);
});
/**
* Render `element` as HTML string.
*/
sablono.core.render = (function render(element){if(cljs.core.truth_(element))
{return React.renderToString(element);
} else
{return null;
}
});
/**
* Render `element` as HTML string, without React internal attributes.
*/
sablono.core.render_static = (function render_static(element){if(cljs.core.truth_(element))
{return React.renderToStaticMarkup(element);
} else
{return null;
}
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__4377__auto__ = (function iter__22471(s__22472){return (new cljs.core.LazySeq(null,(function (){var s__22472__$1 = s__22472;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__22472__$1);if(temp__4126__auto__)
{var s__22472__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__22472__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__22472__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__22474 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__22473 = (0);while(true){
if((i__22473 < size__4376__auto__))
{var style = cljs.core._nth.call(null,c__4375__auto__,i__22473);cljs.core.chunk_append.call(null,b__22474,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));
{
var G__22475 = (i__22473 + (1));
i__22473 = G__22475;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22474),iter__22471.call(null,cljs.core.chunk_rest.call(null,s__22472__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22474),null);
}
} else
{var style = cljs.core.first.call(null,s__22472__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),iter__22471.call(null,cljs.core.rest.call(null,s__22472__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4377__auto__.call(null,styles);
};
var include_css = function (var_args){
var styles = null;if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__22476){
var styles = cljs.core.seq(arglist__22476);
return include_css__delegate(styles);
});
include_css.cljs$core$IFn$_invoke$arity$variadic = include_css__delegate;
return include_css;
})()
;
/**
* Include the JavaScript library at `src`.
*/
sablono.core.include_js = (function include_js(src){return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
* Include Facebook's React JavaScript library.
*/
sablono.core.include_react = (function include_react(){return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
* Wraps some content in a HTML hyperlink with the supplied URL.
* @param {...*} var_args
*/
sablono.core.link_to22477 = (function() { 
var link_to22477__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to22477 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to22477__delegate.call(this,url,content);};
link_to22477.cljs$lang$maxFixedArity = 1;
link_to22477.cljs$lang$applyTo = (function (arglist__22478){
var url = cljs.core.first(arglist__22478);
var content = cljs.core.rest(arglist__22478);
return link_to22477__delegate(url,content);
});
link_to22477.cljs$core$IFn$_invoke$arity$variadic = link_to22477__delegate;
return link_to22477;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to22477);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to22479 = (function() { 
var mail_to22479__delegate = function (e_mail,p__22480){var vec__22482 = p__22480;var content = cljs.core.nth.call(null,vec__22482,(0),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__3639__auto__ = content;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to22479 = function (e_mail,var_args){
var p__22480 = null;if (arguments.length > 1) {
  p__22480 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to22479__delegate.call(this,e_mail,p__22480);};
mail_to22479.cljs$lang$maxFixedArity = 1;
mail_to22479.cljs$lang$applyTo = (function (arglist__22483){
var e_mail = cljs.core.first(arglist__22483);
var p__22480 = cljs.core.rest(arglist__22483);
return mail_to22479__delegate(e_mail,p__22480);
});
mail_to22479.cljs$core$IFn$_invoke$arity$variadic = mail_to22479__delegate;
return mail_to22479;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to22479);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list22484 = (function unordered_list22484(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4377__auto__ = (function iter__22489(s__22490){return (new cljs.core.LazySeq(null,(function (){var s__22490__$1 = s__22490;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__22490__$1);if(temp__4126__auto__)
{var s__22490__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__22490__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__22490__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__22492 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__22491 = (0);while(true){
if((i__22491 < size__4376__auto__))
{var x = cljs.core._nth.call(null,c__4375__auto__,i__22491);cljs.core.chunk_append.call(null,b__22492,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__22493 = (i__22491 + (1));
i__22491 = G__22493;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22492),iter__22489.call(null,cljs.core.chunk_rest.call(null,s__22490__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22492),null);
}
} else
{var x = cljs.core.first.call(null,s__22490__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__22489.call(null,cljs.core.rest.call(null,s__22490__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4377__auto__.call(null,coll);
})()], null);
});
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list22484);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list22494 = (function ordered_list22494(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4377__auto__ = (function iter__22499(s__22500){return (new cljs.core.LazySeq(null,(function (){var s__22500__$1 = s__22500;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__22500__$1);if(temp__4126__auto__)
{var s__22500__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__22500__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__22500__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__22502 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__22501 = (0);while(true){
if((i__22501 < size__4376__auto__))
{var x = cljs.core._nth.call(null,c__4375__auto__,i__22501);cljs.core.chunk_append.call(null,b__22502,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__22503 = (i__22501 + (1));
i__22501 = G__22503;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22502),iter__22499.call(null,cljs.core.chunk_rest.call(null,s__22500__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22502),null);
}
} else
{var x = cljs.core.first.call(null,s__22500__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__22499.call(null,cljs.core.rest.call(null,s__22500__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4377__auto__.call(null,coll);
})()], null);
});
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list22494);
/**
* Create an image element.
*/
sablono.core.image22504 = (function() {
var image22504 = null;
var image22504__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});
var image22504__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});
image22504 = function(src,alt){
switch(arguments.length){
case 1:
return image22504__1.call(this,src);
case 2:
return image22504__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image22504.cljs$core$IFn$_invoke$arity$1 = image22504__1;
image22504.cljs$core$IFn$_invoke$arity$2 = image22504__2;
return image22504;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image22504);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__22505_SHARP_,p2__22506_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__22505_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__22506_SHARP_)+"]");
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__22507_SHARP_,p2__22508_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__22507_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__22508_SHARP_));
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field_STAR_ = (function input_field_STAR_(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
/**
* Creates a color input field.
*/
sablono.core.color_field22509 = (function() {
var color_field22509 = null;
var color_field22509__1 = (function (name__5127__auto__){return color_field22509.call(null,name__5127__auto__,null);
});
var color_field22509__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))),name__5127__auto__,value__5128__auto__);
});
color_field22509 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return color_field22509__1.call(this,name__5127__auto__);
case 2:
return color_field22509__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field22509.cljs$core$IFn$_invoke$arity$1 = color_field22509__1;
color_field22509.cljs$core$IFn$_invoke$arity$2 = color_field22509__2;
return color_field22509;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field22509);
/**
* Creates a date input field.
*/
sablono.core.date_field22510 = (function() {
var date_field22510 = null;
var date_field22510__1 = (function (name__5127__auto__){return date_field22510.call(null,name__5127__auto__,null);
});
var date_field22510__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))),name__5127__auto__,value__5128__auto__);
});
date_field22510 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return date_field22510__1.call(this,name__5127__auto__);
case 2:
return date_field22510__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field22510.cljs$core$IFn$_invoke$arity$1 = date_field22510__1;
date_field22510.cljs$core$IFn$_invoke$arity$2 = date_field22510__2;
return date_field22510;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field22510);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field22511 = (function() {
var datetime_field22511 = null;
var datetime_field22511__1 = (function (name__5127__auto__){return datetime_field22511.call(null,name__5127__auto__,null);
});
var datetime_field22511__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))),name__5127__auto__,value__5128__auto__);
});
datetime_field22511 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return datetime_field22511__1.call(this,name__5127__auto__);
case 2:
return datetime_field22511__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field22511.cljs$core$IFn$_invoke$arity$1 = datetime_field22511__1;
datetime_field22511.cljs$core$IFn$_invoke$arity$2 = datetime_field22511__2;
return datetime_field22511;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field22511);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field22512 = (function() {
var datetime_local_field22512 = null;
var datetime_local_field22512__1 = (function (name__5127__auto__){return datetime_local_field22512.call(null,name__5127__auto__,null);
});
var datetime_local_field22512__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))),name__5127__auto__,value__5128__auto__);
});
datetime_local_field22512 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return datetime_local_field22512__1.call(this,name__5127__auto__);
case 2:
return datetime_local_field22512__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field22512.cljs$core$IFn$_invoke$arity$1 = datetime_local_field22512__1;
datetime_local_field22512.cljs$core$IFn$_invoke$arity$2 = datetime_local_field22512__2;
return datetime_local_field22512;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field22512);
/**
* Creates a email input field.
*/
sablono.core.email_field22513 = (function() {
var email_field22513 = null;
var email_field22513__1 = (function (name__5127__auto__){return email_field22513.call(null,name__5127__auto__,null);
});
var email_field22513__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))),name__5127__auto__,value__5128__auto__);
});
email_field22513 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return email_field22513__1.call(this,name__5127__auto__);
case 2:
return email_field22513__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field22513.cljs$core$IFn$_invoke$arity$1 = email_field22513__1;
email_field22513.cljs$core$IFn$_invoke$arity$2 = email_field22513__2;
return email_field22513;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field22513);
/**
* Creates a file input field.
*/
sablono.core.file_field22514 = (function() {
var file_field22514 = null;
var file_field22514__1 = (function (name__5127__auto__){return file_field22514.call(null,name__5127__auto__,null);
});
var file_field22514__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))),name__5127__auto__,value__5128__auto__);
});
file_field22514 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return file_field22514__1.call(this,name__5127__auto__);
case 2:
return file_field22514__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field22514.cljs$core$IFn$_invoke$arity$1 = file_field22514__1;
file_field22514.cljs$core$IFn$_invoke$arity$2 = file_field22514__2;
return file_field22514;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field22514);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field22515 = (function() {
var hidden_field22515 = null;
var hidden_field22515__1 = (function (name__5127__auto__){return hidden_field22515.call(null,name__5127__auto__,null);
});
var hidden_field22515__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))),name__5127__auto__,value__5128__auto__);
});
hidden_field22515 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return hidden_field22515__1.call(this,name__5127__auto__);
case 2:
return hidden_field22515__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field22515.cljs$core$IFn$_invoke$arity$1 = hidden_field22515__1;
hidden_field22515.cljs$core$IFn$_invoke$arity$2 = hidden_field22515__2;
return hidden_field22515;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field22515);
/**
* Creates a month input field.
*/
sablono.core.month_field22516 = (function() {
var month_field22516 = null;
var month_field22516__1 = (function (name__5127__auto__){return month_field22516.call(null,name__5127__auto__,null);
});
var month_field22516__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))),name__5127__auto__,value__5128__auto__);
});
month_field22516 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return month_field22516__1.call(this,name__5127__auto__);
case 2:
return month_field22516__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field22516.cljs$core$IFn$_invoke$arity$1 = month_field22516__1;
month_field22516.cljs$core$IFn$_invoke$arity$2 = month_field22516__2;
return month_field22516;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field22516);
/**
* Creates a number input field.
*/
sablono.core.number_field22517 = (function() {
var number_field22517 = null;
var number_field22517__1 = (function (name__5127__auto__){return number_field22517.call(null,name__5127__auto__,null);
});
var number_field22517__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))),name__5127__auto__,value__5128__auto__);
});
number_field22517 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return number_field22517__1.call(this,name__5127__auto__);
case 2:
return number_field22517__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field22517.cljs$core$IFn$_invoke$arity$1 = number_field22517__1;
number_field22517.cljs$core$IFn$_invoke$arity$2 = number_field22517__2;
return number_field22517;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field22517);
/**
* Creates a password input field.
*/
sablono.core.password_field22518 = (function() {
var password_field22518 = null;
var password_field22518__1 = (function (name__5127__auto__){return password_field22518.call(null,name__5127__auto__,null);
});
var password_field22518__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))),name__5127__auto__,value__5128__auto__);
});
password_field22518 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return password_field22518__1.call(this,name__5127__auto__);
case 2:
return password_field22518__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field22518.cljs$core$IFn$_invoke$arity$1 = password_field22518__1;
password_field22518.cljs$core$IFn$_invoke$arity$2 = password_field22518__2;
return password_field22518;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field22518);
/**
* Creates a range input field.
*/
sablono.core.range_field22519 = (function() {
var range_field22519 = null;
var range_field22519__1 = (function (name__5127__auto__){return range_field22519.call(null,name__5127__auto__,null);
});
var range_field22519__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))),name__5127__auto__,value__5128__auto__);
});
range_field22519 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return range_field22519__1.call(this,name__5127__auto__);
case 2:
return range_field22519__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field22519.cljs$core$IFn$_invoke$arity$1 = range_field22519__1;
range_field22519.cljs$core$IFn$_invoke$arity$2 = range_field22519__2;
return range_field22519;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field22519);
/**
* Creates a search input field.
*/
sablono.core.search_field22520 = (function() {
var search_field22520 = null;
var search_field22520__1 = (function (name__5127__auto__){return search_field22520.call(null,name__5127__auto__,null);
});
var search_field22520__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))),name__5127__auto__,value__5128__auto__);
});
search_field22520 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return search_field22520__1.call(this,name__5127__auto__);
case 2:
return search_field22520__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field22520.cljs$core$IFn$_invoke$arity$1 = search_field22520__1;
search_field22520.cljs$core$IFn$_invoke$arity$2 = search_field22520__2;
return search_field22520;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field22520);
/**
* Creates a tel input field.
*/
sablono.core.tel_field22521 = (function() {
var tel_field22521 = null;
var tel_field22521__1 = (function (name__5127__auto__){return tel_field22521.call(null,name__5127__auto__,null);
});
var tel_field22521__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))),name__5127__auto__,value__5128__auto__);
});
tel_field22521 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return tel_field22521__1.call(this,name__5127__auto__);
case 2:
return tel_field22521__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field22521.cljs$core$IFn$_invoke$arity$1 = tel_field22521__1;
tel_field22521.cljs$core$IFn$_invoke$arity$2 = tel_field22521__2;
return tel_field22521;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field22521);
/**
* Creates a text input field.
*/
sablono.core.text_field22522 = (function() {
var text_field22522 = null;
var text_field22522__1 = (function (name__5127__auto__){return text_field22522.call(null,name__5127__auto__,null);
});
var text_field22522__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))),name__5127__auto__,value__5128__auto__);
});
text_field22522 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return text_field22522__1.call(this,name__5127__auto__);
case 2:
return text_field22522__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field22522.cljs$core$IFn$_invoke$arity$1 = text_field22522__1;
text_field22522.cljs$core$IFn$_invoke$arity$2 = text_field22522__2;
return text_field22522;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field22522);
/**
* Creates a time input field.
*/
sablono.core.time_field22523 = (function() {
var time_field22523 = null;
var time_field22523__1 = (function (name__5127__auto__){return time_field22523.call(null,name__5127__auto__,null);
});
var time_field22523__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))),name__5127__auto__,value__5128__auto__);
});
time_field22523 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return time_field22523__1.call(this,name__5127__auto__);
case 2:
return time_field22523__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field22523.cljs$core$IFn$_invoke$arity$1 = time_field22523__1;
time_field22523.cljs$core$IFn$_invoke$arity$2 = time_field22523__2;
return time_field22523;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field22523);
/**
* Creates a url input field.
*/
sablono.core.url_field22524 = (function() {
var url_field22524 = null;
var url_field22524__1 = (function (name__5127__auto__){return url_field22524.call(null,name__5127__auto__,null);
});
var url_field22524__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))),name__5127__auto__,value__5128__auto__);
});
url_field22524 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return url_field22524__1.call(this,name__5127__auto__);
case 2:
return url_field22524__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field22524.cljs$core$IFn$_invoke$arity$1 = url_field22524__1;
url_field22524.cljs$core$IFn$_invoke$arity$2 = url_field22524__2;
return url_field22524;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field22524);
/**
* Creates a week input field.
*/
sablono.core.week_field22525 = (function() {
var week_field22525 = null;
var week_field22525__1 = (function (name__5127__auto__){return week_field22525.call(null,name__5127__auto__,null);
});
var week_field22525__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))),name__5127__auto__,value__5128__auto__);
});
week_field22525 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return week_field22525__1.call(this,name__5127__auto__);
case 2:
return week_field22525__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field22525.cljs$core$IFn$_invoke$arity$1 = week_field22525__1;
week_field22525.cljs$core$IFn$_invoke$arity$2 = week_field22525__2;
return week_field22525;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field22525);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box22526 = (function() {
var check_box22526 = null;
var check_box22526__1 = (function (name){return check_box22526.call(null,name,null);
});
var check_box22526__2 = (function (name,checked_QMARK_){return check_box22526.call(null,name,checked_QMARK_,"true");
});
var check_box22526__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
check_box22526 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box22526__1.call(this,name);
case 2:
return check_box22526__2.call(this,name,checked_QMARK_);
case 3:
return check_box22526__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box22526.cljs$core$IFn$_invoke$arity$1 = check_box22526__1;
check_box22526.cljs$core$IFn$_invoke$arity$2 = check_box22526__2;
check_box22526.cljs$core$IFn$_invoke$arity$3 = check_box22526__3;
return check_box22526;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box22526);
/**
* Creates a radio button.
*/
sablono.core.radio_button22527 = (function() {
var radio_button22527 = null;
var radio_button22527__1 = (function (group){return radio_button22527.call(null,group,null);
});
var radio_button22527__2 = (function (group,checked_QMARK_){return radio_button22527.call(null,group,checked_QMARK_,"true");
});
var radio_button22527__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value)))),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
radio_button22527 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button22527__1.call(this,group);
case 2:
return radio_button22527__2.call(this,group,checked_QMARK_);
case 3:
return radio_button22527__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button22527.cljs$core$IFn$_invoke$arity$1 = radio_button22527__1;
radio_button22527.cljs$core$IFn$_invoke$arity$2 = radio_button22527__2;
radio_button22527.cljs$core$IFn$_invoke$arity$3 = radio_button22527__3;
return radio_button22527;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button22527);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options22528 = (function() {
var select_options22528 = null;
var select_options22528__1 = (function (coll){return select_options22528.call(null,coll,null);
});
var select_options22528__2 = (function (coll,selected){var iter__4377__auto__ = (function iter__22537(s__22538){return (new cljs.core.LazySeq(null,(function (){var s__22538__$1 = s__22538;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__22538__$1);if(temp__4126__auto__)
{var s__22538__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__22538__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__22538__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__22540 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__22539 = (0);while(true){
if((i__22539 < size__4376__auto__))
{var x = cljs.core._nth.call(null,c__4375__auto__,i__22539);cljs.core.chunk_append.call(null,b__22540,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__22543 = x;var text = cljs.core.nth.call(null,vec__22543,(0),null);var val = cljs.core.nth.call(null,vec__22543,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__22543,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options22528.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__22545 = (i__22539 + (1));
i__22539 = G__22545;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22540),iter__22537.call(null,cljs.core.chunk_rest.call(null,s__22538__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22540),null);
}
} else
{var x = cljs.core.first.call(null,s__22538__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__22544 = x;var text = cljs.core.nth.call(null,vec__22544,(0),null);var val = cljs.core.nth.call(null,vec__22544,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__22544,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options22528.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__22537.call(null,cljs.core.rest.call(null,s__22538__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4377__auto__.call(null,coll);
});
select_options22528 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options22528__1.call(this,coll);
case 2:
return select_options22528__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options22528.cljs$core$IFn$_invoke$arity$1 = select_options22528__1;
select_options22528.cljs$core$IFn$_invoke$arity$2 = select_options22528__2;
return select_options22528;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options22528);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down22546 = (function() {
var drop_down22546 = null;
var drop_down22546__2 = (function (name,options){return drop_down22546.call(null,name,options,null);
});
var drop_down22546__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down22546 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down22546__2.call(this,name,options);
case 3:
return drop_down22546__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down22546.cljs$core$IFn$_invoke$arity$2 = drop_down22546__2;
drop_down22546.cljs$core$IFn$_invoke$arity$3 = drop_down22546__3;
return drop_down22546;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down22546);
/**
* Creates a text area element.
*/
sablono.core.text_area22547 = (function() {
var text_area22547 = null;
var text_area22547__1 = (function (name){return text_area22547.call(null,name,null);
});
var text_area22547__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
text_area22547 = function(name,value){
switch(arguments.length){
case 1:
return text_area22547__1.call(this,name);
case 2:
return text_area22547__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area22547.cljs$core$IFn$_invoke$arity$1 = text_area22547__1;
text_area22547.cljs$core$IFn$_invoke$arity$2 = text_area22547__2;
return text_area22547;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area22547);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label22548 = (function label22548(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label22548);
/**
* Creates a submit button.
*/
sablono.core.submit_button22549 = (function submit_button22549(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button22549);
/**
* Creates a form reset button.
*/
sablono.core.reset_button22550 = (function reset_button22550(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button22550);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to22551 = (function() { 
var form_to22551__delegate = function (p__22552,body){var vec__22554 = p__22552;var method = cljs.core.nth.call(null,vec__22554,(0),null);var action = cljs.core.nth.call(null,vec__22554,(1),null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to22551 = function (p__22552,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to22551__delegate.call(this,p__22552,body);};
form_to22551.cljs$lang$maxFixedArity = 1;
form_to22551.cljs$lang$applyTo = (function (arglist__22555){
var p__22552 = cljs.core.first(arglist__22555);
var body = cljs.core.rest(arglist__22555);
return form_to22551__delegate(p__22552,body);
});
form_to22551.cljs$core$IFn$_invoke$arity$variadic = form_to22551__delegate;
return form_to22551;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to22551);
