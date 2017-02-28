(ns clustermap.components.company-info
  (:require-macros
   [cljs.core.async.macros :refer [go]])
  (:require [cljs.core.async :refer [<!]]
            [clojure.string :as str]
            [om.core :as om :include-macros true]
            [om-tools.core :refer-macros [defcomponentk]]
            [schema.core :as s :refer-macros [defschema]]
            [sablono.core :as html :refer-macros [html]]
            [clustermap.api :as api]
            [clustermap.formats.number :as num :refer [div! *! -! +!]]
            [clustermap.formats.money :as money]
            [clustermap.formats.time :as time]
            [clustermap.components.map :as map]
            [clustermap.util :as util :refer [pp]]
            [clustermap.components.timeline-chart :as timeline-chart]))

(defn render-metadata-row
  [record {:keys [key label render-fn] :or {render-fn identity} :as field}]
  [[:div.tbl-cell label]
   [:div.tbl-cell (some-> (get record key) render-fn)]])

(defn sign-icon
  [n]
  (cond
    (> n 0) [:i.icon-positive]
    (< n 0)  [:i.icon-negative]
    :else nil))

(defn stat-change
  [base change]
  (let [prev (-! base change)]
    (when (and change base (not= 0 prev))
      (let [v (*! 100 (div! change prev))]
        [:div.stat-change (sign-icon v) [:span (num/mixed v) "%"]]))))

