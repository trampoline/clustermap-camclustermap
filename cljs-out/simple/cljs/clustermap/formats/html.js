// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.formats.html');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* @param {...*} var_args
*/
clustermap.formats.html.combine_classes = (function() { 
var combine_classes__delegate = function (classes){return clojure.string.join.call(null," ",cljs.core.filter.call(null,cljs.core.complement.call(null,clojure.string.blank_QMARK_),cljs.core.filter.call(null,cljs.core.identity,classes)));
};
var combine_classes = function (var_args){
var classes = null;if (arguments.length > 0) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return combine_classes__delegate.call(this,classes);};
combine_classes.cljs$lang$maxFixedArity = 0;
combine_classes.cljs$lang$applyTo = (function (arglist__28964){
var classes = cljs.core.seq(arglist__28964);
return combine_classes__delegate(classes);
});
combine_classes.cljs$core$IFn$_invoke$arity$variadic = combine_classes__delegate;
return combine_classes;
})()
;
