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
var G__22230__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__22229 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__22229,(0),null);var body = cljs.core.nthnext.call(null,vec__22229,(1));if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__22230 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__22230__delegate.call(this,args);};
G__22230.cljs$lang$maxFixedArity = 0;
G__22230.cljs$lang$applyTo = (function (arglist__22231){
var args = cljs.core.seq(arglist__22231);
return G__22230__delegate(args);
});
G__22230.cljs$core$IFn$_invoke$arity$variadic = G__22230__delegate;
return G__22230;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4377__auto__ = (function iter__22236(s__22237){return (new cljs.core.LazySeq(null,(function (){var s__22237__$1 = s__22237;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__22237__$1);if(temp__4126__auto__)
{var s__22237__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__22237__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__22237__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__22239 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__22238 = (0);while(true){
if((i__22238 < size__4376__auto__))
{var args = cljs.core._nth.call(null,c__4375__auto__,i__22238);cljs.core.chunk_append.call(null,b__22239,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));
{
var G__22240 = (i__22238 + (1));
i__22238 = G__22240;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22239),iter__22236.call(null,cljs.core.chunk_rest.call(null,s__22237__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22239),null);
}
} else
{var args = cljs.core.first.call(null,s__22237__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__22236.call(null,cljs.core.rest.call(null,s__22237__$2)));
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
var include_css__delegate = function (styles){var iter__4377__auto__ = (function iter__22245(s__22246){return (new cljs.core.LazySeq(null,(function (){var s__22246__$1 = s__22246;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__22246__$1);if(temp__4126__auto__)
{var s__22246__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__22246__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__22246__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__22248 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__22247 = (0);while(true){
if((i__22247 < size__4376__auto__))
{var style = cljs.core._nth.call(null,c__4375__auto__,i__22247);cljs.core.chunk_append.call(null,b__22248,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));
{
var G__22249 = (i__22247 + (1));
i__22247 = G__22249;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22248),iter__22245.call(null,cljs.core.chunk_rest.call(null,s__22246__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22248),null);
}
} else
{var style = cljs.core.first.call(null,s__22246__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),iter__22245.call(null,cljs.core.rest.call(null,s__22246__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__22250){
var styles = cljs.core.seq(arglist__22250);
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
sablono.core.link_to22251 = (function() { 
var link_to22251__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to22251 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to22251__delegate.call(this,url,content);};
link_to22251.cljs$lang$maxFixedArity = 1;
link_to22251.cljs$lang$applyTo = (function (arglist__22252){
var url = cljs.core.first(arglist__22252);
var content = cljs.core.rest(arglist__22252);
return link_to22251__delegate(url,content);
});
link_to22251.cljs$core$IFn$_invoke$arity$variadic = link_to22251__delegate;
return link_to22251;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to22251);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to22253 = (function() { 
var mail_to22253__delegate = function (e_mail,p__22254){var vec__22256 = p__22254;var content = cljs.core.nth.call(null,vec__22256,(0),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__3639__auto__ = content;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to22253 = function (e_mail,var_args){
var p__22254 = null;if (arguments.length > 1) {
  p__22254 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to22253__delegate.call(this,e_mail,p__22254);};
mail_to22253.cljs$lang$maxFixedArity = 1;
mail_to22253.cljs$lang$applyTo = (function (arglist__22257){
var e_mail = cljs.core.first(arglist__22257);
var p__22254 = cljs.core.rest(arglist__22257);
return mail_to22253__delegate(e_mail,p__22254);
});
mail_to22253.cljs$core$IFn$_invoke$arity$variadic = mail_to22253__delegate;
return mail_to22253;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to22253);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list22258 = (function unordered_list22258(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4377__auto__ = (function iter__22263(s__22264){return (new cljs.core.LazySeq(null,(function (){var s__22264__$1 = s__22264;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__22264__$1);if(temp__4126__auto__)
{var s__22264__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__22264__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__22264__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__22266 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__22265 = (0);while(true){
if((i__22265 < size__4376__auto__))
{var x = cljs.core._nth.call(null,c__4375__auto__,i__22265);cljs.core.chunk_append.call(null,b__22266,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__22267 = (i__22265 + (1));
i__22265 = G__22267;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22266),iter__22263.call(null,cljs.core.chunk_rest.call(null,s__22264__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22266),null);
}
} else
{var x = cljs.core.first.call(null,s__22264__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__22263.call(null,cljs.core.rest.call(null,s__22264__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list22258);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list22268 = (function ordered_list22268(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4377__auto__ = (function iter__22273(s__22274){return (new cljs.core.LazySeq(null,(function (){var s__22274__$1 = s__22274;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__22274__$1);if(temp__4126__auto__)
{var s__22274__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__22274__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__22274__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__22276 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__22275 = (0);while(true){
if((i__22275 < size__4376__auto__))
{var x = cljs.core._nth.call(null,c__4375__auto__,i__22275);cljs.core.chunk_append.call(null,b__22276,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__22277 = (i__22275 + (1));
i__22275 = G__22277;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22276),iter__22273.call(null,cljs.core.chunk_rest.call(null,s__22274__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22276),null);
}
} else
{var x = cljs.core.first.call(null,s__22274__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__22273.call(null,cljs.core.rest.call(null,s__22274__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list22268);
/**
* Create an image element.
*/
sablono.core.image22278 = (function() {
var image22278 = null;
var image22278__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});
var image22278__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});
image22278 = function(src,alt){
switch(arguments.length){
case 1:
return image22278__1.call(this,src);
case 2:
return image22278__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image22278.cljs$core$IFn$_invoke$arity$1 = image22278__1;
image22278.cljs$core$IFn$_invoke$arity$2 = image22278__2;
return image22278;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image22278);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__22279_SHARP_,p2__22280_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__22279_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__22280_SHARP_)+"]");
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__22281_SHARP_,p2__22282_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__22281_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__22282_SHARP_));
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
sablono.core.color_field22283 = (function() {
var color_field22283 = null;
var color_field22283__1 = (function (name__5127__auto__){return color_field22283.call(null,name__5127__auto__,null);
});
var color_field22283__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))),name__5127__auto__,value__5128__auto__);
});
color_field22283 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return color_field22283__1.call(this,name__5127__auto__);
case 2:
return color_field22283__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field22283.cljs$core$IFn$_invoke$arity$1 = color_field22283__1;
color_field22283.cljs$core$IFn$_invoke$arity$2 = color_field22283__2;
return color_field22283;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field22283);
/**
* Creates a date input field.
*/
sablono.core.date_field22284 = (function() {
var date_field22284 = null;
var date_field22284__1 = (function (name__5127__auto__){return date_field22284.call(null,name__5127__auto__,null);
});
var date_field22284__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))),name__5127__auto__,value__5128__auto__);
});
date_field22284 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return date_field22284__1.call(this,name__5127__auto__);
case 2:
return date_field22284__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field22284.cljs$core$IFn$_invoke$arity$1 = date_field22284__1;
date_field22284.cljs$core$IFn$_invoke$arity$2 = date_field22284__2;
return date_field22284;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field22284);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field22285 = (function() {
var datetime_field22285 = null;
var datetime_field22285__1 = (function (name__5127__auto__){return datetime_field22285.call(null,name__5127__auto__,null);
});
var datetime_field22285__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))),name__5127__auto__,value__5128__auto__);
});
datetime_field22285 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return datetime_field22285__1.call(this,name__5127__auto__);
case 2:
return datetime_field22285__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field22285.cljs$core$IFn$_invoke$arity$1 = datetime_field22285__1;
datetime_field22285.cljs$core$IFn$_invoke$arity$2 = datetime_field22285__2;
return datetime_field22285;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field22285);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field22286 = (function() {
var datetime_local_field22286 = null;
var datetime_local_field22286__1 = (function (name__5127__auto__){return datetime_local_field22286.call(null,name__5127__auto__,null);
});
var datetime_local_field22286__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))),name__5127__auto__,value__5128__auto__);
});
datetime_local_field22286 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return datetime_local_field22286__1.call(this,name__5127__auto__);
case 2:
return datetime_local_field22286__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field22286.cljs$core$IFn$_invoke$arity$1 = datetime_local_field22286__1;
datetime_local_field22286.cljs$core$IFn$_invoke$arity$2 = datetime_local_field22286__2;
return datetime_local_field22286;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field22286);
/**
* Creates a email input field.
*/
sablono.core.email_field22287 = (function() {
var email_field22287 = null;
var email_field22287__1 = (function (name__5127__auto__){return email_field22287.call(null,name__5127__auto__,null);
});
var email_field22287__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))),name__5127__auto__,value__5128__auto__);
});
email_field22287 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return email_field22287__1.call(this,name__5127__auto__);
case 2:
return email_field22287__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field22287.cljs$core$IFn$_invoke$arity$1 = email_field22287__1;
email_field22287.cljs$core$IFn$_invoke$arity$2 = email_field22287__2;
return email_field22287;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field22287);
/**
* Creates a file input field.
*/
sablono.core.file_field22288 = (function() {
var file_field22288 = null;
var file_field22288__1 = (function (name__5127__auto__){return file_field22288.call(null,name__5127__auto__,null);
});
var file_field22288__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))),name__5127__auto__,value__5128__auto__);
});
file_field22288 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return file_field22288__1.call(this,name__5127__auto__);
case 2:
return file_field22288__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field22288.cljs$core$IFn$_invoke$arity$1 = file_field22288__1;
file_field22288.cljs$core$IFn$_invoke$arity$2 = file_field22288__2;
return file_field22288;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field22288);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field22289 = (function() {
var hidden_field22289 = null;
var hidden_field22289__1 = (function (name__5127__auto__){return hidden_field22289.call(null,name__5127__auto__,null);
});
var hidden_field22289__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))),name__5127__auto__,value__5128__auto__);
});
hidden_field22289 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return hidden_field22289__1.call(this,name__5127__auto__);
case 2:
return hidden_field22289__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field22289.cljs$core$IFn$_invoke$arity$1 = hidden_field22289__1;
hidden_field22289.cljs$core$IFn$_invoke$arity$2 = hidden_field22289__2;
return hidden_field22289;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field22289);
/**
* Creates a month input field.
*/
sablono.core.month_field22290 = (function() {
var month_field22290 = null;
var month_field22290__1 = (function (name__5127__auto__){return month_field22290.call(null,name__5127__auto__,null);
});
var month_field22290__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))),name__5127__auto__,value__5128__auto__);
});
month_field22290 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return month_field22290__1.call(this,name__5127__auto__);
case 2:
return month_field22290__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field22290.cljs$core$IFn$_invoke$arity$1 = month_field22290__1;
month_field22290.cljs$core$IFn$_invoke$arity$2 = month_field22290__2;
return month_field22290;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field22290);
/**
* Creates a number input field.
*/
sablono.core.number_field22291 = (function() {
var number_field22291 = null;
var number_field22291__1 = (function (name__5127__auto__){return number_field22291.call(null,name__5127__auto__,null);
});
var number_field22291__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))),name__5127__auto__,value__5128__auto__);
});
number_field22291 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return number_field22291__1.call(this,name__5127__auto__);
case 2:
return number_field22291__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field22291.cljs$core$IFn$_invoke$arity$1 = number_field22291__1;
number_field22291.cljs$core$IFn$_invoke$arity$2 = number_field22291__2;
return number_field22291;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field22291);
/**
* Creates a password input field.
*/
sablono.core.password_field22292 = (function() {
var password_field22292 = null;
var password_field22292__1 = (function (name__5127__auto__){return password_field22292.call(null,name__5127__auto__,null);
});
var password_field22292__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))),name__5127__auto__,value__5128__auto__);
});
password_field22292 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return password_field22292__1.call(this,name__5127__auto__);
case 2:
return password_field22292__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field22292.cljs$core$IFn$_invoke$arity$1 = password_field22292__1;
password_field22292.cljs$core$IFn$_invoke$arity$2 = password_field22292__2;
return password_field22292;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field22292);
/**
* Creates a range input field.
*/
sablono.core.range_field22293 = (function() {
var range_field22293 = null;
var range_field22293__1 = (function (name__5127__auto__){return range_field22293.call(null,name__5127__auto__,null);
});
var range_field22293__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))),name__5127__auto__,value__5128__auto__);
});
range_field22293 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return range_field22293__1.call(this,name__5127__auto__);
case 2:
return range_field22293__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field22293.cljs$core$IFn$_invoke$arity$1 = range_field22293__1;
range_field22293.cljs$core$IFn$_invoke$arity$2 = range_field22293__2;
return range_field22293;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field22293);
/**
* Creates a search input field.
*/
sablono.core.search_field22294 = (function() {
var search_field22294 = null;
var search_field22294__1 = (function (name__5127__auto__){return search_field22294.call(null,name__5127__auto__,null);
});
var search_field22294__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))),name__5127__auto__,value__5128__auto__);
});
search_field22294 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return search_field22294__1.call(this,name__5127__auto__);
case 2:
return search_field22294__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field22294.cljs$core$IFn$_invoke$arity$1 = search_field22294__1;
search_field22294.cljs$core$IFn$_invoke$arity$2 = search_field22294__2;
return search_field22294;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field22294);
/**
* Creates a tel input field.
*/
sablono.core.tel_field22295 = (function() {
var tel_field22295 = null;
var tel_field22295__1 = (function (name__5127__auto__){return tel_field22295.call(null,name__5127__auto__,null);
});
var tel_field22295__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))),name__5127__auto__,value__5128__auto__);
});
tel_field22295 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return tel_field22295__1.call(this,name__5127__auto__);
case 2:
return tel_field22295__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field22295.cljs$core$IFn$_invoke$arity$1 = tel_field22295__1;
tel_field22295.cljs$core$IFn$_invoke$arity$2 = tel_field22295__2;
return tel_field22295;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field22295);
/**
* Creates a text input field.
*/
sablono.core.text_field22296 = (function() {
var text_field22296 = null;
var text_field22296__1 = (function (name__5127__auto__){return text_field22296.call(null,name__5127__auto__,null);
});
var text_field22296__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))),name__5127__auto__,value__5128__auto__);
});
text_field22296 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return text_field22296__1.call(this,name__5127__auto__);
case 2:
return text_field22296__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field22296.cljs$core$IFn$_invoke$arity$1 = text_field22296__1;
text_field22296.cljs$core$IFn$_invoke$arity$2 = text_field22296__2;
return text_field22296;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field22296);
/**
* Creates a time input field.
*/
sablono.core.time_field22297 = (function() {
var time_field22297 = null;
var time_field22297__1 = (function (name__5127__auto__){return time_field22297.call(null,name__5127__auto__,null);
});
var time_field22297__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))),name__5127__auto__,value__5128__auto__);
});
time_field22297 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return time_field22297__1.call(this,name__5127__auto__);
case 2:
return time_field22297__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field22297.cljs$core$IFn$_invoke$arity$1 = time_field22297__1;
time_field22297.cljs$core$IFn$_invoke$arity$2 = time_field22297__2;
return time_field22297;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field22297);
/**
* Creates a url input field.
*/
sablono.core.url_field22298 = (function() {
var url_field22298 = null;
var url_field22298__1 = (function (name__5127__auto__){return url_field22298.call(null,name__5127__auto__,null);
});
var url_field22298__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))),name__5127__auto__,value__5128__auto__);
});
url_field22298 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return url_field22298__1.call(this,name__5127__auto__);
case 2:
return url_field22298__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field22298.cljs$core$IFn$_invoke$arity$1 = url_field22298__1;
url_field22298.cljs$core$IFn$_invoke$arity$2 = url_field22298__2;
return url_field22298;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field22298);
/**
* Creates a week input field.
*/
sablono.core.week_field22299 = (function() {
var week_field22299 = null;
var week_field22299__1 = (function (name__5127__auto__){return week_field22299.call(null,name__5127__auto__,null);
});
var week_field22299__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))),name__5127__auto__,value__5128__auto__);
});
week_field22299 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return week_field22299__1.call(this,name__5127__auto__);
case 2:
return week_field22299__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field22299.cljs$core$IFn$_invoke$arity$1 = week_field22299__1;
week_field22299.cljs$core$IFn$_invoke$arity$2 = week_field22299__2;
return week_field22299;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field22299);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box22300 = (function() {
var check_box22300 = null;
var check_box22300__1 = (function (name){return check_box22300.call(null,name,null);
});
var check_box22300__2 = (function (name,checked_QMARK_){return check_box22300.call(null,name,checked_QMARK_,"true");
});
var check_box22300__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
check_box22300 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box22300__1.call(this,name);
case 2:
return check_box22300__2.call(this,name,checked_QMARK_);
case 3:
return check_box22300__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box22300.cljs$core$IFn$_invoke$arity$1 = check_box22300__1;
check_box22300.cljs$core$IFn$_invoke$arity$2 = check_box22300__2;
check_box22300.cljs$core$IFn$_invoke$arity$3 = check_box22300__3;
return check_box22300;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box22300);
/**
* Creates a radio button.
*/
sablono.core.radio_button22301 = (function() {
var radio_button22301 = null;
var radio_button22301__1 = (function (group){return radio_button22301.call(null,group,null);
});
var radio_button22301__2 = (function (group,checked_QMARK_){return radio_button22301.call(null,group,checked_QMARK_,"true");
});
var radio_button22301__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value)))),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
radio_button22301 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button22301__1.call(this,group);
case 2:
return radio_button22301__2.call(this,group,checked_QMARK_);
case 3:
return radio_button22301__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button22301.cljs$core$IFn$_invoke$arity$1 = radio_button22301__1;
radio_button22301.cljs$core$IFn$_invoke$arity$2 = radio_button22301__2;
radio_button22301.cljs$core$IFn$_invoke$arity$3 = radio_button22301__3;
return radio_button22301;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button22301);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options22302 = (function() {
var select_options22302 = null;
var select_options22302__1 = (function (coll){return select_options22302.call(null,coll,null);
});
var select_options22302__2 = (function (coll,selected){var iter__4377__auto__ = (function iter__22311(s__22312){return (new cljs.core.LazySeq(null,(function (){var s__22312__$1 = s__22312;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__22312__$1);if(temp__4126__auto__)
{var s__22312__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__22312__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__22312__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__22314 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__22313 = (0);while(true){
if((i__22313 < size__4376__auto__))
{var x = cljs.core._nth.call(null,c__4375__auto__,i__22313);cljs.core.chunk_append.call(null,b__22314,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__22317 = x;var text = cljs.core.nth.call(null,vec__22317,(0),null);var val = cljs.core.nth.call(null,vec__22317,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__22317,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options22302.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__22319 = (i__22313 + (1));
i__22313 = G__22319;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22314),iter__22311.call(null,cljs.core.chunk_rest.call(null,s__22312__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22314),null);
}
} else
{var x = cljs.core.first.call(null,s__22312__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__22318 = x;var text = cljs.core.nth.call(null,vec__22318,(0),null);var val = cljs.core.nth.call(null,vec__22318,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__22318,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options22302.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__22311.call(null,cljs.core.rest.call(null,s__22312__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4377__auto__.call(null,coll);
});
select_options22302 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options22302__1.call(this,coll);
case 2:
return select_options22302__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options22302.cljs$core$IFn$_invoke$arity$1 = select_options22302__1;
select_options22302.cljs$core$IFn$_invoke$arity$2 = select_options22302__2;
return select_options22302;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options22302);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down22320 = (function() {
var drop_down22320 = null;
var drop_down22320__2 = (function (name,options){return drop_down22320.call(null,name,options,null);
});
var drop_down22320__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down22320 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down22320__2.call(this,name,options);
case 3:
return drop_down22320__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down22320.cljs$core$IFn$_invoke$arity$2 = drop_down22320__2;
drop_down22320.cljs$core$IFn$_invoke$arity$3 = drop_down22320__3;
return drop_down22320;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down22320);
/**
* Creates a text area element.
*/
sablono.core.text_area22321 = (function() {
var text_area22321 = null;
var text_area22321__1 = (function (name){return text_area22321.call(null,name,null);
});
var text_area22321__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
text_area22321 = function(name,value){
switch(arguments.length){
case 1:
return text_area22321__1.call(this,name);
case 2:
return text_area22321__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area22321.cljs$core$IFn$_invoke$arity$1 = text_area22321__1;
text_area22321.cljs$core$IFn$_invoke$arity$2 = text_area22321__2;
return text_area22321;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area22321);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label22322 = (function label22322(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label22322);
/**
* Creates a submit button.
*/
sablono.core.submit_button22323 = (function submit_button22323(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button22323);
/**
* Creates a form reset button.
*/
sablono.core.reset_button22324 = (function reset_button22324(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button22324);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to22325 = (function() { 
var form_to22325__delegate = function (p__22326,body){var vec__22328 = p__22326;var method = cljs.core.nth.call(null,vec__22328,(0),null);var action = cljs.core.nth.call(null,vec__22328,(1),null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to22325 = function (p__22326,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to22325__delegate.call(this,p__22326,body);};
form_to22325.cljs$lang$maxFixedArity = 1;
form_to22325.cljs$lang$applyTo = (function (arglist__22329){
var p__22326 = cljs.core.first(arglist__22329);
var body = cljs.core.rest(arglist__22329);
return form_to22325__delegate(p__22326,body);
});
form_to22325.cljs$core$IFn$_invoke$arity$variadic = form_to22325__delegate;
return form_to22325;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to22325);
