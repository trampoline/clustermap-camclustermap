// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.formats.string');
goog.require('cljs.core');
/**
* @param {...*} var_args
*/
clustermap.formats.string.pluralize = (function() { 
var pluralize__delegate = function (n,word,p__30968){var vec__30970 = p__30968;var irreg = cljs.core.nth.call(null,vec__30970,(0),null);if((n === (1)))
{return word;
} else
{var or__11514__auto__ = irreg;if(cljs.core.truth_(or__11514__auto__))
{return or__11514__auto__;
} else
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(word)+"s");
}
}
};
var pluralize = function (n,word,var_args){
var p__30968 = null;if (arguments.length > 2) {
  p__30968 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return pluralize__delegate.call(this,n,word,p__30968);};
pluralize.cljs$lang$maxFixedArity = 2;
pluralize.cljs$lang$applyTo = (function (arglist__30971){
var n = cljs.core.first(arglist__30971);
arglist__30971 = cljs.core.next(arglist__30971);
var word = cljs.core.first(arglist__30971);
var p__30968 = cljs.core.rest(arglist__30971);
return pluralize__delegate(n,word,p__30968);
});
pluralize.cljs$core$IFn$_invoke$arity$variadic = pluralize__delegate;
return pluralize;
})()
;

//# sourceMappingURL=string.js.map