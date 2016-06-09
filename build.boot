(set-env!
 :source-paths    #{"src"  #_"checkouts/clustermap-components/src/clustermap"}
 :resource-paths  #{"resources"}
 :dependencies '[[adzerk/boot-cljs          "1.7.228-1"   :scope "test"]
                 [adzerk/boot-cljs-repl     "0.3.0"      :scope "test"]
                 [adzerk/boot-reload        "0.4.8"      :scope "test"]
                 [pandeiro/boot-http        "0.7.3"      :scope "test"]
                 [crisptrutski/boot-cljs-test "0.2.1" :scope "test"]
                 [com.cemerick/piggieback "0.2.1" :scope "test"]
                 [org.clojure/tools.nrepl "0.2.12" :scope "test"]

                 [org.clojure/clojurescript "1.9.36"]
                 [org.clojure/core.async "0.2.374"]
                 [com.taoensso/timbre "4.3.1"]
                 [org.omcljs/om "1.0.0-alpha36"]
                 [binaryage/devtools "0.6.1"]
                 [weasel "0.7.0" :scope "test"]
                 [cljsjs/react "15.1.0-0"]
                 [cljsjs/react-dom "15.1.0-0"]

                 [clustermap-components "0.2.0-SNAPSHOT"]
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
   (checkout :dependencies ['[clustermap-components "0.2.0-SNAPSHOT"]])
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
