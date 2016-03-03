(set-env!
 :source-paths    #{"src"  #_"checkouts/clustermap-components/src/clustermap"}
 :resource-paths  #{"resources"}
 :dependencies '[[adzerk/boot-cljs          "1.7.228-1"   :scope "test"]
                 [adzerk/boot-cljs-repl     "0.3.0"      :scope "test"]
                 [adzerk/boot-reload        "0.4.5"      :scope "test"]
                 [pandeiro/boot-http        "0.7.3"      :scope "test"]
                 [crisptrutski/boot-cljs-test "0.2.1" :scope "test"]
                 [com.cemerick/piggieback "0.2.1" :scope "test"]
                 [org.clojure/tools.nrepl "0.2.12" :scope "test"]

                 [org.clojure/clojurescript "1.7.228"]
                 [org.clojure/core.async "0.2.374"]
                 [com.taoensso/timbre "4.3.0-RC1"]
                 [org.omcljs/om "1.0.0-alpha30"]
                 [binaryage/devtools "0.5.2"]
                 [weasel "0.7.0" :scope "test"]

                 [cljsjs/react "0.14.3-0"]
                 [cljsjs/react-dom "0.14.3-1"]
                 [domina "1.0.3"]
                 [jayq "2.5.4"]
                 [prismatic/schema "1.0.5"]
                 [sablono "0.6.2"]
                 [hiccups "0.3.0"]
                 [secretary "1.2.3"]
                 [cljsjs/bootstrap "3.3.5-0"]
                 [clustermap-components "0.1.0-SNAPSHOT"]
                 [com.andrewmcveigh/cljs-time "0.4.0"]
                 ])

(require
 '[adzerk.boot-cljs      :refer [cljs]]
 '[adzerk.boot-cljs-repl :refer [cljs-repl start-repl]]
 '[adzerk.boot-reload    :refer [reload]]
 '[pandeiro.boot-http    :refer [serve]]
 '[crisptrutski.boot-cljs-test :refer [test-cljs]]
 )

(deftask build []
  (comp (speak)
        (cljs)))

(deftask run []
  (comp ;;(serve)
   (watch)
   (checkout :dependencies ['[clustermap-components "0.1.0-SNAPSHOT"]])
   (cljs-repl)
   (reload)
   (build)))

(deftask production []
  (task-options! cljs {:optimizations :advanced
                       :source-map true})
  identity)

(deftask development []
  (task-options! cljs {:optimizations :none :source-map true}
                 reload {:on-jsload 'clustermap.core/init})
  identity)

(deftask dev
  "Simple alias to run application in development mode"
  []
  (comp (development)
        (run)))


(deftask testing []
  (set-env! :source-paths #(conj % "test/cljs"))
  identity)

;;; This prevents a name collision WARNING between the test task and
;;; clojure.core/test, a function that nobody really uses or cares
;;; about.
(ns-unmap 'boot.user 'test)

(deftask test []
  (comp (testing)
        (test-cljs :js-env :phantom
                   :exit?  true)))

(deftask auto-test []
  (comp (testing)
        (watch)
        (test-cljs :js-env :phantom)))