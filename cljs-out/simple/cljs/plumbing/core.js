// Compiled by ClojureScript 0.0-2356
goog.provide('plumbing.core');
goog.require('cljs.core');
goog.require('plumbing.fnk.schema');
goog.require('plumbing.fnk.schema');
goog.require('schema.utils');
goog.require('schema.utils');
/**
* A sentinel value representing missing portions of the input data.
*/
plumbing.core._PLUS_none_PLUS_ = new cljs.core.Keyword("plumbing.core","missing","plumbing.core/missing",1721767298);
/**
* Updates the value in map m at k with the function f.
* 
* Like update-in, but for updating a single top-level key.
* Any additional args will be passed to f after the value.
* @param {...*} var_args
*/
plumbing.core.update = (function() {
var update = null;
var update__3 = (function (m,k,f){return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k)));
});
var update__4 = (function (m,k,f,x1){return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),x1));
});
var update__5 = (function (m,k,f,x1,x2){return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),x1,x2));
});
var update__6 = (function() { 
var G__22040__delegate = function (m,k,f,x1,x2,xs){return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k),x1,x2,xs));
};
var G__22040 = function (m,k,f,x1,x2,var_args){
var xs = null;if (arguments.length > 5) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__22040__delegate.call(this,m,k,f,x1,x2,xs);};
G__22040.cljs$lang$maxFixedArity = 5;
G__22040.cljs$lang$applyTo = (function (arglist__22041){
var m = cljs.core.first(arglist__22041);
arglist__22041 = cljs.core.next(arglist__22041);
var k = cljs.core.first(arglist__22041);
arglist__22041 = cljs.core.next(arglist__22041);
var f = cljs.core.first(arglist__22041);
arglist__22041 = cljs.core.next(arglist__22041);
var x1 = cljs.core.first(arglist__22041);
arglist__22041 = cljs.core.next(arglist__22041);
var x2 = cljs.core.first(arglist__22041);
var xs = cljs.core.rest(arglist__22041);
return G__22040__delegate(m,k,f,x1,x2,xs);
});
G__22040.cljs$core$IFn$_invoke$arity$variadic = G__22040__delegate;
return G__22040;
})()
;
update = function(m,k,f,x1,x2,var_args){
var xs = var_args;
switch(arguments.length){
case 3:
return update__3.call(this,m,k,f);
case 4:
return update__4.call(this,m,k,f,x1);
case 5:
return update__5.call(this,m,k,f,x1,x2);
default:
return update__6.cljs$core$IFn$_invoke$arity$variadic(m,k,f,x1,x2, cljs.core.array_seq(arguments, 5));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update.cljs$lang$maxFixedArity = 5;
update.cljs$lang$applyTo = update__6.cljs$lang$applyTo;
update.cljs$core$IFn$_invoke$arity$3 = update__3;
update.cljs$core$IFn$_invoke$arity$4 = update__4;
update.cljs$core$IFn$_invoke$arity$5 = update__5;
update.cljs$core$IFn$_invoke$arity$variadic = update__6.cljs$core$IFn$_invoke$arity$variadic;
return update;
})()
;
/**
* Build map k -> (f v) for [k v] in map, preserving the initial type
*/
plumbing.core.map_vals = (function map_vals(f,m){if(cljs.core.sorted_QMARK_.call(null,m))
{return cljs.core.reduce_kv.call(null,(function (out_m,k,v){return cljs.core.assoc.call(null,out_m,k,f.call(null,v));
}),cljs.core.sorted_map.call(null),m);
} else
{if(cljs.core.map_QMARK_.call(null,m))
{return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (out_m,k,v){return cljs.core.assoc_BANG_.call(null,out_m,k,f.call(null,v));
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
} else
{var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__22050_22056 = cljs.core.seq.call(null,m);var chunk__22051_22057 = null;var count__22052_22058 = (0);var i__22053_22059 = (0);while(true){
if((i__22053_22059 < count__22052_22058))
{var vec__22054_22060 = cljs.core._nth.call(null,chunk__22051_22057,i__22053_22059);var k_22061 = cljs.core.nth.call(null,vec__22054_22060,(0),null);var v_22062 = cljs.core.nth.call(null,vec__22054_22060,(1),null);var m22049_22063 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m22049_22063,k_22061,f.call(null,v_22062)));
{
var G__22064 = seq__22050_22056;
var G__22065 = chunk__22051_22057;
var G__22066 = count__22052_22058;
var G__22067 = (i__22053_22059 + (1));
seq__22050_22056 = G__22064;
chunk__22051_22057 = G__22065;
count__22052_22058 = G__22066;
i__22053_22059 = G__22067;
continue;
}
} else
{var temp__4126__auto___22068 = cljs.core.seq.call(null,seq__22050_22056);if(temp__4126__auto___22068)
{var seq__22050_22069__$1 = temp__4126__auto___22068;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22050_22069__$1))
{var c__4408__auto___22070 = cljs.core.chunk_first.call(null,seq__22050_22069__$1);{
var G__22071 = cljs.core.chunk_rest.call(null,seq__22050_22069__$1);
var G__22072 = c__4408__auto___22070;
var G__22073 = cljs.core.count.call(null,c__4408__auto___22070);
var G__22074 = (0);
seq__22050_22056 = G__22071;
chunk__22051_22057 = G__22072;
count__22052_22058 = G__22073;
i__22053_22059 = G__22074;
continue;
}
} else
{var vec__22055_22075 = cljs.core.first.call(null,seq__22050_22069__$1);var k_22076 = cljs.core.nth.call(null,vec__22055_22075,(0),null);var v_22077 = cljs.core.nth.call(null,vec__22055_22075,(1),null);var m22049_22078 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m22049_22078,k_22076,f.call(null,v_22077)));
{
var G__22079 = cljs.core.next.call(null,seq__22050_22069__$1);
var G__22080 = null;
var G__22081 = (0);
var G__22082 = (0);
seq__22050_22056 = G__22079;
chunk__22051_22057 = G__22080;
count__22052_22058 = G__22081;
i__22053_22059 = G__22082;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__7563__auto__));

}
}
});
/**
* Build map (f k) -> v for [k v] in map m
*/
plumbing.core.map_keys = (function map_keys(f,m){if(cljs.core.map_QMARK_.call(null,m))
{return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (out_m,k,v){return cljs.core.assoc_BANG_.call(null,out_m,f.call(null,k),v);
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
} else
{var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__22091_22097 = cljs.core.seq.call(null,m);var chunk__22092_22098 = null;var count__22093_22099 = (0);var i__22094_22100 = (0);while(true){
if((i__22094_22100 < count__22093_22099))
{var vec__22095_22101 = cljs.core._nth.call(null,chunk__22092_22098,i__22094_22100);var k_22102 = cljs.core.nth.call(null,vec__22095_22101,(0),null);var v_22103 = cljs.core.nth.call(null,vec__22095_22101,(1),null);var m22090_22104 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m22090_22104,f.call(null,k_22102),v_22103));
{
var G__22105 = seq__22091_22097;
var G__22106 = chunk__22092_22098;
var G__22107 = count__22093_22099;
var G__22108 = (i__22094_22100 + (1));
seq__22091_22097 = G__22105;
chunk__22092_22098 = G__22106;
count__22093_22099 = G__22107;
i__22094_22100 = G__22108;
continue;
}
} else
{var temp__4126__auto___22109 = cljs.core.seq.call(null,seq__22091_22097);if(temp__4126__auto___22109)
{var seq__22091_22110__$1 = temp__4126__auto___22109;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22091_22110__$1))
{var c__4408__auto___22111 = cljs.core.chunk_first.call(null,seq__22091_22110__$1);{
var G__22112 = cljs.core.chunk_rest.call(null,seq__22091_22110__$1);
var G__22113 = c__4408__auto___22111;
var G__22114 = cljs.core.count.call(null,c__4408__auto___22111);
var G__22115 = (0);
seq__22091_22097 = G__22112;
chunk__22092_22098 = G__22113;
count__22093_22099 = G__22114;
i__22094_22100 = G__22115;
continue;
}
} else
{var vec__22096_22116 = cljs.core.first.call(null,seq__22091_22110__$1);var k_22117 = cljs.core.nth.call(null,vec__22096_22116,(0),null);var v_22118 = cljs.core.nth.call(null,vec__22096_22116,(1),null);var m22090_22119 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m22090_22119,f.call(null,k_22117),v_22118));
{
var G__22120 = cljs.core.next.call(null,seq__22091_22110__$1);
var G__22121 = null;
var G__22122 = (0);
var G__22123 = (0);
seq__22091_22097 = G__22120;
chunk__22092_22098 = G__22121;
count__22093_22099 = G__22122;
i__22094_22100 = G__22123;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__7563__auto__));
}
});
/**
* Build map k -> (f k) for keys in ks
*/
plumbing.core.map_from_keys = (function map_from_keys(f,ks){var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__22130_22134 = cljs.core.seq.call(null,ks);var chunk__22131_22135 = null;var count__22132_22136 = (0);var i__22133_22137 = (0);while(true){
if((i__22133_22137 < count__22132_22136))
{var k_22138 = cljs.core._nth.call(null,chunk__22131_22135,i__22133_22137);var m22129_22139 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m22129_22139,k_22138,f.call(null,k_22138)));
{
var G__22140 = seq__22130_22134;
var G__22141 = chunk__22131_22135;
var G__22142 = count__22132_22136;
var G__22143 = (i__22133_22137 + (1));
seq__22130_22134 = G__22140;
chunk__22131_22135 = G__22141;
count__22132_22136 = G__22142;
i__22133_22137 = G__22143;
continue;
}
} else
{var temp__4126__auto___22144 = cljs.core.seq.call(null,seq__22130_22134);if(temp__4126__auto___22144)
{var seq__22130_22145__$1 = temp__4126__auto___22144;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22130_22145__$1))
{var c__4408__auto___22146 = cljs.core.chunk_first.call(null,seq__22130_22145__$1);{
var G__22147 = cljs.core.chunk_rest.call(null,seq__22130_22145__$1);
var G__22148 = c__4408__auto___22146;
var G__22149 = cljs.core.count.call(null,c__4408__auto___22146);
var G__22150 = (0);
seq__22130_22134 = G__22147;
chunk__22131_22135 = G__22148;
count__22132_22136 = G__22149;
i__22133_22137 = G__22150;
continue;
}
} else
{var k_22151 = cljs.core.first.call(null,seq__22130_22145__$1);var m22129_22152 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m22129_22152,k_22151,f.call(null,k_22151)));
{
var G__22153 = cljs.core.next.call(null,seq__22130_22145__$1);
var G__22154 = null;
var G__22155 = (0);
var G__22156 = (0);
seq__22130_22134 = G__22153;
chunk__22131_22135 = G__22154;
count__22132_22136 = G__22155;
i__22133_22137 = G__22156;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__7563__auto__));
});
/**
* Build map (f v) -> v for vals in vs
*/
plumbing.core.map_from_vals = (function map_from_vals(f,vs){var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__22163_22167 = cljs.core.seq.call(null,vs);var chunk__22164_22168 = null;var count__22165_22169 = (0);var i__22166_22170 = (0);while(true){
if((i__22166_22170 < count__22165_22169))
{var v_22171 = cljs.core._nth.call(null,chunk__22164_22168,i__22166_22170);var m22162_22172 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m22162_22172,f.call(null,v_22171),v_22171));
{
var G__22173 = seq__22163_22167;
var G__22174 = chunk__22164_22168;
var G__22175 = count__22165_22169;
var G__22176 = (i__22166_22170 + (1));
seq__22163_22167 = G__22173;
chunk__22164_22168 = G__22174;
count__22165_22169 = G__22175;
i__22166_22170 = G__22176;
continue;
}
} else
{var temp__4126__auto___22177 = cljs.core.seq.call(null,seq__22163_22167);if(temp__4126__auto___22177)
{var seq__22163_22178__$1 = temp__4126__auto___22177;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22163_22178__$1))
{var c__4408__auto___22179 = cljs.core.chunk_first.call(null,seq__22163_22178__$1);{
var G__22180 = cljs.core.chunk_rest.call(null,seq__22163_22178__$1);
var G__22181 = c__4408__auto___22179;
var G__22182 = cljs.core.count.call(null,c__4408__auto___22179);
var G__22183 = (0);
seq__22163_22167 = G__22180;
chunk__22164_22168 = G__22181;
count__22165_22169 = G__22182;
i__22166_22170 = G__22183;
continue;
}
} else
{var v_22184 = cljs.core.first.call(null,seq__22163_22178__$1);var m22162_22185 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m22162_22185,f.call(null,v_22184),v_22184));
{
var G__22186 = cljs.core.next.call(null,seq__22163_22178__$1);
var G__22187 = null;
var G__22188 = (0);
var G__22189 = (0);
seq__22163_22167 = G__22186;
chunk__22164_22168 = G__22187;
count__22165_22169 = G__22188;
i__22166_22170 = G__22189;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__7563__auto__));
});
/**
* Dissociate this keyseq from m, removing any empty maps created as a result
* (including at the top-level).
*/
plumbing.core.dissoc_in = (function dissoc_in(m,p__22190){var vec__22192 = p__22190;var k = cljs.core.nth.call(null,vec__22192,(0),null);var ks = cljs.core.nthnext.call(null,vec__22192,(1));if(cljs.core.truth_(m))
{var temp__4124__auto__ = (function (){var and__3627__auto__ = ks;if(and__3627__auto__)
{return dissoc_in.call(null,cljs.core.get.call(null,m,k),ks);
} else
{return and__3627__auto__;
}
})();if(cljs.core.truth_(temp__4124__auto__))
{var res = temp__4124__auto__;return cljs.core.assoc.call(null,m,k,res);
} else
{var res = cljs.core.dissoc.call(null,m,k);if(cljs.core.empty_QMARK_.call(null,res))
{return null;
} else
{return res;
}
}
} else
{return null;
}
});
/**
* Recursively convert maps in m (including itself)
* to have keyword keys instead of string
*/
plumbing.core.keywordize_map = (function keywordize_map(x){if(cljs.core.map_QMARK_.call(null,x))
{var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__22201_22207 = cljs.core.seq.call(null,x);var chunk__22202_22208 = null;var count__22203_22209 = (0);var i__22204_22210 = (0);while(true){
if((i__22204_22210 < count__22203_22209))
{var vec__22205_22211 = cljs.core._nth.call(null,chunk__22202_22208,i__22204_22210);var k_22212 = cljs.core.nth.call(null,vec__22205_22211,(0),null);var v_22213 = cljs.core.nth.call(null,vec__22205_22211,(1),null);var m22200_22214 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m22200_22214,((typeof k_22212 === 'string')?cljs.core.keyword.call(null,k_22212):k_22212),keywordize_map.call(null,v_22213)));
{
var G__22215 = seq__22201_22207;
var G__22216 = chunk__22202_22208;
var G__22217 = count__22203_22209;
var G__22218 = (i__22204_22210 + (1));
seq__22201_22207 = G__22215;
chunk__22202_22208 = G__22216;
count__22203_22209 = G__22217;
i__22204_22210 = G__22218;
continue;
}
} else
{var temp__4126__auto___22219 = cljs.core.seq.call(null,seq__22201_22207);if(temp__4126__auto___22219)
{var seq__22201_22220__$1 = temp__4126__auto___22219;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22201_22220__$1))
{var c__4408__auto___22221 = cljs.core.chunk_first.call(null,seq__22201_22220__$1);{
var G__22222 = cljs.core.chunk_rest.call(null,seq__22201_22220__$1);
var G__22223 = c__4408__auto___22221;
var G__22224 = cljs.core.count.call(null,c__4408__auto___22221);
var G__22225 = (0);
seq__22201_22207 = G__22222;
chunk__22202_22208 = G__22223;
count__22203_22209 = G__22224;
i__22204_22210 = G__22225;
continue;
}
} else
{var vec__22206_22226 = cljs.core.first.call(null,seq__22201_22220__$1);var k_22227 = cljs.core.nth.call(null,vec__22206_22226,(0),null);var v_22228 = cljs.core.nth.call(null,vec__22206_22226,(1),null);var m22200_22229 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m22200_22229,((typeof k_22227 === 'string')?cljs.core.keyword.call(null,k_22227):k_22227),keywordize_map.call(null,v_22228)));
{
var G__22230 = cljs.core.next.call(null,seq__22201_22220__$1);
var G__22231 = null;
var G__22232 = (0);
var G__22233 = (0);
seq__22201_22207 = G__22230;
chunk__22202_22208 = G__22231;
count__22203_22209 = G__22232;
i__22204_22210 = G__22233;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__7563__auto__));
} else
{if(cljs.core.seq_QMARK_.call(null,x))
{return cljs.core.map.call(null,keywordize_map,x);
} else
{if(cljs.core.vector_QMARK_.call(null,x))
{return cljs.core.mapv.call(null,keywordize_map,x);
} else
{return x;

}
}
}
});
/**
* Like get but throw an exception if not found
*/
plumbing.core.safe_get = (function safe_get(m,k){var temp__4124__auto__ = cljs.core.find.call(null,m,k);if(cljs.core.truth_(temp__4124__auto__))
{var pair__7632__auto__ = temp__4124__auto__;return cljs.core.val.call(null,pair__7632__auto__);
} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k,cljs.core.mapv.call(null,cljs.core.key,m))));

}
});
/**
* Like get-in but throws exception if not found
*/
plumbing.core.safe_get_in = (function safe_get_in(m,ks){while(true){
if(cljs.core.seq.call(null,ks))
{{
var G__22234 = plumbing.core.safe_get.call(null,m,cljs.core.first.call(null,ks));
var G__22235 = cljs.core.next.call(null,ks);
m = G__22234;
ks = G__22235;
continue;
}
} else
{return m;
}
break;
}
});
/**
* Like assoc but only assocs when value is truthy
* @param {...*} var_args
*/
plumbing.core.assoc_when = (function() { 
var assoc_when__delegate = function (m,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null))))))));
}
return cljs.core.into.call(null,(function (){var or__3639__auto__ = m;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__4377__auto__ = (function iter__22244(s__22245){return (new cljs.core.LazySeq(null,(function (){var s__22245__$1 = s__22245;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__22245__$1);if(temp__4126__auto__)
{var s__22245__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__22245__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__22245__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__22247 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__22246 = (0);while(true){
if((i__22246 < size__4376__auto__))
{var vec__22250 = cljs.core._nth.call(null,c__4375__auto__,i__22246);var k = cljs.core.nth.call(null,vec__22250,(0),null);var v = cljs.core.nth.call(null,vec__22250,(1),null);if(cljs.core.truth_(v))
{cljs.core.chunk_append.call(null,b__22247,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__22252 = (i__22246 + (1));
i__22246 = G__22252;
continue;
}
} else
{{
var G__22253 = (i__22246 + (1));
i__22246 = G__22253;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22247),iter__22244.call(null,cljs.core.chunk_rest.call(null,s__22245__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22247),null);
}
} else
{var vec__22251 = cljs.core.first.call(null,s__22245__$2);var k = cljs.core.nth.call(null,vec__22251,(0),null);var v = cljs.core.nth.call(null,vec__22251,(1),null);if(cljs.core.truth_(v))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__22244.call(null,cljs.core.rest.call(null,s__22245__$2)));
} else
{{
var G__22254 = cljs.core.rest.call(null,s__22245__$2);
s__22245__$1 = G__22254;
continue;
}
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4377__auto__.call(null,cljs.core.partition.call(null,(2),kvs));
})());
};
var assoc_when = function (m,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return assoc_when__delegate.call(this,m,kvs);};
assoc_when.cljs$lang$maxFixedArity = 1;
assoc_when.cljs$lang$applyTo = (function (arglist__22255){
var m = cljs.core.first(arglist__22255);
var kvs = cljs.core.rest(arglist__22255);
return assoc_when__delegate(m,kvs);
});
assoc_when.cljs$core$IFn$_invoke$arity$variadic = assoc_when__delegate;
return assoc_when;
})()
;
/**
* Like update-in but returns m unchanged if key-seq is not present.
* @param {...*} var_args
*/
plumbing.core.update_in_when = (function() { 
var update_in_when__delegate = function (m,key_seq,f,args){var found = cljs.core.get_in.call(null,m,key_seq,plumbing.core._PLUS_none_PLUS_);if(!((plumbing.core._PLUS_none_PLUS_ === found)))
{return cljs.core.assoc_in.call(null,m,key_seq,cljs.core.apply.call(null,f,found,args));
} else
{return m;
}
};
var update_in_when = function (m,key_seq,f,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return update_in_when__delegate.call(this,m,key_seq,f,args);};
update_in_when.cljs$lang$maxFixedArity = 3;
update_in_when.cljs$lang$applyTo = (function (arglist__22256){
var m = cljs.core.first(arglist__22256);
arglist__22256 = cljs.core.next(arglist__22256);
var key_seq = cljs.core.first(arglist__22256);
arglist__22256 = cljs.core.next(arglist__22256);
var f = cljs.core.first(arglist__22256);
var args = cljs.core.rest(arglist__22256);
return update_in_when__delegate(m,key_seq,f,args);
});
update_in_when.cljs$core$IFn$_invoke$arity$variadic = update_in_when__delegate;
return update_in_when;
})()
;
/**
* Like group-by, but accepts a map-fn that is applied to values before
* collected.
*/
plumbing.core.grouped_map = (function grouped_map(key_fn,map_fn,coll){return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (ret,x){var k = key_fn.call(null,x);return cljs.core.assoc_BANG_.call(null,ret,k,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k,cljs.core.PersistentVector.EMPTY),map_fn.call(null,x)));
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),coll));
});
/**
* Like (apply concat s) but lazier (and shorter)
*/
plumbing.core.aconcat = (function aconcat(s){return cljs.core.concat.call(null,(new cljs.core.LazySeq(null,(function (){return cljs.core.first.call(null,s);
}),null,null)),(new cljs.core.LazySeq(null,(function (){var temp__4126__auto__ = cljs.core.next.call(null,s);if(temp__4126__auto__)
{var n = temp__4126__auto__;return aconcat.call(null,n);
} else
{return null;
}
}),null,null)));
});
/**
* Takes a seqable and returns a lazy sequence that
* is maximally lazy and doesn't realize elements due to either
* chunking or apply.
* 
* Useful when you don't want chunking, for instance,
* (first awesome-website? (map slurp +a-bunch-of-urls+))
* may slurp up to 31 unneed webpages, wherease
* (first awesome-website? (map slurp (unchunk +a-bunch-of-urls+)))
* is guaranteed to stop slurping after the first awesome website.
* 
* Taken from http://stackoverflow.com/questions/3407876/how-do-i-avoid-clojures-chunking-behavior-for-lazy-seqs-that-i-want-to-short-ci
*/
plumbing.core.unchunk = (function unchunk(s){if(cljs.core.seq.call(null,s))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s),(new cljs.core.LazySeq(null,(function (){return unchunk.call(null,cljs.core.rest.call(null,s));
}),null,null)));
} else
{return null;
}
});
/**
* Return sum of (f x) for each x in xs
*/
plumbing.core.sum = (function() {
var sum = null;
var sum__1 = (function (xs){return cljs.core.reduce.call(null,cljs.core._PLUS_,xs);
});
var sum__2 = (function (f,xs){return cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,f,xs));
});
sum = function(f,xs){
switch(arguments.length){
case 1:
return sum__1.call(this,f);
case 2:
return sum__2.call(this,f,xs);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sum.cljs$core$IFn$_invoke$arity$1 = sum__1;
sum.cljs$core$IFn$_invoke$arity$2 = sum__2;
return sum;
})()
;
/**
* returns (first xs) when xs has only 1 element
*/
plumbing.core.singleton = (function singleton(xs){var temp__4126__auto__ = cljs.core.seq.call(null,xs);if(temp__4126__auto__)
{var xs__$1 = temp__4126__auto__;if(cljs.core.next.call(null,xs__$1))
{return null;
} else
{return cljs.core.first.call(null,xs__$1);
}
} else
{return null;
}
});
/**
* Returns [idx x] for x in seqable s
*/
plumbing.core.indexed = (function indexed(s){return cljs.core.map_indexed.call(null,cljs.core.vector,s);
});
/**
* Returns indices idx of sequence s where (f (nth s idx))
*/
plumbing.core.positions = (function positions(f,s){return cljs.core.keep_indexed.call(null,(function (i,x){if(cljs.core.truth_(f.call(null,x)))
{return i;
} else
{return null;
}
}),s);
});
/**
* Returns elements of xs which return unique
* values according to f. If multiple elements of xs return the same
* value under f, the first is returned
*/
plumbing.core.distinct_by = (function distinct_by(f,xs){var s = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);var iter__4377__auto__ = ((function (s){
return (function iter__22261(s__22262){return (new cljs.core.LazySeq(null,((function (s){
return (function (){var s__22262__$1 = s__22262;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__22262__$1);if(temp__4126__auto__)
{var s__22262__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__22262__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__22262__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__22264 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__22263 = (0);while(true){
if((i__22263 < size__4376__auto__))
{var x = cljs.core._nth.call(null,c__4375__auto__,i__22263);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{cljs.core.chunk_append.call(null,b__22264,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})());
{
var G__22265 = (i__22263 + (1));
i__22263 = G__22265;
continue;
}
} else
{{
var G__22266 = (i__22263 + (1));
i__22263 = G__22266;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22264),iter__22261.call(null,cljs.core.chunk_rest.call(null,s__22262__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22264),null);
}
} else
{var x = cljs.core.first.call(null,s__22262__$2);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{return cljs.core.cons.call(null,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})(),iter__22261.call(null,cljs.core.rest.call(null,s__22262__$2)));
} else
{{
var G__22267 = cljs.core.rest.call(null,s__22262__$2);
s__22262__$1 = G__22267;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(s))
,null,null));
});})(s))
;return iter__4377__auto__.call(null,xs);
});
/**
* Analogy: partition:partition-all :: interleave:interleave-all
* @param {...*} var_args
*/
plumbing.core.interleave_all = (function() { 
var interleave_all__delegate = function (colls){return (new cljs.core.LazySeq(null,(function (){return (function helper(seqs){if(cljs.core.seq.call(null,seqs))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,seqs),(new cljs.core.LazySeq(null,(function (){return helper.call(null,cljs.core.keep.call(null,cljs.core.next,seqs));
}),null,null)));
} else
{return null;
}
}).call(null,cljs.core.keep.call(null,cljs.core.seq,colls));
}),null,null));
};
var interleave_all = function (var_args){
var colls = null;if (arguments.length > 0) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return interleave_all__delegate.call(this,colls);};
interleave_all.cljs$lang$maxFixedArity = 0;
interleave_all.cljs$lang$applyTo = (function (arglist__22268){
var colls = cljs.core.seq(arglist__22268);
return interleave_all__delegate(colls);
});
interleave_all.cljs$core$IFn$_invoke$arity$variadic = interleave_all__delegate;
return interleave_all;
})()
;
/**
* Returns # of elements of xs where pred holds
*/
plumbing.core.count_when = (function count_when(pred,xs){return cljs.core.count.call(null,cljs.core.filter.call(null,pred,xs));
});
/**
* Like conj but ignores non-truthy values
* @param {...*} var_args
*/
plumbing.core.conj_when = (function() {
var conj_when = null;
var conj_when__2 = (function (coll,x){if(cljs.core.truth_(x))
{return cljs.core.conj.call(null,coll,x);
} else
{return coll;
}
});
var conj_when__3 = (function() { 
var G__22269__delegate = function (coll,x,xs){while(true){
if(cljs.core.truth_(xs))
{{
var G__22270 = conj_when.call(null,coll,x);
var G__22271 = cljs.core.first.call(null,xs);
var G__22272 = cljs.core.next.call(null,xs);
coll = G__22270;
x = G__22271;
xs = G__22272;
continue;
}
} else
{return conj_when.call(null,coll,x);
}
break;
}
};
var G__22269 = function (coll,x,var_args){
var xs = null;if (arguments.length > 2) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__22269__delegate.call(this,coll,x,xs);};
G__22269.cljs$lang$maxFixedArity = 2;
G__22269.cljs$lang$applyTo = (function (arglist__22273){
var coll = cljs.core.first(arglist__22273);
arglist__22273 = cljs.core.next(arglist__22273);
var x = cljs.core.first(arglist__22273);
var xs = cljs.core.rest(arglist__22273);
return G__22269__delegate(coll,x,xs);
});
G__22269.cljs$core$IFn$_invoke$arity$variadic = G__22269__delegate;
return G__22269;
})()
;
conj_when = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case 2:
return conj_when__2.call(this,coll,x);
default:
return conj_when__3.cljs$core$IFn$_invoke$arity$variadic(coll,x, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
conj_when.cljs$lang$maxFixedArity = 2;
conj_when.cljs$lang$applyTo = conj_when__3.cljs$lang$applyTo;
conj_when.cljs$core$IFn$_invoke$arity$2 = conj_when__2;
conj_when.cljs$core$IFn$_invoke$arity$variadic = conj_when__3.cljs$core$IFn$_invoke$arity$variadic;
return conj_when;
})()
;
/**
* Like cons but does nothing if x is non-truthy.
*/
plumbing.core.cons_when = (function cons_when(x,s){if(cljs.core.truth_(x))
{return cljs.core.cons.call(null,x,s);
} else
{return s;
}
});
/**
* Like sort-by, but prefers higher values rather than lower ones.
*/
plumbing.core.rsort_by = cljs.core.comp.call(null,cljs.core.reverse,cljs.core.sort_by);
/**
* Like swap! but returns a pair [old-val new-val]
* @param {...*} var_args
*/
plumbing.core.swap_pair_BANG_ = (function() {
var swap_pair_BANG_ = null;
var swap_pair_BANG___2 = (function (a,f){while(true){
var old_val = cljs.core.deref.call(null,a);var new_val = f.call(null,old_val);if(cljs.core.compare_and_set_BANG_.call(null,a,old_val,new_val))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_val,new_val], null);
} else
{{
continue;
}
}
break;
}
});
var swap_pair_BANG___3 = (function() { 
var G__22275__delegate = function (a,f,args){return swap_pair_BANG_.call(null,a,(function (p1__22274_SHARP_){return cljs.core.apply.call(null,f,p1__22274_SHARP_,args);
}));
};
var G__22275 = function (a,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__22275__delegate.call(this,a,f,args);};
G__22275.cljs$lang$maxFixedArity = 2;
G__22275.cljs$lang$applyTo = (function (arglist__22276){
var a = cljs.core.first(arglist__22276);
arglist__22276 = cljs.core.next(arglist__22276);
var f = cljs.core.first(arglist__22276);
var args = cljs.core.rest(arglist__22276);
return G__22275__delegate(a,f,args);
});
G__22275.cljs$core$IFn$_invoke$arity$variadic = G__22275__delegate;
return G__22275;
})()
;
swap_pair_BANG_ = function(a,f,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return swap_pair_BANG___2.call(this,a,f);
default:
return swap_pair_BANG___3.cljs$core$IFn$_invoke$arity$variadic(a,f, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
swap_pair_BANG_.cljs$lang$maxFixedArity = 2;
swap_pair_BANG_.cljs$lang$applyTo = swap_pair_BANG___3.cljs$lang$applyTo;
swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2 = swap_pair_BANG___2;
swap_pair_BANG_.cljs$core$IFn$_invoke$arity$variadic = swap_pair_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return swap_pair_BANG_;
})()
;
/**
* Like reset! but returns old-val
*/
plumbing.core.get_and_set_BANG_ = (function get_and_set_BANG_(a,new_val){return cljs.core.first.call(null,plumbing.core.swap_pair_BANG_.call(null,a,cljs.core.constantly.call(null,new_val)));
});
plumbing.core.millis = (function millis(){return (new Date()).getTime();
});
/**
* Like apply, but applies a map to a function with positional map
* arguments. Can take optional initial args just like apply.
* @param {...*} var_args
*/
plumbing.core.mapply = (function() {
var mapply = null;
var mapply__2 = (function (f,m){return cljs.core.apply.call(null,f,cljs.core.apply.call(null,cljs.core.concat,m));
});
var mapply__3 = (function() { 
var G__22277__delegate = function (f,arg,args){return cljs.core.apply.call(null,f,arg,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),cljs.core.apply.call(null,cljs.core.concat,cljs.core.last.call(null,args))));
};
var G__22277 = function (f,arg,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__22277__delegate.call(this,f,arg,args);};
G__22277.cljs$lang$maxFixedArity = 2;
G__22277.cljs$lang$applyTo = (function (arglist__22278){
var f = cljs.core.first(arglist__22278);
arglist__22278 = cljs.core.next(arglist__22278);
var arg = cljs.core.first(arglist__22278);
var args = cljs.core.rest(arglist__22278);
return G__22277__delegate(f,arg,args);
});
G__22277.cljs$core$IFn$_invoke$arity$variadic = G__22277__delegate;
return G__22277;
})()
;
mapply = function(f,arg,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return mapply__2.call(this,f,arg);
default:
return mapply__3.cljs$core$IFn$_invoke$arity$variadic(f,arg, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapply.cljs$lang$maxFixedArity = 2;
mapply.cljs$lang$applyTo = mapply__3.cljs$lang$applyTo;
mapply.cljs$core$IFn$_invoke$arity$2 = mapply__2;
mapply.cljs$core$IFn$_invoke$arity$variadic = mapply__3.cljs$core$IFn$_invoke$arity$variadic;
return mapply;
})()
;