(defn render*
  [record
   {:keys [title-field fields] :as controls}
   filter-spec
   turnover-timeline
   employment-timeline
   map-state]
  (.log js/console ["RECORD" record])
  (html
   [:div.panel-grid-container
    [:div.panel-grid
     [:div.panel-row

      [:div.panel
       [:div.panel-body
        [:div.company-details
         [:ul

          [:li
           [:h4 "Registration Number"]
           [:p (:natural_id record)]]
          [:li
           [:h4 "Sector"]
           [:p
            (some->> record
                     :tags
                     (filter #(= "broad_12_sectors" (:type %)))
                     first
                     :description)]
           [:h4 "Sub-sector"]
           [:p
            (some->> record
                     :tags
                     (filter #(= "narrow_sectors" (:type %)))
                     first
                     :description)]]
          (when-let [url (:web_url record)]
            [:li
             [:h4 "Website"
              [:p
               [:a {:href (if (str/starts-with? url "http")
                            url
                            (str "http://" url))
                    :target "_blank"} url]]]])]]]]

      [:div.panel
       [:div.panel-body
        [:div.company-address
         [:div.row
          [:div.col-sm-6
           (into
            [:address
             [:h4 "Address"]]
            (for [line (str/split (:postcode record) #",|\n")]
              [:div line]))]
          [:div.col-sm-6
           [:p
            (when-let [network (some->> record
                                        :tags
                                        (filter #(= "cambridge_network" (:type %)))
                                        first)]
              (let [network-img (case (:tag network)
                                  "one_nucleus" "/img/one_nucleus.png"
                                  "cambridge_wireless" "/img/cambridge_wireless_logo_medium.jpg")]

                [:div
                 [:h4 "Network"]
                 [:img {:src network-img :alt (:description network)
                        :style {"max-width" "200px"}}]]))]]]]]]
      ]

     [:div.panel-row
      (let [show (= "cambridge_based"
                    (first (get-in record [:tagtypes :cambridge_ahead_code])))]
        [:div.panel
         [:div.panel-body
          [:div.chart-heading
           [:h4.stat-title "Turnover"]
           [:div {:style (util/display (not show))} "Data not available"]
           [:span {:style (util/display show)}
            [:div.stat-amount
             [:small "£"]
             [:span (when (:latest_turnover_is_estimate record)
                      {:class "estimated-metric"
                       :style {:color "red"}})
              (num/mixed (:latest_turnover record))]]
            (stat-change (:latest_turnover record) (:latest_turnover_delta record))]]
          [:div.chart-container-lg {:style (util/display show)}
           (om/build timeline-chart/timeline-chart {:timeline-chart turnover-timeline
                                                    :filter-spec filter-spec})]]])
      (let [show (not= "cambridge_active"
                       (first (get-in record [:tagtypes :cambridge_ahead_code])))]
        [:div.panel
         [:div.panel-body
          [:div.chart-heading
           [:h4.stat-title "Employment"]
           [:div {:style (util/display (not show))} "Data not available"]
           [:span {:style (util/display show)}
            [:div.stat-amount
             [:span (when (:latest_employee_count_is_estimate record)
                      {:class "estimated-metric"
                       :style {:color "red"}})
              (num/mixed (:latest_employee_count record))]]
            (stat-change (:latest_employee_count record) (:latest_employee_count_delta record))]]
          [:div.chart-container-lg {:style (util/display show)}
           (om/build timeline-chart/timeline-chart {:timeline-chart employment-timeline
                                                    :filter-spec filter-spec})]]])
      ]

     [:div.panel-row
      [:div.panel
       [:div.panel-body
        [:h3 "Directors"]
        [:.responsive
         [:table.table
          [:thead
           [:tr [:th "Name"] [:th "Appointment date"] [:th "Resignation date"]]]
          (into [:tbody]
                (let [ds (:directorships record)
                      cds (filter (complement :resignation_date) ds)
                      scds (reverse (sort-by :appointment_date cds))
                      rds (filter :resignation_date ds)
                      srds (reverse (sort-by :resignation_date rds))
                      sds (concat scds srds)]
                  (for [d sds]
                    [:tr
                     [:td (:name d)]
                     [:td (time/format-date (:appointment_date d))]
                     [:td (time/format-date (:resignation_date d))]
                     ])))]]]]

      [:div.panel
       [:div.panel-body
        [:div.chart-heading
         [:h4.stat-title "Map"]]
        [:div.mini-map
         (om/build map/minimap-component {:map-state map-state})]]]]

     ]]
   ;; [:div.box.box-first
   ;;  [:header (get record title-field)]
   ;;  [:div.tbl
   ;;   (for [field fields]
   ;;     (into [:div.tbl-row]
   ;;           (render-metadata-row record field)))]]
   ))

(defn company-info-component
  [{{record :record
     {index :index
      index-type :index-type
      sort-spec :sort-spec
      size :size
      :as controls} :controls
     :as metadata} :metadata
    turnover-timeline :turnover-timeline
    employment-timeline :employment-timeline
    filter-spec :filter-spec
    map-state :map-state
    :as props}
   owner]

  (reify
    om/IDidMount
    (did-mount [_]
      (om/set-state! owner :fetch-metadata-fn (api/records-factory)))

    om/IRender
    (render [_]
      (render* record controls filter-spec turnover-timeline employment-timeline map-state))

    om/IWillUpdate
    (will-update [_
                  {{next-record :record
                    {next-index :index
                     next-index-type :index-type
                     next-sort-spec :sort-spec
                     next-size :size
                     :as next-controls} :controls
                    :as next-metadata} :metadata
                   next-filter-spec :filter-spec}
                  {fetch-metadata-fn :fetch-metadata-fn}]

      (when-let [el (js/document.getElementById "data-col")]
        (set! (.-scrollTop el) 0))

      (when next-record ;; create a single point for this company
        (let [point-data {:count 1
                          :records {(keyword (pr-str (:location next-record)))
                                    {:location (:location next-record)
                                     :records [{:natural_id (:natural_id next-record)
                                                :location (:location next-record)
                                                :name (:name next-record )
                                                :latest_turnover (:latest_turnover next-record)
                                                :latest_employee_count (:latest_employee_count next-record)
                                                }]}}}]
          (js/console.debug point-data)
          (om/update! map-state [:point-data] point-data)))

      (when (and next-filter-spec
                 (or (not next-record)
                     (not= next-controls controls)
                     (not= next-filter-spec filter-spec)))

        (go
          (when-let [metadata-data (<! (fetch-metadata-fn next-index
                                                          next-index-type
                                                          next-filter-spec
                                                          next-sort-spec
                                                          next-size))]
            (.log js/console  ["COMPANY-INFO-DATA" metadata-data])
            (om/update! metadata [:record] (some-> metadata-data :records first))))))))
