// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.ganalytics');
goog.require('cljs.core');
clustermap.ganalytics.send_pageview = (function send_pageview(path){var ua_code = (function (){var G__33402 = window;var G__33402__$1 = (((G__33402 == null))?null:G__33402.config);var G__33402__$2 = (((G__33402__$1 == null))?null:G__33402__$1.ua);var G__33402__$3 = (((G__33402__$2 == null))?null:G__33402__$2.code);return G__33402__$3;
})();if(cljs.core.truth_((function (){var and__11540__auto__ = window.ga;if(cljs.core.truth_(and__11540__auto__))
{return ua_code;
} else
{return and__11540__auto__;
}
})()))
{return ga("send","pageview",path);
} else
{return null;
}
});

//# sourceMappingURL=ganalytics.js.map