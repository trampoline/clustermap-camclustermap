(ns clustermap.component-specs
  (:require [clustermap.filter-values :as filter-values]))

(def component-specs
  [{:id :company-type
    :type :tag
    :label "Company type"
    :sorted false
    :visible true
    :chooser-type :radio
    :default "cambridge_based"
    :tag-type "cambridge_ahead_code"
    :tags [{:value "cambridge_based" :label "Cambridge-based"}
           {:value "cambridge_active" :label "Cambridge-active"}
           {:value "non_corporate" :label "Non-corporate KI"}]}

   {:id :sector
    :type :tag-checkboxes
    :label "Sector"
    :sorted false
    :visible false
    :controls true
    :tag-type "broad_12_sectors"
    :tags [
           {:value "construction_and_utilities" :label "Construction and utilities"}
           {:value "education_arts_charities_social_care" :label "Education, arts, charities, social care"}
           {:value "information_technology_and_telecoms" :label "Information Technology and Telecoms"}
           {:value "knowledge_intensive_professional_services" :label "Knowledge Intensive Professional Services"}
           {:value "life_science_and_healthcare" :label "Life Science and Healthcare"}
           {:value "manufacturing" :label "Manufacturing"}
           {:value "other_business_services" :label "Other Business Services"}
           {:value "other_services" :label "Other Services"}
           ;;{:value "personal_services" :label "Personal services"}
           {:value "primary" :label "Primary"}
           {:value "property_and_finance" :label "Property and finance"}
           {:value "transport_and_travel" :label "Transport and travel"}
           {:value "wholesale_and_retail_distribution" :label "Wholesale and retail distribution"}
           ;;{:value "not_known" :label "Unknown"}
           ]}

   {:id :narrow-sector
    :type :tag-checkboxes
    :label "Narrow Sector"
    :sorted true
    :visible false
    :controls true
    :tag-type "narrow_sectors"
    :tags [
           {:value "quantity_surveyors" :label "Quantity surveyors"}
           {:value "information_services" :label "Information services"}
           {:value "tv__video_production" :label "TV & video production"}
           {:value "data_processing__hosting" :label "Data processing & hosting"}
           {:value "hightech_manufacturing" :label "High-tech Manufacturing"}
           {:value "public_relations" :label "Public relations"}
           {:value "transport_leasing" :label "Transport leasing"}
           {:value "other_construction" :label "Other construction"}
           {:value "hotels_pubs_and_restaurants" :label "Hotels, pubs and restaurants"}
           {:value "plastering_joinery_decoration" :label "Plastering, joinery decoration"}
           {:value "medlowtech_manufacturing" :label "Med-low-tech manufacturing"}
           {:value "primary" :label "Primary"}
           {:value "architects" :label "Architects"}
           {:value "lowtech_manufacturing" :label "Low-tech manufacturing"}
           {:value "utilities" :label "Utilities"}
           {:value "kis_professional_business_services" :label "KIS Professional Business Services"}
           {:value "developer__builder" :label "Developer / Builder"}
           {:value "other_finance" :label "Other Finance"}
           {:value "estate_agencies" :label "Estate agencies"}
           {:value "charity__social_care" :label "Charity & social care"}
           {:value "travel_agents" :label "Travel agents"}
           {:value "accounting_services" :label "Accounting services"}
           {:value "cleaning_services" :label "Cleaning services"}
           {:value "wholesale" :label "Wholesale"}
           {:value "heating__plumbing" :label "Heating & plumbing"}
           ]}

   ;; ki is a combo of broad and narrow so use filters
   {:id :ki-sector
    :type :checkboxes
    :label "Knowledge Intensive Sectors"
    :sorted false
    :visible false
    :controls true
    :options [{:value "information_technology_and_telecoms" :label "Information Technology and Telecoms"
               :filter {:nested {:path "?tags"
                                 :filter {:bool {:must [{:term {"type" "broad_12_sectors"}}
                                                        {:term {"tag" "information_technology_and_telecoms"}}]}}}}}
              {:value "life_science_and_healthcare" :label "Life Science and Healthcare"
               :filter {:nested {:path "?tags"
                                 :filter {:bool {:must [{:term {"type" "broad_12_sectors"}}
                                                        {:term {"tag" "life_science_and_healthcare"}}]}}}}}
              {:value "knowledge_intensive_professional_services" :label "Knowledge Intensive Professional Services"
               :filter {:nested {:path "?tags"
                                 :filter {:bool {:must [{:term {"type" "broad_12_sectors"}}
                                                        {:term {"tag" "knowledge_intensive_professional_services"}}]}}}}}
              {:value "hightech_manufacturing" :label "High-tech Manufacturing"
               :filter {:bool {:must [{:nested {:path "?tags"
                                                :filter {:bool {:must [{:term {"type" "narrow_sectors"}}
                                                                       {:term {"tag" "hightech_manufacturing"}}]}}}}
                                      {:nested {:path "?tags"
                                                :filter {:bool {:must [{:term {"type" "broad_12_sectors"}}
                                                                       {:term {"tag" "manufacturing"}}]}}}}]}}}
              ]}

   {:id :networks
    :type :tag-checkboxes
    :label "Networks"
    :sorted true
    :visible false
    :tag-type "cambridge_network"
    :tags [{:value "cambridge_wireless" :label "Cambridge Wireless"}
           {:value "one_nucleus" :label "One Nucleus"}]}

   {:id :highgrowth
    :type :checkboxes
    :label "Scaleups"
    :visible false
    :options [#_{:value "latest" :label "Scaleup companies" :filter scaleup-filter}
              {:value "turnover" :label "Turnover"
               :filter {:bool {:should (mapv (fn [id] {:term {"?natural_id" id}})
                                             filter-values/upscaler-turnover-company-nos)}}}
              {:value "employment" :label "Employment"
               :filter {:bool {:should (mapv (fn [id] {:term {"?natural_id" id}})
                                             filter-values/upscaler-employment-company-nos)}}}]}

   {:id :employee-count
    :type :checkboxes
    :label "Employee size range"
    :visible false
    :controls true
    :options [{:value "min" :label "1" :filter {:range {"!latest_employee_count" {:lte 1}}}}
              {:value "min+" :label "2–9" :filter {:range {"!latest_employee_count" {:gt 1 :lte 9}}}}
              {:value "min++" :label "10–249" :filter {:range {"!latest_employee_count" {:gt 9 :lte 249}}}}
              {:value "max" :label "250 or more" :filter {:range {"!latest_employee_count" {:gt 249}}}}]}

   {:id :latest-turnover
    :type :checkboxes
    :label "Turnover size range"
    :visible false
    :controls true
    :options [;; {:value "any" :label "Any" :filter nil}
              {:value "min" :label "Less than £0.2 million" :filter {:range {"!latest_turnover" {:lt 200000}}}}
              {:value "low" :label "£0.2 – 1 million" :filter {:range {"!latest_turnover" {:gte 200000 :lt 1e6}}}}
              {:value "lowmid" :label "£1 – 35 million" :filter {:range {"!latest_turnover" {:gte 1e6 :lt 35000000}}}}
              {:value "highest" :label "More than £35 million" :filter {:range {"!latest_turnover" {:gte 35000000}}}}
              ]}
   ])
