# clustermap-camclustermap

## getting started

    git clone git@github.com:trampoline/clustermap-camclustermap.git
    git clone git@github.com:trampoline/clustermap-components.git
    cd clustermap-camclustermap
    mkdir checkouts
    cd checkouts
    git clone git@github.com:trampoline/ui-framework-clustermap.git
    cd ui-framework-clustermap
    git co camclustermap
    cd ..
    ln -s ../../clustermap-components .
    cd ..

    # now there are two processes to run : the ui-framework build
    # and the lein cljs build. run each in a separate terminal

    # 1. the lein cljs build
    cd clustermap-camclustermap
    rm -rf cljs-out/none/* ; lein figwheel

    #2 the ui-framework build
    cd clustermap-camclustermap/checkouts/ui-framework-clustermap
    npm install
    ./node_modules/.bin/bower install
    scripts/server.sh

    # now you have a frontend with live recompilation of html, less, and cljs
    # but you still need a backend to serve the frontend, expand the multi-tenant templates
    # and serve the api


## using boot


    boot dev target -d cljs-out/none


in clustermap-components:

    boot auto-install
