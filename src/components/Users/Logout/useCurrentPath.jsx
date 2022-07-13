import { matchRoutes, useLocation } from "react-router-dom"

const rutass = [
    "/"
    ,"/adopt"
    ,"/about"
    ,"/petdetail/:id"
    ,"/petcreate"
    ,"/donation"
    ,"/login"
    ,"/register"
    ,"/useradoptpet/:id"
    ,"/usertransitpet/:id"
    ,"/donation/success"
    ,"/donation/failure/:id"
    ,"/userprofile"
    ,"/useritsmypet/:id"
    ,"/lostpets"
    ,"/admin"
    ,"/admin/pets"
    ,"/admin/users"
    ,"/admin/donation"
    ,"/admin/formadopt"
    ,"/admin/formlost"
    ,"/admin/formtransit"
    ,"/admin/profilepets/:id"
    ,"/admin/petitionuser/:id"
    ,"/chatbot"
    ,'/userseguimiento/:id' 
    ,'/seguimiento'
]

const routes = rutass.map(path=>{return { path }})

export default function useCurrentPath() {
  const location = useLocation()
  const [{ route }] = matchRoutes(routes, location)

  return route.path
}