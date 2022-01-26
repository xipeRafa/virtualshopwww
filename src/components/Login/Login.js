import React, {useState} from 'react';

const Login = ({user, role_grants}) => {

      const[name, setName]=useState('')
      const [password, setPassword]=useState('')
      const [role, setRole]=useState('')

      let rigthName = name.trim().toUpperCase()


      if(role !== ''){
            localStorage.setItem('role', role)
      }

      let rol = localStorage.getItem('role')
      
      
      const onSubmit =(e)=>{
            e.preventDefault()

            if(password.trim() === '' || name.trim() === ''){
                  alert('Not empty fields please')
                  return
            }
            
            const equal = (el) => el.username === rigthName
            const users = user.some(equal) //busca si existe el username

            if(users){
                  let bool

                  const passwordCheck = (el) => //checa el password es el del usuario
                        el.username === rigthName ? bool = el.password === password.trim() : el

                  user.map(passwordCheck)

                  if(bool){ alert('Welcome') }
                  else{ alert('password false'); return }

                  const getRole = (el) => el.username === rigthName ? setRole(el.role) : el
                  user.map(getRole)
            }else{
                  alert('your username cannot be found in the database')
            }
            
      }     

      
  return (
      <>
        <form onSubmit={onSubmit} className="d-flex mt-2 mb-0 justify-content-end">

            <input 
                  className="form-control w-25" 
                  autoComplete="off"
                  placeholder='Name User' 
                  style={{marginRight:'20px'}} 
                  type="text"
                  onChange={(e)=>setName(e.target.value)}/>


            <input 
                  className="form-control w-25" 
                  placeholder='password' 
                  autoComplete="off"
                  style={{marginRight:'20px'}} 
                  type="password" 
                  onChange={(e)=>setPassword(e.target.value)} />


            <button className="btn btn-success" type='submit'>
                        {rol === null ? 'Entrar' : rol}
            </button>
           
        </form>
        

            {
               rol === null ? '' : rol === 'user' ?

                  <div className={rol === 'user' ? 'text-white border d-flex justify-content-evenly mt-2' 
                                                  : 'd-none'}>
                        {role_grants[0].modules.map(el => (
                              <div key={el.id}>{el.option}</div>
                        ))}
                  </div>            
                  :
                  <div className={rol === 'admin' ? 'text-white border d-flex justify-content-evenly mt-2' 
                                                   : 'd-none'}>   
                        {role_grants[1].modules.map(el => (
                             <div key={el.id}>{el.option}</div>
                        ))}
                  </div> 
            }
      </>
  )
};

export default Login;


