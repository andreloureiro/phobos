(ns phobos.example
  (:require [phobos.components.toggle-box :refer [toggle-box]]
            [phobos.components.square-list :refer [square-list]]
            [phobos.components.custom-animation :refer [custom-animation]]
            [phobos.components.custom-transition :refer [custom-transition]]
            [reagent.core :as r]
            [goog.dom :as d]
            [phobos.core :as p]))


(enable-console-print!)

(def nav-items
  [{:id 0
    :title "Toggle box"}
   {:id 1
    :title "Square list"}
   {:id 2
    :title "Custom animation"}
   {:id 3
    :title "Custom transition"}])

(def views
  [{:id 0
    :view toggle-box}
   {:id 1
    :view square-list}
   {:id 2
    :view custom-animation}
   {:id 3
    :view custom-transition}])

(defn make-view [state]
  (fn [view]
    (if (= @state (:id view))
      ^{:key (:id view)}[(:view view)])))

(defn examples []
  (let [state (r/atom 0)]
    (fn []
      [:div.main
       [:h1.title "Phobos Examples"]
       [:ul.nav
        (doall
         (for [item nav-items]
           [:li {:key (:id item)
                 :on-click #(reset! state (:id item))
                 :class-name (if (= @state (:id item))
                               "nav__item nav__item--active"
                               "nav__item")} (:title item)]))]
       [p/motion-group
        {:component "div"
         :class-name "content"
         :enter {:animation "transition.slideUpIn"
                 :delay 400
                 :duration 300}
         :leave {:animation "transition.slideUpOut"
                 :duration 300}}
        (doall
         (for [{:keys [id view]} views]
           (if (= @state id)
             ^{:key id}[view])))]])))

(defn mount! []
  (r/render
   [examples]
   (d/getElement "app")))

(mount!)
