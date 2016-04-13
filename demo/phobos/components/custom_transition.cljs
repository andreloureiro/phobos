(ns phobos.components.custom-transition
  (:require [reagent.core :as r]
            [phobos.core :as p]))


(def soccer-teams
  [{:name "Sao Paulo"
    :fg "white"
    :bg "red"}
   {:name "Santos"
    :fg "black"
    :bg "white"}
   {:name "Corinthians"
    :fg "white"
    :bg "black"}
   {:name "Palmeiras"
    :fg "white"
    :bg "forestgreen"}
   {:name "Internacional"
    :fg "white"
    :bg "red"}
   {:name "Gremio"
    :fg "white"
    :bg "dodgerblue"}
   {:name "Avai"
    :fg "royalblue"
    :bg "white"}
   {:name "Figueirense"
    :fg "white"
    :bg "black"}
   {:name "Atletico PR"
    :fg "red"
    :bg "black"}
   {:name "Coritiba"
    :fg "green"
    :bg "white"}
   {:name "Parana Clube"
    :fg "red"
    :bg "blue"}
   {:name "Botafogo"
    :fg "gray"
    :bg "black"}
   {:name "Flamengo"
    :fg "black"
    :bg "red"}
   {:name "Fluminense"
    :fg "green"
    :bg "red"}
   {:name "Vasco"
    :fg "black"
    :bg "white"}
   {:name "Atletico MG"
    :fg "white"
    :bg "black"}
   {:name "Cruzeiro"
    :fg "white"
    :bg "blue"}
   {:name "Bahia"
    :fg "blue"
    :bg "red"}
   {:name "Vitoria"
    :fg "red"
    :bg "black"}
   {:name "Ceara"
    :fg "white"
    :bg "black"}
   {:name "Santa Cruz"
    :fg "black"
    :bg "red"}
   {:name "Remo"
    :fg "white"
    :bg "midnightblue"}])

(def team-animation
  {:in (p/register-effect
        {:calls [[{:transform-perspective [800 800]
                   :transform-origin-x ["50%" "50%"]
                   :transform-origin-y ["100%" "100%"]
                   :margin-bottom 0
                   :opacity 1
                   :rotate-x [0 130]}
                  1
                  {:easing "ease-out"
                   :display "block"}]]})
   :out (p/register-effect
        {:calls [[{:transform-perspective [800 800]
                   :transform-origin-x ["50%" "50%"]
                   :transform-origin-y ["0%" "0%"]
                   :margin-bottom -30
                   :opacity 0
                   :rotate-x -70}
                  1
                  {:easing "ease-out"
                   :display "block"}]]})})

(defn team [{:keys [id bg fg name]}]
  [:li.list__item {:key id
                   :style {:background-color bg
                           :color fg}} name])

(defn add-item [teams item-count]
  (swap! item-count inc)
  (swap! teams
         #(into [] (cons (assoc (rand-nth soccer-teams) :id @item-count) %))))

(defn enter-animation [duration]
  {:animation (:in team-animation)
   :stagger duration
   :duration duration
   :backwards true
   :display "block"
   :style {:display "none"}})

(defn leave-animation [duration]
  {:animation (:out team-animation)
   :stagger duration
   :duration duration
   :backwards true})

(defn custom-transition []
  (let [teams (r/atom [])
        item-count (r/atom 0)
        duration 500]
    (fn []
      [:div.custom-transition
       [:button.btn {:on-click #(add-item teams item-count)} "add"]
       [:button.btn {:on-click
                     #(dotimes [n 3] (add-item teams item-count))} "add 3"]
       [p/motion-group
        {:key "motion-gropu"
         :component "ul"
         :class-name "custom-transition__list"
         :enter (enter-animation duration)
         :leave (leave-animation duration)}
        (map team (take 5 @teams))]])))
