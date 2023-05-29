import {Navigate, Outlet} from 'react-router-dom'

export const AuthUser = ()=>{
  const usuario = JSON.parse(localStorage.getItem('usuario')) || null
  if(!usuario){
    return <Navigate to="/login"/>
  }
  return <Outlet/>
}
export const AuthAdmin = ()=>{
  const usuario = JSON.parse(localStorage.getItem('usuario')) || null
    if(!usuario){
      console.log('Realizar login')
      return <Navigate to="/login"/>
    }else{
      if(usuario.rol==='admin'){
        return <Outlet/>
      }
      console.log('usuario no es admin')
      return <Navigate to="/login"/>
    }
  }